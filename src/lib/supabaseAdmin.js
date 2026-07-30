import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_ADMIN_SUPABASE_URL
const key = import.meta.env.VITE_ADMIN_SUPABASE_ANON_KEY

if (!url || !key) {
  console.warn('[soz-dev] VITE_ADMIN_SUPABASE_URL / VITE_ADMIN_SUPABASE_ANON_KEY manquants')
}

export const supabase = createClient(url || '', key || '')

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
  return data.session
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}
