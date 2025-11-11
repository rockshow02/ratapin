/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // penting agar hasil build jadi static HTML
  images: {
    unoptimized: true, // wajib untuk static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.tokopedia.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'deo.shopeemobile.com',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error', 'warn'],
          }
        : false,
  },
  swcMinify: true,
};

module.exports = nextConfig;
