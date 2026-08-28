-- InfectEasy — P5A: backup lógico do catálogo de lições
--
-- Execute SOMENTE depois de o preflight 16 confirmar a estrutura esperada.
-- Este script copia o catálogo público de lições para uma tabela de backup.
-- Não altera lesson_catalog, question_catalog, progresso, XP, sessões,
-- tentativas, marcos, usuários ou conteúdo clínico.
--
-- A execução é idempotente: se o backup já existir, o conteúdo original não é substituído.

begin;

create table if not exists public.p5_backup_lesson_catalog_20260828 as
select *
from public.lesson_catalog;

alter table public.p5_backup_lesson_catalog_20260828 enable row level security;

revoke all on table public.p5_backup_lesson_catalog_20260828 from anon;
revoke all on table public.p5_backup_lesson_catalog_20260828 from authenticated;

commit;

-- Confirmação: deve haver 56 registros no catálogo atual e no backup.
select
  (select count(*) from public.lesson_catalog) as licoes_catalogo_atual,
  (select count(*) from public.p5_backup_lesson_catalog_20260828) as licoes_no_backup;
