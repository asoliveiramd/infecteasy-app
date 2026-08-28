# Migrações suplementares do InfectEasy

Este diretório preserva os scripts SQL que foram aplicados manualmente no Supabase para sustentar as prioridades P0 a P5A. O objetivo é permitir revisão, auditoria e restauração controlada da infraestrutura de progresso e da governança editorial do aplicativo.

> **Atenção:** estes arquivos não representam a criação inicial completa do projeto Supabase. Eles pressupõem que as tabelas-base de autenticação, `profiles` e `user_progress` já existam. Não execute todos os arquivos automaticamente em um banco com dados sem antes realizar preflight, backup lógico e revisão do impacto.

| Ordem | Arquivo | Finalidade | Situação no projeto de produção |
|---:|---|---|---|
| 1 | `20260820_01_lesson_progress.sql` | Catálogo oficial de lições, histórico de conclusão e função idempotente `complete_lesson`. | Aplicada. |
| 2 | `20260820_02_question_attempts.sql` | Catálogo de questões, tentativas protegidas por token e função `record_question_attempt`. | Aplicada. |
| 3 | `20260820_03_study_sessions_checkpoints.sql` | Sessões, checkpoints, tempo acumulado e sequência diária no fuso de Salvador. | Aplicada. |
| 4 | `20260827_01_review_recommendations_achievements.sql` | Revisões privadas e marcos de competência. | Aplicada. |
| 5 | `20260827_02_personal_learning_report.sql` | Relatório individual e linha do tempo privada de estudo. | Aplicada. |
| 6 | `20260827_03_fix_refresh_learning_achievements.sql` | Correção da atualização idempotente de marcos e recomendações privadas. | Aplicada. |
| 7 | `20260828_00_preflight_p5_editorial_governance.sql` | Verificação somente de leitura da base editorial P5A. | Executada. |
| 8 | `20260828_01_backup_p5_lesson_catalog.sql` | Backup lógico protegido do catálogo de 56 lições. | Executada. |
| 9 | `20260828_02_editorial_governance.sql` | Fontes clínicas, status editorial e vínculos por lição. | Aplicada. |
| 10 | `20260828_03_validate_p5_editorial_governance.sql` | Validação somente de leitura da estrutura P5A. | Executada. |

## Procedimento obrigatório antes de uma nova migração

Primeiro, preparar uma consulta de preflight **somente de leitura** para confirmar o estado das tabelas e funções relacionadas. Depois, realizar um backup lógico dos dados ou registrar uma cópia das linhas que poderão ser afetadas. Só então o usuário deve executar o script mutável pelo SQL Editor do Supabase, enviar uma captura do resultado e executar uma validação final também somente de leitura.

Nenhuma migração deve apagar ou substituir tabelas de contas, perfis, progresso, sessões, tentativas, conteúdo, uploads, variáveis de ambiente ou integrações sem autorização explícita e revisão de impacto.
