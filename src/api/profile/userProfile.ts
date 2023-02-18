import { getCharacterById, getCharactersByInfoTags } from '../utils/characters';
import {
  getProfile,
  getProfileInterests,
  createUserProfile as createUserProfileHelper,
  addUserInterest as addUserInterestHelper
} from '../utils/profiles';

//import { supabaseClient } from '../../config/supabaseClient';

/// User profile

/// Getters

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

// Setters

// Create profile for user
export async function createUserProfile(
  user_id: string,
  username: string,
  display_name: string,
  bio: string,
  profile_picture: string,
  profile_banner_picture: string,
  client: any
) {
  // TODO: validation
  createUserProfileHelper(
    user_id,
    username,
    display_name,
    bio,
    profile_picture,
    profile_banner_picture,
    client
  );
  return;
}

// Add interest to user profile
export async function addUserInterest(
  user_id: string,
  infotag_id: number,
  client: any
) {
  addUserInterestHelper(user_id, infotag_id, client);
  return;
}

//getUserProfile('a0e83fdc-039c-46cf-9d3d-ff515aaa7bfd', supabaseClient);
//getUserProfileInterests('a0e83fdc-039c-46cf-9d3d-ff515aaa7bfd', supabaseClient);
