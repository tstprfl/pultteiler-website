"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { C } from "@/lib/colors";
import { isEnPath, switchTarget } from "@/lib/i18n";

// Dezenter Sprachhinweis unten links: Besucher mit englischer Browsersprache sehen auf deutschen Seiten
// einen Link zur englischen Fassung, Besucher mit deutscher Browsersprache auf englischen Seiten einen Link zur deutschen.
// Andere Sprachen (z.B. Französisch, Italienisch) bekommen keinen Hinweis: dort bietet der Browser selbst die
// Übersetzung in ihre Sprache an, ein zusätzlicher Hinweis auf Englisch würde nur doppeln.
// Keine automatische Weiterleitung (Google rät davon ab). Wegklicken, der Link selbst oder ein Sprachwechsel
// über den DE|EN-Schalter blenden den Hinweis dauerhaft aus.
const KEY = "pt-lang-hint-off";

export default function LanguageHint() {
  const pathname = usePathname();
  const en = isEnPath(pathname);
  const [show, setShow] = useState(false);
  const lastLang = useRef(null);

  const dismiss = () => {
    setShow(false);
    try { localStorage.setItem(KEY, "1"); } catch {}
  };

  useEffect(() => {
    // Sprachwechsel während des Besuchs: Besucher hat seine Sprache gewählt
    if (lastLang.current !== null && lastLang.current !== en) { dismiss(); return; }
    lastLang.current = en;
    let off = false;
    try { off = localStorage.getItem(KEY) === "1"; } catch {}
    const browserLang = (navigator.languages?.[0] || navigator.language || "").toLowerCase();
    setShow(!off && (en ? browserLang.startsWith("de") : browserLang.startsWith("en")));
  }, [en]);

  if (!show) return null;
  const text = en
    ? { msg: "Diese Website gibt es auch auf Deutsch.", link: "Auf Deutsch lesen →", close: "Hinweis schließen", lang: "de" }
    : { msg: "This website is also available in English.", link: "Read in English →", close: "Close notice", lang: "en" };

  return (
    <aside lang={text.lang} aria-label={text.msg} style={{ position: "fixed", left: 16, right: 76, bottom: 24, zIndex: 90, maxWidth: 380, background: C.bgCard, border: `1px solid ${C.border}`, borderLeft: `4px solid ${C.accent}`, boxShadow: "0 4px 20px rgba(0,0,0,0.12)", padding: "14px 44px 14px 18px" }}>
      <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.text, lineHeight: 1.5, margin: "0 0 6px" }}>{text.msg}</p>
      <Link href={switchTarget(pathname)} hrefLang={text.lang} onClick={dismiss} style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 700, color: C.accentText, textDecoration: "none" }}>{text.link}</Link>
      <button onClick={dismiss} aria-label={text.close} style={{ position: "absolute", top: 8, right: 8, width: 32, height: 32, background: "none", border: "none", cursor: "pointer", color: C.textMuted, fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
    </aside>
  );
}
