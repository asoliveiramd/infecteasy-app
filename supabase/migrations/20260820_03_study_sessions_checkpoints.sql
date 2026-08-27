-- InfectEasy — P1: sessões de estudo, checkpoints, tempo e sequência diária
-- Compatível com a estrutura existente de user_progress e lesson_progress.
-- Este script preserva o progresso atual e não altera XP, nível ou lições concluídas.

begin;

create schema if not exists app_backup;
revoke all on schema app_backup from public;

-- 1) Backup lógico de user_progress antes de acrescentar dados de atividade.
create table if not exists app_backup.user_progress_before_p1_20260827
  (like public.user_progress including all);

insert into app_backup.user_progress_before_p1_20260827
select up.*
from public.user_progress up
where not exists (
  select 1 from app_backup.user_progress_before_p1_20260827 existing
);

-- 2) Campos de resumo, sem substituir valores existentes.
alter table public.user_progress
  add column if not exists last_study_date date,
  add column if not exists total_study_seconds bigint not null default 0 check (total_study_seconds >= 0);

comment on column public.user_progress.last_study_date is 'Última data com atividade de estudo, calculada no fuso America/Bahia.';
comment on column public.user_progress.total_study_seconds is 'Tempo acumulado de estudo confirmado pelo servidor em segundos.';

-- 3) Sessões de estudo. Uma sessão é aberta ao iniciar uma lição e encerrada ao sair ou concluir.
create table if not exists public.study_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  module_id text not null,
  lesson_id integer not null,
  started_at timestamptz not null default now(),
  last_activity_at timestamptz not null default now(),
  ended_at timestamptz,
  total_seconds integer not null default 0 check (total_seconds >= 0),
  last_section integer not null default 0 check (last_section >= 0),
  source text not null default 'web',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint study_sessions_lesson_fk
    foreign key (module_id, lesson_id)
    references public.lesson_catalog(module_id, lesson_id)
    on update cascade
    on delete restrict
);

create index if not exists idx_study_sessions_user_started
  on public.study_sessions (user_id, started_at desc);

create index if not exists idx_study_sessions_user_lesson
  on public.study_sessions (user_id, module_id, lesson_id, started_at desc);

-- Impede múltiplas sessões abertas para a mesma lição e usuário.
create unique index if not exists uq_study_sessions_open_lesson
  on public.study_sessions (user_id, module_id, lesson_id)
  where ended_at is null;

alter table public.study_sessions enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'study_sessions'
      and policyname = 'ie_study_sessions_own_read'
  ) then
    create policy ie_study_sessions_own_read
      on public.study_sessions
      for select
      to authenticated
      using (auth.uid() = user_id);
  end if;
end $$;

revoke all on public.study_sessions from anon;
grant select on public.study_sessions to authenticated;
revoke insert, update, delete on public.study_sessions from authenticated;

-- 4) Inicia ou retoma uma sessão e atualiza a sequência apenas uma vez por dia.
create or replace function public.start_lesson_session(
  p_module_id text,
  p_lesson_id integer
)
returns jsonb
language plpgsql
security definer
set search_path = public, auth, pg_temp
as $$
declare
  v_user_id uuid := auth.uid();
  v_session_id uuid;
  v_resume_section integer := 0;
  v_today date := timezone('America/Bahia', now())::date;
  v_previous_date date;
  v_previous_streak integer := 0;
  v_next_streak integer := 1;
begin
  if v_user_id is null then
    raise exception 'Usuário não autenticado.' using errcode = '28000';
  end if;

  if not exists (
    select 1 from public.lesson_catalog
    where module_id = p_module_id and lesson_id = p_lesson_id
  ) then
    raise exception 'Lição não encontrada no catálogo oficial.' using errcode = 'P0002';
  end if;

  -- Garante o resumo do usuário e o bloqueia enquanto a sequência é calculada.
  insert into public.user_progress (user_id, xp, level, streak, completed_lessons)
  values (v_user_id, 0, 1, 0, '[]'::jsonb)
  on conflict (user_id) do nothing;

  select last_study_date, coalesce(streak, 0)
    into v_previous_date, v_previous_streak
  from public.user_progress
  where user_id = v_user_id
  for update;

  if v_previous_date is null then
    v_next_streak := greatest(1, v_previous_streak);
  elsif v_previous_date = v_today then
    v_next_streak := greatest(1, v_previous_streak);
  elsif v_previous_date = v_today - 1 then
    v_next_streak := greatest(1, v_previous_streak) + 1;
  else
    v_next_streak := 1;
  end if;

  update public.user_progress
  set streak = v_next_streak,
      last_study_date = v_today,
      updated_at = now()
  where user_id = v_user_id;

  -- Retoma a última seção conhecida quando houver progresso em andamento ou concluído.
  select coalesce(last_section, 0)
    into v_resume_section
  from public.lesson_progress
  where user_id = v_user_id
    and module_id = p_module_id
    and lesson_id = p_lesson_id;

  insert into public.lesson_progress (
    user_id, module_id, lesson_id, status, last_section, time_spent_seconds
  ) values (
    v_user_id, p_module_id, p_lesson_id, 'in_progress', greatest(coalesce(v_resume_section, 0), 0), 0
  )
  on conflict (user_id, module_id, lesson_id) do update
  set updated_at = now();

  insert into public.study_sessions (
    user_id, module_id, lesson_id, last_section, source
  ) values (
    v_user_id, p_module_id, p_lesson_id, greatest(coalesce(v_resume_section, 0), 0), 'web'
  )
  on conflict (user_id, module_id, lesson_id) where ended_at is null do update
  set last_activity_at = now(),
      updated_at = now()
  returning id into v_session_id;

  return jsonb_build_object(
    'session_id', v_session_id,
    'resume_section', greatest(coalesce(v_resume_section, 0), 0),
    'streak', v_next_streak,
    'study_date', v_today
  );
end;
$$;

-- 5) Salva atividade periodicamente, com teto de cinco minutos por chamada para evitar inflação de tempo.
-- p_end_session = true deve ser usado ao sair da lição ou ao concluí-la.
create or replace function public.save_lesson_checkpoint(
  p_session_id uuid,
  p_last_section integer,
  p_end_session boolean default false
)
returns jsonb
language plpgsql
security definer
set search_path = public, auth, pg_temp
as $$
declare
  v_user_id uuid := auth.uid();
  v_module_id text;
  v_lesson_id integer;
  v_last_activity timestamptz;
  v_elapsed integer := 0;
  v_total_session_seconds integer := 0;
begin
  if v_user_id is null then
    raise exception 'Usuário não autenticado.' using errcode = '28000';
  end if;

  if p_session_id is null or p_last_section is null or p_last_section < 0 then
    raise exception 'Checkpoint inválido.' using errcode = '22023';
  end if;

  select module_id, lesson_id, last_activity_at, total_seconds
    into v_module_id, v_lesson_id, v_last_activity, v_total_session_seconds
  from public.study_sessions
  where id = p_session_id
    and user_id = v_user_id
    and ended_at is null
  for update;

  if not found then
    raise exception 'Sessão de estudo não encontrada ou já encerrada.' using errcode = 'P0002';
  end if;

  v_elapsed := least(
    300,
    greatest(0, floor(extract(epoch from now() - v_last_activity))::integer)
  );

  update public.study_sessions
  set last_section = greatest(last_section, p_last_section),
      total_seconds = total_seconds + v_elapsed,
      last_activity_at = now(),
      ended_at = case when p_end_session then now() else ended_at end,
      updated_at = now()
  where id = p_session_id;

  update public.lesson_progress
  set last_section = greatest(last_section, p_last_section),
      time_spent_seconds = time_spent_seconds + v_elapsed,
      updated_at = now()
  where user_id = v_user_id
    and module_id = v_module_id
    and lesson_id = v_lesson_id;

  update public.user_progress
  set total_study_seconds = total_study_seconds + v_elapsed,
      updated_at = now()
  where user_id = v_user_id;

  return jsonb_build_object(
    'session_id', p_session_id,
    'seconds_added', v_elapsed,
    'session_total_seconds', v_total_session_seconds + v_elapsed,
    'ended', p_end_session
  );
end;
$$;

revoke all on function public.start_lesson_session(text, integer) from public;
grant execute on function public.start_lesson_session(text, integer) to authenticated;
revoke all on function public.save_lesson_checkpoint(uuid, integer, boolean) from public;
grant execute on function public.save_lesson_checkpoint(uuid, integer, boolean) to authenticated;

commit;

-- Validação apenas de leitura: espera-se funções criadas, tabela vazia e novos campos em user_progress.
select
  exists (
    select 1 from information_schema.routines
    where routine_schema = 'public' and routine_name = 'start_lesson_session'
  ) as funcao_inicio_criada,
  exists (
    select 1 from information_schema.routines
    where routine_schema = 'public' and routine_name = 'save_lesson_checkpoint'
  ) as funcao_checkpoint_criada,
  (select count(*) from public.study_sessions) as sessoes_iniciais,
  exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'user_progress' and column_name = 'last_study_date'
  ) as campo_ultima_data_criado,
  exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'user_progress' and column_name = 'total_study_seconds'
  ) as campo_tempo_total_criado;
