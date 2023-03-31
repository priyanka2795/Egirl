/// Getters

// Get label for particular img
export async function getImageLabel(
  user_id: string,
  image_id: number,
  client: any
) {
  let { data, error, status } = await client
    .from('sd_images')
    .select(`user_id, list_name, character_ids, created_at`)
    .filter('user_id', 'eq', user_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return { data };
}

/// Setters

// Add image row to DB
export async function addImage(
  user_id: string,
  image_url: string,
  label: string,
  img_hash: string,
  client: any
) {
  let img_data = {
    user_id,
    image_url,
    label,
    img_hash,
    created_at: new Date().toISOString()
  };
  let { data, error, status } = await client
    .from('images_sd')
    .insert([img_data]);

  if (error && status !== 201) {
    console.log('Error in addImage:', error);
    throw error;
  }

  return img_data;
}
