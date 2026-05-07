const nextConfig = {
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
};

export default nextConfig;
