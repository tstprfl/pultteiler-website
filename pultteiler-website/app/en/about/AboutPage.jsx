"use client";
import { C } from "@/lib/colors";
import { Reveal, Heading, Btn } from "@/components/ui";
import Img from "@/components/Img";

export default function AboutPage() {
  return (
    <div lang="en" style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Heading overline="ABOUT US" title={"SCHULMITTEL BLASCHEGG\nFROM ALTMÜNSTER ON LAKE TRAUNSEE"} sub="Direct from the manufacturer, supplying schools across Europe for over 40 years."/>
          <Reveal><div style={{ border: `1px solid ${C.border}`, overflow: "hidden", marginBottom: 2, background: C.bgCard }}><Img sizes="(max-width: 900px) 100vw, 900px" src="/images/meduni-innsbruck_2.jpeg" alt="Pultteiler in use" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}/></div></Reveal>
          {[
            { title: "THE IDEA BEHIND THE PULTTEILER", texts: ["Michael Blaschegg was a teacher himself and knows the challenges of everyday school life first-hand. Day after day, schools hold class tests, informal tests, assessments and dictations. In these tests, students want to show what they can do with concentration, calmly and without disturbance.", "This experience gave rise to the Pultteiler: a sturdy divider for school desks that makes the teacher's work easier and supports the students."] },
            { title: "WHY THE PULTTEILER WORKS", texts: ["It is no longer necessary to split the class into different groups for a written test: the privacy screen ensures fair grading. Preparation, review and corrections are done by the whole class together.", "Moving to a larger room with single desks is no longer necessary. Students feel most comfortable writing tests in the familiar surroundings of their own classroom.", "The sturdy Pultteiler creates order and a workplace of one's own. Students are not distracted by their neighbours and can concentrate on their tasks. The clamp made of high-quality, permanently elastic plastic holds the panel securely and is attached in no time."] },
            { title: "POPULAR WITH SCHOOLS", texts: ["Many schools in Austria and Germany are enthusiastic about this aid. The Pultteiler is used in primary schools, secondary schools, grammar schools and universities alike, wherever written exams are part of everyday school life.", "It is made in Altmünster on Lake Traunsee, Austria, and delivered from there to schools across Europe."] },
          ].map((section, si) => (
            <Reveal key={si} delay={(si + 1) * 0.05}>
              <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "48px 40px", marginBottom: 2 }}>
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: C.text, margin: "0 0 24px" }}>{section.title}</h2>
                {section.texts.map((t, ti) => <p key={ti} style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: C.textMuted, lineHeight: 1.75, margin: ti === section.texts.length - 1 ? 0 : "0 0 20px" }}>{t}</p>)}
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.3}><div style={{ marginTop: 48, textAlign: "center" }}>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: C.textMuted, marginBottom: 24 }}>Questions about the Pultteiler? We are happy to help.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}><Btn href="/en/products">VIEW PRODUCTS</Btn><Btn href="/en/contact" variant="secondary">CONTACT US</Btn></div>
          </div></Reveal>
        </div>
      </section>
    </div>
  );
}
