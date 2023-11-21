import {
  getAllTagCategories,
  getPromptTagsByCategory,
  getPromptTagsByPrefix,
  createCategory,
  createPromptTag
} from '../utils/tags';



/// Tags

/// Getters

// Get tag categories
export async function getTagCategories(client: any) {
  const categories = await getAllTagCategories(client);
  console.log('this is categories: ', categories);
  return categories;
}

// Get tags by category
export async function getTagsByCategory(category: string, client: any) {
  const tags = await getPromptTagsByCategory(category, client);
  console.log('this is tags: ', tags);
  return tags;
}

// Get tags by prefix
export async function getTagsByPrefix(prefix: string, client: any) {
  const tags = await getPromptTagsByPrefix(prefix, client);
  return tags;
}

// Autocomplete - prefix exact match
export async function getAutocompleteTagsByPrefix(prefix: string, client: any) {
  const tags = await getPromptTagsByPrefix(prefix, client);
  console.log('this is autocomplete for tags: ', tags);
  return tags;
}

/// Setters

// Create new tag category
export async function createTagCategory(category: string, client: any) {
  const newTagCategory = await createCategory(category, client);
  return newTagCategory;
}

// Add new tag
export async function createTag(category: string, tag: string, client: any) {
  const newTag = await createPromptTag(tag, category, client);
  return newTag;
}


