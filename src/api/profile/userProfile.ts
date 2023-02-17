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

//getUserProfile('a0e83fdc-039c-46cf-9d3d-ff515aaa7bfd', supabaseClient);
//getUserProfileInterests('a0e83fdc-039c-46cf-9d3d-ff515aaa7bfd', supabaseClient);
