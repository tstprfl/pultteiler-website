"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { C } from "@/lib/colors";
import { NAV } from "@/lib/data";
import { useCart } from "@/components/CartProvider";
import CartSidebar from "@/components/CartSidebar";
import Img from "@/components/Img";
import { CONTACT } from "@/lib/site";

const FONT = "'Source Sans 3 Variable', sans-serif";

// Symbole (Lucide, ISC-Lizenz): Einkaufskorb und Telefon
const BasketIcon = ({ size = 26, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/>
  </svg>
);
const PhoneIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const Chevron = ({ open }) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none" }}><path d="m6 9 6 6 6-6"/></svg>
);

export default function Nav() {
  const [open, setOpen] = useState(false);           // Handy-Menü
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [dd, setDd] = useState(null);                // geöffnetes Aufklappmenü (id) am Desktop
  const closeTimer = useRef(null);
  const { count } = useCart();
  const pathname = usePathname();

  // Nach dem Neuladen stellt der Browser die Scrollposition teils ohne Scroll-Ereignis wieder her; die Kopfzeile ist daher nie durchsichtig (oben Seitenfarbe, beim Scrollen weiß)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    const t = setTimeout(fn, 100);
    window.addEventListener("scroll", fn, { passive: true });
    window.addEventListener("pageshow", fn);
    window.addEventListener("load", fn);
    return () => { clearTimeout(t); window.removeEventListener("scroll", fn); window.removeEventListener("pageshow", fn); window.removeEventListener("load", fn); };
  }, []);
  useEffect(() => { setOpen(false); setDd(null); }, [pathname]);
  useEffect(() => {
    const esc = (e) => { if (e.key === "Escape") setDd(null); };
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, []);

  // Aufklappen beim Drüberfahren, mit kurzer Verzögerung beim Verlassen (kein Flackern auf dem Weg ins Feld)
  const enter = (id) => { clearTimeout(closeTimer.current); setDd(id); };
  const leave = () => { clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setDd(null), 150); };

  const shop = { href: "/produkte", short: "Shop", long: "Zum Shop" };
  const isActive = (href) => href === "/" ? pathname === href : pathname.startsWith(href);
  const groupActive = (n) => n.children?.some((c) => isActive(c.href)) || (n.href && isActive(n.href));

  // Menüpunkte: dunkle Schrift (gut lesbar), aktive Seite durch Unterstrich in Tafelgrün
  const linkStyle = (active) => ({ display: "inline-flex", alignItems: "center", gap: 6, height: 40, padding: "0 14px", background: "none", border: "none", borderRadius: 6, cursor: "pointer", fontFamily: FONT, fontSize: 16, fontWeight: 600, color: C.text, textDecoration: active ? "underline" : "none", textDecorationColor: C.tafel, textDecorationThickness: 2, textUnderlineOffset: 8, whiteSpace: "nowrap" });
  const panel = { position: "absolute", top: "100%", left: 0, paddingTop: 8, zIndex: 120 };
  const panelBox = { minWidth: 260, background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 8, boxShadow: "0 12px 32px rgba(26,42,42,0.12)", padding: 8 };
  const panelLink = (active) => ({ display: "block", padding: "11px 14px", borderRadius: 6, fontFamily: FONT, fontSize: 16, fontWeight: 600, color: C.text, background: active ? C.surface : "none", textDecoration: "none", whiteSpace: "nowrap" });

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? C.bgCard : C.bg, borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent", transition: "all 0.3s" }}>
        <div className="nav-row" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", height: 72, display: "flex", alignItems: "center", gap: 24 }}>
          <Link href="/" className="nav-logo" aria-label="Pultteiler, zur Startseite" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", flexShrink: 0 }}>
            <Img sizes="56px" src="/images/Klammer_2.png" alt="" style={{ width: 56, height: 56, objectFit: "contain", borderRadius: 4 }}/>
            <span className="nav-word" style={{ fontFamily: "'Archivo Variable', sans-serif", fontWeight: 600, fontSize: 26, color: C.text, letterSpacing: "0.05em" }}>Pultteiler</span>
          </Link>

          {/* Desktop: vier Menüpunkte, Unterseiten klappen auf */}
          <div className="desk-nav" style={{ display: "flex", alignItems: "center", gap: 4, flex: 1 }}>
            {NAV.map((n) => {
              const hasPanel = n.children || n.kind === "contact";
              if (!hasPanel) return <Link key={n.id} href={n.href} style={linkStyle(isActive(n.href))}>{n.label}</Link>;
              const isOpen = dd === n.id;
              return (
                <div key={n.id} style={{ position: "relative" }} onMouseEnter={() => enter(n.id)} onMouseLeave={leave}>
                  {n.kind === "contact"
                    ? <Link href={n.href} onFocus={() => enter(n.id)} aria-haspopup="true" aria-expanded={isOpen} style={linkStyle(groupActive(n))}>{n.label}<Chevron open={isOpen}/></Link>
                    : <button onClick={() => setDd(isOpen ? null : n.id)} aria-haspopup="true" aria-expanded={isOpen} style={linkStyle(groupActive(n))}>{n.label}<Chevron open={isOpen}/></button>}
                  {isOpen && (
                    <div style={panel}>
                      <div style={panelBox}>
                        {n.children?.map((c) => <Link key={c.id} href={c.href} className="dd-link" style={panelLink(isActive(c.href))}>{c.label}</Link>)}
                        {n.kind === "contact" && (
                          <div style={{ padding: "8px 10px", minWidth: 300 }}>
                            <div style={{ fontFamily: FONT, fontSize: 14, color: C.textMuted, marginBottom: 4 }}>Rufen Sie uns an</div>
                            <a href={CONTACT.tel1} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: FONT, fontSize: 20, fontWeight: 700, color: C.text, textDecoration: "none", marginBottom: 6 }}><span style={{ color: C.tafel, display: "inline-flex" }}><PhoneIcon/></span>{CONTACT.phone1}</a>
                            <a href={CONTACT.tel2} style={{ display: "block", fontFamily: FONT, fontSize: 15, color: C.textMuted, textDecoration: "none", margin: "0 0 4px 30px", whiteSpace: "nowrap" }}>Zusatznummer: <strong style={{ color: C.text }}>{CONTACT.phone2}</strong></a>
                            <a href={CONTACT.tel3} style={{ display: "block", fontFamily: FONT, fontSize: 15, color: C.textMuted, textDecoration: "none", margin: "0 0 12px 30px", whiteSpace: "nowrap" }}>Festnetz: <strong style={{ color: C.text }}>{CONTACT.phone3}</strong></a>
                            <a href={`mailto:${CONTACT.email}`} style={{ display: "block", fontFamily: FONT, fontSize: 15, color: C.accentText, textDecoration: "none", marginBottom: 14 }}>{CONTACT.email}</a>
                            <Link href="/kontakt" style={{ display: "block", textAlign: "center", border: `1.5px solid ${C.tafel}`, borderRadius: 6, padding: "10px 14px", fontFamily: FONT, fontSize: 15, fontWeight: 700, color: C.tafel, textDecoration: "none" }}>Zum Kontaktformular</Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Rechts: Shop und Einkaufskorb, beide in Tafelgrün */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: "auto" }}>
            <a href={CONTACT.tel1} className="nav-phone hdr-item" aria-label={`Anrufen: ${CONTACT.phone1}`} style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 44, padding: "0 12px", borderRadius: 6, fontFamily: FONT, fontSize: 18, fontWeight: 700, color: C.text, textDecoration: "none", whiteSpace: "nowrap", marginRight: 4 }}><span style={{ color: C.tafel, display: "inline-flex" }}><PhoneIcon size={22}/></span>{CONTACT.phone1}</a>
            <a href={CONTACT.tel1} className="mob-phone hdr-item" aria-label={`Anrufen: ${CONTACT.phone1}`} style={{ display: "none", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 6, color: C.tafel, textDecoration: "none" }}><PhoneIcon size={24}/></a>
            <Link href={shop.href} className="nav-shop hdr-fill" aria-current={pathname.startsWith("/produkte") ? "page" : undefined} style={{ display: "inline-flex", alignItems: "center", height: 44, padding: "0 24px", borderRadius: 6, background: C.tafel, color: C.white, fontFamily: FONT, fontSize: 16, fontWeight: 700, letterSpacing: "0.02em", textDecoration: "none", whiteSpace: "nowrap" }}>{shop.short}</Link>
            <button onClick={() => setCartOpen(true)} className="nav-cart hdr-item" aria-label={count > 0 ? `Warenkorb öffnen, ${count} Artikel` : "Warenkorb öffnen"} style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 58, height: 56, background: "none", border: "none", borderRadius: 6, cursor: "pointer" }}>
              <BasketIcon size={40} color={C.tafel}/>
              {count > 0 && <span aria-hidden="true" style={{ position: "absolute", top: 0, right: 0, minWidth: 22, height: 22, padding: "0 5px", borderRadius: 10, background: C.tafel, color: C.white, border: `2px solid ${C.bg}`, fontFamily: FONT, fontSize: 12, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>{count}</span>}
            </button>
            <button onClick={() => setOpen(!open)} className="mob-btn hdr-item" aria-label="Menü" aria-expanded={open} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8, borderRadius: 6 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" stroke={C.text} strokeWidth="2" fill="none">{open ? <><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></> : <><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></>}</svg>
            </button>
          </div>
        </div>

        {/* Handy-Menü */}
        {open && (
          <div className="mob-menu" style={{ background: C.bg, borderBottom: `1px solid ${C.border}`, padding: "8px 32px 20px", maxHeight: "calc(100vh - 72px)", overflow: "auto" }}>
            <Link href={shop.href} style={{ display: "block", textAlign: "center", background: C.tafel, color: C.white, borderRadius: 6, padding: "16px", fontFamily: FONT, fontSize: 16, fontWeight: 700, textDecoration: "none", marginBottom: 12 }}>{shop.long}</Link>
            <a href={CONTACT.tel1} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, border: `1.5px solid ${C.tafel}`, borderRadius: 6, color: C.text, padding: "14px 16px", fontFamily: FONT, fontSize: 16, fontWeight: 700, textDecoration: "none", marginBottom: 12 }}><span style={{ color: C.tafel, display: "inline-flex" }}><PhoneIcon/></span>Anrufen: {CONTACT.phone1}</a>
            <Link href="/" style={{ display: "block", padding: "14px 16px", fontFamily: FONT, fontSize: 16, fontWeight: 600, color: C.text, background: pathname === "/" ? C.surface : "none", borderRadius: 6, textDecoration: "none" }}>Startseite</Link>
            {NAV.map((n) => n.children ? (
              <div key={n.id}>
                <div style={{ padding: "14px 16px 6px", fontFamily: FONT, fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMuted }}>{n.label}</div>
                {n.children.map((c) => (
                  <Link key={c.id} href={c.href} style={{ display: "block", padding: "12px 28px", fontFamily: FONT, fontSize: 16, fontWeight: 600, color: C.text, background: isActive(c.href) ? C.surface : "none", borderRadius: 6, textDecoration: "none" }}>{c.label}</Link>
                ))}
              </div>
            ) : (
              <Link key={n.id} href={n.href} style={{ display: "block", padding: "14px 16px", fontFamily: FONT, fontSize: 16, fontWeight: 600, color: C.text, background: isActive(n.href) ? C.surface : "none", borderRadius: 6, textDecoration: "none" }}>{n.label}</Link>
            ))}
          </div>
        )}
      </nav>
      {cartOpen && <CartSidebar onClose={() => setCartOpen(false)}/>}
    </>
  );
}
