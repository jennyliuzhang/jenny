import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://nqgmnhphfnqaukgrnxde.supabase.co'; // Your Project URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xZ21uaHBoZm5xYXVrZ3JueGRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyNTgwMDAsImV4cCI6MjA0MzgzNDAwMH0.QFjGcX7_YrPiyFGkH29BSH5FBOpYeyaCoEliEzyXH5E'; // Your actual API Key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);