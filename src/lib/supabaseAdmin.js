import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_ADMIN_SUPABASE_URL
const key = import.meta.env.VITE_ADMIN_SUPABASE_ANON_KEY

/** Emails autorisés (séparés par virgule). Personne d’autre ne passe. */
const ALLOWED_EMAILS = String(
  import.meta.env.VITE_ADMIN_ALLOWED_EMAIL || 'sofyan.devpro@gmail.com',
)
  .split(',')
  .map(e => e.trim().toLowerCase())
  .filter(Boolean)

if (!url || !key) {
  console.warn('[soz-dev] VITE_ADMIN_SUPABASE_URL / VITE_ADMIN_SUPABASE_ANON_KEY manquants')
}

export const supabase = createClient(url || '', key || '')

export function isAllowedAdminEmail(email) {
  if (!email) return false
  return ALLOWED_EMAILS.includes(String(email).trim().toLowerCase())
}

export function isAllowedAdminSession(session) {
  return isAllowedAdminEmail(session?.user?.email)
}

export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession()
  return session
}

export function onAuthChange(callback) {
  const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
    callback(session)
  })
  return () => subscription.unsubscribe()
}

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error

  const session = data.session
  if (!isAllowedAdminSession(session)) {
    await supabase.auth.signOut()
    throw new Error('Ce compte n’est pas autorisé à accéder à l’admin.')
  }
  return session
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

/** Si une session existe mais n’est pas whitelistée → déconnexion forcée. */
export async function requireAdminSession() {
  const session = await getSession()
  if (!session) return null
  if (!isAllowedAdminSession(session)) {
    await signOut()
    return null
  }
  return session
}
