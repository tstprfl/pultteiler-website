"use client";
import { useState } from "react";
import { C } from "@/lib/colors";
import { loadEmailJS, EMAILJS_SERVICE, TEMPLATE_ANFRAGE } from "@/lib/emailjs";
import { CONTACT } from "@/lib/site";
import { Reveal, Heading, Btn } from "@/components/ui";

// Englisches Angebotsformular. Die Benachrichtigung an Blaschegg läuft über dieselbe
// EmailJS-Vorlage wie /angebot, markiert als englische Anfrage. Eine automatische
// Eingangsbestätigung gibt es hier bewusst nicht (die Vorlage dafür ist deutsch).
export default function QuotePage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const inp = { width: "100%", padding: "14px 16px", background: C.bgCard, border: `1px solid ${C.border}`, fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.text, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" };
  const label = { fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: C.textMuted, display: "block", marginBottom: 8 };
  const field = { marginBottom: 18 };
  const focus = { onFocus: (e) => (e.target.style.borderColor = C.accent), onBlur: (e) => (e.target.style.borderColor = C.border) };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    const fd = new FormData(e.target);
    const d = {};
    fd.forEach((v, k) => { d[k] = v; });

    const bestellung = [
      `ANGEBOTSANFRAGE (ENGLISCH) über pultteiler.eu/en/quote`,
      `Bitte auf Englisch antworten.`,
      ``,
      `Einrichtung:      ${d["Schulname"] || "–"}`,
      `Typ:              ${d["Einrichtungstyp"] || "–"}`,
      `Land:             ${d["Land"] || "–"}`,
      `Gewünschtes Set:  ${d["Set"] || "–"}`,
      `Menge:            ${d["Menge"] || "–"}`,
    ].join("\n");

    const params = {
      kunde_email: d["email"] || "",
      order_nr: "ANGEBOTSANFRAGE (EN)",
      region: d["Land"] || "–",
      bestellung,
      versand: "–",
      gesamt: "Angebot wird erstellt",
      adresse: [d["Schulname"], d["Ansprechperson"]].filter(Boolean).join("\n"),
      telefon: d["Telefon"] || "–",
      uid: d["UID-Nummer"] || "–",
      einkaufergruppe: "–",
      anmerkungen: d["Nachricht"] || "–",
    };

    try {
      await loadEmailJS();
      await window.emailjs.send(EMAILJS_SERVICE, TEMPLATE_ANFRAGE, params);
      setSent(true);
    } catch (err) {
      setError(`Your request could not be sent. Please try again or email us directly at ${CONTACT.email}`);
    } finally {
      setSending(false);
    }
  };

  return (
    <div lang="en" style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Heading
            overline="REQUEST A QUOTE"
            title="YOUR NON-BINDING QUOTE"
            align="center"
            sub="Tell us what your institution needs and you will soon receive a written quote, including delivery terms for your country."
          />

          <Reveal delay={0.05}>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "40px 36px" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "64px 0" }}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, color: C.green }}>✓</div>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: C.text, margin: "12px 0 8px" }}>REQUEST RECEIVED</h3>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.6 }}>
                    Thank you! We will get back to you soon with your quote.
                    <br/>For questions you can reach us at {CONTACT.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={field}>
                    <label style={label} htmlFor="q-org">SCHOOL / INSTITUTION *</label>
                    <input id="q-org" type="text" name="Schulname" placeholder="e.g. University of …" required style={inp} {...focus}/>
                  </div>
                  <div className="hero-g" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div style={field}>
                      <label style={label} htmlFor="q-person">CONTACT PERSON *</label>
                      <input id="q-person" type="text" name="Ansprechperson" placeholder="First and last name" required style={inp} {...focus}/>
                    </div>
                    <div style={field}>
                      <label style={label} htmlFor="q-email">EMAIL *</label>
                      <input id="q-email" type="email" name="email" placeholder="you@institution.org" required style={inp} {...focus}/>
                    </div>
                  </div>
                  <div className="hero-g" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div style={field}>
                      <label style={label} htmlFor="q-country">COUNTRY *</label>
                      <input id="q-country" type="text" name="Land" placeholder="e.g. Czech Republic" required style={inp} {...focus}/>
                    </div>
                    <div style={field}>
                      <label style={label} htmlFor="q-tel">PHONE</label>
                      <input id="q-tel" type="tel" name="Telefon" placeholder="For questions (optional)" style={inp} {...focus}/>
                    </div>
                  </div>
                  <div className="hero-g" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div style={field}>
                      <label style={label} htmlFor="q-type">TYPE OF INSTITUTION *</label>
                      <select id="q-type" name="Einrichtungstyp" required style={{ ...inp, cursor: "pointer" }} {...focus}>
                        <option>University / college / exam centre</option>
                        <option>Secondary school</option>
                        <option>Primary school</option>
                        <option>Other institution</option>
                      </select>
                    </div>
                    <div style={field}>
                      <label style={label} htmlFor="q-set">PREFERRED SET</label>
                      <select id="q-set" name="Set" style={{ ...inp, cursor: "pointer" }} {...focus}>
                        <option>Please advise me</option>
                        <option>Set A: yellow, up to school year 5 (panel 50×30 cm)</option>
                        <option>Set B: yellow, from school year 6 (panel 50×40 cm)</option>
                        <option>Set B: grey, from school year 6 (panel 50×40 cm)</option>
                        <option>Spare parts (panels, clamps, cases)</option>
                      </select>
                    </div>
                  </div>
                  <div className="hero-g" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div style={field}>
                      <label style={label} htmlFor="q-qty">QUANTITY *</label>
                      <input id="q-qty" type="text" name="Menge" placeholder="e.g. 250 dividers" required style={inp} {...focus}/>
                    </div>
                    <div style={field}>
                      <label style={label} htmlFor="q-vat">VAT ID (OPTIONAL)</label>
                      <input id="q-vat" type="text" name="UID-Nummer" placeholder="If available" style={inp} {...focus}/>
                    </div>
                  </div>
                  <div style={{ marginBottom: 26 }}>
                    <label style={label} htmlFor="q-msg">YOUR MESSAGE</label>
                    <textarea id="q-msg" rows={4} name="Nachricht" placeholder="Preferred date, questions, special requirements … (optional)" style={{ ...inp, resize: "vertical" }} {...focus}/>
                  </div>
                  <Btn onClick={() => {}} full>{sending ? "SENDING..." : "REQUEST A QUOTE →"}</Btn>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, color: C.textMuted, textAlign: "center", marginTop: 14, lineHeight: 1.6 }}>
                    Non-binding and free of charge. We use your data only to prepare your quote, see our <a href="/en/privacy" style={{ color: C.accent }}>privacy policy</a>.
                  </p>
                  {error && (
                    <div style={{ background: "#FEF2F2", border: `1px solid ${C.red}`, padding: "12px 16px", marginTop: 12 }}>
                      <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.red, lineHeight: 1.5 }}>{error}</div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "28px 36px", marginTop: 2 }}>
              <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: C.textMuted, marginBottom: 4 }}>PREFER TO WRITE DIRECTLY?</div>
              <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: C.text }}>{CONTACT.person}: <a href={`mailto:${CONTACT.email}`} style={{ color: C.accent, textDecoration: "none" }}>{CONTACT.email}</a></div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
