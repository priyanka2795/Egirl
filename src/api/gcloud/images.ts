import { Storage } from '@google-cloud/storage';
import * as path from 'path';
import * as process from 'process';
import * as crypto from 'crypto';
import * as fs from 'fs';

// Set the path to your service account key file
const keyFilePath = path.join(
  __dirname,
  '../../../../keys/gcp_json/natural-apricot-380602-8e1a89e753bb.json'
);

// Set the environment variable
process.env.GOOGLE_APPLICATION_CREDENTIALS = keyFilePath;

// Creates a new Storage instance
const storage = new Storage();

// Create new bucket on GCS
export async function createBucket(
  bucketName: string,
  location: string
): Promise<string> {
  try {
    // Create a new bucket with the specified name and location
    const [bucket] = await storage.createBucket(bucketName, {
      location: location,
      storageClass: 'STANDARD'
    });

    console.log(`Bucket ${bucketName} created in ${location}`);
    // Return the URL of the newly created bucket
    return `https://storage.googleapis.com/${bucket.name}`;
  } catch (error: any) {
    console.error(`Error creating bucket ${bucketName}: ${error.message}`);
    throw new Error(`Error creating bucket ${bucketName}: ${error.message}`);
  }
}

// Upload image to cloud storage
export async function uploadImageToCloudStorage(
  bucketName: string,
  file: any
): Promise<any> {
  // Define the destination path and file name for the uploaded file
  const destFileName = `${Date.now()}-${path.basename(file.originalname)}`;
  const destFilePath = `${bucketName}/${destFileName}`;

  // Upload the file to the specified bucket
  await storage.bucket(bucketName).upload(file.path, {
    destination: destFilePath,
    metadata: {
      cacheControl: 'public, max-age=31536000',
      contentType: file.mimetype
    }
  });

  // Get the file metadata
  const [metadata] = await storage
    .bucket(bucketName)
    .file(destFilePath)
    .getMetadata();

  // Calculate MD5 hash of the base64 encoding of the image
  const base64Image = fs.readFileSync(file.path, { encoding: 'base64' });
  const md5Hash = crypto.createHash('md5').update(base64Image).digest('hex');

  console.log('this is md5Hash: ', md5Hash);

  // Return the path to the file in the bucket and the MD5 hash
  return {
    url: `https://storage.googleapis.com/${bucketName}/${destFileName}?generation=${metadata.generation}`,
    md5Hash: md5Hash
  };
}

// Get image from cloud storage
export async function getImageFromCloudStorage(
  bucketName: string,
  fileName: string
): Promise<string> {
  try {
    // Get a signed URL for the image file with one hour of validity
    const [url] = await storage
      .bucket(bucketName)
      .file(fileName)
      .getSignedUrl({
        action: 'read',
        expires: Date.now() + 60 * 60 * 1000
      });

    return url;
  } catch (error: any) {
    console.error(`Error getting image from Cloud Storage: ${error.message}`);
    throw new Error(`Error getting image from Cloud Storage: ${error.message}`);
  }
}

// Testing image upload
async function testUploadFile() {
  const testBucketName = 'mindshape-image-test';
  console.log('this is current directory', __dirname);

  const testFilePath = './scenery2.jpg';
  const testFile = {
    originalname: 'scenery2.jpg',
    mimetype: 'image/jpeg',
    path: testFilePath
  };
  const { url, md5Hash } = await uploadImageToCloudStorage(
    testBucketName,
    testFile
  );
  console.log('In testUploadFile(), this is result url: ', url);
  console.log('In testUploadFile(), this is result md5Hash: ', md5Hash);
}

// Testing getting image
async function testGetFile() {
  const testBucketName = 'mindshape-image-test';
  const testFileName = '1680293139549-scenery.jpg';
  const url = await getImageFromCloudStorage(testBucketName, testFileName);
  console.log('In testGetFile(), this is result url: ', url);
}

// Testing creating bucket
async function testCreateBucket() {
  const testBucketName = 'mindshape-image-test';
  const testLocation = 'us-central1';
  const url = await createBucket(testBucketName, testLocation);
  console.log('In testCreateBucket(), this is result url: ', url);
}

// testCreateBucket();
// testUploadFile();
// testGetFile();
