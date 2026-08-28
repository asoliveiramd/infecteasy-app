-- InfectEasy P6A — Biblioteca pessoal privada
-- Cria somente uma tabela nova e duas funções idempotentes.
-- Não altera lições, conteúdo, XP, níveis, sessões, tentativas ou recomendações.

begin;

-- Barreira: a biblioteca depende do catálogo oficial de lições já existente.
do $$
begin
  if not exists (
    select 1
    from information_schema.tables
    where table_schema = 'public' and table_name = 'lesson_catalog'
  ) then
    raise exception 'lesson_catalog não existe. A migração P6A foi interrompida sem alterações.';
  end if;

  if (select count(*) from public.lesson_catalog) <> 56 then
    raise exception 'lesson_catalog possui uma contagem inesperada. A migração P6A foi interrompida sem alterações.';
  end if;
end $$;

create table if not exists public.user_saved_lessons (
  user_id uuid not null references auth.users(id) on delete cascade,
  module_id text not null,
  lesson_id integer not null check (lesson_id > 0),
  saved_at timestamptz not null default now(),
  primary key (user_id, module_id, lesson_id),
  foreign key (module_id, lesson_id)
    references public.lesson_catalog(module_id, lesson_id)
    on update cascade
    on delete restrict
);

create index if not exists user_saved_lessons_user_saved_at_idx
  on public.user_saved_lessons (user_id, saved_at desc);

alter table public.user_saved_lessons enable row level security;

-- O estudante só pode ler a própria biblioteca. Escritas diretas permanecem bloqueadas.
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'user_saved_lessons'
      and policyname = 'ie_user_saved_lessons_read_own'
  ) then
    create policy ie_user_saved_lessons_read_own
      on public.user_saved_lessons
      for select
      to authenticated
      using (auth.uid() = user_id);
  end if;
end $$;

revoke all on public.user_saved_lessons from anon;
revoke insert, update, delete on public.user_saved_lessons from authenticated;
grant select on public.user_saved_lessons to authenticated;

-- Salva a lição uma única vez. A função valida a existência da lição no catálogo oficial.
create or replace function public.save_lesson_to_library(
  p_module_id text,
  p_lesson_id integer
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_user_id uuid := auth.uid();
  v_saved_at timestamptz;
begin
  if v_user_id is null then
    raise exception 'Usuário não autenticado';
  end if;

  if p_module_id not in ('microbiologia', 'antibiograma', 'antibioticoterapia')
    or p_lesson_id is null
    or p_lesson_id < 1 then
    raise exception 'Lição inválida';
  end if;

  if not exists (
    select 1
    from public.lesson_catalog
    where module_id = p_module_id
      and lesson_id = p_lesson_id
  ) then
    raise exception 'Lição não encontrada no catálogo oficial';
  end if;

  insert into public.user_saved_lessons (user_id, module_id, lesson_id)
  values (v_user_id, p_module_id, p_lesson_id)
  on conflict (user_id, module_id, lesson_id) do nothing;

  select saved_at
    into v_saved_at
  from public.user_saved_lessons
  where user_id = v_user_id
    and module_id = p_module_id
    and lesson_id = p_lesson_id;

  return jsonb_build_object(
    'saved', true,
    'module_id', p_module_id,
    'lesson_id', p_lesson_id,
    'saved_at', v_saved_at
  );
end;
$$;

-- Remove somente a lição da biblioteca do usuário autenticado. Repetições são seguras.
create or replace function public.remove_lesson_from_library(
  p_module_id text,
  p_lesson_id integer
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_user_id uuid := auth.uid();
  v_removed boolean := false;
  v_deleted_count integer := 0;
begin
  if v_user_id is null then
    raise exception 'Usuário não autenticado';
  end if;

  if p_module_id not in ('microbiologia', 'antibiograma', 'antibioticoterapia')
    or p_lesson_id is null
    or p_lesson_id < 1 then
    raise exception 'Lição inválida';
  end if;

  delete from public.user_saved_lessons
  where user_id = v_user_id
    and module_id = p_module_id
    and lesson_id = p_lesson_id;

  get diagnostics v_deleted_count = row_count;
  v_removed := v_deleted_count > 0;

  return jsonb_build_object(
    'saved', false,
    'removed', v_removed,
    'module_id', p_module_id,
    'lesson_id', p_lesson_id
  );
end;
$$;

revoke all on function public.save_lesson_to_library(text, integer) from public;
revoke all on function public.remove_lesson_from_library(text, integer) from public;
grant execute on function public.save_lesson_to_library(text, integer) to authenticated;
grant execute on function public.remove_lesson_from_library(text, integer) to authenticated;

commit;

-- Confirmação estrutural: uma tabela e duas funções devem estar disponíveis.
select
  exists (
    select 1 from information_schema.tables
    where table_schema = 'public' and table_name = 'user_saved_lessons'
  ) as biblioteca_criada,
  exists (
    select 1 from information_schema.routines
    where routine_schema = 'public' and routine_name = 'save_lesson_to_library'
  ) as funcao_salvar_criada,
  exists (
    select 1 from information_schema.routines
    where routine_schema = 'public' and routine_name = 'remove_lesson_from_library'
  ) as funcao_remover_criada;
