/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "development" ? false : true,
  },
  basePath: `/abgame`,
  trailingSlash: true,
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return "20221111";
  },
};

module.exports = nextConfig;
