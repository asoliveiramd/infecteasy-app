-- InfectEasy — P3A: relatório pessoal de desempenho
-- Cria somente funções de LEITURA agregada para o usuário autenticado.
-- Não altera tabelas, políticas, dados, XP, níveis, lições concluídas, tentativas ou sessões.
-- Execute somente após a validação de 12_preflight_p3_relatorio_desempenho.sql.

begin;

-- 1) Indicadores pessoais por trilha, com interpretação clínica e regra explícita de dados mínimos.
create or replace function public.get_my_learning_report()
returns table (
  module_id text,
  total_lessons integer,
  completed_lessons integer,
  progress_percent numeric,
  attempts_count integer,
  correct_answers integer,
  accuracy_percent numeric,
  total_study_seconds bigint,
  last_activity_at timestamptz,
  competency_status text,
  competency_message text
)
language sql
security definer
set search_path = public, auth, pg_temp
stable
as $$
  with requesting_user as (
    select auth.uid() as user_id
  ), module_totals as (
    select lc.module_id, count(*)::integer as total_lessons
    from public.lesson_catalog lc
    group by lc.module_id
  ), completion_stats as (
    select lp.module_id,
           count(*) filter (where lp.status = 'completed')::integer as completed_lessons,
           coalesce(sum(lp.time_spent_seconds), 0)::bigint as total_study_seconds
    from public.lesson_progress lp
    cross join requesting_user ru
    where lp.user_id = ru.user_id
    group by lp.module_id
  ), attempt_stats as (
    select qa.module_id,
           count(*)::integer as attempts_count,
           count(*) filter (where qa.is_correct)::integer as correct_answers
    from public.question_attempts qa
    cross join requesting_user ru
    where qa.user_id = ru.user_id
    group by qa.module_id
  ), activity_events as (
    select lp.module_id, lp.updated_at as activity_at
    from public.lesson_progress lp
    cross join requesting_user ru
    where lp.user_id = ru.user_id

    union all

    select qa.module_id, qa.answered_at as activity_at
    from public.question_attempts qa
    cross join requesting_user ru
    where qa.user_id = ru.user_id

    union all

    select ss.module_id, ss.last_activity_at as activity_at
    from public.study_sessions ss
    cross join requesting_user ru
    where ss.user_id = ru.user_id
  ), activity_stats as (
    select module_id, max(activity_at) as last_activity_at
    from activity_events
    group by module_id
  ), report_base as (
    select mt.module_id,
           mt.total_lessons,
           coalesce(cs.completed_lessons, 0) as completed_lessons,
           coalesce(ats.attempts_count, 0) as attempts_count,
           coalesce(ats.correct_answers, 0) as correct_answers,
           coalesce(cs.total_study_seconds, 0)::bigint as total_study_seconds,
           acs.last_activity_at
    from module_totals mt
    left join completion_stats cs on cs.module_id = mt.module_id
    left join attempt_stats ats on ats.module_id = mt.module_id
    left join activity_stats acs on acs.module_id = mt.module_id
  )
  select rb.module_id,
         rb.total_lessons,
         rb.completed_lessons,
         round((rb.completed_lessons::numeric / nullif(rb.total_lessons, 0)) * 100, 1) as progress_percent,
         rb.attempts_count,
         rb.correct_answers,
         case
           when rb.attempts_count = 0 then null
           else round((rb.correct_answers::numeric / rb.attempts_count) * 100, 1)
         end as accuracy_percent,
         rb.total_study_seconds,
         rb.last_activity_at,
         case
           when rb.attempts_count < 4 then 'dados_insuficientes'
           when (rb.correct_answers::numeric / nullif(rb.attempts_count, 0)) >= 0.80 then 'dominio_consolidado'
           when (rb.correct_answers::numeric / nullif(rb.attempts_count, 0)) >= 0.70 then 'em_consolidacao'
           else 'revisao_recomendada'
         end as competency_status,
         case
           when rb.attempts_count < 4 then 'Continue praticando para formar um indicador confiável de precisão.'
           when (rb.correct_answers::numeric / nullif(rb.attempts_count, 0)) >= 0.80 then 'Desempenho consistente nesta trilha.'
           when (rb.correct_answers::numeric / nullif(rb.attempts_count, 0)) >= 0.70 then 'Domínio em consolidação; siga praticando e revisando os pontos-chave.'
           else 'A precisão atual indica oportunidade de revisão orientada.'
         end as competency_message
  from report_base rb
  order by case rb.module_id
    when 'microbiologia' then 1
    when 'antibiograma' then 2
    when 'antibioticoterapia' then 3
    else 99
  end;
$$;

comment on function public.get_my_learning_report() is
  'Relatório privado do usuário autenticado: progresso, precisão, tempo e última atividade por trilha.';

revoke all on function public.get_my_learning_report() from public;
grant execute on function public.get_my_learning_report() to authenticated;

-- 2) Linha do tempo pessoal e resumida, limitada a no máximo 20 eventos recentes.
create or replace function public.get_my_recent_learning_activity(p_limit integer default 8)
returns table (
  activity_type text,
  module_id text,
  lesson_id integer,
  activity_at timestamptz,
  activity_title text,
  activity_detail text
)
language sql
security definer
set search_path = public, auth, pg_temp
stable
as $$
  with requesting_user as (
    select auth.uid() as user_id
  ), activity_events as (
    select
      'lesson_completed'::text as activity_type,
      lp.module_id,
      lp.lesson_id,
      lp.completed_at as activity_at,
      'Lição concluída'::text as activity_title,
      'Conclusão registrada no seu percurso de estudo.'::text as activity_detail
    from public.lesson_progress lp
    cross join requesting_user ru
    where lp.user_id = ru.user_id
      and lp.status = 'completed'
      and lp.completed_at is not null

    union all

    select
      case when qa.is_correct then 'question_correct' else 'question_answered' end as activity_type,
      qa.module_id,
      qa.lesson_id,
      qa.answered_at as activity_at,
      case when qa.is_correct then 'Questão respondida corretamente' else 'Questão respondida' end as activity_title,
      'Registro de prática clínica realizado.'::text as activity_detail
    from public.question_attempts qa
    cross join requesting_user ru
    where qa.user_id = ru.user_id

    union all

    select
      'study_session'::text as activity_type,
      ss.module_id,
      ss.lesson_id,
      coalesce(ss.ended_at, ss.last_activity_at) as activity_at,
      'Sessão de estudo registrada'::text as activity_title,
      concat(greatest(1, ceil(ss.total_seconds::numeric / 60))::integer, ' min de estudo contabilizados.')::text as activity_detail
    from public.study_sessions ss
    cross join requesting_user ru
    where ss.user_id = ru.user_id
      and ss.total_seconds > 0
  )
  select ae.activity_type,
         ae.module_id,
         ae.lesson_id,
         ae.activity_at,
         ae.activity_title,
         ae.activity_detail
  from activity_events ae
  where ae.activity_at is not null
  order by ae.activity_at desc
  limit least(greatest(coalesce(p_limit, 8), 1), 20);
$$;

comment on function public.get_my_recent_learning_activity(integer) is
  'Linha do tempo privada do usuário autenticado. Limita a quantidade de eventos e não expõe dados de outros estudantes.';

revoke all on function public.get_my_recent_learning_activity(integer) from public;
grant execute on function public.get_my_recent_learning_activity(integer) to authenticated;

commit;

-- Confirmação estrutural após criação: o resultado esperado é true nas duas colunas.
select
  exists (
    select 1 from information_schema.routines
    where routine_schema = 'public' and routine_name = 'get_my_learning_report'
  ) as funcao_relatorio_criada,
  exists (
    select 1 from information_schema.routines
    where routine_schema = 'public' and routine_name = 'get_my_recent_learning_activity'
  ) as funcao_atividade_criada;
