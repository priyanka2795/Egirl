import { supabaseClient } from '../../config/supabaseClient';

export async function getProfile(user_id: number) {
  let { data, error, status } = await supabaseClient
    .from('profile')
    .select(
      `user_id, username, display_name, bio, location, profile_picture, profile_banner_picture, created_at`
    )
    .filter('user_id', 'eq', user_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}
