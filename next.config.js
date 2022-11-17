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
  // basePath: `/abgame`,
  // basePath: `/webs_test/20221116/abgame`, // test
  basePath: `/webs/abgame`, // test2
  trailingSlash: true,
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return "20221116";
  },
};

module.exports = nextConfig;
