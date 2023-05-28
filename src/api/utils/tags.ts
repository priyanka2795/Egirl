// Getters

// Get category id for category
export async function getCategoryIdForCategory(category: string, client: any) {
  let { data, error, status } = await client
    .from('tag_categories')
    .select(`id, category, created_at`)
    .filter('category', 'eq', category)
    .single();

  if (error && status !== 406) {
    throw error;
  }

  const category_id = data?.id;

  if (!category_id) {
    throw new Error(`category ${category} not found.`);
  }

  return category_id;
}

// Get all tag categories
export async function getAllTagCategories(client: any) {
  let { data, error, status } = await client
    .from('tag_categories')
    .select('*')
    .order('created_at', { ascending: false });

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

// Get all prompt tags for a given category id
export async function getPromptTagsByCategoryId(
  category_id: number,
  client: any
) {
  let { data, error, status } = await client
    .from('tags')
    .select('*')
    .filter('category_id', 'eq', category_id)
    .order('created_at', { ascending: false });

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

// Get all prompt tags for a given category string
export async function getPromptTagsByCategory(category: string, client: any) {
  let category_id = await getCategoryIdForCategory(category, client);
  return getPromptTagsByCategoryId(category_id, client);
}

// Get all prompt tags that start with a particular prefix
export async function getPromptTagsByPrefix(prefix: string, client: any) {
  let { data, error } = await client
    .from('tags')
    .select('*')
    .ilike('tag', `${prefix}%`)
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}

// Setters

// Create a new category
export async function createCategory(category: string, client: any) {
  let { data, error, status } = await client
    .from('tag_categories')
    .insert([{ category }])
    .single();

  if (error && status !== 201) {
    throw error;
  }

  return data;
}

// Create a new prompt tag with a given category
export async function createPromptTag(
  tag: string,
  category: string,
  client: any
) {
  let category_id = await getCategoryIdForCategory(category, client);

  let { data, error, status } = await client
    .from('tags')
    .insert([{ tag, category_id }])
    .single();

  if (error && status !== 201) {
    throw error;
  }

  return data;
}

// Create rows for autocomplete tags
export async function createAutocompleteTags(
  autocomplete_tags: any,
  client: any
) {
  console.log('this is autocomplete_tags: ', autocomplete_tags);
  let { data, error, status } = await client
    .from('autocomplete_tags')
    .insert(autocomplete_tags);

  if (error && status !== 201) {
    console.log('this is error: ', error);
    throw error;
  }

  console.log('returning, this is data: ', data);

  return data;
}
