"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { C } from "@/lib/colors";
import { NAV } from "@/lib/data";
import { useCart } from "@/components/CartProvider";
import CartSidebar from "@/components/CartSidebar";
import Img from "@/components/Img";
import { CONTACT } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const { count } = useCart();
  const pathname = usePathname();

  useEffect(() => { const fn = () => setScrolled(window.scrollY > 20); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  useEffect(() => { setOpen(false); setDdOpen(false); }, [pathname]);

  const items = NAV;
  // Schwarzer Knopf rechts: der Shop
  const quote = { href: "/produkte", short: "Shop", long: "Zum Shop" };
  const isActive = (href) => href === "/" ? pathname === href : pathname.startsWith(href);
  const groupActive = (n) => n.children?.some((c) => isActive(c.href));

  const linkStyle = (active) => ({ background: active ? C.surface : "none", border: "none", padding: "8px 12px", borderRadius: 6, fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 15, fontWeight: 600, letterSpacing: "0.02em", color: active ? C.text : C.textMuted, transition: "all 0.2s", textDecoration: "none", whiteSpace: "nowrap", cursor: "pointer" });

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? C.bgCard : "transparent", borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent", transition: "all 0.3s" }}>
        <div className="nav-row" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" className="nav-logo" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", flexShrink: 0 }}>
            <Img sizes="56px" src="/images/Klammer_2.png" alt="Pultteiler Klammer" style={{ width: 56, height: 56, objectFit: "contain", borderRadius: 4 }}/>
            <span className="nav-word" style={{ fontFamily: "'Archivo Variable', sans-serif", fontWeight: 600, fontSize: 26, color: C.text, letterSpacing: "0.05em" }}>Pultteiler</span>
          </Link>
          {/* Menüpunkte links bündig nach dem Logo, damit „Start“ und „Home“ beim Sprachwechsel an derselben Stelle beginnen;
              Shop-Knopf und Warenkorb bleiben rechts. Der Abstand zum Logo hängt nur von der Fensterbreite ab
              (schmal bis 4 px, damit die längere deutsche Leiste ab 1121 px noch passt) */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 4, flex: 1, minWidth: 0 }}>
            <div className="desk-nav" style={{ display: "flex", gap: 2, alignItems: "center", flex: 1, marginLeft: "clamp(4px, calc(100vw - 1150px), 40px)" }}>
              {items.map(n => n.children ? (
                <div key={n.id} style={{ position: "relative" }} onMouseEnter={() => setDdOpen(true)} onMouseLeave={() => setDdOpen(false)}>
                  <button onClick={() => setDdOpen(v => !v)} aria-expanded={ddOpen} aria-haspopup="true" style={linkStyle(groupActive(n))}>
                    {n.label} <span aria-hidden="true" style={{ fontSize: 8, verticalAlign: 1 }}>▼</span>
                  </button>
                  {ddOpen && (
                    <div style={{ position: "absolute", top: "100%", left: 0, minWidth: 280, background: C.bgCard, border: `1px solid ${C.border}`, boxShadow: "0 8px 24px rgba(0,0,0,0.10)", paddingTop: 4, paddingBottom: 4 }}>
                      {n.children.map(c => (
                        <Link key={c.id} href={c.href} style={{ display: "block", padding: "12px 18px", fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 15, fontWeight: 600, letterSpacing: "0.02em", color: isActive(c.href) ? C.text : C.textMuted, background: isActive(c.href) ? C.surface : "none", textDecoration: "none" }}>{c.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={n.id} href={n.href} style={linkStyle(isActive(n.href))}>{n.label}</Link>
              ))}
              <span aria-hidden="true" style={{ flex: 1, minWidth: 6 }}/>
              {/* Telefonnummer gut sichtbar vor dem Shop-Knopf (nur auf breiten Bildschirmen, siehe globals.css) */}
              <a href={CONTACT.tel1} className="nav-phone" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: C.text, textDecoration: "none", fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 15, fontWeight: 700, whiteSpace: "nowrap", marginLeft: 8, padding: "8px 4px" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>{CONTACT.phone1}</a>
              <Link href={quote.href} className="nav-shop" style={{ background: C.accentText, color: C.white, padding: "12px 22px", fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none", whiteSpace: "nowrap" }}>{quote.short}</Link>
            </div>
            {/* Handy: kompakter Shop-Knopf direkt in der Kopfzeile (Desktop-Knopf steckt in .desk-nav) */}
            {/* Handy: Hörer-Symbol ruft direkt an */}
            <a href={CONTACT.tel1} className="mob-phone" aria-label={`Anrufen: ${CONTACT.phone1}`} style={{ display: "none", alignItems: "center", justifyContent: "center", width: 40, height: 40, color: C.text, textDecoration: "none" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg></a>
            <Link href={quote.href} className="mob-shop" style={{ display: "none", background: C.accentText, color: C.white, padding: "0 14px", height: 36, alignItems: "center", fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none", whiteSpace: "nowrap", marginLeft: 4 }}>{quote.short}</Link>
            <button onClick={() => setCartOpen(true)} className="nav-cart" aria-label="Warenkorb öffnen" style={{ background: "none", border: "none", cursor: "pointer", padding: "8px 12px", position: "relative" }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={C.accentText} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
              {count > 0 && <span style={{ position: "absolute", top: 1, right: 3, background: C.dark, color: C.white, width: 18, height: 18, borderRadius: "50%", fontSize: 10, fontWeight: 700, fontFamily: "'Source Sans 3 Variable', sans-serif", display: "flex", alignItems: "center", justifyContent: "center" }}>{count}</span>}
            </button>
            <button onClick={() => setOpen(!open)} className="mob-btn" aria-label="Menü" aria-expanded={open} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" stroke={C.text} strokeWidth="2" fill="none">{open ? <><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></> : <><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></>}</svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="mob-menu" style={{ background: C.bg, borderBottom: `1px solid ${C.border}`, padding: "8px 32px 20px", maxHeight: "calc(100vh - 72px)", overflow: "auto" }}>
            {/* Shop zuerst: schwarzer Knopf über der Liste */}
            <Link href={quote.href} className="nav-shop" style={{ display: "block", textAlign: "center", background: C.accentText, color: C.white, padding: "16px", fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none", marginBottom: 12 }}>{quote.long}</Link>
            <a href={CONTACT.tel1} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, border: `1.5px solid ${C.dark}`, borderRadius: 6, color: C.text, padding: "14px 16px", fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 16, fontWeight: 700, textDecoration: "none", marginBottom: 12 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>Anrufen: {CONTACT.phone1}</a>
            {items.map(n => n.children ? (
              <div key={n.id}>
                <div style={{ padding: "14px 16px 6px", fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: C.textMuted }}>{n.label}</div>
                {n.children.map(c => (
                  <Link key={c.id} href={c.href} style={{ display: "block", width: "100%", textAlign: "left", background: isActive(c.href) ? C.surface : "none", padding: "12px 28px", fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 16, fontWeight: 600, letterSpacing: "0.02em", color: isActive(c.href) ? C.text : C.textMuted, textDecoration: "none" }}>{c.label}</Link>
                ))}
              </div>
            ) : (
              <Link key={n.id} href={n.href} style={{ display: "block", width: "100%", textAlign: "left", background: isActive(n.href) ? C.surface : "none", padding: "14px 16px", fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 16, fontWeight: 600, letterSpacing: "0.02em", color: isActive(n.href) ? C.text : C.textMuted, textDecoration: "none" }}>{n.label}</Link>
            ))}
          </div>
        )}
      </nav>
      {cartOpen && <CartSidebar onClose={() => setCartOpen(false)}/>}
    </>
  );
}
