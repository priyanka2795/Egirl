import Typesense from 'typesense';
import fs from 'fs/promises';
import {
  TYPESENSE_API_KEY,
  TYPESENSE_URL,
  TYPESENSE_INDEX_NAME
} from './config';

const setupClient = async () => {
  let client = new Typesense.Client({
    nodes: [
      {
        host: 'localhost', // For Typesense Cloud use xxx.a1.typesense.net
        port: 8108, // For Typesense Cloud use 443
        protocol: 'http' // For Typesense Cloud use https
      }
    ],
    apiKey: TYPESENSE_API_KEY || 'xyz',
    connectionTimeoutSeconds: 2
  });
  console.log('Got typesense client..');
  return client;
};

// Create collection
const createCollection = async (client: any, schema: any) => {
  try {
    await client
      .collections()
      .create(schema)
      .then(function (data: any) {
        console.log(data);
      });
  } catch (err) {
    console.log('Error creating collection: ', err);
  }
};

// Set up collection (example for books)
const createCollectionBooks = async (client: any) => {
  let booksSchema = {
    name: 'books',
    fields: [
      { name: 'title', type: 'string' },
      { name: 'authors', type: 'string[]', facet: true },

      { name: 'publication_year', type: 'int32', facet: true },
      { name: 'ratings_count', type: 'int32' },
      { name: 'average_rating', type: 'float' }
    ],
    default_sorting_field: 'ratings_count'
  };

  await createCollection(client, booksSchema);
  console.log('Done setting up book schema..');
};

// Set up collection for tags
const createCollectionTags = async (client: any) => {
  let tagsSchema = {
    name: 'tags',
    fields: [
      { name: 'tag', type: 'string' },
      { name: 'color_scheme', type: 'int32' },
      { name: 'frequency', type: 'int32' },
      { name: 'related_terms', type: 'string' }
    ],
    default_sorting_field: 'frequency'
  };

  await createCollection(client, tagsSchema);
  console.log('Done setting up tags schema..');
};

// Delete collection
const deleteCollection = async (client: any, collectionName: string) => {
  try {
    await client.collections(collectionName).delete();
    console.log(`Collection '${collectionName}' deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting collection '${collectionName}':`, error);
  }
};

// Add items to collection (example for books)
const addToCollectionBooks = async (client: any) => {
  // full dataset:
  // curl -O https://dl.typesense.org/datasets/books.jsonl.gz
  // gunzip books.jsonl.gz
  const booksInJsonl = await fs.readFile('./data/books.jsonl');
  await client.collections('books').documents().import(booksInJsonl);
  console.log('Done adding to collection..');
};

// Add items to collection (example for tags)
const addToCollectionTags = async (client: any) => {
  const danbooruJson = await fs.readFile('./data/danbooru.jsonl', 'utf-8');
  try {
    const { success, error } = await client
      .collections('tags')
      .documents()
      .import(danbooruJson);
    if (success) {
      console.log('Added documents..');
    } else {
      console.log('Error adding documents to tags: ', error);
    }
  } catch (error) {
    console.log('Error adding documents to tags: ', error);
  }
};

// Add items to collection (example for tags) - batched
const addToCollectionTagsBatch = async (client: any) => {
  console.log('adding danbooru..');
  try {
    const batchSize = 10000;
    const danbooruJson = await fs.readFile('./data/danbooru.jsonl', 'utf-8');

    const documents = danbooruJson.split('\n').filter(Boolean); // individual docs

    let batchCount = Math.ceil(documents.length / batchSize);
    console.log('this is batchCount: ', batchCount);
    let currentBatchIndex = 0;

    while (currentBatchIndex < batchCount) {
      console.log('adding batch: ', currentBatchIndex);
      const start = currentBatchIndex * batchSize;
      const end = Math.min(start + batchSize, documents.length);
      const currentBatch = documents.slice(start, end);
      try {
        const { success, error } = await client
          .collections('tags')
          .documents()
          .import(currentBatch.join('\n'));
        if (success) {
          console.log(
            'Batch ${currentBatchIndex + 1}/${batchCount} imported successfully'
          );
        } else {
          console.log('Error adding documents to tags: ', error);
        }
        currentBatchIndex++;
      } catch (error) {
        console.log('Error adding documents to tags: ', error);
      }
    }
  } catch (error) {
    console.log('Error adding documents to tags: ', error);
  }

  const collectionInfo = await client.collections('tags').retrieve();
  console.log(
    `Total documents in 'tags' collection: ${collectionInfo.num_documents}`
  );
};

// Search collection
const searchCollection = async (
  client: any,
  collectionName: string,
  searchParameters: any
) => {
  console.log('In searchCollection()..');

  client
    .collections(collectionName)
    .documents()
    .search(searchParameters)
    .then(function (searchResults: any) {
      console.log(searchResults);
      return searchResults;
    });
};

// Search collection (example for books)
const searchCollectionBooks = async (client: any) => {
  let searchParameters = {
    q: 'harry potter',
    query_by: 'title',
    sort_by: 'ratings_count:desc'
  };

  const res = await searchCollection(client, 'books', searchParameters);
  return res;
};

// Search collection (example for tags)
const searchCollectionTags = async (client: any, tag_query: string) => {
  console.log('In searchCollectionTags()..');
  let searchParameters = {
    q: "'" + tag_query + "'",
    query_by: 'tag',
    sort_by: 'frequency:desc'
  };

  const res = await searchCollection(client, 'tags', searchParameters);
  return res;
};

// Search collection filter by (example for books)
const searchCollectionFilterBy = async (
  client: any,
  collectionName: string,
  searchParameters: any
) => {
  client
    .collections(collectionName)
    .documents()
    .search(searchParameters)
    .then(function (searchResults: any) {
      console.log(searchResults);
      return searchResults;
    });
};

// Search collection filter by (example for books)
const searchCollectionBooksFilterBy = async (client: any) => {
  let searchParameters = {
    q: 'harry potter',
    query_by: 'title',
    filter_by: 'publication_year:<1998',
    sort_by: 'publication_year:desc'
  };

  const res = await searchCollectionFilterBy(client, 'books', searchParameters);
  return res;
};

// Search collection filter by (example for tags)
const searchCollectionTagsFilterBy = async (client: any) => {
  let searchParameters = {
    q: 'black_',
    query_by: 'tag',
    filter_by: 'frequency:>5000000',
    sort_by: 'frequency:desc'
  };

  const res = await searchCollectionFilterBy(client, 'tags', searchParameters);
  return res;
};

const searchFacetBy = async (client: any) => {
  console.log('In searchFacetBy()..');
  let searchParameters = {
    q: 'experyment',
    query_by: 'title',
    facet_by: 'authors',
    sort_by: 'average_rating:desc'
  };

  client
    .collections('books')
    .documents()
    .search(searchParameters)
    .then(function (searchResults: any) {
      console.log(searchResults);
    });
  console.log('Done with searchFacetBy()..');
};

const testExampleSearch = async () => {
  const client = await setupClient();
  console.log('setup client..');
  //await setupSchema(client);
  //await addToCollection(client);
  //await searchCollection(client);
  //await searchCollectionFilterBy(client);
  //await searchFacetBy(client);

  // // TAGS
  //   await deleteCollection(client, 'tags');
  //   await createCollectionTags(client);
  //   console.log('Set up tags collection..');
  //   await addToCollectionTags(client);
  //   console.log('Added to tags collection..');
  await searchCollectionTags(client, 'black_');
  //await searchCollectionBooks(client);
  console.log('Searched tags collection..');
};

testExampleSearch();
