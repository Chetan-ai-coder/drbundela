const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    loader: "custom",
    loaderFile: "./lib/imagekitLoader.ts",

    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },

  allowedDevOrigins: ["10.122.26.68", "localhost:3000"],

  experimental: {},
};

export default nextConfig;