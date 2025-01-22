/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  experimental: {
    turbo: {},
  },
};
