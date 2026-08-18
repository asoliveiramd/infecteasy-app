import { createClient } from '@supabase/supabase-js'

// A chave anon/publishable é pública por design: a segurança dos dados é aplicada
// pelas políticas RLS no Supabase. Variáveis de ambiente continuam tendo prioridade
// para facilitar troca ou rotação futura sem alteração de código.
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || 'https://tsrjxxmxrlgpbhuxpsaj.supabase.co'
const supabasePublishableKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzcmp4eG14cmxncGJodXhwc2FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3NjQzNzUsImV4cCI6MjA3NDM0MDM3NX0.3CSRGAuEtwoFdRHCBepw-NbXU0XKATSLB_g-SCJMdTc'

export const isSupabaseConfigured = Boolean(
  supabaseUrl && supabasePublishableKey
)

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabasePublishableKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null

export function requireSupabase() {
  if (!supabase) {
    throw new Error(
      'A autenticação ainda não foi configurada. Defina VITE_SUPABASE_URL e VITE_SUPABASE_PUBLISHABLE_KEY.'
    )
  }

  return supabase
}
