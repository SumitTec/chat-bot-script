/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "./",
  images: {
    unoptimized: true,
  },
  exportTrailingSlash: true,
};

export default nextConfig;
