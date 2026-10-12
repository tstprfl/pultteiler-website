// Content Security Policy: Skripte, Schriften, Bilder nur von der eigenen Domain,
// Verbindungen nach außen nur zu EmailJS (Formulare). 'unsafe-inline' braucht
// Next.js für seine Inline-Skripte bei statischen Seiten, 'unsafe-eval' nur im Dev-Modus.
const isDev = process.env.NODE_ENV !== "production";
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self' https://api.emailjs.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Seite darf nicht in fremde Seiten eingebettet werden (Clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Kein "X-Powered-By: Next.js" mitsenden
  poweredByHeader: false,
  // Nur die Standardqualität zulassen; sonst kann jeder q=1..100 anfordern und
  // damit das Kontingent an Bild-Transformationen bei Vercel aufbrauchen
  images: { qualities: [75] },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
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
      { source: '/home', destination: '/', permanent: true },
      { source: '/home/', destination: '/', permanent: true },
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
