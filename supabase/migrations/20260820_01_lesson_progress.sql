-- InfectEasy — Etapa 1C (versão JSONB): lesson_progress e função idempotente
-- Execute somente depois de:
--   1. 01a_backup_user_progress.sql
--   2. 01_create_lesson_catalog.sql
--   3. 02_seed_lesson_catalog.sql
--
-- Compatível com public.user_progress.completed_lessons do tipo JSONB.
-- Esta migração preserva user_progress e cria o novo registro detalhado sem apagar nada.

begin;

-- Barreira de segurança: confirmar que a estrutura atual é exatamente a esperada.
do $$
declare
  v_completed_lessons_type text;
  v_has_user_id boolean;
  v_has_xp boolean;
  v_has_level boolean;
  v_has_streak boolean;
begin
  select format_type(a.atttypid, a.atttypmod)
    into v_completed_lessons_type
  from pg_attribute a
  join pg_class c on c.oid = a.attrelid
  join pg_namespace n on n.oid = c.relnamespace
  where n.nspname = 'public'
    and c.relname = 'user_progress'
    and a.attname = 'completed_lessons'
    and a.attnum > 0
    and not a.attisdropped;

  select exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'user_progress' and column_name = 'user_id'
  ) into v_has_user_id;
  select exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'user_progress' and column_name = 'xp'
  ) into v_has_xp;
  select exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'user_progress' and column_name = 'level'
  ) into v_has_level;
  select exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'user_progress' and column_name = 'streak'
  ) into v_has_streak;

  if not v_has_user_id or not v_has_xp or not v_has_level or not v_has_streak then
    raise exception 'user_progress não possui todas as colunas esperadas. A migração foi interrompida sem alterações.';
  end if;

  if v_completed_lessons_type is distinct from 'jsonb' then
    raise exception 'completed_lessons é do tipo "%", mas este script exige jsonb. A migração foi interrompida sem alterações.', coalesce(v_completed_lessons_type, 'ausente');
  end if;
end $$;

create table if not exists public.lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  module_id text not null,
  lesson_id integer not null check (lesson_id > 0),
  status text not null default 'in_progress'
    check (status in ('in_progress', 'completed')),
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  last_section integer not null default 0 check (last_section >= 0),
  time_spent_seconds integer not null default 0 check (time_spent_seconds >= 0),
  xp_awarded integer not null default 0 check (xp_awarded >= 0 and xp_awarded <= 1000),
  migrated_from_legacy boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, module_id, lesson_id),
  foreign key (module_id, lesson_id)
    references public.lesson_catalog(module_id, lesson_id)
    on update cascade
    on delete restrict
);

create index if not exists lesson_progress_user_status_idx
  on public.lesson_progress (user_id, status);

create index if not exists lesson_progress_user_module_idx
  on public.lesson_progress (user_id, module_id, lesson_id);

alter table public.lesson_progress enable row level security;

-- Estudantes só leem o próprio histórico. Escritas diretas ficam bloqueadas;
-- somente a função abaixo pode concluir uma lição e conceder XP.
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'lesson_progress'
      and policyname = 'ie_lesson_progress_read_own'
  ) then
    create policy ie_lesson_progress_read_own
      on public.lesson_progress
      for select
      to authenticated
      using (auth.uid() = user_id);
  end if;
end $$;

revoke all on public.lesson_progress from anon;
grant select on public.lesson_progress to authenticated;

-- A mesma lição pode ser chamada novamente com segurança: XP é concedido apenas na primeira conclusão.
-- O XP não é argumento da função; ele é obtido do catálogo oficial criado pelo próprio aplicativo.
create or replace function public.complete_lesson(
  p_module_id text,
  p_lesson_id integer,
  p_last_section integer default 0,
  p_time_spent_seconds integer default 0
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_user_id uuid := auth.uid();
  v_xp_value integer;
  v_existing_status text;
  v_first_completion boolean := false;
  v_previous_xp integer := 0;
  v_previous_streak integer := 0;
  v_next_xp integer := 0;
  v_next_level integer := 1;
  v_completed_lessons jsonb := '[]'::jsonb;
  v_lesson_key text := p_module_id || '-' || p_lesson_id::text;
begin
  if v_user_id is null then
    raise exception 'Usuário não autenticado';
  end if;

  if p_module_id not in ('microbiologia', 'antibiograma', 'antibioticoterapia') then
    raise exception 'Módulo inválido';
  end if;

  if p_lesson_id is null or p_lesson_id < 1 then
    raise exception 'Lição inválida';
  end if;

  select xp_value
    into v_xp_value
  from public.lesson_catalog
  where module_id = p_module_id
    and lesson_id = p_lesson_id;

  if v_xp_value is null then
    raise exception 'Lição não encontrada no catálogo oficial';
  end if;

  -- Garante uma única linha por usuário/lição e a bloqueia para evitar condição de corrida.
  insert into public.lesson_progress (
    user_id, module_id, lesson_id, status, last_section, time_spent_seconds
  ) values (
    v_user_id,
    p_module_id,
    p_lesson_id,
    'in_progress',
    greatest(coalesce(p_last_section, 0), 0),
    greatest(coalesce(p_time_spent_seconds, 0), 0)
  )
  on conflict (user_id, module_id, lesson_id) do nothing;

  select status
    into v_existing_status
  from public.lesson_progress
  where user_id = v_user_id
    and module_id = p_module_id
    and lesson_id = p_lesson_id
  for update;

  if v_existing_status <> 'completed' then
    v_first_completion := true;

    update public.lesson_progress
      set status = 'completed',
          completed_at = now(),
          last_section = greatest(last_section, greatest(coalesce(p_last_section, 0), 0)),
          time_spent_seconds = greatest(time_spent_seconds, greatest(coalesce(p_time_spent_seconds, 0), 0)),
          xp_awarded = v_xp_value,
          updated_at = now()
    where user_id = v_user_id
      and module_id = p_module_id
      and lesson_id = p_lesson_id;

    -- Bloqueia o resumo existente para preservar o XP histórico e impedir concessão dupla.
    select coalesce(xp, 0), coalesce(streak, 0), coalesce(completed_lessons, '[]'::jsonb)
      into v_previous_xp, v_previous_streak, v_completed_lessons
    from public.user_progress
    where user_id = v_user_id
    for update;

    if not found then
      v_previous_xp := 0;
      v_previous_streak := 0;
      v_completed_lessons := '[]'::jsonb;
    end if;

    v_next_xp := v_previous_xp + v_xp_value;
    v_next_level := greatest(1, floor(v_next_xp / 500.0)::integer + 1);

    if not (v_completed_lessons @> jsonb_build_array(v_lesson_key)) then
      v_completed_lessons := v_completed_lessons || jsonb_build_array(v_lesson_key);
    end if;

    insert into public.user_progress (user_id, xp, level, streak, completed_lessons)
    values (v_user_id, v_next_xp, v_next_level, v_previous_streak, v_completed_lessons)
    on conflict (user_id) do update
      set xp = excluded.xp,
          level = excluded.level,
          streak = excluded.streak,
          completed_lessons = excluded.completed_lessons,
          updated_at = now();
  else
    -- Repetições atualizam somente metadados e retornam XP zero.
    update public.lesson_progress
      set last_section = greatest(last_section, greatest(coalesce(p_last_section, 0), 0)),
          time_spent_seconds = greatest(time_spent_seconds, greatest(coalesce(p_time_spent_seconds, 0), 0)),
          updated_at = now()
    where user_id = v_user_id
      and module_id = p_module_id
      and lesson_id = p_lesson_id;

    select coalesce(xp, 0), greatest(1, coalesce(level, 1))
      into v_next_xp, v_next_level
    from public.user_progress
    where user_id = v_user_id;
  end if;

  return jsonb_build_object(
    'first_completion', v_first_completion,
    'xp_awarded_now', case when v_first_completion then v_xp_value else 0 end,
    'xp_total', v_next_xp,
    'level', v_next_level,
    'lesson_key', v_lesson_key
  );
end;
$$;

revoke all on function public.complete_lesson(text, integer, integer, integer) from public;
grant execute on function public.complete_lesson(text, integer, integer, integer) to authenticated;

commit;

-- Verificação de estrutura. Esta consulta não cria registro de usuário.
select
  (select count(*) from public.lesson_catalog) as total_licoes_catalogadas,
  (select count(*) from public.lesson_progress) as total_registros_de_progresso,
  exists (
    select 1
    from information_schema.routines
    where routine_schema = 'public'
      and routine_name = 'complete_lesson'
  ) as funcao_idempotente_criada;
