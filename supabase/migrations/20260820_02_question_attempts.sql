-- InfectEasy — P0: catálogo de questões, tentativas protegidas e função idempotente de respostas
-- Execute no SQL Editor do Supabase após a etapa lesson_progress já concluída.
-- Este script cria estruturas novas e não apaga dados existentes.

begin;

-- 1) Catálogo oficial de questões.
-- Guarda somente a chave da questão e a alternativa correta normalizada como índice 0-3.
create table if not exists public.question_catalog (
  module_id text not null,
  lesson_id integer not null,
  section_index integer not null,
  correct_option integer not null check (correct_option between 0 and 3),
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  primary key (module_id, lesson_id, section_index)
);

comment on table public.question_catalog is 'Catálogo oficial das questões do InfectEasy, usado para validar respostas sem confiar no navegador.';
comment on column public.question_catalog.correct_option is 'Alternativa correta em índice numérico: A=0, B=1, C=2, D=3.';

alter table public.question_catalog enable row level security;

-- Usuários autenticados podem ler o catálogo, necessário para transparência e estatísticas locais.
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'question_catalog'
      and policyname = 'ie_question_catalog_authenticated_read'
  ) then
    create policy ie_question_catalog_authenticated_read
      on public.question_catalog
      for select
      to authenticated
      using (true);
  end if;
end $$;

grant select on public.question_catalog to authenticated;

-- 2) Registro detalhado de tentativas.
-- Mantém todas as tentativas para análise pedagógica, mas a pontuação de questão é zero nesta fase.
create table if not exists public.question_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  module_id text not null,
  lesson_id integer not null,
  section_index integer not null,
  selected_option integer not null check (selected_option between 0 and 3),
  correct_option integer not null check (correct_option between 0 and 3),
  is_correct boolean not null,
  xp_awarded integer not null default 0 check (xp_awarded >= 0),
  attempt_number integer not null default 1 check (attempt_number >= 1),
  attempt_token uuid not null,
  answered_at timestamp with time zone not null default now(),
  source text not null default 'app',
  constraint question_attempts_catalog_fk
    foreign key (module_id, lesson_id, section_index)
    references public.question_catalog (module_id, lesson_id, section_index)
    on update cascade
    on delete restrict
);

comment on table public.question_attempts is 'Tentativas de resposta registradas por usuário, para cálculo futuro de domínio e revisão adaptativa.';
comment on column public.question_attempts.xp_awarded is 'Nesta fase P0 permanece 0 para remover a pontuação vulnerável calculada no navegador.';

create index if not exists idx_question_attempts_user_time
  on public.question_attempts (user_id, answered_at desc);

create index if not exists idx_question_attempts_user_lesson
  on public.question_attempts (user_id, module_id, lesson_id, section_index);

create index if not exists idx_question_attempts_accuracy
  on public.question_attempts (module_id, lesson_id, section_index, is_correct);

-- O mesmo token identifica a mesma submissão. Reenvios de rede ou duplo clique não criam nova tentativa.
create unique index if not exists uq_question_attempts_idempotency
  on public.question_attempts (user_id, module_id, lesson_id, section_index, attempt_token);

alter table public.question_attempts enable row level security;

-- O usuário autenticado só pode ler suas próprias tentativas.
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'question_attempts'
      and policyname = 'ie_question_attempts_own_read'
  ) then
    create policy ie_question_attempts_own_read
      on public.question_attempts
      for select
      to authenticated
      using (auth.uid() = user_id);
  end if;
end $$;

-- Não concedemos insert/update/delete diretos ao cliente. A gravação ocorre pela função abaixo.
grant select on public.question_attempts to authenticated;
revoke insert, update, delete on public.question_attempts from authenticated;

-- 3) Função protegida para registrar resposta.
-- A alternativa correta é sempre buscada no question_catalog; o navegador informa apenas a alternativa escolhida.
create or replace function public.record_question_attempt(
  p_module_id text,
  p_lesson_id integer,
  p_section_index integer,
  p_selected_option integer,
  p_attempt_token uuid
)
returns table (
  attempt_id uuid,
  is_correct boolean,
  correct_option integer,
  xp_awarded_now integer,
  attempt_number integer,
  total_attempts_for_question integer,
  correct_attempts_for_question integer
)
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  v_user_id uuid := auth.uid();
  v_attempt_token uuid := p_attempt_token;
  v_correct_option integer;
  v_attempt_number integer;
  v_attempt_id uuid;
  v_is_correct boolean;
begin
  if v_user_id is null then
    raise exception 'Usuário não autenticado.' using errcode = '28000';
  end if;

  if p_selected_option is null or p_selected_option < 0 or p_selected_option > 3 then
    raise exception 'Alternativa selecionada inválida. Use 0=A, 1=B, 2=C ou 3=D.' using errcode = '22023';
  end if;

  if v_attempt_token is null then
    raise exception 'Token de tentativa ausente.' using errcode = '22023';
  end if;

  select qc.correct_option
    into v_correct_option
  from public.question_catalog qc
  where qc.module_id = p_module_id
    and qc.lesson_id = p_lesson_id
    and qc.section_index = p_section_index;

  if v_correct_option is null then
    raise exception 'Questão não encontrada no catálogo oficial.' using errcode = 'P0002';
  end if;

  v_is_correct := (p_selected_option = v_correct_option);

  -- Evita colisão de numeração se houver duas respostas simultâneas do mesmo usuário para a mesma questão.
  perform pg_advisory_xact_lock(hashtext(v_user_id::text || ':' || p_module_id || ':' || p_lesson_id::text || ':' || p_section_index::text));

  -- Retorno idempotente: se a mesma submissão for reenviada, devolve o registro original sem criar tentativa extra.
  if exists (
    select 1
    from public.question_attempts qa
    where qa.user_id = v_user_id
      and qa.module_id = p_module_id
      and qa.lesson_id = p_lesson_id
      and qa.section_index = p_section_index
      and qa.attempt_token = v_attempt_token
  ) then
    return query
    select
      qa.id,
      qa.is_correct,
      qa.correct_option,
      0,
      qa.attempt_number,
      (
        select count(*)::integer
        from public.question_attempts qa2
        where qa2.user_id = v_user_id
          and qa2.module_id = p_module_id
          and qa2.lesson_id = p_lesson_id
          and qa2.section_index = p_section_index
      ),
      (
        select count(*)::integer
        from public.question_attempts qa3
        where qa3.user_id = v_user_id
          and qa3.module_id = p_module_id
          and qa3.lesson_id = p_lesson_id
          and qa3.section_index = p_section_index
          and qa3.is_correct = true
      )
    from public.question_attempts qa
    where qa.user_id = v_user_id
      and qa.module_id = p_module_id
      and qa.lesson_id = p_lesson_id
      and qa.section_index = p_section_index
      and qa.attempt_token = v_attempt_token;
    return;
  end if;

  select coalesce(max(qa.attempt_number), 0) + 1
    into v_attempt_number
  from public.question_attempts qa
  where qa.user_id = v_user_id
    and qa.module_id = p_module_id
    and qa.lesson_id = p_lesson_id
    and qa.section_index = p_section_index;

  insert into public.question_attempts (
    user_id,
    module_id,
    lesson_id,
    section_index,
    selected_option,
    correct_option,
    is_correct,
    xp_awarded,
    attempt_number,
    attempt_token,
    source
  ) values (
    v_user_id,
    p_module_id,
    p_lesson_id,
    p_section_index,
    p_selected_option,
    v_correct_option,
    v_is_correct,
    0,
    v_attempt_number,
    v_attempt_token,
    'app'
  )
  returning id into v_attempt_id;

  return query
  select
    v_attempt_id as attempt_id,
    v_is_correct as is_correct,
    v_correct_option as correct_option,
    0 as xp_awarded_now,
    v_attempt_number as attempt_number,
    (
      select count(*)::integer
      from public.question_attempts qa
      where qa.user_id = v_user_id
        and qa.module_id = p_module_id
        and qa.lesson_id = p_lesson_id
        and qa.section_index = p_section_index
    ) as total_attempts_for_question,
    (
      select count(*)::integer
      from public.question_attempts qa
      where qa.user_id = v_user_id
        and qa.module_id = p_module_id
        and qa.lesson_id = p_lesson_id
        and qa.section_index = p_section_index
        and qa.is_correct = true
    ) as correct_attempts_for_question;
end;
$$;

revoke all on function public.record_question_attempt(text, integer, integer, integer, uuid) from public;
grant execute on function public.record_question_attempt(text, integer, integer, integer, uuid) to authenticated;

commit;

-- Confirmação esperada: a função deve existir, o catálogo deve estar vazio antes do seed e a tabela de tentativas deve estar vazia.
select
  exists (
    select 1
    from information_schema.routines
    where routine_schema = 'public'
      and routine_name = 'record_question_attempt'
  ) as funcao_record_question_attempt_criada,
  (select count(*) from public.question_catalog) as questoes_catalogadas_antes_do_seed,
  (select count(*) from public.question_attempts) as tentativas_registradas_antes_da_integracao;
