const removeImports = require('next-remove-imports')();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'id',
  },
  images: {
    domains: [
      'firebasestorage.googleapis.com', 
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      'dwiwijaya.com'
    ],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA(removeImports(nextConfig));
