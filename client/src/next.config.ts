import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Proxy /api/* requests to Express backend during development
  // (replaces the Vite server.proxy config)
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_BASE_URL ?? 'http://localhost:5000'}/api/:path*`,
      },
    ]
  },
  // Allow Three.js / R3F to work in client components
  transpilePackages: ['three'],
}

export default nextConfig
