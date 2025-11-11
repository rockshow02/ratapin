/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
  // Optimize production build
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  // Performance optimizations
  swcMinify: true,
}

module.exports = nextConfig