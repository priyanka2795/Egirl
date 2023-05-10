// const Typesense = require('typesense');
// var fs = require('fs/promises');
import Typesense from 'typesense';
import fs from 'fs/promises';

const setupClient = async () => {
  let client = new Typesense.Client({
    nodes: [
      {
        host: 'localhost', // For Typesense Cloud use xxx.a1.typesense.net
        port: 8108, // For Typesense Cloud use 443
        protocol: 'http' // For Typesense Cloud use https
      }
    ],
    apiKey: 'xyz',
    connectionTimeoutSeconds: 2
  });
  console.log('Got typesense client..');
  return client;
};

// Set up schema (example for books)
const setupSchema = async (client: any) => {
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

  client
    .collections()
    .create(booksSchema)
    .then(function (data: any) {
      console.log(data);
    });
  console.log('Done setting up book schema..');
};

// Add items to collection (example for books)
const addToCollection = async (client: any) => {
  // full dataset:
  // curl -O https://dl.typesense.org/datasets/books.jsonl.gz
  // gunzip books.jsonl.gz
  const booksInJsonl = await fs.readFile('./data/books.jsonl');
  client.collections('books').documents().import(booksInJsonl);
  console.log('Done adding to collection..');
};

// Search collection (example for books)
const searchCollection = async (client: any) => {
  console.log('In searchCollection()..');
  let searchParameters = {
    q: 'harry potter',
    query_by: 'title',
    sort_by: 'ratings_count:desc'
  };

  client
    .collections('books')
    .documents()
    .search(searchParameters)
    .then(function (searchResults: any) {
      console.log(searchResults);
    });
  console.log('Done with searchCollection()..');
};

// Search collection filter by (example for books)
const searchCollectionFilterBy = async (client: any) => {
  console.log('In searchCollectionFilterBy()..');
  let searchParameters = {
    q: 'harry potter',
    query_by: 'title',
    filter_by: 'publication_year:<1998',
    sort_by: 'publication_year:desc'
  };

  client
    .collections('books')
    .documents()
    .search(searchParameters)
    .then(function (searchResults: any) {
      console.log(searchResults);
    });
  console.log('Done with searchCollectionFilterBy()..');
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
  await searchFacetBy(client);
};

testExampleSearch();
