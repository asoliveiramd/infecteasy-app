# InfectEasy

O **InfectEasy** é uma plataforma de microaprendizado em infectologia e antibioticoterapia para estudo clínico continuado. A aplicação organiza trilhas curtas, questões de consolidação e acompanhamento individual de progresso em uma interface profissional.

> **Uso educacional:** o InfectEasy apoia o estudo. Não deve ser usado como prescrição, diagnóstico, conduta individual ou substituto de avaliação clínica, protocolos institucionais, resultados microbiológicos, diretrizes vigentes ou decisão profissional.

## Funcionalidades atuais

| Área | Recursos disponíveis |
|---|---|
| **Conteúdo estruturado** | 56 lições nas trilhas de Fundamentos da Microbiologia, Teste de Suscetibilidade Antimicrobiana e Antibioticoterapia Ambulatorial. |
| **Prática** | 372 questões catalogadas, com resposta validada no banco e feedback pedagógico. |
| **Progresso seguro** | Conclusão de lições idempotente, XP oficial por lição e proteção contra duplicidade em cliques repetidos. |
| **Sessões de estudo** | Retomada de seção, checkpoints, tempo acumulado e sequência diária calculada no fuso de Salvador. |
| **Plano individual** | Recomendações privadas de revisão e marcos de competência, sem ranking público. |
| **Meu desempenho** | Progresso, prática, precisão, tempo e atividades recentes por trilha, visíveis somente para a conta autenticada. |
| **Transparência** | Página de uso educacional e privacidade integrada à aplicação. |

## Conteúdo audiovisual

Os vídeos-placeholder foram removidos da versão ativa para preservar a qualidade profissional. Vídeos novos devem ser publicados somente após curadoria de conteúdo, validação técnica, transcrição e revisão de acessibilidade.

## Desenvolvimento local

O projeto utiliza React 19, Vite, Tailwind CSS e Supabase.

```bash
npm install
npm run dev
```

Para compilar a versão de produção e verificar a qualidade do código:

```bash
npm run lint
npm run build
```

O lint possui seis avisos preexistentes relacionados ao Fast Refresh de componentes de interface, mas não apresenta erros.

## Configuração do Supabase

Copie `.env.example` para um arquivo `.env.local` e informe somente as credenciais públicas do cliente:

```bash
cp .env.example .env.local
```

| Variável | Uso |
|---|---|
| `VITE_SUPABASE_URL` | URL pública do projeto Supabase. |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Chave pública `anon` ou `publishable` do cliente. |

Nunca use `SERVICE_ROLE_KEY`, senhas ou outros segredos no frontend. A proteção dos dados depende das políticas RLS e das funções controladas no Supabase.

## Migrações e dados

Os scripts suplementares aplicados para P0, P1, P2 e P3A estão documentados em [`supabase/migrations/README.md`](supabase/migrations/README.md). Eles devem ser executados manualmente e de forma controlada pelo SQL Editor do Supabase, sempre com preflight somente de leitura, backup lógico e validação posterior.

Não substitua ou exclua tabelas de contas, perfis, progresso, sessões, tentativas, conteúdo, uploads, integrações ou variáveis de ambiente sem avaliação de impacto e autorização explícita.

## Publicação

A produção é construída pelo Vercel a partir da branch `main` do repositório. Antes de qualquer envio, execute `npm run lint` e `npm run build`, revise as alterações e valide a pré-visualização local. A publicação deve ocorrer apenas após autorização explícita.

## Governança de conteúdo clínico

Cada atualização clínica deve ser revisada por responsável técnico e indicar fonte, versão e data de revisão. Alterações em recomendações terapêuticas, pontos de corte e interpretação de suscetibilidade devem considerar as diretrizes vigentes e os protocolos locais.
