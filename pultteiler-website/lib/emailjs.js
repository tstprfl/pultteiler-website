export const loadEmailJS = () => {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.emailjs) return Promise.resolve();
  return new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    s.onload = () => { window.emailjs.init("xV1NC72BHupwuOiKH"); resolve(); };
    document.head.appendChild(s);
  });
};

// ── Zentrale EmailJS-Konfiguration ─────────────────────────────────────────
export const EMAILJS_SERVICE = "service_cobcbsg";

// Benachrichtigung an Schulmittel Blaschegg (bestehende Vorlage):
export const TEMPLATE_ANFRAGE = "template_7kke6e4";

// Automatische Eingangsbestätigung an die anfragende Schule.
//
// ⚠️  So aktivierst du sie:
//   1. In EmailJS eine NEUE Vorlage anlegen (Dashboard → Email Templates → Create).
//   2. Feld "To Email" auf {{kunde_email}} setzen (damit die Mail an die Schule geht).
//   3. Betreff & Text nach Wunsch — Vorschlag steht in der Chat-Anleitung.
//      Verfügbare Variablen: {{kunde_email}}, {{bestellung}}, {{anmerkungen}}.
//   4. Die Template-ID der neuen Vorlage hier eintragen (z. B. "template_xxxxxxx").
//
// Solange der Wert "" ist, wird bewusst KEINE Bestätigung versendet — so geht
// keine irreführende "Bestellbestätigung" an Schulen, die nur ein Angebot wollten.
export const TEMPLATE_ANGEBOT_CONFIRM = "";
