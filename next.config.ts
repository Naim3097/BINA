import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Clean URL: /lp-renovation serves the static HTML without showing .html in the address bar
      { source: "/lp-renovation", destination: "/lp-renovation.html" },
    ];
  },
  async redirects() {
    return [
      // Anyone hitting the old .html URL gets permanently bumped to the clean one
      { source: "/lp-renovation.html", destination: "/lp-renovation", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
    ],
  },
};

export default withPayload(nextConfig);
