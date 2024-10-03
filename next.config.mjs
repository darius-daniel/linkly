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
      {
        protocol: 'https',
        hostname: 'gravatar.com',
        port: '',
        pathname: '/avatar/**',
      },
      {
        protocol: 'https',
        hostname: 'favicon.yandex.com',
        port: '',
        pathname: '/favicon',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com.',
        port: '',
        pathname: '/s2/favicons',
      },
    ],
  },
};

export default nextConfig;
