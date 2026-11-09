"use client";
import { useState } from "react";
import { C } from "@/lib/colors";
import { CONTACT } from "@/lib/site";
import { loadEmailJS } from "@/lib/emailjs";
import { Reveal, Heading, Btn } from "@/components/ui";

export default function KontaktPage() {
  const [sent, setSent] = useState(false);
  const [contactSending, setContactSending] = useState(false);
  const [contactError, setContactError] = useState("");
  const inp = { width: "100%", padding: "14px 16px", background: C.bgCard, border: `1px solid ${C.border}`, fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 14, color: C.text, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" };

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
        kunde_email: data["email"] || "", order_nr: "KONTAKT", region: "Kontaktanfrage", betreff: `Kontaktanfrage von ${data["Name"] || "unbekannt"}`,
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
          <Heading as="h1" overline="Kontakt" title="Wir sind für Sie da" align="center" sub="Fragen zu Bestellung, Stückzahlen, Sonderwünschen oder Lieferung in andere Länder? Schreiben Sie uns, wir antworten kurzfristig."/>
          <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", flexDirection: "column", gap: 2 }}>
            {/* Am schnellsten telefonisch: großer Anruf-Kasten vor dem Formular */}
            <div className="card-pad" style={{ background: C.dark, color: C.white, padding: "32px 36px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 28px" }}>
              <div style={{ flex: "1 1 240px", minWidth: 0 }}>
                <div style={{ fontFamily: "'Archivo Variable', sans-serif", fontWeight: 600, fontSize: 26, marginBottom: 6 }}>Am schnellsten telefonisch</div>
                <div style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>Michael Blaschegg berät Sie persönlich zu Bestellung, Stückzahlen und Lieferung.</div>
              </div>
              <div className="call-btns" style={{ display: "flex", flexDirection: "column", gap: 10, flex: "1 1 250px", minWidth: 0 }}>
                <a href={CONTACT.tel1} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: C.white, color: C.text, borderRadius: 6, padding: "14px 18px", fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 18, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>{CONTACT.phone1}</a>
                <a href={CONTACT.tel2} aria-label={`Zusatznummer: ${CONTACT.phone2}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, border: "1.5px solid rgba(255,255,255,0.45)", color: C.white, borderRadius: 6, padding: "10px 16px", fontFamily: "'Source Sans 3 Variable', sans-serif", textDecoration: "none" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg><span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1.3 }}><span style={{ fontSize: 14, opacity: 0.8 }}>Zusatznummer</span><span style={{ fontSize: 17, fontWeight: 700, whiteSpace: "nowrap" }}>{CONTACT.phone2}</span></span></a>
                <a href={CONTACT.tel3} aria-label={`Festnetz: ${CONTACT.phone3}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, border: "1.5px solid rgba(255,255,255,0.45)", color: C.white, borderRadius: 6, padding: "10px 16px", fontFamily: "'Source Sans 3 Variable', sans-serif", textDecoration: "none" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg><span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1.3 }}><span style={{ fontSize: 14, opacity: 0.8 }}>Festnetz</span><span style={{ fontSize: 17, fontWeight: 700, whiteSpace: "nowrap" }}>{CONTACT.phone3}</span></span></a>
              </div>
            </div>
            <Reveal><div className="card-pad" style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "40px 36px" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "64px 0" }}><div style={{ fontFamily: "'Archivo Variable', sans-serif", fontWeight: 600, fontSize: 48, color: C.green }}>✓</div><h2 style={{ fontFamily: "'Archivo Variable', sans-serif", fontWeight: 600, fontSize: 28, color: C.text, margin: "12px 0 8px" }}>Nachricht gesendet</h2><p style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 14, color: C.textMuted }}>Wir melden uns in Kürze.</p></div>
              ) : (
                <><h2 style={{ fontFamily: "'Archivo Variable', sans-serif", fontWeight: 600, fontSize: 24, color: C.text, margin: "0 0 28px" }}>Nachricht senden</h2>
                <form onSubmit={handleContactSubmit}>
                  {[{ label: "Name / Institution", ph: "Ihr Name oder Schulname", type: "text", name: "Name" }, { label: "E-Mail", ph: "ihre@email.at", type: "email", name: "email" }].map((f, i) => (
                    <div key={i} style={{ marginBottom: 16 }}><label style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", color: C.textMuted, display: "block", marginBottom: 8 }} htmlFor={`kontakt-${f.name}`}>{f.label}</label><input id={`kontakt-${f.name}`} type={f.type} name={f.name} placeholder={f.ph} required style={inp} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/></div>
                  ))}
                  <div style={{ marginBottom: 24 }}><label style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", color: C.textMuted, display: "block", marginBottom: 8 }} htmlFor="kontakt-nachricht">Nachricht</label><textarea id="kontakt-nachricht" rows={5} name="Nachricht" placeholder="Ihre Nachricht oder Bestellanfrage..." required style={{ ...inp, resize: "vertical" }} onFocus={e => e.target.style.borderColor = C.accent} onBlur={e => e.target.style.borderColor = C.border}/></div>
                  <Btn onClick={() => {}} full>{contactSending ? "Wird gesendet ..." : "Nachricht senden →"}</Btn>
                  {contactError && <div style={{ background: "#FEF2F2", border: `1px solid ${C.red}`, padding: "12px 16px", marginTop: 12 }}><div style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 14, color: C.red, lineHeight: 1.5 }}>{contactError}</div></div>}
                </form></>
              )}
            </div></Reveal>
            <Reveal delay={0.1}><div className="card-pad" style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "40px 36px" }}>
              <h2 style={{ fontFamily: "'Archivo Variable', sans-serif", fontWeight: 600, fontSize: 28, color: C.text, margin: "0 0 32px" }}>Kontaktdaten</h2>
              {[{ icon: "●", label: "Ansprechpartner", val: "Michael Blaschegg" }, { icon: "⌂", label: "Adresse", val: "Stücklbachstraße 13, 4813 Altmünster" }, { icon: "✉", label: "E-Mail", val: "blaschegg@traunseenet.at", href: "mailto:blaschegg@traunseenet.at" }, { icon: "☎", label: "Telefon", val: "+43 (0) 676 935 40 33", href: "tel:+436769354033" }, { icon: "☎", label: "Zusatznummer", val: "+43 (0) 699 129 613 70", href: "tel:+4369912961370" }, { icon: "☎", label: "Festnetz", val: "+43 (0) 7612 87147", href: "tel:+43761287147" }, { icon: "◆", label: "UID-Nummer", val: "ATU37758404" }, { icon: "▣", label: "Unternehmensregister", val: "R013F6512, BH Gmunden" }, { icon: "€", label: "Bankverbindung Österreich", val: "IBAN: AT88 3451 0000 0202 6441 · BIC: RZOOAT2L510" }, { icon: "€", label: "Bankverbindung Deutschland", val: "IBAN: DE22 7105 0000 0000 1254 68 · BIC: BYLADEM1BGL" }].map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 28 }}>
                  <div style={{ width: 36, height: 36, background: `${C.accent}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: C.accentText, fontSize: 14 }}>{c.icon}</div>
                  <div><div style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: "0.14em", color: C.textMuted, marginBottom: 4 }}>{c.label}</div>{c.href ? <a href={c.href} style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 15, color: C.accentText, textDecoration: "none", whiteSpace: "pre-line" }}>{c.val}</a> : <div style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 15, color: C.text, whiteSpace: "pre-line" }}>{c.val}</div>}</div>
                </div>
              ))}
            </div></Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
