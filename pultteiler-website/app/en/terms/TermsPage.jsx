"use client";
import { C } from "@/lib/colors";
import { Heading } from "@/components/ui";

const s = { fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: "#5A6B6B", lineHeight: 1.75, margin: "0 0 20px" };
const h = { fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: "#1A2A2A", margin: "40px 0 16px" };

export default function TermsPage() {
  return (
    <div lang="en" style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Heading overline="LEGAL" title="GENERAL TERMS AND CONDITIONS"/>
          <div style={{ background: `${C.accent}10`, border: `1px solid ${C.accent}40`, padding: "14px 20px", marginBottom: 2 }}>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.text, lineHeight: 1.6, margin: 0 }}>Convenience translation. Only the <a href="/agb" style={{ color: C.accent }}>German version</a> of these terms and conditions is legally binding.</p>
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "48px 40px" }}>
            <h2 style={{ ...h, marginTop: 0 }}>§ 1 SCOPE</h2>
            <p style={s}>These General Terms and Conditions apply to all orders placed via the online shop at pultteiler.eu with Schulmittel Blaschegg, Michael Blaschegg, Stücklbachstraße 13, 4813 Altmünster, Austria (hereinafter “Seller”). Deviating terms of the buyer are not recognised unless the Seller expressly agrees to their validity in writing.</p>
            <h2 style={h}>§ 2 CONCLUSION OF CONTRACT</h2>
            <p style={s}>The presentation of the products in the online shop does not constitute a legally binding offer but a non-binding invitation to order (invitatio ad offerendum). By submitting an order, the buyer makes a binding offer to purchase the products in the shopping cart. The purchase contract is only concluded when the Seller confirms the order by email.</p>
            <h2 style={h}>§ 3 PRICES AND PAYMENT</h2>
            <p style={s}>All prices stated for deliveries to Austria and Germany include statutory VAT. For deliveries to Switzerland, the tax-free prices shown in the shop apply (duty-free). Prices subject to change; errors excepted.</p>
            <p style={s}>Payment is made by invoice. The invoice is enclosed with the delivery or sent by email. The payment term is 14 days from the invoice date unless agreed otherwise.</p>
            <h2 style={h}>§ 4 DELIVERY AND SHIPPING</h2>
            <p style={s}>Delivery is made to the delivery address specified by the buyer. Shipping within Austria and Germany is free of charge when ordering a case set. For orders of spare parts (without a case set), shipping costs of € 8.70 apply. Deliveries to Switzerland include delivery and are tax-free and duty-free.</p>
            <p style={s}>Delivery usually takes 5 to 10 working days. Different delivery times are communicated in individual cases.</p>
            <h2 style={h}>§ 5 RIGHT OF WITHDRAWAL FOR CONSUMERS</h2>
            <p style={s}>Consumers within the meaning of the Austrian Consumer Protection Act (KSchG) have the right to withdraw from the contract within 14 days without giving reasons (§ 11 FAGG). The withdrawal period begins on the day on which the buyer or a third party named by the buyer took possession of the goods.</p>
            <p style={s}>To exercise the right of withdrawal, the Seller must be informed of the decision to withdraw by means of a clear statement (e.g. by email to <a href="mailto:blaschegg@traunseenet.at" style={{ color: C.accent, textDecoration: "none" }}>blaschegg@traunseenet.at</a>).</p>
            <p style={s}>In the event of a valid withdrawal, the performances received by both parties must be returned. The goods must be sent back without delay and at the latest within 14 days. The buyer bears the direct costs of the return. The Seller refunds the purchase price without delay, at the latest within 14 days of receiving the notice of withdrawal.</p>
            <h2 style={h}>§ 6 RETENTION OF TITLE</h2>
            <p style={s}>The goods delivered remain the property of the Seller until the purchase price has been paid in full.</p>
            <h2 style={h}>§ 7 WARRANTY</h2>
            <p style={s}>The statutory warranty provisions apply. The warranty period is two years from handover of the goods to the buyer (§ 933 ABGB, Austrian Civil Code). For businesses, the warranty period is one year unless agreed otherwise.</p>
            <h2 style={h}>§ 8 LIABILITY</h2>
            <p style={s}>The Seller's liability for slight negligence is excluded to the extent permitted by law. This does not apply to personal injury or to consumer transactions where mandatory statutory provisions prevent a limitation of liability.</p>
            <h2 style={h}>§ 9 TAX-FREE DELIVERY</h2>
            <p style={s}>For deliveries to Germany, a tax-free intra-community delivery can be made on provision of a valid VAT ID. Austrian federal schools can receive e-invoices.</p>
            <h2 style={h}>§ 10 APPLICABLE LAW AND JURISDICTION</h2>
            <p style={s}>Austrian law applies exclusively, excluding the UN Convention on Contracts for the International Sale of Goods (CISG). The place of jurisdiction is the court with subject-matter jurisdiction in Gmunden, Austria. For consumers resident in the EU, the place of jurisdiction is the consumer's place of residence.</p>
            <h2 style={h}>§ 11 FINAL PROVISIONS</h2>
            <p style={{ ...s, marginBottom: 0 }}>Should individual provisions of these terms be invalid, the validity of the remaining provisions remains unaffected. Version: April 2026.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
