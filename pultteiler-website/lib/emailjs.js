// ═══════════════════════════════════════════════════════════════════════════
// EmailJS-KONFIGURATION
//
// Es werden ZWEI Accounts genutzt:
//   • ALTER Account  → Kontaktformular, Warenkorb-Bestellung, Benachrichtigung
//                      an dich bei Angebotsanfragen. Bleibt unverändert.
//   • NEUER Account  → NUR die Eingangsbestätigung an die anfragende Schule.
// ═══════════════════════════════════════════════════════════════════════════

// ── ALTER Account (unverändert lassen) ──────────────────────────────────────
export const EMAILJS_PUBLIC_KEY = "xV1NC72BHupwuOiKH";
export const EMAILJS_SERVICE = "service_cobcbsg";
export const TEMPLATE_ANFRAGE = "template_7kke6e4";   // Benachrichtigung an Blaschegg

// ── NEUER Account — nur für die Angebots-Eingangsbestätigung ─────────────────
// Hier die drei Werte aus dem NEUEN EmailJS-Account eintragen:
//   CONFIRM_PUBLIC_KEY → Account → General → "Public Key"
//   CONFIRM_SERVICE    → Email Services → Service-ID (z. B. service_xxxxxxx)
//   CONFIRM_TEMPLATE   → Email Templates → Template-ID (To Email = {{kunde_email}})
// Solange einer der Werte leer ist, wird KEINE Bestätigung versendet.
export const CONFIRM_PUBLIC_KEY = "4ArIDu6wgLlsklooH";
export const CONFIRM_SERVICE = "service_b7kmnmd";
export const CONFIRM_TEMPLATE = "template_8cnl2hb";

// ── Google reCAPTCHA v2 (Spam-Schutz für die Bestätigungsmails) ─────────────
// Website-Schlüssel (öffentlich) aus der reCAPTCHA-Verwaltung. Der geheime
// Schlüssel gehört NUR in EmailJS (Template → Settings), nie in den Code.
// Leer = kein reCAPTCHA, die Formulare senden wie bisher.
export const RECAPTCHA_SITE_KEY = "6Lf6y-gtAAAAAERe-MhmXlCa5hS8ks4u4xCrgfh8";

// Hinweis Sicherheit: Public Key, Service- und Template-IDs sind bei EmailJS
// absichtlich öffentlich (sie stehen ohnehin im ausgelieferten JavaScript).
// Der PRIVATE Key darf NIE hier oder sonst im Code stehen.
// Schutz gegen Missbrauch wird im EmailJS-Dashboard eingestellt
// (Account → Security, Template → Settings → reCAPTCHA).

// Lädt das EmailJS-SDK aus dem eigenen Bundle (npm-Paket, kein externes CDN)
// und initialisiert es mit dem ALTEN Account.
// (Für die Bestätigung wird der neue Public Key pro Versand separat mitgegeben.)
export const loadEmailJS = async () => {
  if (typeof window === "undefined") return;
  if (window.emailjs) return;
  const { default: emailjs } = await import("@emailjs/browser");
  // blockHeadless: keine Sendungen aus automatisierten (headless) Browsern
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY, blockHeadless: true });
  window.emailjs = emailjs;
};
