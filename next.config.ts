import path from 'path'

import type { NextConfig } from 'next'

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname),
      '@components': path.resolve(__dirname, 'components'),
      '@lib': path.resolve(__dirname, 'lib'),
      '@styles': path.resolve(__dirname, 'styles'),
      '@types': path.resolve(__dirname, 'types'),
      '@data': path.resolve(__dirname, 'data'),
      '@theme': path.resolve(__dirname, 'styles/theme'),
    }
    return config
  },
} satisfies NextConfig

export default nextConfig
