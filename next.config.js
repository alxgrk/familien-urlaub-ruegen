/** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    transpilePackages: ['vis-timeline'],
  }

  module.exports = nextConfig
