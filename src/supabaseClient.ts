import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://lueroylevfmdaoszdmxu.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1ZXJveWxldmZtZGFvc3pkbXh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzMjE4MzMsImV4cCI6MjA4Njg5NzgzM30.dnEr5xn4FHF-KkDw6LGJKLVjajAs3r9omGxgqePZ1Bs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
