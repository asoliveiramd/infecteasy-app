# InfectEasy — execução segura da P6A: Biblioteca pessoal

Esta etapa adiciona a funcionalidade **Biblioteca**, que permitirá salvar lições para retomá-las mais tarde. Ela **não altera** conteúdo clínico, questões, progresso, pontos, níveis, sessões, sequência diária, recomendações ou marcos.

> Execute cada arquivo em uma nova consulta no **SQL Editor** do Supabase e envie uma captura do resultado antes de seguir para o próximo arquivo.

| Ordem | Arquivo | Tipo | O que faz |
|---:|---|---|---|
| 1 | `20_preflight_p6_personal_library.sql` | Somente leitura | Confirma a base atual e que a Biblioteca ainda não existe. |
| 2 | `21_create_p6_personal_library.sql` | Mutável, seguro e idempotente | Cria a tabela privada e as funções de salvar/remover. |
| 3 | `22_validate_p6_personal_library.sql` | Somente leitura | Confirma RLS, permissões e preservação do catálogo. |

## Passo 1 — Preflight

Abra o arquivo **`20_preflight_p6_personal_library.sql`**, copie todo o conteúdo, cole em uma nova consulta e clique em **Run**.

O resultado esperado é `56` lições no total: `14` de Microbiologia, `18` de Antibiograma e `24` de Antibioticoterapia. Os itens relacionados a `user_saved_lessons` e às duas funções devem aparecer como **não** antes da criação.

Envie uma captura do resultado.

## Passo 2 — Criar a Biblioteca

Somente depois da confirmação do passo 1, abra **`21_create_p6_personal_library.sql`**, copie tudo, cole em uma nova consulta e clique em **Run**.

O resultado esperado é uma linha com as três colunas abaixo em `true`:

| `biblioteca_criada` | `funcao_salvar_criada` | `funcao_remover_criada` |
|---|---|---|
| `true` | `true` | `true` |

O script pode ser executado novamente sem criar duplicidade: a tabela usa uma chave única por usuário, trilha e lição. Envie uma captura.

## Passo 3 — Validar

Abra **`22_validate_p6_personal_library.sql`**, copie todo o conteúdo e clique em **Run**. Ele somente consulta dados e não faz alterações.

A validação deve confirmar RLS habilitado, a política `ie_user_saved_lessons_read_own`, as duas funções permitidas para usuários autenticados e a preservação de 56 lições no catálogo. O total de itens salvos pode estar em `0` antes do primeiro uso real.

Envie as capturas. Depois disso, a tela Biblioteca será conectada à pré-visualização local e testada antes de qualquer publicação.
