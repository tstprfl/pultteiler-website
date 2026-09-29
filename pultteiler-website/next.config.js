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
      { source: '/produkte-1', destination: '/produkte', permanent: true },
      { source: '/produkte-1/', destination: '/produkte', permanent: true },
      // Alte Produktseiten
      { source: '/products/:path*', destination: '/produkte', permanent: true },
      // Weitere alte Webnode-URLs (Stand Search-Console-Bericht 2026-09-29)
      { source: '/uber-uns', destination: '/ueber-uns', permanent: true },
      { source: '/uber-uns/', destination: '/ueber-uns', permanent: true },
      { source: '/ersatzteile', destination: '/produkte', permanent: true },
      { source: '/ersatzteile/', destination: '/produkte', permanent: true },
      { source: '/es-cart', destination: '/produkte', permanent: true },
      { source: '/es-cart/', destination: '/produkte', permanent: true },
      { source: '/rss', destination: '/', permanent: true },
      { source: '/rss/', destination: '/', permanent: true },
      { source: '/archive/:path*', destination: '/', permanent: true },
      { source: '/album/:path*', destination: '/galerie', permanent: true },
      { source: '/galerie/photogallerycbm_954477/:path*', destination: '/galerie', permanent: true },
      // Alte News-Beitraege: erst die spezifischen Ziele, dann alles Uebrige auf die Startseite
      { source: '/news/versandkosten', destination: '/versand', permanent: true },
      { source: '/news/versandkosten/', destination: '/versand', permanent: true },
      { source: '/news/steuerfrei-mit-der-uid-nummer-de', destination: '/versand', permanent: true },
      { source: '/news/steuerfrei-mit-der-uid-nummer-de/', destination: '/versand', permanent: true },
      { source: '/news/agb1', destination: '/agb', permanent: true },
      { source: '/news/agb1/', destination: '/agb', permanent: true },
      { source: '/news/ersatzteile', destination: '/produkte', permanent: true },
      { source: '/news/ersatzteile/', destination: '/produkte', permanent: true },
      { source: '/news/pultteiler-set', destination: '/produkte', permanent: true },
      { source: '/news/pultteiler-set/', destination: '/produkte', permanent: true },
      { source: '/news/transparente-hygieneteiler', destination: '/produkte', permanent: true },
      { source: '/news/transparente-hygieneteiler/', destination: '/produkte', permanent: true },
      { source: '/news/zu-jeder-bestellung-erhalten-sie-eine-klammer-gratis', destination: '/produkte', permanent: true },
      { source: '/news/zu-jeder-bestellung-erhalten-sie-eine-klammer-gratis/', destination: '/produkte', permanent: true },
      { source: '/news/:path*', destination: '/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
