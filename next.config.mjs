const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'icons.duckduckgo.com',
        pathname: '/ip3/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/**',
      },
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/api/auth/callback',
  //       destination: '/dashboard',
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
