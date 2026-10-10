"use client";
import { C } from "@/lib/colors";
import { Reveal, Heading, Btn } from "@/components/ui";

const s = { fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: "#5A6B6B", lineHeight: 1.75, margin: "0 0 20px" };
const h = { fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 24, color: "#1A2A2A", margin: "40px 0 16px" };
const bullet = (text) => <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: "#5A6B6B", lineHeight: 1.75, margin: "0 0 8px", paddingLeft: 16 }}>— {text}</p>;

export default function ShippingPage() {
  return (
    <div lang="en" style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Heading as="h1" overline="Delivery and returns" title="Shipping and returns"/>
          <div style={{ background: `${C.accent}10`, border: `1px solid ${C.accent}40`, padding: "14px 20px", marginBottom: 2 }}>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.text, lineHeight: 1.6, margin: 0 }}>Convenience translation. Only the <a href="/versand" style={{ color: C.accentText }}>German version</a> of the shipping and withdrawal terms is legally binding.</p>
          </div>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 2, marginBottom: 2 }}>
              {[
                { icon: "🇦🇹", label: "Austria", val: "€ 10.00 per order", sub: "incl. VAT, free from 3 case sets" },
                { icon: "🇩🇪", label: "Germany", val: "€ 12.00 per order", sub: "incl. VAT, free from 3 case sets" },
                { icon: "🇨🇭", label: "Switzerland", val: "€ 25.00 per order", sub: "tax-free and duty-free, free from 3 case sets" },
                { icon: "🌍", label: "Other countries", val: "On request", sub: "Please contact us" },
              ].map((m, i) => (
                <div key={i} style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "28px 24px", textAlign: "center", transition: "border-color 0.3s" }} onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>{m.icon}</div>
                  <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: C.textMuted, marginBottom: 8 }}>{m.label}</div>
                  <div style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 18, color: C.accentText, marginBottom: 4 }}>{m.val}</div>
                  <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: C.textMuted }}>{m.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "48px 40px", marginTop: 2 }}>
            <h2 style={{ ...h, marginTop: 0 }}>1. Shipping terms</h2>
            <p style={s}>We ship all orders directly from our factory in Altmünster on Lake Traunsee, Austria. Shipping is handled by a reliable parcel service. After your order has been received and processed, you will receive a confirmation email.</p>
            <h2 style={h}>2. Delivery times</h2>
            <p style={s}>Delivery usually takes <strong>5 to 10 working days</strong> from order confirmation. Deliveries to Switzerland may take slightly longer. If there is a delay, we will inform you immediately.</p>
            <h2 style={h}>3. Shipping costs in detail</h2>
            {bullet("Austria: € 10.00 flat shipping rate per order (incl. 20% VAT), for case sets and spare parts")}
            {bullet("Germany: € 12.00 flat shipping rate per order (incl. 20% VAT), for case sets and spare parts")}
            {bullet("Switzerland: € 25.00 flat shipping rate per order, tax-free and duty-free")}
            {bullet("Orders of 3 or more case sets: free shipping to all three countries")}
            {bullet("Other countries: shipping costs on request, please contact us")}
            <p style={s}>All shop prices for Austria and Germany include 20% VAT; the VAT contained is shown in the cart and on the invoice.</p>
            <h2 style={h}>4. Delivery to Switzerland</h2>
            <p style={s}>Deliveries to Switzerland are <strong>tax-free and duty-free</strong>. The price shown in the shop plus the flat shipping rate is your final price: no additional customs duties or import taxes are charged to you.</p>
            <h2 style={h}>5. Tax-free delivery to Germany</h2>
            <p style={s}>Companies and institutions in Germany can receive a tax-free intra-community delivery by providing a valid German VAT ID. A German bank account is available for payment.</p>
            <h2 style={h}>6. E-invoices for Austrian federal schools</h2>
            <p style={s}>We issue e-invoices for federal schools in Austria. Please enter your EKG number in the order form.</p>
            <h2 style={h}>7. Right of withdrawal and returns</h2>
            <p style={s}>Consumers within the meaning of the Austrian Consumer Protection Act (KSchG) have the right to <strong>withdraw from the contract within 14 days without giving reasons</strong> (§ 11 FAGG). The period begins on the day on which you or a third party named by you took possession of the goods.</p>
            <p style={s}>To exercise your right of withdrawal, please inform us by email at <a href="mailto:blaschegg@traunseenet.at" style={{ color: C.accentText, textDecoration: "none" }}>blaschegg@traunseenet.at</a> or by post to: Schulmittel Blaschegg, Stücklbachstraße 13, 4813 Altmünster, Austria.</p>
            <h2 style={h}>8. Return shipment</h2>
            <p style={s}>After exercising your right of withdrawal, please send the goods back to our address without delay and at the latest within <strong>14 days</strong>.</p>
            <div style={{ background: C.bgElevated, border: `1px solid ${C.border}`, padding: "20px 24px", marginBottom: 20 }}>
              <p style={{ ...s, margin: 0 }}><strong>Schulmittel Blaschegg</strong><br/>Michael Blaschegg<br/>Stücklbachstraße 13<br/>4813 Altmünster<br/>Austria</p>
            </div>
            <p style={s}>The buyer bears the direct costs of the return. We recommend returning the goods by <strong>Hermes</strong>; the cost is approximately <strong>€ 6.50</strong>.</p>
            <h2 style={h}>9. Refund</h2>
            <p style={s}>After receipt of a valid withdrawal, we will refund the purchase price without delay and at the latest <strong>within 14 days</strong>. The refund is made using the same means of payment as used for the original transaction.</p>
            <h2 style={h}>10. Condition of returned goods</h2>
            <p style={s}>You are only liable for any loss in value of the goods resulting from handling that was not necessary to examine their nature.</p>
            <h2 style={h}>11. Exceptions to the right of withdrawal</h2>
            <p style={{ ...s, marginBottom: 0 }}>The right of withdrawal does not apply to goods made individually to customer specifications. For questions, please contact us at <a href="mailto:blaschegg@traunseenet.at" style={{ color: C.accentText, textDecoration: "none" }}>blaschegg@traunseenet.at</a>.</p>
          </div>
          <Reveal delay={0.2}><div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}><Btn href="/en/quote">Request a quote →</Btn><Btn href="/en/contact" variant="secondary">Questions? Contact us</Btn></div></Reveal>
        </div>
      </section>
    </div>
  );
}
