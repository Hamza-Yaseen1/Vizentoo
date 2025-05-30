import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {}, // Turbopack options (no 'enabled' property)
  },
};

export default nextConfig;
