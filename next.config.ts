import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    remotePatterns:[new URL('https://i.pinimg.com/736x/b2/**')],
  },
};

export default nextConfig;
