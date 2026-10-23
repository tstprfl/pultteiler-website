"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { C } from "@/lib/colors";
import { SETS, PARTS, SHIPPING, FREE_SHIPPING_SETS } from "@/lib/data";
import { useCart } from "@/components/CartProvider";
import { Reveal, Badge, AddToCartBtn } from "@/components/ui";
import Img from "@/components/Img";
import { SHOP_CH_PATH } from "@/lib/shop";

const eur = (n) => `€ ${n.toFixed(2).replace(".", ",")}`;

// Preis- und Versandkonditionen je Lieferland, sichtbar über der Produktliste
const KONDITIONEN = {
  AT: [
    { label: "Preise", val: "Inkl. 20% USt", sub: "Die enthaltene Umsatzsteuer wird im Warenkorb ausgewiesen." },
    { label: "Versand Österreich", val: `${eur(SHIPPING.AT)} je Paket`, sub: <>inkl. USt. Die Versandkosten richten sich nach der Stückzahl. <Link href="/versand" style={{ color: C.accentText }}>Details zum Versand</Link></> },
    { label: `Ab ${FREE_SHIPPING_SETS} Koffer-Sets`, val: "Versandkostenfrei", sub: "gilt für jede Bestellung mit 3 oder mehr Sets" },
    { label: "Österreichische Bundesschulen", val: "E-Rechnung", sub: "mit Ihrer EKG-Nummer, Zahlung auf Rechnung" },
    { label: "Zahlung", val: "Auf Rechnung", sub: "keine Vorkasse, keine Kreditkarte" },
  ],
  DE: [
    { label: "Preise", val: "Inkl. 20% USt", sub: "Die enthaltene Umsatzsteuer wird im Warenkorb ausgewiesen." },
    { label: "Versand Deutschland", val: `${eur(SHIPPING.DE)} je Paket`, sub: <>inkl. USt. Die Versandkosten richten sich nach der Stückzahl. <Link href="/versand" style={{ color: C.accentText }}>Details zum Versand</Link></> },
    { label: `Ab ${FREE_SHIPPING_SETS} Koffer-Sets`, val: "Versandkostenfrei", sub: "gilt für jede Bestellung mit 3 oder mehr Sets" },
    { label: "Mit UID-Nummer", val: "Steuerfrei", sub: "Nettopreis, innergemeinschaftliche Lieferung, deutsches Bankkonto vorhanden" },
    { label: "Zahlung", val: "Auf Rechnung", sub: "keine Vorkasse, keine Kreditkarte" },
  ],
  CH: [
    { label: "Preise", val: "Steuerfrei", sub: "unverzollt" },
    { label: "Versand Schweiz", val: `${eur(SHIPPING.CH)} je Paket`, sub: <>für Koffer-Sets, Ersatzteile auf Anfrage. <Link href="/versand" style={{ color: C.accentText }}>Details zum Versand</Link></> },
    { label: `Ab ${FREE_SHIPPING_SETS} Koffer-Sets`, val: "Versandkostenfrei", sub: "gilt für jede Bestellung mit 3 oder mehr Sets" },
    { label: "Zahlung", val: "Auf Rechnung", sub: "keine Vorkasse, keine Kreditkarte" },
  ],
};

// land: "ATDE" für /produkte (Österreich und Deutschland umschaltbar), "CH" für /produkte/schweiz.
// Die Schweiz hat eine eigene Adresse, damit Google die Schweizer Preise schon in der ausgelieferten Seite findet;
// der Umschalter wechselt dafür die Seite, Österreich und Deutschland schalten wie bisher auf derselben Seite um.
export default function Produkte({ land = "ATDE" }) {
  const { region, setRegion, clear } = useCart();
  const router = useRouter();
  const ch = land === "CH";
  // Angezeigtes Lieferland: auf /produkte/schweiz immer CH, sonst AT oder DE aus dem Warenkorb
  const shown = ch ? "CH" : region === "CH" ? "AT" : region;
  const price = (p) => (shown === "CH" ? p.priceCH ?? p.priceAT : p.priceAT);

  // Warenkorb-Region an die aufgerufene Seite angleichen (nur beim Aufruf, nicht bei jedem Umschalten)
  useEffect(() => {
    if (ch && region !== "CH") { clear(); setRegion("CH"); }
    if (!ch && region === "CH") router.replace(SHOP_CH_PATH);
  }, []);

  const switchRegion = (r) => { if (r === region) return; clear(); setRegion(r); };

  const toggleBtn = (r, label) => {
    const active = shown === r;
    const style = {
      padding: "12px 24px", background: active ? C.accentText : C.bgCard, color: active ? C.white : C.textMuted,
      border: `1px solid ${active ? C.accentText : C.border}`, cursor: "pointer", transition: "all 0.2s",
      fontFamily: "'Inter Tight', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textDecoration: "none",
    };
    // Wechsel zwischen Schweiz und Österreich/Deutschland führt auf die andere Shop-Seite
    if (ch !== (r === "CH")) {
      return <Link key={r} href={r === "CH" ? SHOP_CH_PATH : "/produkte"} onClick={() => switchRegion(r)} style={style}>{label}</Link>;
    }
    return <button key={r} onClick={() => switchRegion(r)} aria-pressed={active} style={style}>{label}</button>;
  };

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ marginBottom: 16 }}><Badge>Online-Shop</Badge></div>
            <h1 style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: "clamp(38px, 5.5vw, 64px)", color: C.text, margin: "0 0 16px", letterSpacing: "0.03em", lineHeight: 1 }}>{ch ? "Pultteiler für die Schweiz: Sets und Preise" : "Pultteiler kaufen: Sets und Preise"}</h1>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 16, color: C.textMuted, lineHeight: 1.6, maxWidth: 620, margin: 0 }}>
              Sichtschutz-Trennwände für Schultische direkt vom Hersteller. Jeder Holzkoffer enthält 12 komplette Systeme. Kauf auf Rechnung, keine Kreditkarte, keine Vorkasse.
            </p>
          </div>

          {/* Region-Umschalter — Produkte bleiben immer sichtbar */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
            <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: C.textMuted }}>Lieferland</span>
            <div style={{ display: "flex", gap: 2 }}>
              {toggleBtn("AT", "Österreich")}
              {toggleBtn("DE", "Deutschland")}
              {toggleBtn("CH", "Schweiz")}
            </div>
            <Link href="/angebot" style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.accentText, fontWeight: 600, textDecoration: "none" }}>Anderes Land? → Angebot anfordern</Link>
          </div>

          {/* Preise und Versand: Konditionen je Lieferland */}
          <Reveal>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderLeft: `4px solid ${C.accent}`, padding: "24px 28px", marginBottom: 40 }}>
              <div style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 24, color: C.text, marginBottom: 16 }}>
                {shown === "CH" ? "Preise und Versand für die Schweiz" : shown === "DE" ? "Preise und Versand für Deutschland" : "Preise und Versand für Österreich"}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px 24px" }}>
                {KONDITIONEN[shown].map((k) => (
                  <div key={k.label}>
                    <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, fontWeight: 600, color: C.textMuted, marginBottom: 4 }}>{k.label}</div>
                    <div style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 22, color: C.accentText, lineHeight: 1.1, marginBottom: 4 }}>{k.val}</div>
                    <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.textMuted, lineHeight: 1.5 }}>{k.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Sets */}
          <h2 style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: "clamp(28px, 4vw, 40px)", color: C.text, margin: "0 0 24px", letterSpacing: "0.03em" }}>Koffer-Sets</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 56 }}>
            {SETS.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
                <div id={p.id} style={{ scrollMarginTop: 96, background: C.bgCard, border: `1px solid ${C.border}`, display: "grid", gridTemplateColumns: "260px 1fr", overflow: "hidden", transition: "border-color 0.3s" }} className="prod-card" onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                  <div style={{ borderRight: `1px solid ${C.border}`, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, background: C.bgElevated }}><Img sizes="300px" src={p.img} alt={p.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "contain", maxHeight: 200, display: "block" }}/></div>
                  <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Badge>{p.tag || "Das Original"}</Badge>
                    <h3 style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 26, color: C.text, margin: "12px 0 8px" }}>{p.name}</h3>
                    <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.6, margin: "0 0 20px" }}>{p.desc}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                      <div><span style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 36, color: C.text }}>€ {price(p).toFixed(2)}</span><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, color: C.textMuted, marginLeft: 8 }}>{shown === "CH" ? "steuerfrei" : "inkl. 20% USt"}</span></div>
                      <AddToCartBtn product={p}/>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Ersatzteile (Bruttopreise AT und DE) */}
          {shown !== "CH" && (
            <>
              <h2 style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: "clamp(28px, 4vw, 40px)", color: C.text, margin: "0 0 8px", letterSpacing: "0.03em" }}>Ersatzteile nachbestellen</h2>
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, margin: "0 0 24px" }}>Alle Ersatzteile inkl. 20% USt. Versand {eur(SHIPPING[shown])} je Paket, die Versandkosten richten sich nach der Stückzahl. Der Warenkorb zeigt den Betrag vor der Bestellung. <Link href="/versand" style={{ color: C.accentText }}>Details zum Versand</Link></p>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {PARTS.map((p, i) => (
                  <Reveal key={p.id} delay={i * 0.08}>
                    <div id={p.id} style={{ scrollMarginTop: 96, background: C.bgCard, border: `1px solid ${C.border}`, overflow: "hidden", transition: "border-color 0.3s" }} onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                      {p.img && <div style={{ background: C.bgElevated, borderBottom: `1px solid ${C.border}`, padding: 16, display: "flex", alignItems: "center", justifyContent: "center", height: 160, overflow: "hidden" }}><Img sizes="300px" src={p.img} alt={p.name} loading="lazy" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }}/></div>}
                      <div style={{ padding: "20px 24px 28px" }}>
                        <Badge>{p.tag}</Badge>
                        <h3 style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 22, color: C.text, margin: "10px 0 6px" }}>{p.name}</h3>
                        <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted, lineHeight: 1.5, margin: "0 0 20px" }}>{p.desc}</p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <div><span style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 28, color: C.text }}>€ {p.priceAT.toFixed(2)}</span><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, color: C.textMuted, marginLeft: 8 }}>inkl. USt</span></div>
                          <AddToCartBtn product={p}/>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted, margin: "24px 0 0" }}>
                Ersatzteile für die Schweiz? <Link href="/angebot" style={{ color: C.accentText, textDecoration: "none" }}>Gerne per Angebot →</Link>
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
