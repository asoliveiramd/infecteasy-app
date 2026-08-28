-- InfectEasy — P5A: preflight de governança editorial
--
-- Este script é SOMENTE DE LEITURA.
-- Ele não cria, altera ou exclui tabelas, funções, políticas, XP, progresso,
-- respostas, sessões, marcos ou conteúdo clínico.
--
-- Execute no SQL Editor antes de qualquer script P5A.

with checks as (
  select
    'lesson_catalog existe'::text as verificacao,
    case when to_regclass('public.lesson_catalog') is not null then 'ok' else 'ausente' end as resultado
  union all
  select
    'total de lições catalogadas',
    coalesce((select count(*)::text from public.lesson_catalog), '0')
  union all
  select
    'lições de microbiologia',
    coalesce((select count(*)::text from public.lesson_catalog where module_id = 'microbiologia'), '0')
  union all
  select
    'lições de antibiograma',
    coalesce((select count(*)::text from public.lesson_catalog where module_id = 'antibiograma'), '0')
  union all
  select
    'lições de antibioticoterapia',
    coalesce((select count(*)::text from public.lesson_catalog where module_id = 'antibioticoterapia'), '0')
  union all
  select
    'clinical_source_catalog já existe',
    case when to_regclass('public.clinical_source_catalog') is null then 'não' else 'sim — interromper e informar' end
  union all
  select
    'lesson_editorial_status já existe',
    case when to_regclass('public.lesson_editorial_status') is null then 'não' else 'sim — interromper e informar' end
  union all
  select
    'lesson_clinical_sources já existe',
    case when to_regclass('public.lesson_clinical_sources') is null then 'não' else 'sim — interromper e informar' end
  union all
  select
    'backup P5 do catálogo já existe',
    case when to_regclass('public.p5_backup_lesson_catalog_20260828') is null then 'não' else 'sim' end
  union all
  select
    'função complete_lesson existe',
    case when exists (
      select 1 from information_schema.routines
      where routine_schema = 'public' and routine_name = 'complete_lesson'
    ) then 'ok' else 'ausente' end
  union all
  select
    'função de recomendações existe',
    case when exists (
      select 1 from information_schema.routines
      where routine_schema = 'public' and routine_name = 'get_review_recommendations'
    ) then 'ok' else 'ausente' end
)
select verificacao, resultado
from checks
order by verificacao;

-- Resultado esperado para o catálogo atual:
-- 56 lições: 14 de microbiologia, 18 de antibiograma e 24 de antibioticoterapia.
-- Os três objetos P5A devem aparecer como "não".
