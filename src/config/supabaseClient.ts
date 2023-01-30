import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();
// dotenv.config({path: '../../.env'});

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

export const supabaseClient = createClient(supabaseURL, supabaseKey);

// async function general() {
//     const { error } = await supabaseClient
//     .from('profile')
//     .insert({ user_id: '1dd94d8b-c048-4b21-8571-583296db317e', username: 'chrisPbacon', display_name: 'Chris P. Bacon', bio: '',  location: '', created_at: '2016-07-24T03:32:45.678Z' })

//     if (error) {
//         console.log(error)
//     }
// }
// general()
