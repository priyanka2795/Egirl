/// Getters

// Get images for user
export async function getImagesByUser(user_id: string, client: any) {
  let { data, error, status } = await client
    .from('sd_images')
    .select(`creator_user_id, prompt, img_url, img_hash, label, created_at`)
    .filter('creator_user_id', 'eq', user_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return { data };
}

// Get img metadata
export async function getImageMetadata(
  user_id: string,
  image_id: number,
  client: any
) {
  let { data, error, status } = await client
    .from('sd_images')
    .select(`creator_user_id, prompt, img_url, img_hash, label, created_at`)
    .filter('id', 'eq', image_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return { data };
}

/// Setters

// Add image row to DB
export async function addImage(
  creator_user_id: string,
  prompt: string,
  img_url: string,
  img_hash: string,
  label: string,
  client: any
) {
  let img_data = {
    creator_user_id,
    prompt,
    img_url,
    img_hash,
    label,
    created_at: new Date().toISOString()
  };
  let { data, error, status } = await client
    .from('sd_images')
    .insert([img_data]);

  if (error && status !== 201) {
    console.log('Error in addImage:', error);
    throw error;
  }

  return img_data;
}

// Add mask row to DB
export async function addMaskImage(
  user_id: string,
  original_img_id: string,
  img_url: string,
  img_hash: string,
  client: any
) {
  let mask_data = {
    user_id,
    original_img_id,
    img_url,
    img_hash,
    created_at: new Date().toISOString()
  };
  let { data, error, status } = await client
    .from('mask_images')
    .insert([mask_data]);

  if (error && status !== 201) {
    console.log('Error in addMaskImage:', error);
    throw error;
  }

  return mask_data;
}
