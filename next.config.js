/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'firebasestorage.googleapis.com',
      'www.wikihow.com',
      'pbs.twimg.com',
      'upload.wikimedia.org',
      'i.pinimg.com'
    ]
  }
};

module.exports = nextConfig;
