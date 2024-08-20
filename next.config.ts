import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'icons.duckduckgo.com',
        pathname: '/ip3/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/api/auth/callback',
        destination: '/dashboard',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
