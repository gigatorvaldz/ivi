/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@use "./styles/abstracts/_index.scss" as *;`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'source.com',
        port: '',
      },
    ],
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
  },
};

module.exports = nextConfig;
