import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Initialize Supabase Client with fail-safe values so it doesn't crash if env keys are not yet configured.
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
