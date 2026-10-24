"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { C } from "@/lib/colors";
import { GA_ID } from "@/lib/site";
import { isEnPath } from "@/lib/i18n";

// Einwilligung für Google Analytics (GA4) nach § 165 Abs. 3 TKG 2021 und Art. 6 Abs. 1 lit. a DSGVO:
// - Vor der Entscheidung wird kein Google-Skript geladen und kein Cookie gesetzt (Consent Mode "basic").
// - Ablehnen und Akzeptieren stehen gleichwertig nebeneinander, keine Vorauswahl.
// - Die Entscheidung liegt im localStorage (pt-consent) und kann jederzeit über „Cookie-Einstellungen“
//   in der Fußzeile geändert werden; bei Widerruf werden die GA-Cookies gelöscht und GA abgeschaltet.
// - Seitenaufrufe bei Navigation innerhalb der App werden als page_view an GA gemeldet.
const KEY = "pt-consent";
export const OPEN_EVENT = "pt-open-consent";

const T = {
  de: {
    title: "Cookies für die Reichweitenmessung",
    text: "Wir möchten mit Google Analytics messen, wie unsere Website genutzt wird, um sie zu verbessern. Dafür werden erst nach Ihrer Zustimmung Cookies gesetzt und Nutzungsdaten an Google übermittelt. Ohne Zustimmung bleibt die Website voll nutzbar.",
    more: "Details in der Datenschutzerklärung", moreHref: "/datenschutz",
    accept: "Akzeptieren", decline: "Ablehnen",
    current: (g) => `Aktuelle Einstellung: Google Analytics ${g ? "erlaubt" : "abgelehnt"}.`,
    aria: "Cookie-Einstellungen",
  },
  en: {
    title: "Cookies for audience measurement",
    text: "We would like to use Google Analytics to measure how our website is used and to improve it. Cookies are set and usage data is sent to Google only after you agree. Without your consent, the website remains fully usable.",
    more: "Details in the privacy policy", moreHref: "/en/privacy",
    accept: "Accept", decline: "Decline",
    current: (g) => `Current setting: Google Analytics ${g ? "allowed" : "declined"}.`,
    aria: "Cookie settings",
  },
};

export function readConsent() {
  try { const v = localStorage.getItem(KEY); return v === "granted" ? true : v === "denied" ? false : null; } catch { return null; }
}

function loadAnalytics() {
  if (!GA_ID || typeof window === "undefined") return;
  window[`ga-disable-${GA_ID}`] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  if (!document.getElementById("ga-script")) {
    window.gtag("consent", "default", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied" });
    const s = document.createElement("script");
    s.id = "ga-script"; s.async = true; s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { send_page_view: false });
  }
  window.gtag("consent", "update", { analytics_storage: "granted" });
  window.gtag("event", "page_view", { page_path: window.location.pathname + window.location.search, page_title: document.title });
}

function disableAnalytics() {
  if (!GA_ID || typeof window === "undefined") return;
  window[`ga-disable-${GA_ID}`] = true;
  if (window.gtag) window.gtag("consent", "update", { analytics_storage: "denied" });
  // GA-Cookies entfernen (auf Host und Hauptdomain)
  const host = window.location.hostname;
  const domains = [host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  document.cookie.split(";").map((c) => c.trim().split("=")[0]).filter((n) => n === "_ga" || n.startsWith("_ga_") || n === "_gid").forEach((n) => {
    domains.forEach((d) => { document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}`; });
    document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  });
}

export default function CookieConsent() {
  const pathname = usePathname();
  const en = isEnPath(pathname);
  const t = T[en ? "en" : "de"];
  const [consent, setConsent] = useState(null);   // null = noch nicht entschieden
  const [open, setOpen] = useState(false);
  const ready = useRef(false);
  const lastPath = useRef(null);

  // Beim ersten Laden: gespeicherte Entscheidung lesen, sonst Banner zeigen
  useEffect(() => {
    const c = readConsent();
    setConsent(c);
    setOpen(c === null);
    if (c === true) loadAnalytics();
    ready.current = true;
    lastPath.current = pathname;
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  // Seitenwechsel innerhalb der App als Seitenaufruf melden (nur bei Zustimmung)
  useEffect(() => {
    if (!ready.current || lastPath.current === pathname) return;
    lastPath.current = pathname;
    if (consent === true && window.gtag) window.gtag("event", "page_view", { page_path: pathname, page_title: document.title });
  }, [pathname, consent]);

  const decide = (granted) => {
    try { localStorage.setItem(KEY, granted ? "granted" : "denied"); } catch {}
    setConsent(granted);
    setOpen(false);
    if (granted) loadAnalytics(); else disableAnalytics();
  };

  if (!open) return null;
  const btn = { flex: "1 1 140px", padding: "13px 18px", fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", cursor: "pointer", border: `1.5px solid ${C.dark}`, background: C.bgCard, color: C.text };
  return (
    <aside role="dialog" aria-modal="false" aria-label={t.aria} style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 150, background: C.bgCard, borderTop: `1px solid ${C.border}`, boxShadow: "0 -8px 32px rgba(0,0,0,0.12)", padding: "20px max(16px, env(safe-area-inset-left, 0px)) max(16px, env(safe-area-inset-bottom, 0px)) max(16px, env(safe-area-inset-right, 0px))" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "14px 32px", alignItems: "center" }}>
        <div style={{ flex: "1 1 420px", minWidth: 0 }}>
          <div style={{ fontFamily: "'Archivo Variable', sans-serif", fontWeight: 600, fontSize: 20, color: C.text, marginBottom: 6 }}>{t.title}</div>
          <p style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.6, margin: 0 }}>
            {t.text} <Link href={t.moreHref} style={{ color: C.accentText }}>{t.more}</Link>
            {consent !== null && <><br/><span style={{ color: C.text }}>{t.current(consent)}</span></>}
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, flex: "1 1 300px", maxWidth: 360 }}>
          <button onClick={() => decide(false)} style={btn}>{t.decline}</button>
          <button onClick={() => decide(true)} style={btn}>{t.accept}</button>
        </div>
      </div>
    </aside>
  );
}

// Fußzeilen-Link: öffnet das Banner erneut, damit die Einwilligung so leicht widerrufen wie erteilt werden kann
export function CookieSettingsLink({ children, style }) {
  return <button onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", ...style }}>{children}</button>;
}
