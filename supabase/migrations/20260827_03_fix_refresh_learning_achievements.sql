-- InfectEasy — Correção P2: ambiguidade de module_id em refresh_learning_achievements
--
-- Objetivo: recriar somente a função que atualiza marcos privados.
-- Segurança: este script NÃO cria, altera nem exclui tabelas; NÃO altera XP,
-- lições concluídas, tentativas ou sessões. A função permanece idempotente:
-- somente insere um marco quando ele se torna elegível e ainda não existe.
--
-- Execução: SQL Editor do Supabase, em uma nova consulta.

begin;

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

  select coalesce(up.streak, 0)
    into v_streak
  from public.user_progress up
  where up.user_id = v_user_id;

  select count(*)::integer
    into v_completed_count
  from public.lesson_progress lp
  where lp.user_id = v_user_id
    and lp.status = 'completed';

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
      select lc.module_id, count(*)::integer as total_lessons
      from public.lesson_catalog lc
      group by lc.module_id
    ), module_completed as (
      select lp.module_id, count(*)::integer as completed_lessons
      from public.lesson_progress lp
      where lp.user_id = v_user_id
        and lp.status = 'completed'
      group by lp.module_id
    ), module_accuracy as (
      select qa.module_id,
             count(*)::integer as attempts,
             avg(case when qa.is_correct then 1.0 else 0.0 end) as accuracy
      from public.question_attempts qa
      where qa.user_id = v_user_id
      group by qa.module_id
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

commit;

-- Confirmação estrutural: o resultado esperado é true.
select exists (
  select 1
  from information_schema.routines
  where routine_schema = 'public'
    and routine_name = 'refresh_learning_achievements'
) as funcao_atualizada;
