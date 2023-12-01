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
      'localhost',
      "help.twitter.com",
      "media.istockphoto.com",
      "www.shutterstock.com"
    ]
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    })
    return config
  }
};

module.exports = nextConfig;
