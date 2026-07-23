"use client";
import Link from "next/link";
import { C } from "@/lib/colors";
import { SETS, PARTS } from "@/lib/data";
import { useCart } from "@/components/CartProvider";
import { Reveal, Badge, AddToCartBtn } from "@/components/ui";

const PLATES = {
  AT: [
    { text: "🇦🇹\nE-RECHNUNGEN\nFÜR BUNDES-\nSCHULEN\nMIT IHRER EKG", rot: -3, fs: 9.5 },
    { text: "🇩🇪\nMIT DEUTSCHER\nUID-NUMMER\nSTEUERFREI\nDE-BANKKONTO\nVORHANDEN", rot: 2, fs: 8.5 },
  ],
  CH: [
    { text: "🇨🇭\nSTEUERFREIE\nUNVERZOLLTE\nLIEFERUNG IN\nDIE SCHWEIZ", rot: -2, fs: 9 },
    { text: "LIEFERUNG\nINKLUSIVE", rot: 2, fs: 12 },
  ],
};

export default function Produkte() {
  const { region, setRegion, getPrice, clear } = useCart();
  const switchRegion = (r) => { if (r === region) return; clear(); setRegion(r); };

  const toggleBtn = (r, label) => {
    const active = region === r;
    return (
      <button key={r} onClick={() => switchRegion(r)} aria-pressed={active} style={{
        padding: "12px 24px", background: active ? C.accent : C.bgCard, color: active ? C.white : C.textMuted,
        border: `1px solid ${active ? C.accent : C.border}`, cursor: "pointer", transition: "all 0.2s",
        fontFamily: "'Inter Tight', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
      }}>{label}</button>
    );
  };

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ marginBottom: 16 }}><Badge>ONLINE-SHOP</Badge></div>
            <h1 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "clamp(38px, 5.5vw, 64px)", color: C.text, margin: "0 0 16px", letterSpacing: "0.03em", lineHeight: 1 }}>PULTTEILER KAUFEN — SETS & PREISE</h1>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 16, color: C.textMuted, lineHeight: 1.6, maxWidth: 620, margin: 0 }}>
              Sichtschutz-Trennwände für Schultische direkt vom Hersteller. Jeder Holzkoffer enthält 12 komplette Systeme. Kauf auf Rechnung — keine Kreditkarte, keine Vorkasse.
            </p>
          </div>

          {/* Region-Umschalter — Produkte bleiben immer sichtbar */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
            <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: C.textMuted }}>LIEFERLAND</span>
            <div style={{ display: "flex", gap: 2 }}>
              {toggleBtn("AT", "ÖSTERREICH & DEUTSCHLAND")}
              {toggleBtn("CH", "SCHWEIZ")}
            </div>
            <Link href="/angebot" style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.accent, fontWeight: 600, textDecoration: "none" }}>Anderes Land? → Angebot anfordern</Link>
          </div>

          <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted, margin: "0 0 24px" }}>
            {region === "CH" ? "Alle Preise steuerfrei, unverzollt und inkl. Lieferung in die Schweiz." : "Alle Preise inkl. MwSt und Lieferung für Österreich und Deutschland."}
          </p>

          {/* Info-Plaketten je nach Region */}
          <Reveal><div className="shop-plates" style={{ display: "flex", gap: 16, marginBottom: 40, flexWrap: "wrap" }}>
            {PLATES[region].map((p, i) => (
              <div key={i} style={{ width: 160, height: 100, background: "#F0C645", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 12, boxShadow: "4px 6px 16px rgba(0,0,0,0.15)", transform: `rotate(${p.rot}deg)`, border: "2px solid #D4AD2E" }}>
                <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: p.fs, fontWeight: 700, color: C.dark, lineHeight: 1.4, letterSpacing: "0.04em", whiteSpace: "pre-line" }}>{p.text}</span>
              </div>
            ))}
          </div></Reveal>

          {/* Sets */}
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(28px, 4vw, 40px)", color: C.text, margin: "0 0 24px", letterSpacing: "0.03em" }}>KOFFER-SETS</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 56 }}>
            {SETS.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
                <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, display: "grid", gridTemplateColumns: "260px 1fr", overflow: "hidden", transition: "border-color 0.3s" }} className="prod-card" onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                  <div style={{ borderRight: `1px solid ${C.border}`, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, background: C.bgElevated }}><img src={p.img} alt={p.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "contain", maxHeight: 200, display: "block" }}/></div>
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

          {/* Ersatzteile (Preise inkl. MwSt AT/DE) */}
          {region === "AT" && (
            <>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(28px, 4vw, 40px)", color: C.text, margin: "0 0 8px", letterSpacing: "0.03em" }}>ERSATZTEILE NACHBESTELLEN</h2>
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, margin: "0 0 24px" }}>Alle Ersatzteile inkl. MwSt für Österreich und Deutschland. Versandkosten: € 8,70.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {PARTS.map((p, i) => (
                  <Reveal key={p.id} delay={i * 0.08}>
                    <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, overflow: "hidden", transition: "border-color 0.3s" }} onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                      {p.img && <div style={{ background: C.bgElevated, borderBottom: `1px solid ${C.border}`, padding: 16, display: "flex", alignItems: "center", justifyContent: "center", height: 160, overflow: "hidden" }}><img src={p.img} alt={p.name} loading="lazy" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }}/></div>}
                      <div style={{ padding: "20px 24px 28px" }}>
                        <Badge>{p.tag}</Badge>
                        <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, color: C.text, margin: "10px 0 6px" }}>{p.name}</h3>
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
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted, margin: "24px 0 0" }}>
                Ersatzteile für die Schweiz? <Link href="/angebot" style={{ color: C.accent, textDecoration: "none" }}>Gerne per Angebot →</Link>
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
