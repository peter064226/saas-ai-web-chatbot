import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // if reactCompiler set to true , reset() will act abnomal
  // reactCompiler: false,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ucarecdn.com",
      },
      {
        protocol: "https",
        hostname: "*.ucarecd.net",
      },
    ],
  },
};

export default nextConfig;
