import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        // pathname: "/v0/b/fdo-gnpu.appspot.com/o/",
      },
      new URL(
        "https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/**",
      ),
    ],
  },
};

export default nextConfig;
