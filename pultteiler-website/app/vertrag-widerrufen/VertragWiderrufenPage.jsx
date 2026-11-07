"use client";
import { useState } from "react";
import { C } from "@/lib/colors";
import { CONTACT } from "@/lib/site";
import { loadEmailJS, EMAILJS_SERVICE, TEMPLATE_ANFRAGE, TEMPLATE_WIDERRUF_KUNDE, CONFIRM_SERVICE, CONFIRM_PUBLIC_KEY } from "@/lib/emailjs";
import { Heading } from "@/components/ui";

// Online-Rücktrittsfunktion nach § 13a FAGG:
// Abs 3: Name, Angaben zum Vertrag, E-Mail für die Eingangsbestätigung; Abs 4: Knopf „Widerruf bestätigen“;
// Abs 5: Eingangsbestätigung mit Inhalt, Datum und Uhrzeit.
const font = "'Source Sans 3 Variable', sans-serif";

export default function VertragWiderrufenPage() {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(null);   // { name, vertrag, email, eingang, inhalt, mailOk }

  const inp = { width: "100%", padding: "14px 16px", background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 6, fontFamily: font, fontSize: 16, color: C.text, boxSizing: "border-box" };
  const label = { fontFamily: font, fontSize: 14, fontWeight: 700, color: C.text, display: "block", marginBottom: 6 };
  const hint = { fontFamily: font, fontSize: 14, color: C.textMuted, margin: "6px 0 0" };

  const submit = async (e) => {
    e.preventDefault();
    setSending(true); setError("");
    const fd = new FormData(e.target);
    const name = (fd.get("name") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const bestellnr = (fd.get("bestellnr") || "").toString().trim();
    const bestelltam = (fd.get("bestelltam") || "").toString().trim();
    const waren = (fd.get("waren") || "").toString().trim();
    const vertrag = [bestellnr && `Bestellnummer ${bestellnr}`, bestelltam && `bestellt am ${bestelltam}`, waren && `Waren: ${waren}`].filter(Boolean).join(", ");
    const eingang = new Date().toLocaleString("de-AT", { timeZone: "Europe/Vienna", day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const inhalt = `Hiermit widerrufe ich den von mir abgeschlossenen Vertrag (${vertrag}). Name: ${name}. E-Mail für die Eingangsbestätigung: ${email}.`;
    try {
      await loadEmailJS();
      // Meldung an Blaschegg (gleiche Vorlage wie Kontakt und Bestellung)
      await window.emailjs.send(EMAILJS_SERVICE, TEMPLATE_ANFRAGE, {
        kunde_email: email, order_nr: "WIDERRUF", region: "Online-Widerruf (§ 13a FAGG)",
        betreff: `Widerruf von ${name}${bestellnr ? ` zu Bestellung ${bestellnr}` : ""}`,
        bestellung: `${inhalt}\n\nEingang: ${eingang} (Wien)`, versand: "–", gesamt: "–",
        adresse: name, telefon: "–", uid: "–", einkaufergruppe: "–", anmerkungen: "Widerruf über pultteiler.eu/vertrag-widerrufen",
      });
      // Eingangsbestätigung an den Kunden (zweiter EmailJS-Account)
      let mailOk = false;
      if (TEMPLATE_WIDERRUF_KUNDE) {
        try {
          await window.emailjs.send(CONFIRM_SERVICE, TEMPLATE_WIDERRUF_KUNDE, { name, vertrag, kunde_email: email, eingang, inhalt }, { publicKey: CONFIRM_PUBLIC_KEY });
          mailOk = true;
        } catch (err) { console.warn("Eingangsbestätigung konnte nicht gesendet werden:", err); }
      }
      setDone({ name, vertrag, email, eingang, inhalt, mailOk });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(`Der Widerruf konnte nicht übermittelt werden. Bitte versuchen Sie es erneut oder senden Sie Ihren Widerruf per E-Mail an ${CONTACT.email} oder per Post. Die Frist ist auch damit gewahrt.`);
    } finally { setSending(false); }
  };

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <Heading as="h1" overline="Widerruf" title="Vertrag widerrufen" sub="Als Verbraucher können Sie Ihren Kauf binnen 14 Tagen ab Erhalt der Ware ohne Angabe von Gründen widerrufen. Füllen Sie dazu das Formular aus und klicken Sie auf „Widerruf bestätigen“."/>
          <div className="card-pad" style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "40px 36px" }}>
            {done ? (
              <div role="status">
                <div style={{ fontFamily: "'Archivo Variable', sans-serif", fontWeight: 600, fontSize: 28, color: C.text, marginBottom: 12 }}>Ihr Widerruf ist eingegangen</div>
                <p style={{ fontFamily: font, fontSize: 16, color: C.textMuted, lineHeight: 1.6, margin: "0 0 20px" }}>
                  {done.mailOk ? `Eine Eingangsbestätigung haben wir an ${done.email} gesendet.` : "Bitte bewahren Sie diese Bestätigung auf, zum Beispiel als Ausdruck oder Bildschirmfoto."}
                </p>
                <dl style={{ fontFamily: font, fontSize: 15, color: C.text, lineHeight: 1.6, margin: 0, display: "grid", gridTemplateColumns: "max-content 1fr", gap: "6px 16px" }}>
                  <dt style={{ color: C.textMuted }}>Eingang</dt><dd style={{ margin: 0, fontWeight: 700 }}>{done.eingang} (Wien)</dd>
                  <dt style={{ color: C.textMuted }}>Name</dt><dd style={{ margin: 0 }}>{done.name}</dd>
                  <dt style={{ color: C.textMuted }}>Vertrag</dt><dd style={{ margin: 0 }}>{done.vertrag}</dd>
                  <dt style={{ color: C.textMuted }}>E-Mail</dt><dd style={{ margin: 0 }}>{done.email}</dd>
                  <dt style={{ color: C.textMuted }}>Erklärung</dt><dd style={{ margin: 0 }}>{done.inhalt}</dd>
                </dl>
                <p style={{ fontFamily: font, fontSize: 14, color: C.textMuted, lineHeight: 1.6, margin: "24px 0 0" }}>Bitte senden Sie die Ware binnen 14 Tagen an {CONTACT.company}, {CONTACT.street}, {CONTACT.city}, {CONTACT.country} zurück. Bei Fragen erreichen Sie uns unter <a href={CONTACT.tel1} style={{ color: C.accentText }}>{CONTACT.phone1}</a>.</p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="wr-name" style={label}>Ihr Name *</label>
                  <input id="wr-name" name="name" type="text" required autoComplete="name" style={inp}/>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="wr-email" style={label}>E-Mail-Adresse für die Eingangsbestätigung *</label>
                  <input id="wr-email" name="email" type="email" required autoComplete="email" style={inp}/>
                </div>
                <fieldset style={{ border: `1px solid ${C.border}`, borderRadius: 6, padding: "16px 18px 18px", margin: "0 0 20px" }}>
                  <legend style={{ ...label, padding: "0 6px", marginBottom: 0 }}>Welchen Vertrag widerrufen Sie? *</legend>
                  <p style={{ ...hint, margin: "0 0 14px" }}>Die Bestellnummer steht in Ihrer Bestellbestätigung. Wenn Sie sie nicht zur Hand haben, genügen Bestelldatum und Waren.</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: 14, marginBottom: 14 }}>
                    <div><label htmlFor="wr-nr" style={{ ...label, fontWeight: 600 }}>Bestellnummer</label><input id="wr-nr" name="bestellnr" type="text" inputMode="numeric" style={inp}/></div>
                    <div><label htmlFor="wr-datum" style={{ ...label, fontWeight: 600 }}>Bestellt am</label><input id="wr-datum" name="bestelltam" type="date" style={inp}/></div>
                  </div>
                  <label htmlFor="wr-waren" style={{ ...label, fontWeight: 600 }}>Waren</label>
                  <textarea id="wr-waren" name="waren" rows={3} required placeholder="z. B. 1 Koffer-Set A Gelb" style={{ ...inp, resize: "vertical" }}/>
                </fieldset>
                <button type="submit" disabled={sending} style={{ width: "100%", background: sending ? C.textMuted : C.tafel, color: C.white, border: "none", borderRadius: 6, padding: "17px", fontFamily: font, fontSize: 16, fontWeight: 700, letterSpacing: "0.04em", cursor: sending ? "wait" : "pointer" }}>
                  {sending ? "Wird übermittelt ..." : "Widerruf bestätigen"}
                </button>
                {error && <div role="alert" style={{ background: "#FEF2F2", border: `1px solid ${C.red}`, borderRadius: 6, padding: "12px 16px", marginTop: 14, fontFamily: font, fontSize: 14, color: C.red, lineHeight: 1.5 }}>{error}</div>}
                <p style={{ ...hint, marginTop: 16 }}>Die Frist ist gewahrt, wenn Sie den Widerruf vor ihrem Ablauf absenden. Sie können auch per E-Mail an {CONTACT.email} oder per Post widerrufen, dafür steht das <a href="/widerrufsbelehrung" style={{ color: C.accentText }}>Muster-Widerrufsformular</a> bereit.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
