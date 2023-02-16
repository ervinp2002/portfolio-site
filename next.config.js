/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.licdn.com', 'avatars.githubusercontent.com', 'github.com', 'drive.google.com', 
    'raw.githubusercontent.com', 'w7.pngwing.com', 'upload.wikimedia.org', 'cdn.pixabay.com', 'e7.pngegg.com',
    'cdn-icons-png.flaticon.com']
  }
}

module.exports = nextConfig
