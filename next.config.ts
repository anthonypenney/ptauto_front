import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    qualities: [60, 70, 75, 85],
    localPatterns: [
      {
        pathname: "/assets/**"
      }
    ]
  }
};

export default nextConfig;
