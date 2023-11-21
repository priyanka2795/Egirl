import {
  getImageMetadata,
  getImagesByUser,
  addImage,
  addMaskImage
} from '../utils/images';



/// Images

/// Getters

// Get imgs by user
export async function getImgsByUser(user_id: string, client: any) {
  const imgs = await getImagesByUser(user_id, client);
  console.log('this is imgs: ', imgs);
  return imgs;
}

// Get img metadata
export async function getImgMetadata(
  user_id: string,
  image_id: number,
  client: any
) {
  const metadata = await getImageMetadata(user_id, image_id, client);
  console.log('this is metadata: ', metadata);
  return metadata;
}

/// Setters

// Create image
export async function createImage(
  user_id: string,
  prompt: string,
  img_url: string,
  img_hash: string,
  label: string,
  client: any
) {
  const image = await addImage(
    user_id,
    prompt,
    img_url,
    img_hash,
    label,
    client
  );
  return image;
}

// Create mask for image
export async function createMaskImage(
  user_id: string,
  original_img_id: string,
  img_url: string,
  img_hash: string,
  client: any
) {
  const mask = await addMaskImage(
    user_id,
    original_img_id,
    img_url,
    img_hash,
    client
  );
  return mask;
}

