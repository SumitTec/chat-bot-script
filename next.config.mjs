/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  distDir: "build",
  assetPrefix: "./",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
