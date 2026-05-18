"use client";
import { useState, useEffect, useRef } from "react";
import { C } from "@/lib/colors";
import { useCart } from "@/components/CartProvider";

export function Reveal({ children, delay = 0 }) {
  const [v, setV] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s` }}>{children}</div>;
}

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => { const fn = () => setShow(window.scrollY > 400); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  if (!show) return null;
  return <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ position: "fixed", bottom: 24, right: 24, zIndex: 90, width: 44, height: 44, background: C.dark, color: C.white, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.15)", transition: "opacity 0.3s" }} aria-label="Nach oben"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg></button>;
}

export function Badge({ children, color = C.accent }) {
  return <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color, background: `${color}15`, padding: "5px 12px", display: "inline-block" }}>{children}</span>;
}

export function Heading({ overline, title, sub, align = "left" }) {
  return (
    <div style={{ textAlign: align, marginBottom: 56 }}>
      {overline && <div style={{ marginBottom: 16 }}><Badge>{overline}</Badge></div>}
      <h2 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "clamp(32px, 5vw, 56px)", color: C.text, margin: "0 0 16px", letterSpacing: "0.03em", lineHeight: 1, whiteSpace: "pre-line" }}>{title}</h2>
      {sub && <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 16, color: C.textMuted, maxWidth: align === "center" ? 560 : "none", margin: align === "center" ? "0 auto" : 0, lineHeight: 1.6 }}>{sub}</p>}
    </div>
  );
}

export function Btn({ children, onClick, href, variant = "primary", full = false }) {
  const p = variant === "primary";
  const style = { background: p ? C.dark : "transparent", color: p ? C.white : C.text, border: p ? "none" : `1.5px solid ${C.borderLight}`, padding: "14px 32px", fontFamily: "'Inter Tight', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s", width: full ? "100%" : "auto", textDecoration: "none", display: "inline-block", textAlign: "center" };

  if (href) {
    return <a href={href} style={style}>{children}</a>;
  }
  return <button onClick={onClick} style={style}>{children}</button>;
}

export function AddToCartBtn({ product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);
  const handleAdd = () => { add(product, qty); setAdded(true); setTimeout(() => { setAdded(false); setQty(1); }, 1500); };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "center", border: `1px solid ${C.border}`, background: C.bgCard }}>
        <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 32, height: 40, background: "none", border: "none", cursor: "pointer", fontSize: 18, color: C.text, display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
        <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, fontWeight: 600, color: C.text, minWidth: 28, textAlign: "center" }}>{qty}</span>
        <button onClick={() => setQty(q => q + 1)} style={{ width: 32, height: 40, background: "none", border: "none", cursor: "pointer", fontSize: 18, color: C.text, display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
      </div>
      <button onClick={handleAdd} style={{ background: added ? C.green : C.dark, color: C.white, border: "none", padding: "12px 24px", fontFamily: "'Inter Tight', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", cursor: "pointer", transition: "all 0.3s", textTransform: "uppercase" }}>{added ? "✓ HINZUGEFÜGT" : "IN DEN WARENKORB"}</button>
    </div>
  );
}
