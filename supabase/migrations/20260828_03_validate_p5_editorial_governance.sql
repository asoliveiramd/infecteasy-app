-- InfectEasy — P5A: validação somente de leitura
--
-- Execute SOMENTE depois de 18_create_p5_editorial_governance.sql.
-- Este script não cria, altera ou exclui dados, tabelas, funções ou políticas.

-- 1) Estruturas e RLS: todas devem existir e ter RLS habilitado.
select
  c.relname as tabela,
  c.relrowsecurity as rls_habilitada
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public'
  and c.relname in (
    'clinical_source_catalog',
    'lesson_editorial_status',
    'lesson_clinical_sources'
  )
order by c.relname;

-- 2) Políticas previstas: três linhas, todas para SELECT e authenticated.
select
  tablename as tabela,
  policyname as politica,
  cmd as operacao,
  roles
from pg_policies
where schemaname = 'public'
  and tablename in (
    'clinical_source_catalog',
    'lesson_editorial_status',
    'lesson_clinical_sources'
  )
order by tablename, policyname;

-- 3) Contagens editoriais. Esperado: 3 fontes, 56 status, 66 vínculos e 56 pendentes.
select
  (select count(*) from public.clinical_source_catalog) as fontes_catalogadas,
  (select count(*) from public.lesson_editorial_status) as licoes_com_status_editorial,
  (select count(*) from public.lesson_clinical_sources) as vinculos_de_fontes,
  (select count(*) from public.lesson_editorial_status where review_status = 'pending_review') as licoes_pendentes_de_revisao,
  (select count(*) from public.lesson_editorial_status where review_status = 'reviewed') as licoes_marcadas_como_revisadas;

-- 4) Cobertura por trilha. Esperado: 14/0, 18/18 e 24/48 (status/vínculos).
select
  lc.module_id as trilha,
  count(*) as licoes_catalogadas,
  count(les.lesson_id) as licoes_com_status,
  count(lcs.source_code) as vinculos_de_fontes
from public.lesson_catalog lc
left join public.lesson_editorial_status les
  on les.module_id = lc.module_id and les.lesson_id = lc.lesson_id
left join public.lesson_clinical_sources lcs
  on lcs.module_id = lc.module_id and lcs.lesson_id = lc.lesson_id
group by lc.module_id
order by lc.module_id;

-- 5) Confirmação de preservação: a tabela de backup deve espelhar o catálogo atual.
select
  (select count(*) from public.lesson_catalog) as licoes_catalogo_atual,
  (select count(*) from public.p5_backup_lesson_catalog_20260828) as licoes_no_backup;
