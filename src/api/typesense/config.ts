import dotenv from 'dotenv';

dotenv.config();

const TYPESENSE_API_KEY = process.env.TYPESENSE_API_KEY;
const TYPESENSE_URL = process.env.TYPESENSE_URL;
const TYPESENSE_INDEX_NAME = process.env.TYPESENSE_INDEX_NAME;

export { TYPESENSE_API_KEY, TYPESENSE_URL, TYPESENSE_INDEX_NAME };
