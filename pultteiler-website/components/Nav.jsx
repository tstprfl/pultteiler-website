"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { C } from "@/lib/colors";
import { NAV } from "@/lib/data";
import { useCart } from "@/components/CartProvider";
import CartSidebar from "@/components/CartSidebar";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const { count } = useCart();
  const pathname = usePathname();

  useEffect(() => { const fn = () => setScrolled(window.scrollY > 20); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  useEffect(() => { setOpen(false); setDdOpen(false); }, [pathname]);

  const isActive = (href) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  const groupActive = (n) => n.children?.some((c) => isActive(c.href));

  const linkStyle = (active) => ({ background: active ? C.surface : "none", border: "none", padding: "8px 14px", fontFamily: "'Inter Tight', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: active ? C.text : C.textMuted, transition: "all 0.2s", textDecoration: "none", whiteSpace: "nowrap", cursor: "pointer" });

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? C.bgCard : "transparent", borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent", transition: "all 0.3s" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <img src="/images/Klammer_2.png" alt="Pultteiler Klammer" style={{ width: 56, height: 56, objectFit: "contain", borderRadius: 4 }}/>
            <span style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 26, color: C.text, letterSpacing: "0.05em" }}>PULTTEILER</span>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div className="desk-nav" style={{ display: "flex", gap: 2, alignItems: "center" }}>
              {NAV.map(n => n.children ? (
                <div key={n.id} style={{ position: "relative" }} onMouseEnter={() => setDdOpen(true)} onMouseLeave={() => setDdOpen(false)}>
                  <button onClick={() => setDdOpen(v => !v)} aria-expanded={ddOpen} aria-haspopup="true" style={linkStyle(groupActive(n))}>
                    {n.label} <span aria-hidden="true" style={{ fontSize: 8, verticalAlign: 1 }}>▼</span>
                  </button>
                  {ddOpen && (
                    <div style={{ position: "absolute", top: "100%", left: 0, minWidth: 280, background: C.bgCard, border: `1px solid ${C.border}`, boxShadow: "0 8px 24px rgba(0,0,0,0.10)", paddingTop: 4, paddingBottom: 4 }}>
                      {n.children.map(c => (
                        <Link key={c.id} href={c.href} style={{ display: "block", padding: "12px 18px", fontFamily: "'Inter Tight', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: isActive(c.href) ? C.text : C.textMuted, background: isActive(c.href) ? C.surface : "none", textDecoration: "none" }}>{c.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={n.id} href={n.href} style={linkStyle(isActive(n.href))}>{n.label}</Link>
              ))}
              <Link href="/angebot" style={{ background: C.dark, color: C.white, padding: "10px 18px", fontFamily: "'Inter Tight', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none", whiteSpace: "nowrap", marginLeft: 8 }}>ANGEBOT →</Link>
            </div>
            <button onClick={() => setCartOpen(true)} aria-label="Warenkorb öffnen" style={{ background: "none", border: "none", cursor: "pointer", padding: "8px 12px", position: "relative" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
              {count > 0 && <span style={{ position: "absolute", top: 2, right: 4, background: C.accent, color: C.white, width: 18, height: 18, borderRadius: "50%", fontSize: 10, fontWeight: 700, fontFamily: "'Inter Tight', sans-serif", display: "flex", alignItems: "center", justifyContent: "center" }}>{count}</span>}
            </button>
            <button onClick={() => setOpen(!open)} className="mob-btn" aria-label="Menü" aria-expanded={open} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" stroke={C.text} strokeWidth="2" fill="none">{open ? <><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></> : <><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></>}</svg>
            </button>
          </div>
        </div>
        {open && (
          <div style={{ background: C.bg, borderBottom: `1px solid ${C.border}`, padding: "8px 32px 20px", maxHeight: "calc(100vh - 72px)", overflow: "auto" }}>
            {NAV.map(n => n.children ? (
              <div key={n.id}>
                <div style={{ padding: "14px 16px 6px", fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: C.textMuted }}>{n.label}</div>
                {n.children.map(c => (
                  <Link key={c.id} href={c.href} style={{ display: "block", width: "100%", textAlign: "left", background: isActive(c.href) ? C.surface : "none", padding: "12px 28px", fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", color: isActive(c.href) ? C.text : C.textMuted, textDecoration: "none" }}>{c.label}</Link>
                ))}
              </div>
            ) : (
              <Link key={n.id} href={n.href} style={{ display: "block", width: "100%", textAlign: "left", background: isActive(n.href) ? C.surface : "none", padding: "14px 16px", fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", color: isActive(n.href) ? C.text : C.textMuted, textDecoration: "none" }}>{n.label}</Link>
            ))}
            <Link href="/angebot" style={{ display: "block", textAlign: "center", background: C.dark, color: C.white, padding: "15px 16px", fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none", marginTop: 12 }}>ANGEBOT ANFORDERN →</Link>
          </div>
        )}
      </nav>
      {cartOpen && <CartSidebar onClose={() => setCartOpen(false)}/>}
    </>
  );
}
