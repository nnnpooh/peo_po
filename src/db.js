import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hvykpizvsfgpkdroidvi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMzAxMTkzNiwiZXhwIjoxOTQ4NTg3OTM2fQ.NvGvcQQ0bMkRwaqlRUQqcEj8DQ8dsm-_Zm15mGpTjBM'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase