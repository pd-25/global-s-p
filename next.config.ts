import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d7nsuxa5eflsu.cloudfront.net",
      },
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
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co'
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com'
      },
      {
        protocol: 'https',
        hostname: 'api.globalsourceexpoltd.com'
      }

    ],
  },
};

export default withNextIntl(nextConfig);
