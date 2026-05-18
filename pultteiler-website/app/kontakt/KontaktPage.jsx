"use client";
import { useState } from "react";
import { C } from "@/lib/colors";
import { loadEmailJS } from "@/lib/emailjs";
import { Reveal, Heading, Btn } from "@/components/ui";

export default function KontaktPage() {
  const [sent, setSent] = useState(false);
  const [contactSending, setContactSending] = useState(false);
  const [contactError, setContactError] = useState("");
  const inp = { width: "100%", padding: "14px 16px", background: C.bgCard, border: `1px solid ${C.border}`, fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.text, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactSending(true);
    setContactError("");
    const fd = new FormData(e.target);
    const data = {};
    fd.forEach((v, k) => { data[k] = v; });
    try {
      await loadEmailJS();
      await window.emailjs.send("service_cobcbsg", "template_7kke6e4", {
        kunde_email: data["email"] || "", order_nr: "KONTAKT", region: "Kontaktanfrage",
        bestellung: data["Nachricht"] || "", versand: "–", gesamt: "–",
        adresse: data["Name"] || "", telefon: "–", uid: "–", einkaufergruppe: "–",
        anmerkungen: "Kontaktanfrage über pultteiler.eu",
      });
      setSent(true);
    } catch (err) {
      setContactError("Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an blaschegg@traunseenet.at");
    } finally { setContactSending(false); }
  };

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Heading overline="KONTAKT" title="WIR SIND FÜR SIE DA" align="center"/>
          <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", flexDirection: "column", gap: 2 }}>
            <Reveal><div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "40px 36px" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "64px 0" }}><div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, color: C.green }}>✓</div><h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: C.text, margin: "12px 0 8px" }}>NACHRICHT GESENDET</h3><p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted }}>Wir melden uns in Kürze.</p></div>
              ) : (
                <><h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: C.text, margin: "0 0 28px" }}>NACHRICHT SENDEN</h3>
                <form onSubmit={handleContactSubmit}>
                  {[{ label: "NAME / INSTITUTION", ph: "Ihr Name oder Schulname", type: "text", name: "Name" }, { label: "E-MAIL", ph: "ihre@email.at", type: "email", name: "email" }].map((f, i) => (
                    <div key={i} style={{ marginBottom: 16 }}><label style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: C.textMuted, display: "block", marginBottom: 8 }}>{f.label}</label><input type={f.type} name={f.name} placeholder={f.ph} required style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/></div>
                  ))}
                  <div style={{ marginBottom: 24 }}><label style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: C.textMuted, display: "block", marginBottom: 8 }}>NACHRICHT</label><textarea rows={5} name="Nachricht" placeholder="Ihre Nachricht oder Bestellanfrage..." required style={{ ...inp, resize: "vertical" }} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/></div>
                  <Btn onClick={() => {}} full>{contactSending ? "WIRD GESENDET..." : "NACHRICHT SENDEN →"}</Btn>
                  {contactError && <div style={{ background: "#FEF2F2", border: `1px solid ${C.red}`, padding: "12px 16px", marginTop: 12 }}><div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.red, lineHeight: 1.5 }}>{contactError}</div></div>}
                </form></>
              )}
            </div></Reveal>
            <Reveal delay={0.1}><div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "40px 36px" }}>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: C.text, margin: "0 0 32px" }}>KONTAKTDATEN</h3>
              {[{ icon: "●", label: "ANSPRECHPARTNER", val: "Michael Blaschegg" }, { icon: "⌂", label: "ADRESSE", val: "Stücklbachstraße 13, 4813 Altmünster" }, { icon: "✉", label: "E-MAIL", val: "blaschegg@traunseenet.at", href: "mailto:blaschegg@traunseenet.at" }, { icon: "☎", label: "TELEFON", val: "+43 (0) 676 935 40 33\n+43 (0) 699 129 613 70", href: "tel:+436769354033" }, { icon: "◆", label: "UID-NUMMER", val: "ATU37758404" }, { icon: "▣", label: "UNTERNEHMENSREGISTER", val: "R013F6512, BH Gmunden" }, { icon: "€", label: "BANKVERBINDUNG ÖSTERREICH", val: "IBAN: AT88 3451 0000 0202 6441 · BIC: RZOOAT2L510" }, { icon: "€", label: "BANKVERBINDUNG DEUTSCHLAND", val: "IBAN: DE22 7105 0000 0000 1254 68 · BIC: BYLADEM1BGL" }].map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 28 }}>
                  <div style={{ width: 36, height: 36, background: `${C.accent}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: C.accent, fontSize: 14 }}>{c.icon}</div>
                  <div><div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: C.textMuted, marginBottom: 4 }}>{c.label}</div>{c.href ? <a href={c.href} style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: C.accent, textDecoration: "none", whiteSpace: "pre-line" }}>{c.val}</a> : <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: C.text, whiteSpace: "pre-line" }}>{c.val}</div>}</div>
                </div>
              ))}
            </div></Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
