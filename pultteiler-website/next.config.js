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
      { source: '/hochschulen-und-universitaten', destination: '/hochschulen', permanent: true },
      { source: '/hochschulen-und-universitaten/', destination: '/hochschulen', permanent: true },
      { source: '/produkte-fur-die-schweiz', destination: '/produkte', permanent: true },
      { source: '/produkte-fur-die-schweiz/', destination: '/produkte', permanent: true },
      // Englische Testversion: /en hat (noch) keine eigene Startseite
      { source: '/en', destination: '/en/universities', permanent: false },
      // Alte Produktseiten
      { source: '/products/:path*', destination: '/produkte', permanent: true },
    ];
  },
};

module.exports = nextConfig;
