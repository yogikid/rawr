const removeImports = require('next-remove-imports')();
/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: 'anonymous',
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'id',
  },
  experimental: {
    optimizePackageImports: [
      'react-icons',
      'framer-motion',
      'react-slick',
      '@supabase/supabase-js'
    ]
  },
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      'dwiwijaya.com'
    ],
  },
  webpack(config, { isServer, dev }) {
    // Customizing splitChunks configuration for client-side bundle
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        styles: {
          name: 'styles',
          test: (module) =>
            module.type === 'css/mini-extract' || /\.css$/.test(module.nameForCondition?.() || ''),
          chunks: 'all',
          enforce: true,
        },
      }
    }
    return config;
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

module.exports = withBundleAnalyzer(withPWA(removeImports(nextConfig)));
