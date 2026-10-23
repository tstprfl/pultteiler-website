"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { C } from "@/lib/colors";
import { SETS, PARTS, SHIPPING, FREE_SHIPPING_SETS } from "@/lib/data";
import { useCart } from "@/components/CartProvider";
import { Reveal, Badge, AddToCartBtn } from "@/components/ui";
import Img from "@/components/Img";
import { SHOPS } from "@/lib/shop";
import { localizeProduct } from "@/lib/en";

const eur = (n, en) => (en ? `€ ${n.toFixed(2)}` : `€ ${n.toFixed(2).replace(".", ",")}`);

// Preis- und Versandkonditionen je Lieferland, sichtbar über der Produktliste (deutsch und englisch)
const konditionen = (en) => {
  const details = <Link href={en ? "/en/shipping" : "/versand"} style={{ color: C.accentText }}>{en ? "Shipping details" : "Details zum Versand"}</Link>;
  const free = en
    ? { label: `From ${FREE_SHIPPING_SETS} case sets`, val: "Free shipping", sub: "applies to every order with 3 or more sets" }
    : { label: `Ab ${FREE_SHIPPING_SETS} Koffer-Sets`, val: "Versandkostenfrei", sub: "gilt für jede Bestellung mit 3 oder mehr Sets" };
  const pay = en
    ? { label: "Payment", val: "On invoice", sub: "no prepayment, no credit card" }
    : { label: "Zahlung", val: "Auf Rechnung", sub: "keine Vorkasse, keine Kreditkarte" };
  const vat = en
    ? { label: "Prices", val: "Incl. 20% VAT", sub: "The VAT contained is shown in the cart." }
    : { label: "Preise", val: "Inkl. 20% USt", sub: "Die enthaltene Umsatzsteuer wird im Warenkorb ausgewiesen." };
  const perParcel = (c) => (en ? `${eur(SHIPPING[c], en)} per parcel` : `${eur(SHIPPING[c])} je Paket`);
  const shipSub = en ? <>incl. VAT. Shipping costs depend on the quantity. {details}</> : <>inkl. USt. Die Versandkosten richten sich nach der Stückzahl. {details}</>;
  return {
    AT: [
      vat,
      { label: en ? "Shipping to Austria" : "Versand Österreich", val: perParcel("AT"), sub: shipSub },
      free,
      en ? { label: "Austrian federal schools", val: "E-invoice", sub: "with your EKG number, payment on invoice" } : { label: "Österreichische Bundesschulen", val: "E-Rechnung", sub: "mit Ihrer EKG-Nummer, Zahlung auf Rechnung" },
      pay,
    ],
    DE: [
      vat,
      { label: en ? "Shipping to Germany" : "Versand Deutschland", val: perParcel("DE"), sub: shipSub },
      free,
      en ? { label: "With VAT ID", val: "Tax-free", sub: "net price, intra-community delivery, German bank account available" } : { label: "Mit UID-Nummer", val: "Steuerfrei", sub: "Nettopreis, innergemeinschaftliche Lieferung, deutsches Bankkonto vorhanden" },
      pay,
    ],
    CH: [
      en ? { label: "Prices", val: "Tax-free", sub: "duty-free" } : { label: "Preise", val: "Steuerfrei", sub: "unverzollt" },
      { label: en ? "Shipping to Switzerland" : "Versand Schweiz", val: perParcel("CH"), sub: en ? <>Shipping costs depend on the quantity. {details}</> : <>Die Versandkosten richten sich nach der Stückzahl. {details}</> },
      free,
      pay,
    ],
  };
};

// Texte der Shop-Seite
const T = {
  de: {
    badge: "Online-Shop", h1: "Pultteiler kaufen: Sets und Einzelteile",
    intro: "Sichtschutz-Trennwände für Schultische direkt vom Hersteller. Jeder Holzkoffer enthält 12 komplette Systeme. Kauf auf Rechnung, keine Kreditkarte, keine Vorkasse.",
    land: "Lieferland", countries: { AT: "Österreich", DE: "Deutschland", CH: "Schweiz" }, other: "Anderes Land? → Angebot anfordern", quote: "/angebot",
    box: { AT: "Preise und Versand für Österreich", DE: "Preise und Versand für Deutschland", CH: "Preise und Versand für die Schweiz" },
    sets: "Koffer-Sets", original: "Das Original", taxFree: "steuerfrei", inclVat: "inkl. 20% USt", inclVatShort: "inkl. USt",
    parts: "Ersatzteile nachbestellen",
    partsInfo: (ship, ch) => `Alle Ersatzteile ${ch ? "steuerfrei und unverzollt" : "inkl. 20% USt"}. Versand ${ship} je Paket, die Versandkosten richten sich nach der Stückzahl. Der Warenkorb zeigt den Betrag vor der Bestellung. `,
    shipDetails: "Details zum Versand", shipHref: "/versand",
  },
  en: {
    badge: "Online shop", h1: "Buy Pultteiler: sets and spare parts",
    intro: "Privacy screens for school desks direct from the manufacturer. Every wooden case contains 12 complete systems. Purchase on invoice, no credit card, no prepayment.",
    land: "Delivery country", countries: { AT: "Austria", DE: "Germany", CH: "Switzerland" }, other: "Other country? → Request a quote", quote: "/en/quote",
    box: { AT: "Prices and shipping for Austria", DE: "Prices and shipping for Germany", CH: "Prices and shipping for Switzerland" },
    sets: "Case sets", original: "The original", taxFree: "tax-free", inclVat: "incl. 20% VAT", inclVatShort: "incl. VAT",
    parts: "Reorder spare parts",
    partsInfo: (ship, ch) => `All spare parts ${ch ? "tax-free and duty-free" : "incl. 20% VAT"}. Shipping ${ship} per parcel, shipping costs depend on the quantity. The cart shows the amount before you order. `,
    shipDetails: "Shipping details", shipHref: "/en/shipping",
  },
};

// land: "ATDE" für /produkte (Österreich und Deutschland umschaltbar), "CH" für /produkte/schweiz;
// lang: "de" oder "en" (gleicher Shop unter /en/products und /en/products/switzerland).
// Die Schweiz hat eine eigene Adresse, damit Google die Schweizer Preise schon in der ausgelieferten Seite findet;
// der Umschalter wechselt dafür die Seite, Österreich und Deutschland schalten wie bisher auf derselben Seite um.
export default function Produkte({ land = "ATDE", lang = "de" }) {
  const en = lang === "en";
  const t = T[lang];
  const paths = en ? { ATDE: SHOPS.ATDE.pathEn, CH: SHOPS.CH.pathEn } : { ATDE: SHOPS.ATDE.path, CH: SHOPS.CH.path };
  const { region, setRegion, clear } = useCart();
  const router = useRouter();
  const ch = land === "CH";
  // Angezeigtes Lieferland: auf /produkte/schweiz immer CH, sonst AT oder DE aus dem Warenkorb
  const shown = ch ? "CH" : region === "CH" ? "AT" : region;
  const price = (p) => (shown === "CH" ? p.priceCH ?? p.priceAT : p.priceAT);

  // Warenkorb-Region an die aufgerufene Seite angleichen (nur beim Aufruf, nicht bei jedem Umschalten)
  useEffect(() => {
    if (ch && region !== "CH") { clear(); setRegion("CH"); }
    if (!ch && region === "CH") router.replace(paths.CH);
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
      return <Link key={r} href={r === "CH" ? paths.CH : paths.ATDE} onClick={() => switchRegion(r)} style={style}>{label}</Link>;
    }
    return <button key={r} onClick={() => switchRegion(r)} aria-pressed={active} style={style}>{label}</button>;
  };

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ marginBottom: 16 }}><Badge>{t.badge}</Badge></div>
            <h1 style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: "clamp(38px, 5.5vw, 64px)", color: C.text, margin: "0 0 16px", letterSpacing: "0.03em", lineHeight: 1 }}>{t.h1}</h1>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 16, color: C.textMuted, lineHeight: 1.6, maxWidth: 620, margin: 0 }}>
              {t.intro}
            </p>
          </div>

          {/* Region-Umschalter — Produkte bleiben immer sichtbar */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
            <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: C.textMuted }}>{t.land}</span>
            <div style={{ display: "flex", gap: 2 }}>
              {toggleBtn("AT", t.countries.AT)}
              {toggleBtn("DE", t.countries.DE)}
              {toggleBtn("CH", t.countries.CH)}
            </div>
            <Link href={t.quote} style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.accentText, fontWeight: 600, textDecoration: "none" }}>{t.other}</Link>
          </div>

          {/* Preise und Versand: Konditionen je Lieferland */}
          <Reveal>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderLeft: `4px solid ${C.accent}`, padding: "24px 28px", marginBottom: 40 }}>
              <div style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 24, color: C.text, marginBottom: 16 }}>
                {t.box[shown]}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px 24px" }}>
                {konditionen(en)[shown].map((k) => (
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
          <h2 style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: "clamp(28px, 4vw, 40px)", color: C.text, margin: "0 0 24px", letterSpacing: "0.03em" }}>{t.sets}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 56 }}>
            {SETS.map((p) => [p, localizeProduct(p, en)]).map(([p, v], i) => (
              <Reveal key={p.id} delay={i * 0.1}>
                <div id={p.id} style={{ scrollMarginTop: 96, background: C.bgCard, border: `1px solid ${C.border}`, display: "grid", gridTemplateColumns: "380px 1fr", overflow: "hidden", transition: "border-color 0.3s" }} className="prod-card" onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                  <div style={{ borderRight: `1px solid ${C.border}`, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, background: C.bgElevated }}><Img sizes="400px" src={p.img} alt={v.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "contain", maxHeight: 320, display: "block" }}/></div>
                  <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Badge>{t.original}</Badge>
                    <h3 style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 26, color: C.text, margin: "12px 0 8px" }}>{v.name}</h3>
                    <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.6, margin: "0 0 20px" }}>{v.desc}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                      <div><span style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 36, color: C.text }}>€ {price(p).toFixed(2)}</span><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, color: C.textMuted, marginLeft: 8 }}>{shown === "CH" ? t.taxFree : t.inclVat}</span></div>
                      <AddToCartBtn product={p} label={v.short} en={en}/>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Ersatzteile (AT und DE brutto, Schweiz steuerfrei) */}
          <>
            <h2 style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: "clamp(28px, 4vw, 40px)", color: C.text, margin: "0 0 8px", letterSpacing: "0.03em" }}>{t.parts}</h2>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, margin: "0 0 24px" }}>{t.partsInfo(eur(SHIPPING[shown], en), shown === "CH")}<Link href={t.shipHref} style={{ color: C.accentText }}>{t.shipDetails}</Link></p>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {PARTS.map((p) => [p, localizeProduct(p, en)]).map(([p, v], i) => (
                <Reveal key={p.id} delay={i * 0.08}>
                  <div id={p.id} style={{ scrollMarginTop: 96, background: C.bgCard, border: `1px solid ${C.border}`, overflow: "hidden", transition: "border-color 0.3s" }} onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                    {p.img && <div style={{ background: C.bgElevated, borderBottom: `1px solid ${C.border}`, padding: 16, display: "flex", alignItems: "center", justifyContent: "center", height: 240, overflow: "hidden" }}><Img sizes="400px" src={p.img} alt={v.name} loading="lazy" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }}/></div>}
                    <div style={{ padding: "20px 24px 28px" }}>
                      <Badge>{v.tag}</Badge>
                      <h3 style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 22, color: C.text, margin: "10px 0 6px" }}>{v.name}</h3>
                      <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted, lineHeight: 1.5, margin: "0 0 20px" }}>{v.desc}</p>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div><span style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 28, color: C.text }}>€ {price(p).toFixed(2)}</span><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, color: C.textMuted, marginLeft: 8 }}>{shown === "CH" ? t.taxFree : t.inclVatShort}</span></div>
                        <AddToCartBtn product={p} label={v.short} en={en}/>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </>
        </div>
      </section>
    </div>
  );
}
