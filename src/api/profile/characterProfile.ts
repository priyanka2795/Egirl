import {
  getCharacterById,
  getCharactersByProfileTags,
  createCharacterProfile as createCharacterProfileHelper
} from '../utils/characters';


// Get character profile
export async function getCharacter(character_id: number, client: any) {
  const character = await getCharacterById(character_id, client);
  return character;
}

/// Setters

// Create profile for character
export async function createCharacterProfile(
  username: string,
  display_name: string,
  is_verified: boolean,
  bio: string,
  creator_id: number,
  profile_picture: string,
  profile_banner_picture: string,
  infotag_ids: number[],
  client: any
) {
  // TODO: validation
  createCharacterProfileHelper(
    username,
    display_name,
    is_verified,
    bio,
    creator_id,
    profile_picture,
    profile_banner_picture,
    infotag_ids,
    client
  );
  return;
}

