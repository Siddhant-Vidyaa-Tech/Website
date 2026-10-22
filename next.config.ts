import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Images — allow external hostnames as needed
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Ensure trailing slashes are consistent
  trailingSlash: false,
  // Compress output
  compress: true,
  // Power-user headers for security and performance
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options",        value: "nosniff" },
          { key: "X-Frame-Options",               value: "DENY" },
          { key: "Referrer-Policy",               value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",            value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
