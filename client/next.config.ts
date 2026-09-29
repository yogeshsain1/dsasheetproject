import type { NextConfig } from 'next'
import path from 'path'

const isExport = process.env.OUTPUT_EXPORT === 'true'

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  ...(isExport
    ? {
        output: 'export',
        images: { unoptimized: true },
      }
    : {
        async rewrites() {
          return [
            {
              source: '/api/:path*',
              destination: `${process.env.API_BASE_URL ?? 'http://localhost:5000'}/api/:path*`,
            },
          ]
        },
      }),
  // Allow Three.js / R3F to work in client components
  transpilePackages: ['three'],
}

export default nextConfig
