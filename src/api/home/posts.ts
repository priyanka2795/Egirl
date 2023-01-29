import {
  useUser,
  useSupabaseClient,
  Session
} from '@supabase/auth-helpers-react';

import { Database } from '../../api/types/supabase';
type Users = Database['public']['Tables']['users']['Row'];

export async function getPosts(
  setLoading: (loading: boolean) => void,
  setData: (data: any) => void
) {
  const supabase = useSupabaseClient<Database>();
  const user = useUser();

  try {
    setLoading(true);
    if (!user) throw new Error('No user');

    let { data, error, status } = await supabase
      .from('posts')
      .select(`title, description, is_ppv`)
      .limit(10);

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      setData(data);
    }
  } catch (error) {
    alert('Error loading posts data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
