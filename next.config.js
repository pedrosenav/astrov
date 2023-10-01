/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdna.artstation.com',
      },
      {
        protocol: 'https',
        hostname: 'cdnb.artstation.com',
      },
      {
        protocol: 'https',
        hostname: 'instagram.fsdu2-2.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'instagram.fsdu2-1.fna.fbcdn.net',
      },
    ],
  },
}

module.exports = nextConfig
