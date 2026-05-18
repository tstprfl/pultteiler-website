"use client";
import Link from "next/link";
import { useState } from "react";
import { C } from "@/lib/colors";
import { SETS, PARTS } from "@/lib/data";
import { useCart } from "@/components/CartProvider";
import { Reveal, Badge, Heading, AddToCartBtn } from "@/components/ui";

export default function Produkte() {
  const { region, setRegion, getPrice, clear } = useCart();
  const [regionSelected, setRegionSelected] = useState(false);
  const selectRegion = (r) => { clear(); setRegion(r); setRegionSelected(true); };

  if (!regionSelected) return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ minHeight: "80vh", display: "flex", alignItems: "center", padding: "80px 32px", background: `linear-gradient(135deg, ${C.bg} 0%, #D5EFEF 50%, #E8F4E8 100%)`, position: "relative", overflow: "hidden" }}>
        {[{ top: 80, left: -10, w: 140, rot: -25 }, { top: 60, right: -20, w: 120, rot: 20 }, { bottom: 40, left: 30, w: 110, rot: 15 }, { bottom: 60, right: 40, w: 130, rot: -10 }, { top: 200, left: "20%", w: 90, rot: 35, op: 0.08 }, { top: 160, right: "18%", w: 100, rot: -18, op: 0.08 }, { bottom: 150, left: "40%", w: 80, rot: 8, op: 0.06 }, { top: 350, right: "35%", w: 70, rot: -30, op: 0.07 }].map((p, i) => (
          <img key={i} src="/images/Klammer_2.png" alt="" style={{ position: "absolute", ...p, width: p.w, opacity: p.op || 0.12, transform: `rotate(${p.rot}deg)`, filter: "sepia(1) saturate(3) hue-rotate(-30deg)" }}/>
        ))}
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <img src="/images/Klammer_2.png" alt="Pultteiler" style={{ width: 64, height: 64, objectFit: "contain", margin: "0 auto 16px", display: "block" }}/>
          <Heading overline="ONLINE-SHOP" title="ONLINESHOP" align="center"/>
          <div className="region-btns" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {[{ r: "AT", label: "ÖSTERREICH & DEUTSCHLAND", sub: "Preise inkl. MwSt und Lieferung" }, { r: "CH", label: "SCHWEIZ", sub: "Steuerfrei, unverzollt, inkl. Lieferung" }].map(b => (
              <button key={b.r} onClick={() => selectRegion(b.r)} style={{ padding: "32px 40px", background: C.accent, border: "none", cursor: "pointer", transition: "all 0.2s", width: 260, boxShadow: "0 4px 16px rgba(26,158,158,0.3)" }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, color: C.white, marginBottom: 4 }}>{b.label}</div>
                <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{b.sub}</div>
              </button>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
            <Link href="/kontakt" style={{ width: 160, height: 100, background: C.accent, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 12, boxShadow: "4px 6px 16px rgba(26,158,158,0.25)", transform: "rotate(-1deg)", border: `2px solid ${C.accentHover}`, textDecoration: "none" }}>
              <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, fontWeight: 700, color: C.white, lineHeight: 1.4, letterSpacing: "0.04em" }}>ANDERE LÄNDER<br/>AUF ANFRAGE</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <button onClick={() => setRegionSelected(false)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.accent, fontWeight: 700, letterSpacing: "0.08em", padding: 0, marginBottom: 32 }}>← ZURÜCK ZUR AUSWAHL</button>
          <Heading overline="ONLINE-SHOP" title="PRODUKTE" sub={region === "CH" ? "" : "Alle Preise inkl. MwSt und Lieferung für Österreich und Deutschland."}/>
          {region === "AT" && <Reveal><div className="shop-plates" style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
            <div style={{ width: 160, height: 100, background: "#F0C645", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 12, boxShadow: "4px 6px 16px rgba(0,0,0,0.15)", transform: "rotate(-3deg)", border: "2px solid #D4AD2E" }}><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 9.5, fontWeight: 700, color: C.dark, lineHeight: 1.4, letterSpacing: "0.04em" }}>🇦🇹<br/>E-RECHNUNGEN<br/>FÜR BUNDES-<br/>SCHULEN<br/>MIT IHRER EKG</span></div>
            <div style={{ width: 160, height: 100, background: "#F0C645", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 12, boxShadow: "4px 6px 16px rgba(0,0,0,0.15)", transform: "rotate(2deg)", border: "2px solid #D4AD2E" }}><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 8.5, fontWeight: 700, color: C.dark, lineHeight: 1.4, letterSpacing: "0.04em" }}>🇩🇪<br/>MIT DEUTSCHER<br/>UID-NUMMER<br/>STEUERFREI<br/>DE-BANKKONTO<br/>VORHANDEN</span></div>
          </div></Reveal>}
          {region === "CH" && <Reveal><div className="shop-plates" style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
            <div style={{ width: 160, height: 100, background: "#F0C645", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 12, boxShadow: "4px 6px 16px rgba(0,0,0,0.15)", transform: "rotate(-2deg)", border: "2px solid #D4AD2E" }}><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 9, fontWeight: 700, color: C.dark, lineHeight: 1.4, letterSpacing: "0.04em" }}>🇨🇭<br/>STEUERFREIE<br/>UNVERZOLLTE<br/>LIEFERUNG IN<br/>DIE SCHWEIZ</span></div>
            <div style={{ width: 160, height: 100, background: "#F0C645", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 12, boxShadow: "4px 6px 16px rgba(0,0,0,0.15)", transform: "rotate(2deg)", border: "2px solid #D4AD2E" }}><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, fontWeight: 700, color: C.dark, lineHeight: 1.4, letterSpacing: "0.04em" }}>LIEFERUNG<br/>INKLUSIVE</span></div>
          </div></Reveal>}
          <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 48 }}>
            {SETS.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
                <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, display: "grid", gridTemplateColumns: "260px 1fr", overflow: "hidden", transition: "border-color 0.3s" }} className="prod-card" onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                  <div style={{ borderRight: `1px solid ${C.border}`, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, background: C.bgElevated }}><img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "contain", maxHeight: 200, display: "block" }}/></div>
                  <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    {p.tag && <Badge color={p.color === "#777" ? "#777" : C.accent}>{p.tag}</Badge>}
                    <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, color: C.text, margin: "12px 0 8px" }}>{p.name}</h3>
                    <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.6, margin: "0 0 20px" }}>{p.desc}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                      <div><span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: C.text }}>€ {getPrice(p).toFixed(2)}</span><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, color: C.textMuted, marginLeft: 8 }}>{region === "CH" ? "STEUERFREI, INKL. LIEFERUNG" : "INKL. MWST & LIEFERUNG"}</span></div>
                      <AddToCartBtn product={p}/>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          {region === "AT" && (
            <>
              <Heading overline="ERSATZTEILE" title="EINZELTEILE NACHBESTELLEN" sub="Alle Ersatzteile inkl. MwSt für Österreich und Deutschland. Versandkosten: € 8,70."/>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {PARTS.map((p, i) => (
                  <Reveal key={p.id} delay={i * 0.08}>
                    <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, overflow: "hidden", transition: "border-color 0.3s" }} onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                      {p.img && <div style={{ background: C.bgElevated, borderBottom: `1px solid ${C.border}`, padding: 16, display: "flex", alignItems: "center", justifyContent: "center", height: 160, overflow: "hidden" }}><img src={p.img} alt={p.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }}/></div>}
                      <div style={{ padding: "20px 24px 28px" }}>
                        <Badge>{p.tag}</Badge>
                        <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, color: C.text, margin: "10px 0 6px" }}>{p.name}</h4>
                        <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted, lineHeight: 1.5, margin: "0 0 20px" }}>{p.desc}</p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: C.text }}>€ {p.priceAT.toFixed(2)}</span>
                          <AddToCartBtn product={p}/>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
