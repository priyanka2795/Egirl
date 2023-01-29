import {
  useUser,
  useSupabaseClient,
  Session
} from '@supabase/auth-helpers-react';

import { Database } from '../types/supabase';
type Users = Database['public']['Tables']['users']['Row'];

export async function getUsername(
  setLoading: (loading: boolean) => void,
  setUsername: (username: string) => void
) {
  const supabase = useSupabaseClient<Database>();
  const user = useUser();

  try {
    setLoading(true);
    if (!user) throw new Error('No user');

    let { data, error, status } = await supabase
      .from('users')
      .select(`username`)
      .eq('id', user.id)
      .single();

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      setUsername(data.username);
    }
  } catch (error) {
    alert('Error loading posts data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
