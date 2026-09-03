import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Plain <img> + pre-optimised WebP assets, so the site can also be exported statically.
  images: { unoptimized: true },
};

export default nextConfig;
