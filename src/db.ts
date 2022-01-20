import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://jytysttnbrmatwrsqmcv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMjQ5MzQyNSwiZXhwIjoxOTQ4MDY5NDI1fQ.RjZkXCQdU6_w3hfRl9TJaQFLTOJeNym23_4WPRZfBWQ')

export default supabase