/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.licdn.com', 'avatars.githubusercontent.com', 'github.com', 'drive.google.com', 'raw.githubusercontent.com']
  }
}

module.exports = nextConfig
