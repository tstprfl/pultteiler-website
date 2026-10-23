"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { C } from "@/lib/colors";
import { loadEmailJS } from "@/lib/emailjs";
import { useCart } from "@/components/CartProvider";
import { useDialog, QtyInput } from "@/components/ui";
import Img from "@/components/Img";
import { isEnPath } from "@/lib/i18n";
import { localizeProduct } from "@/lib/en";

// Warenkorb auf Deutsch oder Englisch, je nach Sprache der aktuellen Seite.
// Die Bestellung erreicht Blaschegg immer mit deutschen Produktnamen; englische Bestellungen sind im Betreff mit (EN) markiert
// und erhalten keine automatische Bestätigung, da die Kundenvorlage in EmailJS deutsch ist.
export default function CartSidebar({ onClose }) {
  const { items, updateQty, remove, total, count, region, getPrice, shipping, clear, vatRate, vat, grandTotal, setCount, freeShippingSets, packages } = useCart();
  const en = isEnPath(usePathname());
  const tx = (de, enText) => (en ? enText : de);
  const shortName = (item) => localizeProduct(item, en).short;
  const fmt = (n) => `€ ${n.toFixed(2)}`;
  const vatLabelDe = `enthaltene USt ${Math.round(vatRate * 100)}%`;
  const vatLabel = tx(vatLabelDe, `incl. VAT ${Math.round(vatRate * 100)}%`);
  const shippingLabelDe = shipping === 0 ? (items.length > 0 && setCount >= freeShippingSets ? `Kostenlos (ab ${freeShippingSets} Koffer-Sets)` : "Kostenlos") : (packages > 1 ? `${fmt(shipping)} (${packages} Pakete)` : fmt(shipping));
  const shippingLabel = en ? (shipping === 0 ? (items.length > 0 && setCount >= freeShippingSets ? `Free (from ${freeShippingSets} case sets)` : "Free") : (packages > 1 ? `${fmt(shipping)} (${packages} parcels)` : fmt(shipping))) : shippingLabelDe;
  const countryName = tx(region === "CH" ? "Schweiz" : region === "DE" ? "Deutschland" : "Österreich", region === "CH" ? "Switzerland" : region === "DE" ? "Germany" : "Austria");
  const [step, setStep] = useState("cart");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [formValues, setFormValues] = useState({});
  const [confirmedOrderNr, setConfirmedOrderNr] = useState("");
  const inp = { width: "100%", padding: "12px 14px", background: C.bgCard, border: `1px solid ${C.border}`, fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.text, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s", marginBottom: 12 };
  const regionLabel = en
    ? (region === "CH" ? "Switzerland (tax-free and duty-free)" : region === "DE" ? "Germany (prices incl. 20% VAT)" : "Austria (prices incl. 20% VAT)")
    : (region === "CH" ? "Schweiz (steuerfrei und unverzollt)" : region === "DE" ? "Deutschland (Preise inkl. 20% USt)" : "Österreich (Preise inkl. 20% USt)");
  const panelRef = useRef(null);
  const titleRef = useRef(null);
  useDialog(panelRef, onClose);
  // Beim Öffnen und bei jedem Schrittwechsel Fokus auf die Überschrift setzen
  // (der zuvor fokussierte Knopf verschwindet beim Schrittwechsel)
  useEffect(() => { titleRef.current?.focus(); }, [step]);

  const generateOrderNr = () => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const rand = String(Math.floor(Math.random() * 100)).padStart(2, "0");
    return `${y}${m}${d}${rand}`;
  };

  const orderSummaryForMailto = () => {
    const lines = items.map(i => `${i.qty}x ${localizeProduct(i, en).name}: ${fmt(getPrice(i) * i.qty)}`).join("\n");
    const plzOrt = `${formValues["PLZ"] || ""} ${formValues["Ort"] || ""}`.trim();
    const vatLine = vatRate > 0 ? `\n${vatLabel}: ${fmt(vat)}` : "";
    if (en) return `Region: ${regionLabel}\n\n${lines}\n\nSubtotal: ${fmt(total)}\nShipping: ${shippingLabel}\nTotal: ${fmt(grandTotal)}${vatLine}\n\nBilling address:\n${formValues["Name / Schule"] || ""}\n${formValues["Ansprechperson"] || ""}\n${formValues["Adresse"] || ""}\n${plzOrt}\n${formValues["Land"] || ""}\nEmail: ${formValues["email"] || ""}\nPhone: ${formValues["Telefon"] || "–"}`;
    return `Region: ${regionLabel}\n\n${lines}\n\nZwischensumme: ${fmt(total)}\nVersand: ${shippingLabel}\nGesamtbetrag: ${fmt(grandTotal)}${vatLine}\n\nRechnungsadresse:\n${formValues["Name / Schule"] || ""}\n${formValues["Ansprechperson"] || ""}\n${formValues["Adresse"] || ""}\n${plzOrt}\n${formValues["Land"] || ""}\nE-Mail: ${formValues["email"] || ""}\nTelefon: ${formValues["Telefon"] || "–"}`;
  };

  const goToKontrolle = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const vals = {};
    fd.forEach((v, k) => { if (!k.startsWith("_")) vals[k] = v; });
    setFormValues(vals);
    setStep("kontrolle");
  };

  const handleSubmit = async () => {
    setSending(true);
    setError("");
    const orderNr = generateOrderNr();
    const shippingText = shippingLabelDe;
    const bestellungText = items.map(i => `${i.qty}x ${i.name}: ${fmt(getPrice(i) * i.qty)}`).join("\n")
      + `\n\nZwischensumme: ${fmt(total)}\nVersand: ${shippingLabelDe}` + (vatRate > 0 ? `\nGesamt inkl. USt: ${fmt(grandTotal)} (${vatLabelDe}: ${fmt(vat)})` : "\nSteuerfrei (Schweiz)");
    const plzOrt = `${formValues["PLZ"] || ""} ${formValues["Ort"] || ""}`.trim();
    const adresseText = [formValues["Name / Schule"], formValues["Ansprechperson"], formValues["Adresse"], plzOrt, formValues["Land"]].filter(Boolean).join("\n");
    const templateParams = {
      kunde_email: formValues["email"] || "",
      order_nr: orderNr,
      betreff: en ? `Bestellung (EN) Nr. ${orderNr}` : `Bestellung Nr. ${orderNr}`,
      region: (region === "CH" ? "Schweiz" : region === "DE" ? "Deutschland" : "Österreich") + (en ? " (Bestellung auf Englisch)" : ""),
      bestellung: bestellungText,
      versand: shippingText,
      gesamt: fmt(grandTotal),
      adresse: adresseText,
      telefon: formValues["Telefon"] || "–",
      uid: formValues["UID-Nummer"] || "–",
      einkaufergruppe: formValues["Einkäufergruppe"] || "–",
      anmerkungen: formValues["Anmerkungen"] || "–",
    };
    try {
      await loadEmailJS();
      await window.emailjs.send("service_cobcbsg", "template_7kke6e4", templateParams);
      if (!en) { try { await window.emailjs.send("service_cobcbsg", "template_ko0cjvs", templateParams); } catch (e) { console.warn("Kunden-E-Mail konnte nicht gesendet werden:", e); } }
      setStep("confirmed");
      setConfirmedOrderNr(orderNr);
      clear();
    } catch (err) {
      setError(tx("Bestellung konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail an blaschegg@traunseenet.at", "The order could not be sent. Please try again or contact us directly by email at blaschegg@traunseenet.at"));
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", zIndex: 200 }}/>
      <div ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="cart-title" style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "min(440px, 90vw)", background: C.bg, borderLeft: `1px solid ${C.border}`, zIndex: 201, display: "flex", flexDirection: "column", boxShadow: "-8px 0 32px rgba(0,0,0,0.08)" }}>
        <div style={{ padding: "24px 28px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 id="cart-title" ref={titleRef} tabIndex={-1} style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 28, color: C.text, margin: 0, outline: "none" }}>
            {step === "cart" && <>{tx("Warenkorb", "Cart")} <span style={{ color: C.textMuted, fontSize: 20 }}>({count})</span></>}
            {step === "checkout" && tx("Bestellung", "Order")}
            {step === "kontrolle" && tx("Kontrolle", "Review")}
            {step === "confirmed" && tx("Bestätigung", "Confirmation")}
          </h3>
          <button onClick={onClose} aria-label={tx("Warenkorb schließen", "Close cart")} style={{ background: "none", border: "none", cursor: "pointer", color: C.textMuted, fontSize: 24, padding: 4 }}>✕</button>
        </div>

        {step === "cart" && (<>
          <div style={{ flex: 1, overflow: "auto", padding: "16px 28px" }}>
            {items.length === 0 ? (
              <div style={{ textAlign: "center", padding: "64px 0" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={C.border} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 16 }}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
                <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted }}>{tx("Ihr Warenkorb ist leer.", "Your cart is empty.")}</p>
              </div>
            ) : items.map(item => (
              <div key={item.id} style={{ borderBottom: `1px solid ${C.border}`, padding: "20px 0", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 64, height: 64, background: C.bgCard, border: `1px solid ${C.border}`, flexShrink: 0, overflow: "hidden" }}>
                  <Img sizes="80px" src={item.img} alt={shortName(item)} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => e.target.style.display = "none"}/>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 4 }}>{shortName(item)}</div>
                  <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted }}>€ {getPrice(item).toFixed(2)} {tx("/ Stk.", "/ pc.")}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
                    <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label={`${shortName(item)}: ${tx("Menge verringern", "decrease quantity")}`} style={{ width: 28, height: 28, background: C.bgCard, border: `1px solid ${C.border}`, color: C.text, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                    <QtyInput value={item.qty} onChange={n => updateQty(item.id, n)} label={`${shortName(item)}: ${tx("Menge", "quantity")}`} style={{ width: 44, height: 28, border: `1px solid ${C.border}`, background: C.bgCard }}/>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label={`${shortName(item)}: ${tx("Menge erhöhen", "increase quantity")}`} style={{ width: 28, height: 28, background: C.bgCard, border: `1px solid ${C.border}`, color: C.text, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                    <button onClick={() => remove(item.id)} aria-label={tx(`${shortName(item)} entfernen`, `Remove ${shortName(item)}`)} style={{ background: "none", border: "none", cursor: "pointer", color: C.red, fontFamily: "'Inter Tight', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", marginLeft: "auto" }}>{tx("Entfernen", "Remove")}</button>
                  </div>
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 22, color: C.text, flexShrink: 0 }}>€ {(getPrice(item) * item.qty).toFixed(2)}</div>
              </div>
            ))}
          </div>
          {items.length > 0 && (
            <div style={{ borderTop: `1px solid ${C.border}`, padding: "24px 28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted }}>{tx("Zwischensumme", "Subtotal")}</span><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.text }}>{fmt(total)}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted }}>{tx("Versand", "Shipping")} ({region})</span><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: shipping === 0 ? C.green : C.text }}>{shippingLabel}</span></div>
              {shipping > 0 && packages > 1 && <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, color: C.textMuted, margin: "0 0 8px" }}>{tx(`Versand in ${packages} Paketen, die Pauschale gilt je Paket.`, `Shipped in ${packages} parcels, the flat rate applies per parcel.`)}</p>}
              {shipping > 0 && setCount > 0 && setCount < freeShippingSets && <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, color: C.textMuted, margin: "0 0 8px" }}>{tx(`Ab ${freeShippingSets} Koffer-Sets entfällt der Versand.`, `Shipping is free from ${freeShippingSets} case sets.`)}</p>}
              {vatRate > 0 && <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted }}>{vatLabel}</span><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.text }}>{fmt(vat)}</span></div>}
              <div style={{ display: "flex", justifyContent: "space-between", borderTop: `1px solid ${C.border}`, paddingTop: 16, marginTop: 8, marginBottom: 20 }}><span style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 22, color: C.text }}>{tx("Gesamt", "Total")}</span><span style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 28, color: C.accentText }}>{fmt(grandTotal)}</span></div>
              <button onClick={() => setStep("checkout")} style={{ width: "100%", background: C.dark, color: C.white, border: "none", padding: "16px", fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", cursor: "pointer" }}>{tx("Jetzt bestellen →", "Order now →")}</button>
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, color: C.textMuted, textAlign: "center", marginTop: 12 }}>{en
                ? (region === "CH" ? "Tax-free and duty-free. Payment on invoice." : region === "DE" ? "Prices incl. 20% VAT. Tax-free at the net price with a German VAT ID. Payment on invoice." : "Prices incl. 20% VAT. Payment on invoice.")
                : (region === "CH" ? "Steuerfrei und unverzollt. Zahlung per Rechnung." : region === "DE" ? "Preise inkl. 20% USt. Mit deutscher UID-Nummer steuerfrei zum Nettopreis. Zahlung per Rechnung." : "Preise inkl. 20% USt. Zahlung per Rechnung.")}</p>
            </div>
          )}
        </>)}

        {step === "checkout" && (
          <div style={{ flex: 1, overflow: "auto", padding: "24px 28px" }}>
            <button onClick={() => setStep("cart")} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.accentText, fontWeight: 600, letterSpacing: "0.08em", padding: 0, marginBottom: 20 }}>{tx("← Zurück zum Warenkorb", "← Back to cart")}</button>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "16px 20px", marginBottom: 24 }}>
              <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: C.textMuted, marginBottom: 10 }}>{tx("Ihre Bestellung", "Your order")}</div>
              {items.map(item => (
                <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontFamily: "'Inter Tight', sans-serif", fontSize: 13 }}>
                  <span style={{ color: C.text }}>{item.qty}x {shortName(item)}</span>
                  <span style={{ color: C.textMuted }}>{fmt(getPrice(item) * item.qty)}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontFamily: "'Inter Tight', sans-serif", fontSize: 13 }}>
                <span style={{ color: C.textMuted }}>{tx("Versand", "Shipping")}</span>
                <span style={{ color: shipping === 0 ? C.green : C.textMuted }}>{shippingLabel}</span>
              </div>
              {vatRate > 0 && <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontFamily: "'Inter Tight', sans-serif", fontSize: 13 }}>
                <span style={{ color: C.textMuted }}>{vatLabel}</span>
                <span style={{ color: C.textMuted }}>{fmt(vat)}</span>
              </div>}
              <div style={{ borderTop: `1px solid ${C.border}`, marginTop: 10, paddingTop: 10, display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 20, color: C.text }}>{tx("Gesamt", "Total")}</span>
                <span style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 20, color: C.accentText }}>{fmt(grandTotal)}</span>
              </div>
            </div>
            <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: C.textMuted, marginBottom: 12 }}>{tx("Rechnungsadresse", "Billing address")}</div>
            <form onSubmit={goToKontrolle}>
              <input aria-label={tx("Name oder Schulname", "Name or school name")} type="text" name="Name / Schule" placeholder={tx("Name oder Schulname *", "Name or school name *")} required style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
              <input aria-label={tx("Ansprechperson", "Contact person")} type="text" name="Ansprechperson" placeholder={tx("Ansprechperson", "Contact person")} style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
              <input aria-label={tx("Straße und Hausnummer", "Street and number")} type="text" name="Adresse" placeholder={tx("Straße und Hausnummer *", "Street and number *")} required style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
              <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 8 }}>
                <input aria-label={tx("PLZ", "Postcode")} type="text" name="PLZ" placeholder={tx("PLZ *", "Postcode *")} required style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
                <input aria-label={tx("Ort", "City")} type="text" name="Ort" placeholder={tx("Ort *", "City *")} required style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
              </div>
              <input aria-label={tx("Land", "Country")} type="text" name="Land" placeholder={tx("Land *", "Country *")} required defaultValue={countryName} style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
              <input aria-label={tx("E-Mail Adresse", "Email address")} type="email" name="email" placeholder={tx("E-Mail Adresse *", "Email address *")} required style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
              <input aria-label={tx("Telefonnummer (optional)", "Phone number (optional)")} type="tel" name="Telefon" placeholder={tx("Telefonnummer (optional)", "Phone number (optional)")} style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
              {region === "DE" && <input aria-label={tx("UID-Nummer (optional, für steuerfreie Lieferung zum Nettopreis)", "VAT ID (optional, for tax-free delivery at the net price)")} type="text" name="UID-Nummer" placeholder={tx("UID-Nummer (optional, für steuerfreie Lieferung zum Nettopreis)", "VAT ID (optional, for tax-free delivery at the net price)")} style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>}
              <input aria-label={tx("Einkäufergruppe (optional, für österr. Bundesschulen)", "Purchasing group (optional, for Austrian federal schools)")} type="text" name="Einkäufergruppe" placeholder={tx("Einkäufergruppe (optional, für österr. Bundesschulen)", "Purchasing group (optional, for Austrian federal schools)")} style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
              <textarea aria-label={tx("Anmerkungen zur Bestellung (optional)", "Notes on your order (optional)")} name="Anmerkungen" placeholder={tx("Anmerkungen zur Bestellung (optional)", "Notes on your order (optional)")} rows={3} style={{ ...inp, resize: "vertical" }} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
              <label style={{ display: "flex", alignItems: "flex-start", gap: 10, marginTop: 8, marginBottom: 16, cursor: "pointer" }}>
                <input type="checkbox" name="Zahlung" value="Rechnung" required style={{ marginTop: 3, accentColor: C.accent, width: 16, height: 16, flexShrink: 0 }}/>
                <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.text, lineHeight: 1.5 }}>{tx("Zahlung per Rechnung: Sie erhalten die Rechnung mit der Lieferung oder per E-Mail.", "Payment on invoice: you receive the invoice with the delivery or by email.")}</span>
              </label>
              <button type="submit" style={{ width: "100%", background: C.dark, color: C.white, border: "none", padding: "16px", fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", cursor: "pointer" }}>{tx("Weiter zur Kontrolle →", "Continue to review →")}</button>
            </form>
          </div>
        )}

        {step === "kontrolle" && (
          <div style={{ flex: 1, overflow: "auto", padding: "24px 28px" }}>
            <button onClick={() => { setStep("checkout"); setError(""); }} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.accentText, fontWeight: 600, letterSpacing: "0.08em", padding: 0, marginBottom: 20 }}>{tx("← Zurück zur Eingabe", "← Back to your details")}</button>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "16px 20px", marginBottom: 16 }}>
              <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: C.textMuted, marginBottom: 10 }}>{tx("Ihre Bestellung", "Your order")}</div>
              {items.map(item => (
                <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontFamily: "'Inter Tight', sans-serif", fontSize: 13 }}>
                  <span style={{ color: C.text }}>{item.qty}x {shortName(item)}</span>
                  <span style={{ color: C.textMuted }}>{fmt(getPrice(item) * item.qty)}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontFamily: "'Inter Tight', sans-serif", fontSize: 13 }}>
                <span style={{ color: C.textMuted }}>{tx("Versand", "Shipping")}</span>
                <span style={{ color: shipping === 0 ? C.green : C.textMuted }}>{shippingLabel}</span>
              </div>
              {vatRate > 0 && <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontFamily: "'Inter Tight', sans-serif", fontSize: 13 }}>
                <span style={{ color: C.textMuted }}>{vatLabel}</span>
                <span style={{ color: C.textMuted }}>{fmt(vat)}</span>
              </div>}
              <div style={{ borderTop: `1px solid ${C.border}`, marginTop: 10, paddingTop: 10, display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 20, color: C.text }}>{tx("Gesamt", "Total")}</span>
                <span style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 20, color: C.accentText }}>{fmt(grandTotal)}</span>
              </div>
            </div>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "16px 20px", marginBottom: 24 }}>
              <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: C.textMuted, marginBottom: 10 }}>{tx("Rechnungsadresse", "Billing address")}</div>
              {[
                { label: tx("Name / Schule", "Name / school"), key: "Name / Schule" },
                { label: tx("Ansprechperson", "Contact person"), key: "Ansprechperson" },
                { label: tx("Adresse", "Address"), key: "Adresse" },
                { label: tx("PLZ / Ort", "Postcode / city"), key: "_plzort" },
                { label: tx("Land", "Country"), key: "Land" },
                { label: tx("E-Mail", "Email"), key: "email" },
                { label: tx("Telefon", "Phone"), key: "Telefon" },
                { label: tx("UID-Nummer", "VAT ID"), key: "UID-Nummer" },
                { label: tx("Einkäufergruppe", "Purchasing group"), key: "Einkäufergruppe" },
                { label: tx("Anmerkungen", "Notes"), key: "Anmerkungen" },
              ].map(f => {
                const val = f.key === "_plzort" ? `${formValues["PLZ"] || ""} ${formValues["Ort"] || ""}`.trim() : formValues[f.key];
                if (!val) return null;
                return (
                  <div key={f.label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontFamily: "'Inter Tight', sans-serif", fontSize: 13, gap: 12 }}>
                    <span style={{ color: C.textMuted, flexShrink: 0 }}>{f.label}</span>
                    <span style={{ color: C.text, textAlign: "right" }}>{val}</span>
                  </div>
                );
              })}
            </div>
            <div style={{ background: `${C.accent}08`, border: `1px solid ${C.accent}25`, padding: "12px 16px", marginBottom: 16 }}>
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, color: C.textMuted, lineHeight: 1.6, margin: 0 }}>{en
                ? <>By submitting the order you confirm that you have read the <a href="/en/terms" style={{ color: C.accentText, textDecoration: "underline" }}>terms and conditions</a> and the <a href="/en/privacy" style={{ color: C.accentText, textDecoration: "underline" }}>privacy policy</a>. Consumers have a 14-day right of withdrawal under § 11 FAGG (Austrian Distance and Off-Premises Contracts Act).</>
                : <>Mit dem Absenden der Bestellung bestätigen Sie, die <a href="/agb" style={{ color: C.accentText, textDecoration: "underline" }}>AGB</a> und <a href="/datenschutz" style={{ color: C.accentText, textDecoration: "underline" }}>Datenschutzerklärung</a> gelesen zu haben. Als Verbraucher haben Sie ein 14-tägiges Widerrufsrecht gem. § 11 FAGG.</>}</p>
            </div>
            <button onClick={handleSubmit} disabled={sending} style={{ width: "100%", background: sending ? C.textMuted : C.dark, color: C.white, border: "none", padding: "16px", fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", cursor: sending ? "wait" : "pointer" }}>
              {sending ? tx("Wird gesendet ...", "Sending ...") : tx("Bestellung absenden →", "Submit order →")}
            </button>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, color: C.textMuted, textAlign: "center", marginTop: 12 }}>{tx("Zahlung per Rechnung. Sie erhalten die Rechnung mit der Lieferung oder per E-Mail.", "Payment on invoice. You receive the invoice with the delivery or by email.")}</p>
            {error && (
              <div style={{ background: "#FEF2F2", border: `1px solid ${C.red}`, padding: "14px 18px", marginTop: 16 }}>
                <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.red, lineHeight: 1.5 }}>{error}</div>
                <a href={`mailto:blaschegg@traunseenet.at?subject=${encodeURIComponent(tx("Bestellung über pultteiler.eu", "Order via pultteiler.eu"))}&body=${encodeURIComponent(orderSummaryForMailto())}`} style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.red, fontWeight: 600, display: "inline-block", marginTop: 8 }}>{tx("→ Alternativ per E-Mail bestellen", "→ Order by email instead")}</a>
              </div>
            )}
          </div>
        )}

        {step === "confirmed" && (
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 28px" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 64, color: C.green, marginBottom: 8 }}>✓</div>
              <h3 style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 28, color: C.text, margin: "0 0 12px" }}>{tx("Bestellung eingegangen", "Order received")}</h3>
              {confirmedOrderNr && <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.accentText, fontWeight: 600, letterSpacing: "0.08em", margin: "0 0 12px" }}>{tx("Bestellnr.", "Order no.")} {confirmedOrderNr}</p>}
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.6, maxWidth: 300, margin: "0 auto 24px" }}>{tx("Vielen Dank für Ihre Bestellung! Wir haben Ihre Anfrage erhalten und melden uns in Kürze mit einer Bestätigung per E-Mail.", "Thank you for your order! We have received it and will get back to you shortly with a confirmation by email.")}</p>
              <button onClick={onClose} style={{ background: C.dark, color: C.white, border: "none", padding: "14px 32px", fontFamily: "'Inter Tight', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", cursor: "pointer" }}>{tx("Weiter einkaufen", "Continue shopping")}</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
