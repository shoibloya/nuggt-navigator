// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable TypeScript type checking during builds
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
