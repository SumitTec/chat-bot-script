/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  assetPrefix: "./",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
