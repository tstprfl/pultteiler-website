"use client";
import { useState } from "react";
import { C } from "@/lib/colors";
import { loadEmailJS } from "@/lib/emailjs";
import { useCart } from "@/components/CartProvider";
import Img from "@/components/Img";

export default function CartSidebar({ onClose }) {
  const { items, updateQty, remove, total, count, region, getPrice, shipping, clear, vatRate, vat, grandTotal, setCount, freeShippingSets } = useCart();
  const fmt = (n) => `€ ${n.toFixed(2)}`;
  const vatLabel = `enthaltene USt ${Math.round(vatRate * 100)}%`;
  const shippingLabel = shipping === 0 ? (items.length > 0 && setCount >= freeShippingSets ? `Kostenlos (ab ${freeShippingSets} Koffer-Sets)` : "Kostenlos") : fmt(shipping);
  const [step, setStep] = useState("cart");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [formValues, setFormValues] = useState({});
  const [confirmedOrderNr, setConfirmedOrderNr] = useState("");
  const inp = { width: "100%", padding: "12px 14px", background: C.bgCard, border: `1px solid ${C.border}`, fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.text, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s", marginBottom: 12 };
  const regionLabel = region === "CH" ? "Schweiz (steuerfrei und unverzollt)" : region === "DE" ? "Deutschland (Preise inkl. 20% USt)" : "Österreich (Preise inkl. 20% USt)";

  const generateOrderNr = () => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const rand = String(Math.floor(Math.random() * 100)).padStart(2, "0");
    return `${y}${m}${d}${rand}`;
  };

  const orderSummaryForMailto = () => {
    const lines = items.map(i => `${i.qty}x ${i.name} — ${fmt(getPrice(i) * i.qty)}`).join("\n");
    const plzOrt = `${formValues["PLZ"] || ""} ${formValues["Ort"] || ""}`.trim();
    const vatLine = vatRate > 0 ? `\n${vatLabel}: ${fmt(vat)}` : "";
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
    const shippingText = shippingLabel;
    const bestellungText = items.map(i => `${i.qty}x ${i.name} — ${fmt(getPrice(i) * i.qty)}`).join("\n")
      + `\n\nZwischensumme: ${fmt(total)}\nVersand: ${shippingLabel}` + (vatRate > 0 ? `\nGesamt inkl. USt: ${fmt(grandTotal)} (${vatLabel}: ${fmt(vat)})` : "\nSteuerfrei (Schweiz)");
    const plzOrt = `${formValues["PLZ"] || ""} ${formValues["Ort"] || ""}`.trim();
    const adresseText = [formValues["Name / Schule"], formValues["Ansprechperson"], formValues["Adresse"], plzOrt, formValues["Land"]].filter(Boolean).join("\n");
    const templateParams = {
      kunde_email: formValues["email"] || "",
      order_nr: orderNr,
      region: region === "CH" ? "Schweiz" : region === "DE" ? "Deutschland" : "Österreich",
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
      try { await window.emailjs.send("service_cobcbsg", "template_ko0cjvs", templateParams); } catch (e) { console.warn("Kunden-E-Mail konnte nicht gesendet werden:", e); }
      setStep("confirmed");
      setConfirmedOrderNr(orderNr);
      clear();
    } catch (err) {
      setError("Bestellung konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail an blaschegg@traunseenet.at");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", zIndex: 200 }}/>
      <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "min(440px, 90vw)", background: C.bg, borderLeft: `1px solid ${C.border}`, zIndex: 201, display: "flex", flexDirection: "column", boxShadow: "-8px 0 32px rgba(0,0,0,0.08)" }}>
        <div style={{ padding: "24px 28px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 28, color: C.text, margin: 0 }}>
            {step === "cart" && <>Warenkorb <span style={{ color: C.textMuted, fontSize: 20 }}>({count})</span></>}
            {step === "checkout" && "Bestellung"}
            {step === "kontrolle" && "Kontrolle"}
            {step === "confirmed" && "Bestätigung"}
          </h3>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: C.textMuted, fontSize: 24, padding: 4 }}>✕</button>
        </div>

        {step === "cart" && (<>
          <div style={{ flex: 1, overflow: "auto", padding: "16px 28px" }}>
            {items.length === 0 ? (
              <div style={{ textAlign: "center", padding: "64px 0" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={C.border} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 16 }}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
                <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted }}>Ihr Warenkorb ist leer.</p>
              </div>
            ) : items.map(item => (
              <div key={item.id} style={{ borderBottom: `1px solid ${C.border}`, padding: "20px 0", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 64, height: 64, background: C.bgCard, border: `1px solid ${C.border}`, flexShrink: 0, overflow: "hidden" }}>
                  <Img sizes="80px" src={item.img} alt={item.short} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => e.target.style.display = "none"}/>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 4 }}>{item.short}</div>
                  <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted }}>€ {getPrice(item).toFixed(2)} / Stk.</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
                    <button onClick={() => updateQty(item.id, item.qty - 1)} style={{ width: 28, height: 28, background: C.bgCard, border: `1px solid ${C.border}`, color: C.text, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                    <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, fontWeight: 600, color: C.text, minWidth: 20, textAlign: "center" }}>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} style={{ width: 28, height: 28, background: C.bgCard, border: `1px solid ${C.border}`, color: C.text, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                    <button onClick={() => remove(item.id)} style={{ background: "none", border: "none", cursor: "pointer", color: C.red, fontFamily: "'Inter Tight', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", marginLeft: "auto" }}>Entfernen</button>
                  </div>
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 22, color: C.text, flexShrink: 0 }}>€ {(getPrice(item) * item.qty).toFixed(2)}</div>
              </div>
            ))}
          </div>
          {items.length > 0 && (
            <div style={{ borderTop: `1px solid ${C.border}`, padding: "24px 28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted }}>Zwischensumme</span><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.text }}>{fmt(total)}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted }}>Versand ({region})</span><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: shipping === 0 ? C.green : C.text }}>{shippingLabel}</span></div>
              {shipping > 0 && setCount > 0 && setCount < freeShippingSets && <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, color: C.textMuted, margin: "0 0 8px" }}>Ab {freeShippingSets} Koffer-Sets entfällt der Versand.</p>}
              {vatRate > 0 && <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted }}>{vatLabel}</span><span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.text }}>{fmt(vat)}</span></div>}
              <div style={{ display: "flex", justifyContent: "space-between", borderTop: `1px solid ${C.border}`, paddingTop: 16, marginTop: 8, marginBottom: 20 }}><span style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 22, color: C.text }}>Gesamt</span><span style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 28, color: C.accentText }}>{fmt(grandTotal)}</span></div>
              <button onClick={() => setStep("checkout")} style={{ width: "100%", background: C.dark, color: C.white, border: "none", padding: "16px", fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", cursor: "pointer" }}>Jetzt bestellen →</button>
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, color: C.textMuted, textAlign: "center", marginTop: 12 }}>{region === "CH" ? "Steuerfrei und unverzollt. Zahlung per Rechnung." : region === "DE" ? region === "DE" ? "Preise inkl. 20% USt. Mit deutscher UID-Nummer steuerfrei zum Nettopreis. Zahlung per Rechnung." : "Preise inkl. 20% USt. Zahlung per Rechnung." : "Preise inkl. 20% USt. Zahlung per Rechnung."}</p>
            </div>
          )}
        </>)}

        {step === "checkout" && (
          <div style={{ flex: 1, overflow: "auto", padding: "24px 28px" }}>
            <button onClick={() => setStep("cart")} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.accentText, fontWeight: 600, letterSpacing: "0.08em", padding: 0, marginBottom: 20 }}>← Zurück zum Warenkorb</button>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "16px 20px", marginBottom: 24 }}>
              <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: C.textMuted, marginBottom: 10 }}>Ihre Bestellung</div>
              {items.map(item => (
                <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontFamily: "'Inter Tight', sans-serif", fontSize: 13 }}>
                  <span style={{ color: C.text }}>{item.qty}x {item.short}</span>
                  <span style={{ color: C.textMuted }}>{fmt(getPrice(item) * item.qty)}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontFamily: "'Inter Tight', sans-serif", fontSize: 13 }}>
                <span style={{ color: C.textMuted }}>Versand</span>
                <span style={{ color: shipping === 0 ? C.green : C.textMuted }}>{shippingLabel}</span>
              </div>
              {vatRate > 0 && <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontFamily: "'Inter Tight', sans-serif", fontSize: 13 }}>
                <span style={{ color: C.textMuted }}>{vatLabel}</span>
                <span style={{ color: C.textMuted }}>{fmt(vat)}</span>
              </div>}
              <div style={{ borderTop: `1px solid ${C.border}`, marginTop: 10, paddingTop: 10, display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 20, color: C.text }}>Gesamt</span>
                <span style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 20, color: C.accentText }}>{fmt(grandTotal)}</span>
              </div>
            </div>
            <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: C.textMuted, marginBottom: 12 }}>Rechnungsadresse</div>
            <form onSubmit={goToKontrolle}>
              <input type="text" name="Name / Schule" placeholder="Name oder Schulname *" required style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
              <input type="text" name="Ansprechperson" placeholder="Ansprechperson" style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
              <input type="text" name="Adresse" placeholder="Straße und Hausnummer *" required style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
              <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 8 }}>
                <input type="text" name="PLZ" placeholder="PLZ *" required style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
                <input type="text" name="Ort" placeholder="Ort *" required style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
              </div>
              <input type="text" name="Land" placeholder="Land *" required defaultValue={region === "CH" ? "Schweiz" : region === "DE" ? "Deutschland" : "Österreich"} style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
              <input type="email" name="email" placeholder="E-Mail Adresse *" required style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
              <input type="tel" name="Telefon" placeholder="Telefonnummer (optional)" style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
              {region === "DE" && <input type="text" name="UID-Nummer" placeholder="UID-Nummer (optional, für steuerfreie Lieferung zum Nettopreis)" style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>}
              <input type="text" name="Einkäufergruppe" placeholder="Einkäufergruppe (optional, für österr. Bundesschulen)" style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
              <textarea name="Anmerkungen" placeholder="Anmerkungen zur Bestellung (optional)" rows={3} style={{ ...inp, resize: "vertical" }} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/>
              <label style={{ display: "flex", alignItems: "flex-start", gap: 10, marginTop: 8, marginBottom: 16, cursor: "pointer" }}>
                <input type="checkbox" name="Zahlung" value="Rechnung" required style={{ marginTop: 3, accentColor: C.accent, width: 16, height: 16, flexShrink: 0 }}/>
                <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.text, lineHeight: 1.5 }}>Zahlung per Rechnung — Sie erhalten die Rechnung mit der Lieferung oder per E-Mail.</span>
              </label>
              <button type="submit" style={{ width: "100%", background: C.dark, color: C.white, border: "none", padding: "16px", fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", cursor: "pointer" }}>Weiter zur Kontrolle →</button>
            </form>
          </div>
        )}

        {step === "kontrolle" && (
          <div style={{ flex: 1, overflow: "auto", padding: "24px 28px" }}>
            <button onClick={() => { setStep("checkout"); setError(""); }} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.accentText, fontWeight: 600, letterSpacing: "0.08em", padding: 0, marginBottom: 20 }}>← Zurück zur Eingabe</button>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "16px 20px", marginBottom: 16 }}>
              <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: C.textMuted, marginBottom: 10 }}>Ihre Bestellung</div>
              {items.map(item => (
                <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontFamily: "'Inter Tight', sans-serif", fontSize: 13 }}>
                  <span style={{ color: C.text }}>{item.qty}x {item.short}</span>
                  <span style={{ color: C.textMuted }}>{fmt(getPrice(item) * item.qty)}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontFamily: "'Inter Tight', sans-serif", fontSize: 13 }}>
                <span style={{ color: C.textMuted }}>Versand</span>
                <span style={{ color: shipping === 0 ? C.green : C.textMuted }}>{shippingLabel}</span>
              </div>
              {vatRate > 0 && <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontFamily: "'Inter Tight', sans-serif", fontSize: 13 }}>
                <span style={{ color: C.textMuted }}>{vatLabel}</span>
                <span style={{ color: C.textMuted }}>{fmt(vat)}</span>
              </div>}
              <div style={{ borderTop: `1px solid ${C.border}`, marginTop: 10, paddingTop: 10, display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 20, color: C.text }}>Gesamt</span>
                <span style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 20, color: C.accentText }}>{fmt(grandTotal)}</span>
              </div>
            </div>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "16px 20px", marginBottom: 24 }}>
              <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: C.textMuted, marginBottom: 10 }}>Rechnungsadresse</div>
              {[
                { label: "Name / Schule", key: "Name / Schule" },
                { label: "Ansprechperson", key: "Ansprechperson" },
                { label: "Adresse", key: "Adresse" },
                { label: "PLZ / Ort", key: "_plzort" },
                { label: "Land", key: "Land" },
                { label: "E-Mail", key: "email" },
                { label: "Telefon", key: "Telefon" },
                { label: "UID-Nummer", key: "UID-Nummer" },
                { label: "Einkäufergruppe", key: "Einkäufergruppe" },
                { label: "Anmerkungen", key: "Anmerkungen" },
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
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, color: C.textMuted, lineHeight: 1.6, margin: 0 }}>Mit dem Absenden der Bestellung bestätigen Sie, die <a href="/agb" style={{ color: C.accentText, textDecoration: "underline" }}>AGB</a> und <a href="/datenschutz" style={{ color: C.accentText, textDecoration: "underline" }}>Datenschutzerklärung</a> gelesen zu haben. Als Verbraucher haben Sie ein 14-tägiges Widerrufsrecht gem. § 11 FAGG.</p>
            </div>
            <button onClick={handleSubmit} disabled={sending} style={{ width: "100%", background: sending ? C.textMuted : C.dark, color: C.white, border: "none", padding: "16px", fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", cursor: sending ? "wait" : "pointer" }}>
              {sending ? "Wird gesendet ..." : "Bestellung absenden →"}
            </button>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, color: C.textMuted, textAlign: "center", marginTop: 12 }}>Zahlung per Rechnung. Sie erhalten die Rechnung mit der Lieferung oder per E-Mail.</p>
            {error && (
              <div style={{ background: "#FEF2F2", border: `1px solid ${C.red}`, padding: "14px 18px", marginTop: 16 }}>
                <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.red, lineHeight: 1.5 }}>{error}</div>
                <a href={`mailto:blaschegg@traunseenet.at?subject=${encodeURIComponent("Bestellung über pultteiler.eu")}&body=${encodeURIComponent(orderSummaryForMailto())}`} style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.red, fontWeight: 600, display: "inline-block", marginTop: 8 }}>→ Alternativ per E-Mail bestellen</a>
              </div>
            )}
          </div>
        )}

        {step === "confirmed" && (
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 28px" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 64, color: C.green, marginBottom: 8 }}>✓</div>
              <h3 style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 28, color: C.text, margin: "0 0 12px" }}>Bestellung eingegangen</h3>
              {confirmedOrderNr && <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.accentText, fontWeight: 600, letterSpacing: "0.08em", margin: "0 0 12px" }}>Bestellnr. {confirmedOrderNr}</p>}
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.6, maxWidth: 300, margin: "0 auto 24px" }}>Vielen Dank für Ihre Bestellung! Wir haben Ihre Anfrage erhalten und melden uns in Kürze mit einer Bestätigung per E-Mail.</p>
              <button onClick={onClose} style={{ background: C.dark, color: C.white, border: "none", padding: "14px 32px", fontFamily: "'Inter Tight', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", cursor: "pointer" }}>Weiter einkaufen</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
