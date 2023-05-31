/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js')

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
  i18n
};

module.exports = nextConfig;
