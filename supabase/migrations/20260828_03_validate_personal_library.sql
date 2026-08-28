-- InfectEasy P6A — Validação somente de leitura
-- Execute depois do script 21. Não altera dados.

-- 1) Estrutura e isolamento por RLS.
select
  c.relname as tabela,
  c.relrowsecurity as rls_habilitado,
  coalesce(p.policyname, 'sem política de leitura') as politica
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
left join pg_policies p
  on p.schemaname = n.nspname
 and p.tablename = c.relname
 and p.policyname = 'ie_user_saved_lessons_read_own'
where n.nspname = 'public'
  and c.relname = 'user_saved_lessons';

-- 2) Funções e permissões de execução.
select
  'save_lesson_to_library' as funcao,
  has_function_privilege('authenticated', 'public.save_lesson_to_library(text, integer)', 'execute') as authenticated_pode_executar
union all
select
  'remove_lesson_from_library' as funcao,
  has_function_privilege('authenticated', 'public.remove_lesson_from_library(text, integer)', 'execute') as authenticated_pode_executar
order by funcao;

-- 3) Confirmação de preservação: o catálogo clínico permanece intacto.
select
  (select count(*) from public.lesson_catalog) as licoes_catalogo_atual,
  (select count(*) from public.lesson_catalog where module_id = 'microbiologia') as microbiologia,
  (select count(*) from public.lesson_catalog where module_id = 'antibiograma') as antibiograma,
  (select count(*) from public.lesson_catalog where module_id = 'antibioticoterapia') as antibioticoterapia,
  (select count(*) from public.user_saved_lessons) as itens_salvos_no_momento;

-- Resultado esperado:
-- RLS habilitado e política ie_user_saved_lessons_read_own.
-- Duas funções com execução permitida para authenticated.
-- Catálogo permanece com 56 lições: 14, 18 e 24 por trilha.
-- Itens salvos podem ser 0 antes do primeiro uso real.
