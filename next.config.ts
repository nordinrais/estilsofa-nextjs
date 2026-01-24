import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // Oferta page
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
      // Blog page
      {
        source: '/pages/blog.html',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog.html',
        destination: '/blog',
        permanent: true,
      },
      // Nuestros sofás page
      {
        source: '/pages/nuestros-sofas.html',
        destination: '/nuestros-sofas',
        permanent: true,
      },
      {
        source: '/nuestros-sofas.html',
        destination: '/nuestros-sofas',
        permanent: true,
      },
      // Sobre nosotros page
      {
        source: '/pages/sobre-nosotros.html',
        destination: '/sobre-nosotros',
        permanent: true,
      },
      {
        source: '/sobre-nosotros.html',
        destination: '/sobre-nosotros',
        permanent: true,
      },
      // Visítanos page
      {
        source: '/pages/visitanos.html',
        destination: '/visitanos',
        permanent: true,
      },
      {
        source: '/visitanos.html',
        destination: '/visitanos',
        permanent: true,
      },
      // Index redirects
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pages/index.html',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
