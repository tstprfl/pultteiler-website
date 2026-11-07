// ═══════════════════════════════════════════════════════════════════════════
// EmailJS-KONFIGURATION
//
// Es werden ZWEI Accounts genutzt:
//   • ALTER Account  → Kontaktformular, Warenkorb-Bestellung, Benachrichtigung
//                      an dich bei Angebotsanfragen. Bleibt unverändert.
//   • NEUER Account  → NUR die Eingangsbestätigung an den Kunden nach einem Online-Widerruf.
// ═══════════════════════════════════════════════════════════════════════════

// ── ALTER Account (unverändert lassen) ──────────────────────────────────────
export const EMAILJS_PUBLIC_KEY = "xV1NC72BHupwuOiKH";
export const EMAILJS_SERVICE = "service_cobcbsg";
export const TEMPLATE_ANFRAGE = "template_7kke6e4";   // Benachrichtigung an Blaschegg

// ── NEUER Account (Paul Steiner) — Widerrufs-Eingangsbestätigung ─────────────
// Der alte Account hat im Gratis-Tarif keinen Platz für weitere Vorlagen.
// template_8cnl2hb (frühere Angebots-Bestätigung) wird nicht mehr verwendet.
export const CONFIRM_PUBLIC_KEY = "4ArIDu6wgLlsklooH";
export const CONFIRM_SERVICE = "service_b7kmnmd";

// Lädt das EmailJS-SDK aus dem eigenen Bundle (npm-Paket, kein externes CDN)
// und initialisiert es mit dem ALTEN Account.
// (Für die Bestätigung wird der neue Public Key pro Versand separat mitgegeben.)
export const loadEmailJS = async () => {
  if (typeof window === "undefined") return;
  if (window.emailjs) return;
  const { default: emailjs } = await import("@emailjs/browser");
  emailjs.init(EMAILJS_PUBLIC_KEY);
  window.emailjs = emailjs;
};

// ── Online-Widerruf (§ 13a FAGG) ─────────────────────────────────────────────
// Eingangsbestätigung an den Kunden (§ 13a Abs 5 FAGG): Vorlage „Widerruf Eingangsbestätigung“ im NEUEN Account,
// "To Email" = {{kunde_email}}. Platzhalter: {{name}}, {{vertrag}}, {{kunde_email}}, {{eingang}}, {{inhalt}}.
// Die Meldung an Blaschegg geht über den alten Account (TEMPLATE_ANFRAGE).
export const TEMPLATE_WIDERRUF_KUNDE = "template_sgfwgr6";
