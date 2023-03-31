import { getImageLabel, addImage } from '../utils/images';

// import { supabaseClient } from '../../config/supabaseClient';

/// Images

/// Getters

// Get img label
export async function getImgLabel(
  user_id: string,
  image_id: number,
  client: any
) {
  const lists = await getImageLabel(user_id, image_id, client);
  return lists;
}

/// Setters

// Create image
export async function createImage(
  user_id: string,
  image_url: string,
  label: string,
  img_hash: string,
  client: any
) {
  const newCharacterIdList = await addImage(
    user_id,
    image_url,
    label,
    img_hash,
    client
  );
  return newCharacterIdList;
}
