import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disables ESLint during production builds.
    // This will allow builds to complete even if there are lint errors.
    ignoreDuringBuilds: true,
  },
  // Add other config options here as needed.
};

export default nextConfig;
