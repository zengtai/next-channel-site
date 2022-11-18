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
  // basePath: `/jojogames`, // demo
  trailingSlash: true,
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return "20221118";
  },
};

module.exports = nextConfig;
