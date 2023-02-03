import { getCharacterById, getCharactersByInfoTags } from '../utils/characters';
import { getProfile, getProfileInterests } from '../utils/profiles';

//import { supabaseClient } from '../../config/supabaseClient';

/// User profile

// Get profile for user
export async function getUserProfile(user_id: string, client: any) {
  const profile = await getProfile(user_id, client);
  return profile;
}

// Get profile interests for user
export async function getUserProfileInterests(user_id: string, client: any) {
  const interests = await getProfileInterests(user_id, client);
  return interests;
}

//getUserProfile('2bc83fa6-7acb-414b-9312-2f897182381b', supabaseClient);
//getUserProfileInterests('2bc83fa6-7acb-414b-9312-2f897182381b', supabaseClient);
