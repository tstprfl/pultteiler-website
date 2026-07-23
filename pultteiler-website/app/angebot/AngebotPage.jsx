"use client";
import { useState } from "react";
import { C } from "@/lib/colors";
import { loadEmailJS, EMAILJS_SERVICE, TEMPLATE_ANFRAGE, CONFIRM_PUBLIC_KEY, CONFIRM_SERVICE, CONFIRM_TEMPLATE } from "@/lib/emailjs";

// Bestätigung nur senden, wenn der neue Account vollständig hinterlegt ist
const CONFIRM_ENABLED = Boolean(CONFIRM_PUBLIC_KEY && CONFIRM_SERVICE && CONFIRM_TEMPLATE);
import { CONTACT } from "@/lib/site";
import { Reveal, Heading, Btn } from "@/components/ui";

const LAND_HINWEIS = {
  "Österreich": "🇦🇹 Kauf auf Rechnung. Bundesschulen erhalten auf Wunsch eine E-Rechnung — bitte EKG-Nummer unten angeben.",
  "Deutschland": "🇩🇪 Kauf auf Rechnung. Mit Ihrer deutschen UID-Nummer liefern wir steuerfrei — ein deutsches Bankkonto für die Zahlung ist vorhanden.",
  "Schweiz": "🇨🇭 Kauf auf Rechnung. Lieferung steuerfrei und unverzollt — der angebotene Preis ist Ihr Endpreis, Lieferung inklusive.",
  "Anderes Land": "🌍 Gerne prüfen wir Lieferung und Konditionen für Ihr Land und melden uns mit einem individuellen Angebot.",
};

export default function AngebotPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [land, setLand] = useState("Österreich");

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
      `ANGEBOTSANFRAGE über pultteiler.eu/angebot`,
      ``,
      `Einrichtung:      ${d["Schulname"] || "–"}`,
      `Typ:              ${d["Einrichtungstyp"] || "–"}`,
      `Land:             ${d["Land"] || "–"}`,
      `Gewünschtes Set:  ${d["Set"] || "–"}`,
      `Menge:            ${d["Menge"] || "–"}`,
    ].join("\n");

    const params = {
      kunde_email: d["email"] || "",
      order_nr: "ANGEBOTSANFRAGE",
      region: d["Land"] || "–",
      bestellung,
      versand: "–",
      gesamt: "Angebot wird erstellt",
      adresse: [d["Schulname"], d["Ansprechperson"]].filter(Boolean).join("\n"),
      telefon: d["Telefon"] || "–",
      uid: d["UID-Nummer"] || "–",
      einkaufergruppe: d["EKG-Nummer"] || "–",
      anmerkungen: d["Nachricht"] || "–",
    };

    try {
      await loadEmailJS();
      // 1) Benachrichtigung an Schulmittel Blaschegg (ALTER Account, per init gesetzt)
      await window.emailjs.send(EMAILJS_SERVICE, TEMPLATE_ANFRAGE, params);
      // 2) Eingangsbestätigung an die anfragende Schule (NEUER Account, eigener Public Key)
      if (CONFIRM_ENABLED) {
        try {
          await window.emailjs.send(CONFIRM_SERVICE, CONFIRM_TEMPLATE, params, { publicKey: CONFIRM_PUBLIC_KEY });
        } catch (confErr) {
          console.warn("Bestätigungsmail an Anfragenden konnte nicht gesendet werden:", confErr);
        }
      }
      setSent(true);
    } catch (err) {
      setError(`Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an ${CONTACT.email}`);
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Heading
            overline="ANGEBOT ANFORDERN"
            title="IHR UNVERBINDLICHES ANGEBOT"
            align="center"
            sub="Sagen Sie uns, was Ihre Schule braucht — Sie erhalten kurzfristig ein schriftliches Angebot. Kauf auf Rechnung, keine Kreditkarte, keine Vorkasse."
          />

          {/* Kauf-auf-Rechnung-Hinweis — immer sichtbar */}
          <Reveal>
            <div style={{ background: `${C.accent}10`, border: `1px solid ${C.accent}40`, padding: "18px 24px", marginBottom: 2, textAlign: "center" }}>
              <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", color: C.text }}>
                ✓ KAUF AUF RECHNUNG — SO BESTELLEN SCHULEN: erst die Lieferung, dann die Rechnung.
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "40px 36px" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "64px 0" }}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, color: C.green }}>✓</div>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: C.text, margin: "12px 0 8px" }}>ANFRAGE EINGEGANGEN</h3>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.6 }}>
                    Vielen Dank! Wir melden uns kurzfristig mit Ihrem Angebot.
                    {CONFIRM_ENABLED ? <><br/>Eine Eingangsbestätigung ist an Ihre E-Mail-Adresse unterwegs.</> : null}
                    <br/>Bei Rückfragen erreichen Sie uns unter {CONTACT.phone1}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={field}>
                    <label style={label} htmlFor="ang-schule">SCHULE / INSTITUTION *</label>
                    <input id="ang-schule" type="text" name="Schulname" placeholder="z. B. Volksschule Musterstadt" required style={inp} {...focus}/>
                  </div>
                  <div className="hero-g" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div style={field}>
                      <label style={label} htmlFor="ang-person">ANSPRECHPERSON *</label>
                      <input id="ang-person" type="text" name="Ansprechperson" placeholder="Vor- und Nachname" required style={inp} {...focus}/>
                    </div>
                    <div style={field}>
                      <label style={label} htmlFor="ang-email">E-MAIL *</label>
                      <input id="ang-email" type="email" name="email" placeholder="ihre@schule.at" required style={inp} {...focus}/>
                    </div>
                  </div>
                  <div className="hero-g" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div style={field}>
                      <label style={label} htmlFor="ang-tel">TELEFON</label>
                      <input id="ang-tel" type="tel" name="Telefon" placeholder="Für Rückfragen (optional)" style={inp} {...focus}/>
                    </div>
                    <div style={field}>
                      <label style={label} htmlFor="ang-land">LAND *</label>
                      <select id="ang-land" name="Land" required value={land} onChange={(e) => setLand(e.target.value)} style={{ ...inp, cursor: "pointer" }} {...focus}>
                        <option>Österreich</option>
                        <option>Deutschland</option>
                        <option>Schweiz</option>
                        <option>Anderes Land</option>
                      </select>
                    </div>
                  </div>

                  {/* Länderspezifischer Hinweis */}
                  <div style={{ background: C.bgElevated, border: `1px solid ${C.border}`, padding: "12px 16px", marginBottom: 18 }}>
                    <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted, lineHeight: 1.6, margin: 0 }}>{LAND_HINWEIS[land]}</p>
                  </div>

                  {land === "Österreich" && (
                    <div style={field}>
                      <label style={label} htmlFor="ang-ekg">EKG-NUMMER (OPTIONAL — FÜR E-RECHNUNG AN BUNDESSCHULEN)</label>
                      <input id="ang-ekg" type="text" name="EKG-Nummer" placeholder="Ihre Einkäufergruppe, z. B. für Bundesschulen" style={inp} {...focus}/>
                    </div>
                  )}
                  {land === "Deutschland" && (
                    <div style={field}>
                      <label style={label} htmlFor="ang-uid">UID-NUMMER (OPTIONAL — FÜR STEUERFREIE LIEFERUNG)</label>
                      <input id="ang-uid" type="text" name="UID-Nummer" placeholder="DE…" style={inp} {...focus}/>
                    </div>
                  )}

                  <div className="hero-g" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div style={field}>
                      <label style={label} htmlFor="ang-typ">EINRICHTUNGSTYP *</label>
                      <select id="ang-typ" name="Einrichtungstyp" required style={{ ...inp, cursor: "pointer" }} {...focus}>
                        <option>Volksschule / Grundschule / Primarstufe</option>
                        <option>Sekundarstufe (Mittelschule, Gymnasium, Berufsschule)</option>
                        <option>Hochschule / Universität / Prüfungszentrum</option>
                        <option>Sonstige Einrichtung</option>
                      </select>
                    </div>
                    <div style={field}>
                      <label style={label} htmlFor="ang-set">GEWÜNSCHTES SET</label>
                      <select id="ang-set" name="Set" style={{ ...inp, cursor: "pointer" }} {...focus}>
                        <option>Bitte beraten Sie mich</option>
                        <option>Set A — Gelb — bis 5. Schuljahr (Platte 50×30 cm)</option>
                        <option>Set B — Gelb — ab 6. Schuljahr (Platte 50×40 cm)</option>
                        <option>Set B — Grau — ab 6. Schuljahr (Platte 50×40 cm)</option>
                        <option>Ersatzteile (Platten, Klammern, Koffer)</option>
                      </select>
                    </div>
                  </div>
                  <div style={field}>
                    <label style={label} htmlFor="ang-menge">MENGE *</label>
                    <input id="ang-menge" type="text" name="Menge" placeholder="z. B. 3 Koffer à 12 Teiler — oder: 250 Teiler für Prüfungszentrum" required style={inp} {...focus}/>
                  </div>
                  <div style={{ marginBottom: 26 }}>
                    <label style={label} htmlFor="ang-msg">IHRE NACHRICHT</label>
                    <textarea id="ang-msg" rows={4} name="Nachricht" placeholder="Wunschtermin, Fragen, besondere Anforderungen … (optional)" style={{ ...inp, resize: "vertical" }} {...focus}/>
                  </div>
                  <Btn onClick={() => {}} full>{sending ? "WIRD GESENDET..." : "ANGEBOT ANFORDERN →"}</Btn>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, color: C.textMuted, textAlign: "center", marginTop: 14, lineHeight: 1.6 }}>
                    Unverbindlich & kostenlos. Ihre Daten verwenden wir ausschließlich zur Angebotserstellung — siehe <a href="/datenschutz" style={{ color: C.accent }}>Datenschutzerklärung</a>.
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
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "28px 36px", marginTop: 2, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: C.textMuted, marginBottom: 4 }}>LIEBER DIREKT SPRECHEN?</div>
                <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: C.text }}>{CONTACT.person} — <a href="tel:+436769354033" style={{ color: C.accent, textDecoration: "none" }}>{CONTACT.phone1}</a></div>
              </div>
              <Btn href="/kontakt" variant="secondary">ZUM KONTAKT</Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
