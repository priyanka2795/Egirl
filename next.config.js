/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'firebasestorage.googleapis.com',
      'www.wikihow.com',
      'pbs.twimg.com',
      'upload.wikimedia.org',
      'i.pinimg.com',
      'localhost'
    ]
  }
};

module.exports = nextConfig;
