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
export const CONFIRM_TEMPLATE = "";  // TODO: Template-ID aus neuem Account (template_xxxxxxx)

// Lädt das EmailJS-SDK und initialisiert es mit dem ALTEN Account.
// (Für die Bestätigung wird der neue Public Key pro Versand separat mitgegeben.)
export const loadEmailJS = () => {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.emailjs) return Promise.resolve();
  return new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    s.onload = () => { window.emailjs.init(EMAILJS_PUBLIC_KEY); resolve(); };
    document.head.appendChild(s);
  });
};
