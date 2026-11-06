import { C } from "@/lib/colors";
import { alternatesFor } from "@/lib/i18n";
import { Heading } from "@/components/ui";
import Widerrufsbelehrung from "@/components/Widerrufsbelehrung";

export const metadata = {
  title: "Widerrufsbelehrung und Muster-Widerrufsformular",
  description: "Widerrufsbelehrung für Verbraucher und Muster-Widerrufsformular für Bestellungen bei pultteiler.eu.",
  alternates: alternatesFor("/widerrufsbelehrung"),
};

export default function Page() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Heading as="h1" overline="Rechtliches" title="Widerrufsbelehrung"/>
          <div className="card-pad" style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "48px 40px" }}>
            <Widerrufsbelehrung/>
            <p style={{ fontFamily: "'Source Sans 3 Variable', sans-serif", fontSize: 15, color: "#3A4A4A", lineHeight: 1.75, margin: "28px 0 0" }}>
              Online widerrufen: <a href="/vertrag-widerrufen" style={{ color: C.accentText, fontWeight: 700 }}>Vertrag widerrufen →</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
