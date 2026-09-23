"use client";
import { C } from "@/lib/colors";
import { Reveal, Heading, Btn } from "@/components/ui";
import Img from "@/components/Img";

export default function HowItWorksPage() {
  return (
    <div lang="en" style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Heading overline="SET-UP GUIDE" title={"HOW THE PULTTEILER WORKS\nSET UP IN 3 STEPS"} sub="Divider panel and desk clamp: set up in a few simple moves." align="center"/>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              { nr: "01", title: "ATTACH THE CLAMP", text: "Simply push the clamp made of permanently elastic plastic onto the edge of the desk. It fits all common school desks with a desktop up to 3 cm thick, including sloping desks." },
              { nr: "02", title: "INSERT THE PANEL", text: "Insert the divider panel into the clamp. The panel locks securely into place and stands firmly straight away." },
            ].map((s, i) => (
              <Reveal key={i} delay={(i + 1) * 0.1}>
                <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "40px 36px", transition: "border-color 0.3s" }} onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, color: C.accent, lineHeight: 1 }}>STEP {s.nr}</span>
                  <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: C.text, margin: "12px 0 16px" }}>{s.title}</h2>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: C.textMuted, lineHeight: 1.7, margin: 0 }}>{s.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, display: "grid", gridTemplateColumns: "1.2fr 1fr", overflow: "hidden", transition: "border-color 0.3s" }} className="prod-card" onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, color: C.accent, lineHeight: 1 }}>STEP 03</span>
                  <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: C.text, margin: "12px 0 16px" }}>DONE: TIME TO CONCENTRATE</h2>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: C.textMuted, lineHeight: 1.7, margin: 0 }}>The Pultteiler stands firmly and creates a separate, screened workplace. After the exam simply remove it and put it back into the wooden case.</p>
                </div>
                <div style={{ background: C.bgElevated, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, minHeight: 240 }}>
                  <Img sizes="(max-width: 768px) 100vw, 480px" src="/images/koffer-gelb.jpg" alt="Wooden case with Pultteiler dividers" style={{ width: "100%", height: "100%", objectFit: "contain", maxHeight: 240, display: "block" }}/>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.35}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginTop: 2 }} className="contact-g">
              {["Fits all common school desks with a desktop up to 3 cm thick. The clamp made of permanently elastic plastic leaves no marks on the desk.", "After use, all dividers go back into the supplied wooden case: space-saving and ready for the next exam."].map((t, i) => (
                <div key={i} style={{ background: `${C.green}08`, border: `1px solid ${C.green}25`, padding: "32px 28px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 32, height: 32, background: `${C.green}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke={C.green} strokeWidth="2" strokeLinecap="square"/></svg>
                  </div>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.65, margin: 0 }}>{t}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div style={{ marginTop: 56, textAlign: "center" }}>
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 16, color: C.textMuted, marginBottom: 24 }}>Convinced? Get the Pultteiler direct from the manufacturer.</p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}><Btn href="/en/quote">REQUEST A QUOTE →</Btn><Btn href="/en/contact" variant="secondary">CONTACT US</Btn></div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
