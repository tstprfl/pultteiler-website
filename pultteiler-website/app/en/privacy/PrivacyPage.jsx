"use client";
import { C } from "@/lib/colors";
import { Heading } from "@/components/ui";

const s = { fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 15, color: "#5A6B6B", lineHeight: 1.75, margin: "0 0 20px" };
const h = { fontFamily: "'Archivo Variable', sans-serif", fontWeight: 600, fontSize: 24, color: "#1A2A2A", margin: "40px 0 16px" };

export default function PrivacyPage() {
  return (
    <div lang="en" style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Heading as="h1" overline="Legal" title="Privacy policy"/>
          <div style={{ background: `${C.accent}10`, border: `1px solid ${C.accent}40`, padding: "14px 20px", marginBottom: 2 }}>
            <p style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 13, color: C.text, lineHeight: 1.6, margin: 0 }}>Convenience translation. Only the <a href="/datenschutz" style={{ color: C.accentText }}>German version</a> of this privacy policy is legally binding.</p>
          </div>
          <div className="card-pad" style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "48px 40px" }}>
            <h2 style={{ ...h, marginTop: 0 }}>1. Controller</h2>
            <p style={s}>Schulmittel Blaschegg<br/>Michael Blaschegg<br/>Stücklbachstraße 13, 4813 Altmünster, Austria<br/>Email: <a href="mailto:blaschegg@traunseenet.at" style={{ color: C.accentText, textDecoration: "none" }}>blaschegg@traunseenet.at</a><br/>Phone: +43 (0) 676 935 40 33</p>

            <h2 style={h}>2. Collection and processing of personal data</h2>
            <p style={s}>We collect and process personal data only within the framework of the applicable data protection laws, in particular the EU General Data Protection Regulation (GDPR) and the Austrian Data Protection Act (DSG). Personal data is only collected if you provide it to us voluntarily, e.g. when placing an order, making a contact request or registering.</p>

            <h2 style={h}>3. Purpose of data processing</h2>
            <p style={s}>Your personal data is processed for the following purposes:</p>
            <p style={{ ...s, paddingLeft: 16 }}>— Processing of orders and deliveries (Art. 6(1)(b) GDPR)<br/>— Answering contact requests (Art. 6(1)(b) GDPR)<br/>— Invoicing and accounting records (Art. 6(1)(c) GDPR)<br/>— Issuing e-invoices to Austrian federal schools (Art. 6(1)(c) GDPR)</p>

            <h2 style={h}>4. Disclosure of data to third parties</h2>
            <p style={s}>Your data is only passed on to third parties insofar as this is necessary to perform the contract (e.g. transmitting the delivery address to the parcel service) or if there is a legal obligation. Beyond that, your data is not passed on to third parties.</p>

            <h2 style={h}>5. EmailJS: sending emails</h2>
            <p style={s}>To send order and contact confirmations, we use the EmailJS service (emailjs.com). The data you enter (name, email address, order data) is processed via the EmailJS servers in order to deliver emails. EmailJS processes data in accordance with its own privacy policy. The legal basis is Art. 6(1)(b) GDPR (performance of a contract).</p>

            <h2 style={h}>6. Hosting: Vercel</h2>
            <p style={s}>This website is hosted by Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA). When you visit the website, technical data (IP address, browser type, time of access) is automatically recorded in server log files. The legal basis is Art. 6(1)(f) GDPR (legitimate interest in the secure provision of the website). Vercel is certified under the EU-US Data Privacy Framework.</p>

            <h2 style={h}>7. Fonts</h2>
            <p style={s}>The fonts used on this website (Archivo, Source Sans 3) are embedded locally and delivered together with the website by our hosting provider. No connection is made to servers of Google or any other font provider.</p>

            <h2 style={h}>8. Cookies</h2>
            <p style={s}>This website sets no tracking cookies and uses no advertising tracking. Technically necessary storage (for example the contents of your cart and the selected delivery country) takes place in your browser's local storage and is required to operate the website (Section 165 (3) of the Austrian Telecommunications Act 2021). No consent is required for this, so no cookie banner is shown.</p>

            <h2 style={h}>9. Cookieless audience measurement (Vercel Web Analytics)</h2>
            <p style={s}>To learn how often and from where our pages are visited, we use Vercel Web Analytics, a service of our hosting provider Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA). The service sets no cookies and stores no identifiers on your device. For each page view it records: time, page visited, referring website, country and region (derived from the IP address; the IP address itself is not stored), device type, operating system and browser. To distinguish visits within one day, a hash is created from the request and discarded after 24 hours. This does not allow linking with other websites or identifying individual persons; we only see aggregated statistics.</p>
            <p style={s}>The legal basis is our legitimate interest in statistical analysis and improvement of the website (Art. 6 (1) (f) GDPR). Vercel Inc. is certified under the EU-US Data Privacy Framework; in addition, the EU Commission's standard contractual clauses apply. Further information: <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: C.accentText, textDecoration: "none" }}>vercel.com/docs/analytics/privacy-policy</a>.</p>

            <h2 style={h}>10. Storage period</h2>
            <p style={s}>Personal data is only stored for as long as necessary for the respective purpose or as required by statutory retention periods. Order data is stored in accordance with the tax retention obligation (7 years pursuant to § 132 BAO, Austrian Federal Fiscal Code).</p>

            <h2 style={h}>11. Your rights</h2>
            <p style={s}>Under the GDPR you have the following rights:</p>
            <p style={{ ...s, paddingLeft: 16 }}>— Right of access (Art. 15 GDPR)<br/>— Right to rectification (Art. 16 GDPR)<br/>— Right to erasure (Art. 17 GDPR)<br/>— Right to restriction of processing (Art. 18 GDPR)<br/>— Right to data portability (Art. 20 GDPR)<br/>— Right to object (Art. 21 GDPR)</p>
            <p style={s}>To exercise your rights, please contact: <a href="mailto:blaschegg@traunseenet.at" style={{ color: C.accentText, textDecoration: "none" }}>blaschegg@traunseenet.at</a></p>

            <h2 style={h}>12. Right to lodge a complaint</h2>
            <p style={s}>You have the right to lodge a complaint with the competent data protection authority:</p>
            <p style={s}>Austrian Data Protection Authority (Österreichische Datenschutzbehörde)<br/>Barichgasse 40–42, 1030 Vienna, Austria<br/><a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" style={{ color: C.accentText, textDecoration: "none" }}>www.dsb.gv.at</a></p>

            <h2 style={h}>13. Changes</h2>
            <p style={{ ...s, marginBottom: 0 }}>We reserve the right to amend this privacy policy as necessary to comply with current legal requirements. Version: April 2026.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
