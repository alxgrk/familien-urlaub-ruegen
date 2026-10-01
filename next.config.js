/** @type {import('next').NextConfig} */
  const nextConfig = {
    output: 'export',
    distDir: 'build',
    reactStrictMode: true,
    images: {
      loader: 'custom',
      loaderFile: "./lib/image-loader.ts",
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    transpilePackages: ['vis-timeline'],
    turbopack: {},
  }

  module.exports = nextConfig
