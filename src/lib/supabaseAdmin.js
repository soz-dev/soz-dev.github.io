import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_ADMIN_SUPABASE_URL,
  import.meta.env.VITE_ADMIN_SUPABASE_ANON_KEY
)
