/** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    transpilePackages: ['vis-timeline'],
    webpack: (config) => {
      config.module.rules.push({
        test: /\.node/,
        use: "raw-loader",
      });
      return config;
    },
  }

  module.exports = nextConfig
