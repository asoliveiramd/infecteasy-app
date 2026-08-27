-- InfectEasy — P2: revisões orientadas por desempenho e marcos privados de competência
-- Este script cria apenas novas tabelas, políticas e funções. Não altera XP, lições concluídas,
-- respostas, sessões ou dados existentes. Execute no SQL Editor após P0 e P1.

begin;

-- 1) Catálogo interno de revisões. Os dados foram extraídos das 56 lições ativas do InfectEasy.
create table if not exists public.review_catalog (
  module_id text not null,
  lesson_id integer not null,
  review_title text not null,
  primary key (module_id, lesson_id),
  foreign key (module_id, lesson_id)
    references public.lesson_catalog(module_id, lesson_id)
    on update cascade
    on delete restrict
);

comment on table public.review_catalog is 'Lições de revisão aptas a serem recomendadas pela aprendizagem adaptativa do InfectEasy.';

insert into public.review_catalog (module_id, lesson_id, review_title)
values
  ('microbiologia', 12, 'Revisão: Pontos e Dicas'),
  ('microbiologia', 13, 'Revisão: Perguntas - Parte 1'),
  ('microbiologia', 14, 'Revisão: Perguntas - Parte 2'),
  ('antibiograma', 15, 'Revisão I - Fundamentos'),
  ('antibiograma', 16, 'Revisão II - Métodos'),
  ('antibiograma', 17, 'Revisão III - Interpretação'),
  ('antibiograma', 18, 'Revisão IV - Tópicos Avançados'),
  ('antibioticoterapia', 22, 'Revisão I'),
  ('antibioticoterapia', 23, 'Revisão II'),
  ('antibioticoterapia', 24, 'Revisão III')
on conflict (module_id, lesson_id) do update
set review_title = excluded.review_title;

alter table public.review_catalog enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'review_catalog'
      and policyname = 'ie_review_catalog_authenticated_read'
  ) then
    create policy ie_review_catalog_authenticated_read
      on public.review_catalog
      for select
      to authenticated
      using (true);
  end if;
end $$;

grant select on public.review_catalog to authenticated;
revoke insert, update, delete on public.review_catalog from authenticated;

-- 2) Catálogo de marcos privados. Não existe ranking público nem comparação entre usuários.
create table if not exists public.achievement_catalog (
  achievement_code text primary key,
  title text not null,
  description text not null,
  category text not null check (category in ('progresso', 'dominio', 'consistencia', 'revisao')),
  display_order integer not null default 0
);

insert into public.achievement_catalog (achievement_code, title, description, category, display_order)
values
  ('first_lesson_completed', 'Primeiro passo clínico', 'Concluiu sua primeira lição no InfectEasy.', 'progresso', 10),
  ('first_review_completed', 'Revisão iniciada', 'Concluiu uma lição de revisão para consolidar o aprendizado.', 'revisao', 20),
  ('module_completed', 'Trilha concluída', 'Concluiu integralmente uma trilha de aprendizagem.', 'progresso', 30),
  ('module_mastery', 'Domínio consistente', 'Alcançou pelo menos 80% de precisão em uma trilha com volume mínimo de respostas.', 'dominio', 40),
  ('seven_day_streak', 'Estudo consistente', 'Manteve sete dias consecutivos de estudo.', 'consistencia', 50)
on conflict (achievement_code) do update
set title = excluded.title,
    description = excluded.description,
    category = excluded.category,
    display_order = excluded.display_order;

alter table public.achievement_catalog enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'achievement_catalog'
      and policyname = 'ie_achievement_catalog_authenticated_read'
  ) then
    create policy ie_achievement_catalog_authenticated_read
      on public.achievement_catalog
      for select
      to authenticated
      using (true);
  end if;
end $$;

grant select on public.achievement_catalog to authenticated;
revoke insert, update, delete on public.achievement_catalog from authenticated;

create table if not exists public.user_achievements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  achievement_code text not null references public.achievement_catalog(achievement_code) on delete restrict,
  module_id text not null default 'global',
  earned_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb,
  unique (user_id, achievement_code, module_id)
);

comment on table public.user_achievements is 'Marcos privados de competência do estudante. Não deve ser usado para ranking público.';

create index if not exists user_achievements_user_earned_idx
  on public.user_achievements (user_id, earned_at desc);

alter table public.user_achievements enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'user_achievements'
      and policyname = 'ie_user_achievements_own_read'
  ) then
    create policy ie_user_achievements_own_read
      on public.user_achievements
      for select
      to authenticated
      using (auth.uid() = user_id);
  end if;
end $$;

grant select on public.user_achievements to authenticated;
revoke insert, update, delete on public.user_achievements from authenticated;

-- 3) Atualiza marcos para o usuário autenticado. A função apenas insere marcos elegíveis e nunca os remove.
create or replace function public.refresh_learning_achievements()
returns table (
  achievement_code text,
  module_id text,
  newly_earned boolean
)
language plpgsql
security definer
set search_path = public, auth, pg_temp
as $$
declare
  v_user_id uuid := auth.uid();
  v_streak integer := 0;
  v_completed_count integer := 0;
  v_review_count integer := 0;
  v_module record;
begin
  if v_user_id is null then
    raise exception 'Usuário não autenticado.' using errcode = '28000';
  end if;

  select coalesce(streak, 0)
    into v_streak
  from public.user_progress
  where user_id = v_user_id;

  select count(*)::integer
    into v_completed_count
  from public.lesson_progress
  where user_id = v_user_id
    and status = 'completed';

  select count(*)::integer
    into v_review_count
  from public.lesson_progress lp
  join public.review_catalog rc
    on rc.module_id = lp.module_id
   and rc.lesson_id = lp.lesson_id
  where lp.user_id = v_user_id
    and lp.status = 'completed';

  if v_completed_count >= 1 then
    insert into public.user_achievements (user_id, achievement_code, module_id, metadata)
    values (v_user_id, 'first_lesson_completed', 'global', jsonb_build_object('completed_lessons', v_completed_count))
    on conflict (user_id, achievement_code, module_id) do nothing;
  end if;

  if v_review_count >= 1 then
    insert into public.user_achievements (user_id, achievement_code, module_id, metadata)
    values (v_user_id, 'first_review_completed', 'global', jsonb_build_object('completed_reviews', v_review_count))
    on conflict (user_id, achievement_code, module_id) do nothing;
  end if;

  if v_streak >= 7 then
    insert into public.user_achievements (user_id, achievement_code, module_id, metadata)
    values (v_user_id, 'seven_day_streak', 'global', jsonb_build_object('streak_days', v_streak))
    on conflict (user_id, achievement_code, module_id) do nothing;
  end if;

  for v_module in
    with module_totals as (
      select module_id, count(*)::integer as total_lessons
      from public.lesson_catalog
      group by module_id
    ), module_completed as (
      select module_id, count(*)::integer as completed_lessons
      from public.lesson_progress
      where user_id = v_user_id
        and status = 'completed'
      group by module_id
    ), module_accuracy as (
      select module_id,
             count(*)::integer as attempts,
             avg(case when is_correct then 1.0 else 0.0 end) as accuracy
      from public.question_attempts
      where user_id = v_user_id
      group by module_id
    )
    select mt.module_id,
           mt.total_lessons,
           coalesce(mc.completed_lessons, 0) as completed_lessons,
           coalesce(ma.attempts, 0) as attempts,
           coalesce(ma.accuracy, 0) as accuracy
    from module_totals mt
    left join module_completed mc on mc.module_id = mt.module_id
    left join module_accuracy ma on ma.module_id = mt.module_id
  loop
    if v_module.completed_lessons >= v_module.total_lessons then
      insert into public.user_achievements (user_id, achievement_code, module_id, metadata)
      values (
        v_user_id,
        'module_completed',
        v_module.module_id,
        jsonb_build_object('completed_lessons', v_module.completed_lessons, 'total_lessons', v_module.total_lessons)
      )
      on conflict (user_id, achievement_code, module_id) do nothing;
    end if;

    if v_module.attempts >= 10 and v_module.accuracy >= 0.80 then
      insert into public.user_achievements (user_id, achievement_code, module_id, metadata)
      values (
        v_user_id,
        'module_mastery',
        v_module.module_id,
        jsonb_build_object('attempts', v_module.attempts, 'accuracy_percent', round(v_module.accuracy * 100, 1))
      )
      on conflict (user_id, achievement_code, module_id) do nothing;
    end if;
  end loop;

  return query
  select ua.achievement_code, ua.module_id, false
  from public.user_achievements ua
  where ua.user_id = v_user_id
  order by ua.earned_at desc, ua.achievement_code;
end;
$$;

revoke all on function public.refresh_learning_achievements() from public;
grant execute on function public.refresh_learning_achievements() to authenticated;

-- 4) Retorna recomendações sem expor informações de outros usuários.
-- Regra 1: precisão abaixo de 70% com pelo menos quatro tentativas no módulo.
-- Regra 2: ao menos uma lição concluída e 14 ou mais dias desde a última conclusão do módulo.
create or replace function public.get_review_recommendations()
returns table (
  module_id text,
  lesson_id integer,
  review_title text,
  reason_code text,
  reason_text text,
  accuracy_percent numeric,
  attempts_count integer,
  days_since_last_completion integer
)
language sql
security definer
set search_path = public, auth, pg_temp
stable
as $$
  with requesting_user as (
    select auth.uid() as user_id
  ), attempt_stats as (
    select qa.module_id,
           count(*)::integer as attempts_count,
           avg(case when qa.is_correct then 1.0 else 0.0 end) as accuracy
    from public.question_attempts qa
    cross join requesting_user cu
    where qa.user_id = cu.user_id
    group by qa.module_id
  ), completion_stats as (
    select lp.module_id,
           count(*) filter (where lp.status = 'completed')::integer as completed_lessons,
           max(lp.completed_at)::date as last_completed_on
    from public.lesson_progress lp
    cross join requesting_user cu
    where lp.user_id = cu.user_id
    group by lp.module_id
  ), module_stats as (
    select distinct lc.module_id,
           coalesce(ast.attempts_count, 0) as attempts_count,
           coalesce(ast.accuracy, 0) as accuracy,
           coalesce(cst.completed_lessons, 0) as completed_lessons,
           cst.last_completed_on
    from public.lesson_catalog lc
    left join attempt_stats ast on ast.module_id = lc.module_id
    left join completion_stats cst on cst.module_id = lc.module_id
  ), candidate_reviews as (
    select ms.module_id,
           coalesce(
             (
               select rc_pending.lesson_id
               from public.review_catalog rc_pending
               cross join requesting_user cu
               where rc_pending.module_id = ms.module_id
                 and not exists (
                   select 1
                   from public.lesson_progress lp_pending
                   where lp_pending.user_id = cu.user_id
                     and lp_pending.module_id = rc_pending.module_id
                     and lp_pending.lesson_id = rc_pending.lesson_id
                     and lp_pending.status = 'completed'
                 )
               order by rc_pending.lesson_id
               limit 1
             ),
             (
               select min(rc_any.lesson_id)
               from public.review_catalog rc_any
               where rc_any.module_id = ms.module_id
             )
           ) as lesson_id,
           case
             when ms.attempts_count >= 4 and ms.accuracy < 0.70 then 'low_accuracy'
             when ms.completed_lessons > 0
               and ms.last_completed_on <= (timezone('America/Bahia', now())::date - 14) then 'spaced_review'
             else null
           end as reason_code,
           round(ms.accuracy * 100, 1) as accuracy_percent,
           ms.attempts_count,
           case
             when ms.last_completed_on is null then null
             else (timezone('America/Bahia', now())::date - ms.last_completed_on)::integer
           end as days_since_last_completion
    from module_stats ms
  )
  select cr.module_id,
         cr.lesson_id,
         rc.review_title,
         cr.reason_code,
         case cr.reason_code
           when 'low_accuracy' then 'Sua precisão recente indica que este tema merece uma revisão orientada.'
           when 'spaced_review' then 'Você concluiu conteúdo deste tema há pelo menos 14 dias. Uma revisão breve favorece a retenção.'
         end as reason_text,
         cr.accuracy_percent,
         cr.attempts_count,
         cr.days_since_last_completion
  from candidate_reviews cr
  join public.review_catalog rc
    on rc.module_id = cr.module_id
   and rc.lesson_id = cr.lesson_id
  where cr.reason_code is not null
  order by case cr.reason_code when 'low_accuracy' then 1 else 2 end,
           cr.accuracy_percent asc nulls last,
           cr.days_since_last_completion desc nulls last;
$$;

revoke all on function public.get_review_recommendations() from public;
grant execute on function public.get_review_recommendations() to authenticated;

commit;

-- Confirmação inicial: sem dados de uso, recomendações e marcos devem permanecer vazios.
select
  (select count(*) from public.review_catalog) as revisoes_catalogadas,
  (select count(*) from public.achievement_catalog) as marcos_catalogados,
  exists (
    select 1 from information_schema.routines
    where routine_schema = 'public' and routine_name = 'refresh_learning_achievements'
  ) as funcao_marcos_criada,
  exists (
    select 1 from information_schema.routines
    where routine_schema = 'public' and routine_name = 'get_review_recommendations'
  ) as funcao_recomendacoes_criada;
