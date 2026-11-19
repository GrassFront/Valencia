/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    turbopackPluginRuntimeStrategy: "workerThreads",
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/weddings-and-events",
        destination: "/events",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
