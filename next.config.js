/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] , typedRoutes: true},
    webpack(config) {
        config.experiments = { ...config.experiments, topLevelAwait: true };
        return config;
    },
    env: {
        API_URL: process.env.API_URL,
    }
  }
  
  module.exports = nextConfig