import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: 'https',
        hostname: 'placekitten.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
      },

    ],
  },
  async redirects() {
    return [];
  },
  async rewrites() {
    return [
      {
        // When the browser requests something starting with /api-proxy/
        source: "/api-proxy/:path*",
        // Netlify NextJS server will secretly fetch it from your insecure backend
        destination: "http://100.52.107.135:8000/api/v1/:path*",
      },
    ];
  },
};

export default withNextIntl(nextConfig);
