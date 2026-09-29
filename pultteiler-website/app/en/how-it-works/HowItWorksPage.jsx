"use client";
import dynamic from "next/dynamic";
import { C } from "@/lib/colors";
import { Reveal, Heading, Btn } from "@/components/ui";
import Img from "@/components/Img";

// 3D animation is browser-only (WebGL); placeholder keeps the layout stable while it loads
const AufbauAnimation = dynamic(() => import("@/components/AufbauAnimation"), {
  ssr: false,
  loading: () => <div style={{ aspectRatio: "16 / 10", background: C.bgElevated, border: `1px solid ${C.border}` }} />,
});

const STEPS = [
  { nr: "Step 01", title: "Attach the clamp", text: "Push the clamp made of permanently elastic plastic sideways onto the edge of the desk. It fits all common school desks with a desktop up to 3 cm thick, including sloping desks." },
  { nr: "Step 02", title: "Insert the panel", text: "Place the panel from above. Its slot locks onto the clamp and the panel stands firmly straight away." },
  { nr: "Step 03", title: "Done: time to concentrate", text: "The Pultteiler creates a separate, screened workplace. After the exam it comes off just as quickly." },
];

export default function HowItWorksPage() {
  return (
    <div lang="en" style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Heading as="h1" overline="Set-up guide" title={"How the Pultteiler works\nSet up in 3 steps"} sub="Divider panel and desk clamp: set up in a few simple moves." align="center"/>
          <Reveal>
            <AufbauAnimation steps={STEPS} label="Animation: the clamp is pushed sideways onto the edge of the desk, the divider panel is inserted from above."/>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 2 }}>
            <Reveal delay={0.1}>
              <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, display: "grid", gridTemplateColumns: "1.2fr 1fr", overflow: "hidden", transition: "border-color 0.3s" }} className="prod-card" onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h2 style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 28, color: C.text, margin: "0 0 16px" }}>After the exam</h2>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: C.textMuted, lineHeight: 1.7, margin: 0 }}>Simply remove the dividers and put them back into the supplied wooden case: space-saving and ready for the next exam.</p>
                </div>
                <div style={{ background: C.bgElevated, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, minHeight: 240 }}>
                  <Img sizes="(max-width: 768px) 100vw, 480px" src="/images/koffer-gelb.jpg" alt="Wooden case with Pultteiler dividers" style={{ width: "100%", height: "100%", objectFit: "contain", maxHeight: 240, display: "block" }}/>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginTop: 2 }} className="contact-g">
              {["Fits all common school desks with a desktop up to 3 cm thick. The clamp made of permanently elastic plastic leaves no marks on the desk.", "No tools, no screws, no adhesive pads. Set-up and removal take only a few seconds per desk."].map((t, i) => (
                <div key={i} style={{ background: `${C.green}08`, border: `1px solid ${C.green}25`, padding: "32px 28px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 32, height: 32, background: `${C.green}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke={C.green} strokeWidth="2" strokeLinecap="square"/></svg>
                  </div>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.65, margin: 0 }}>{t}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ marginTop: 56, textAlign: "center" }}>
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 16, color: C.textMuted, marginBottom: 24 }}>Convinced? Get the Pultteiler direct from the manufacturer.</p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}><Btn href="/en/quote">Request a quote →</Btn><Btn href="/en/contact" variant="secondary">Contact us</Btn></div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
