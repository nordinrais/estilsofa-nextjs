import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/pages/oferta.html',
        destination: '/oferta',
        permanent: true,
      },
      {
        source: '/oferta.html',
        destination: '/oferta',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
