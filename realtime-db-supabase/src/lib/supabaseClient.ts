import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnon = process.env.SUPABASE_ANON || '';

// export const client = createClient(
// 	'https://ssnct...r.supabase.co',
// 	'eyJhbGci.....'
// );

// this are wrong values, replace them with your own
export const client = createClient(
	'https://nix.....ym.supabase.co',
	'eyJhbGciOiJIUzI1Ni.......'
);
