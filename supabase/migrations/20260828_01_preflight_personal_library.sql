-- InfectEasy P6A — Preflight somente de leitura
-- Este script não cria, altera ou apaga dados.
-- Execute no SQL Editor antes da migração 21.

with checks as (
  select
    'lesson_catalog existe' as verificacao,
    case when exists (
      select 1 from information_schema.tables
      where table_schema = 'public' and table_name = 'lesson_catalog'
    ) then 'ok' else 'não' end as resultado

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
    'user_saved_lessons já existe',
    case when exists (
      select 1 from information_schema.tables
      where table_schema = 'public' and table_name = 'user_saved_lessons'
    ) then 'sim' else 'não' end

  union all

  select
    'função salvar lição já existe',
    case when exists (
      select 1 from information_schema.routines
      where routine_schema = 'public' and routine_name = 'save_lesson_to_library'
    ) then 'sim' else 'não' end

  union all

  select
    'função remover lição já existe',
    case when exists (
      select 1 from information_schema.routines
      where routine_schema = 'public' and routine_name = 'remove_lesson_from_library'
    ) then 'sim' else 'não' end
)
select *
from checks
order by verificacao;

-- Resultado esperado:
-- 56 lições (14 microbiologia, 18 antibiograma e 24 antibioticoterapia).
-- Os três objetos P6A devem aparecer como "não" antes da primeira execução.
