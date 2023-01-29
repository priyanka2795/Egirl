import {
  useUser,
  useSupabaseClient,
  Session
} from '@supabase/auth-helpers-react';

import { Database } from '../types/supabase';

// const supabase = useSupabaseClient<Database>();

import { supabaseClient } from '../../config/supabaseClient';

async function createTables() {
  // await supabaseClient.createTable({})
}

// export async function createTables() {
//     const { data, error } = await supabaseClient.rpc('createTables');
//     console.log(data);
// }
// createTables();
