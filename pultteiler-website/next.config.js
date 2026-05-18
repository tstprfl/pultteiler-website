/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Alte Webnode-URLs auf neue Seiten umleiten
      { source: '/neuigkeiten', destination: '/', permanent: true },
      { source: '/neuigkeiten/', destination: '/', permanent: true },
      { source: '/warenkorb', destination: '/produkte', permanent: true },
      { source: '/warenkorb/', destination: '/produkte', permanent: true },
      { source: '/sitemap', destination: '/', permanent: true },
      { source: '/sitemap/', destination: '/', permanent: true },
      { source: '/es-order-finished', destination: '/produkte', permanent: true },
      { source: '/es-order-finished/', destination: '/produkte', permanent: true },
      { source: '/hochschulen-und-universitaten', destination: '/kontakt', permanent: true },
      { source: '/hochschulen-und-universitaten/', destination: '/kontakt', permanent: true },
      { source: '/produkte-fur-die-schweiz', destination: '/produkte', permanent: true },
      { source: '/produkte-fur-die-schweiz/', destination: '/produkte', permanent: true },
      // Alte Produktseiten
      { source: '/products/:path*', destination: '/produkte', permanent: true },
    ];
  },
};

module.exports = nextConfig;
