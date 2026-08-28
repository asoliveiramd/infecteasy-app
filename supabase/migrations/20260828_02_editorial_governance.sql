-- InfectEasy — P5A: governança editorial de fontes clínicas
--
-- Pré-requisito: executar e validar 16_preflight_p5_editorial_governance.sql
-- e 17_backup_p5_lesson_catalog.sql.
--
-- Esta migração cria SOMENTE metadados editoriais novos.
-- Ela NÃO altera lesson_catalog, question_catalog, user_progress, lesson_progress,
-- question_attempts, study_sessions, XP, níveis, sequência ou conteúdo das lições.
--
-- Os registros iniciais ficam como "pending_review": eles não declaram que o
-- conteúdo clínico foi revisado ou validado. A marcação "reviewed" depende de
-- curadoria humana posterior.

begin;

-- Barreira de segurança: o catálogo oficial de lições deve existir e conter as 56 lições conhecidas.
do $$
declare
  v_lessons integer;
begin
  if to_regclass('public.lesson_catalog') is null then
    raise exception 'lesson_catalog não existe. A migração foi interrompida sem alterações.';
  end if;

  select count(*)::integer into v_lessons from public.lesson_catalog;
  if v_lessons <> 56 then
    raise exception 'lesson_catalog possui % lições; este script espera 56. A migração foi interrompida sem alterações.', v_lessons;
  end if;
end $$;

-- 1) Catálogo central de fontes. Não armazena dados pessoais ou de pacientes.
create table if not exists public.clinical_source_catalog (
  source_code text primary key,
  title text not null,
  organization text not null,
  source_url text not null check (source_url ~* '^https://'),
  document_version text,
  published_on date,
  checked_at date not null,
  source_type text not null check (source_type in ('guideline', 'breakpoint_table', 'classification', 'protocol', 'review')),
  scope_note text not null,
  status text not null default 'active' check (status in ('active', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2) Estado editorial por lição. O texto e as questões permanecem onde já estão.
create table if not exists public.lesson_editorial_status (
  module_id text not null,
  lesson_id integer not null check (lesson_id > 0),
  review_status text not null default 'pending_review'
    check (review_status in ('pending_review', 'in_review', 'reviewed', 'outdated')),
  reviewed_at date,
  review_due_at date,
  editorial_owner text not null default 'content_team'
    check (editorial_owner in ('content_team', 'clinical_editor')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (module_id, lesson_id),
  foreign key (module_id, lesson_id)
    references public.lesson_catalog(module_id, lesson_id)
    on update cascade
    on delete restrict,
  check (review_status <> 'reviewed' or reviewed_at is not null),
  check (review_due_at is null or reviewed_at is null or review_due_at >= reviewed_at)
);

-- 3) Vínculo entre lições e fontes. Permite múltiplas fontes, sem duplicar URLs no conteúdo.
create table if not exists public.lesson_clinical_sources (
  module_id text not null,
  lesson_id integer not null check (lesson_id > 0),
  source_code text not null references public.clinical_source_catalog(source_code)
    on update cascade
    on delete restrict,
  reference_role text not null check (reference_role in ('primary_reference', 'contextual_reference', 'local_protocol_required')),
  source_note text,
  created_at timestamptz not null default now(),
  primary key (module_id, lesson_id, source_code),
  foreign key (module_id, lesson_id)
    references public.lesson_catalog(module_id, lesson_id)
    on update cascade
    on delete restrict
);

create index if not exists lesson_editorial_status_review_idx
  on public.lesson_editorial_status (review_status, review_due_at);

create index if not exists lesson_clinical_sources_source_idx
  on public.lesson_clinical_sources (source_code);

-- O acesso do estudante é somente leitura; não há escrita direta pelo navegador.
alter table public.clinical_source_catalog enable row level security;
alter table public.lesson_editorial_status enable row level security;
alter table public.lesson_clinical_sources enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'clinical_source_catalog'
      and policyname = 'ie_clinical_source_catalog_authenticated_read'
  ) then
    create policy ie_clinical_source_catalog_authenticated_read
      on public.clinical_source_catalog for select to authenticated using (true);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'lesson_editorial_status'
      and policyname = 'ie_lesson_editorial_status_authenticated_read'
  ) then
    create policy ie_lesson_editorial_status_authenticated_read
      on public.lesson_editorial_status for select to authenticated using (true);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'lesson_clinical_sources'
      and policyname = 'ie_lesson_clinical_sources_authenticated_read'
  ) then
    create policy ie_lesson_clinical_sources_authenticated_read
      on public.lesson_clinical_sources for select to authenticated using (true);
  end if;
end $$;

revoke all on table public.clinical_source_catalog from anon;
revoke all on table public.lesson_editorial_status from anon;
revoke all on table public.lesson_clinical_sources from anon;

revoke insert, update, delete on table public.clinical_source_catalog from authenticated;
revoke insert, update, delete on table public.lesson_editorial_status from authenticated;
revoke insert, update, delete on table public.lesson_clinical_sources from authenticated;

grant select on table public.clinical_source_catalog to authenticated;
grant select on table public.lesson_editorial_status to authenticated;
grant select on table public.lesson_clinical_sources to authenticated;

-- Fontes iniciais: registradas como referências de contexto, sem declarar validação clínica de lições.
insert into public.clinical_source_catalog (
  source_code, title, organization, source_url, document_version, published_on, checked_at, source_type, scope_note
)
values
  (
    'brcast_2026_breakpoints',
    'Tabela de pontos de corte clínicos BrCAST',
    'Brazilian Committee on Antimicrobial Susceptibility Testing',
    'https://brcast.org.br/documentos/documentos-3/',
    '15-04-2026',
    date '2026-04-15',
    current_date,
    'breakpoint_table',
    'Referência educacional para interpretação de TSA/antibiograma. Conferir versão vigente e protocolo institucional antes de qualquer aplicação clínica.'
  ),
  (
    'anvisa_antimicrobial_stewardship_2023',
    'Diretriz Nacional para Gerenciamento do Uso de Antimicrobianos em Serviços de Saúde',
    'Agência Nacional de Vigilância Sanitária',
    'https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/servicosdesaude/publicacoes/DiretrizGerenciamentoAntimicrobianosANVISA2023FINAL.pdf',
    '2023',
    date '2023-06-14',
    current_date,
    'guideline',
    'Referência institucional para o uso responsável de antimicrobianos. Não substitui protocolos locais, avaliação individual ou diretrizes específicas atualizadas.'
  ),
  (
    'who_aware_2023',
    'AWaRe classification of antibiotics for evaluation and monitoring of use',
    'World Health Organization',
    'https://www.who.int/publications/i/item/WHO-MHP-HPS-EML-2023.04',
    '2023',
    date '2023-07-26',
    current_date,
    'classification',
    'Classificação de contexto educacional para stewardship e monitoramento. Não substitui diretrizes brasileiras, protocolos institucionais ou decisão clínica.'
  )
on conflict (source_code) do nothing;

-- Toda lição começa explicitamente como pendente de revisão humana.
insert into public.lesson_editorial_status (module_id, lesson_id, review_status, editorial_owner, notes)
select
  lc.module_id,
  lc.lesson_id,
  'pending_review',
  'content_team',
  'Registro editorial inicial. Não representa revisão clínica concluída.'
from public.lesson_catalog lc
on conflict (module_id, lesson_id) do nothing;

-- Vínculos iniciais de contexto. A trilha de microbiologia permanece sem fonte vinculada até curadoria específica.
insert into public.lesson_clinical_sources (module_id, lesson_id, source_code, reference_role, source_note)
select
  lc.module_id,
  lc.lesson_id,
  'brcast_2026_breakpoints',
  'contextual_reference',
  'Usar como referência de atualização para conteúdos de teste de suscetibilidade e antibiograma.'
from public.lesson_catalog lc
where lc.module_id = 'antibiograma'
on conflict (module_id, lesson_id, source_code) do nothing;

insert into public.lesson_clinical_sources (module_id, lesson_id, source_code, reference_role, source_note)
select
  lc.module_id,
  lc.lesson_id,
  'anvisa_antimicrobial_stewardship_2023',
  'contextual_reference',
  'Usar como referência de atualização para conteúdos de uso responsável de antimicrobianos.'
from public.lesson_catalog lc
where lc.module_id = 'antibioticoterapia'
on conflict (module_id, lesson_id, source_code) do nothing;

insert into public.lesson_clinical_sources (module_id, lesson_id, source_code, reference_role, source_note)
select
  lc.module_id,
  lc.lesson_id,
  'who_aware_2023',
  'contextual_reference',
  'Usar apenas como contexto educacional de stewardship; não substitui fonte brasileira ou protocolo local.'
from public.lesson_catalog lc
where lc.module_id = 'antibioticoterapia'
on conflict (module_id, lesson_id, source_code) do nothing;

commit;

-- Confirmação estrutural. Resultado esperado: 3 fontes, 56 status e 66 vínculos iniciais.
select
  (select count(*) from public.clinical_source_catalog) as fontes_catalogadas,
  (select count(*) from public.lesson_editorial_status) as licoes_com_status_editorial,
  (select count(*) from public.lesson_clinical_sources) as vinculos_de_fontes,
  (select count(*) from public.lesson_editorial_status where review_status = 'pending_review') as licoes_pendentes_de_revisao;
