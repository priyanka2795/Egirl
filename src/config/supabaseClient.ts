import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

console.log(result.parsed);

// Creating supabaseClient instance using keys from .env file
// This is a client-side client
const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? process.env.NEXT_PUBLIC_SUPABASE_URL
  : '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  : '';

console.log('url:' + supabaseURL, 'key:' + supabaseKey);

export const supabaseClient = createClient('supabaseURL', 'supabaseKey');
