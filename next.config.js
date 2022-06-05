/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SPACE_ID: process.env.SPACE_ID,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  },
};

module.exports = nextConfig;
