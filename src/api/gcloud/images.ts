import { Storage } from '@google-cloud/storage';
import * as path from 'path';

// Creates a new Storage instance
const storage = new Storage();

// Upload image to cloud storage
async function uploadImageToCloudStorage(
  bucketName: string,
  file: any
): Promise<string> {
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

  // Return the path to the file in the bucket
  return `https://storage.googleapis.com/${bucketName}/${destFileName}?generation=${metadata.generation}`;
}

// Get image from cloud storage
async function getImageFromCloudStorage(
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
