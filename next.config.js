/** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    images: {
      loaderFile: "./lib/image-loader.ts",
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    transpilePackages: ['vis-timeline'],
    turbopack: {},
  }

  module.exports = nextConfig
