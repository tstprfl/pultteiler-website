"use client";
import Link from "next/link";
import { C } from "@/lib/colors";
import { YEARS } from "@/lib/site";
import { COUNTRIES_EN as COUNTRY_INFO, AUDIENCES_EN as AUDIENCES } from "@/lib/en";
import { ARTICLES_EN as ARTICLES } from "@/lib/articles-en";
import { Reveal, Badge, Heading, Btn } from "@/components/ui";
import Img from "@/components/Img";

export default function HomeEn() {
  return (
    <div lang="en">
      {/* ═══ HERO ═══ */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 32px 80px", background: C.bg, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 64, alignItems: "center" }} className="hero-g">
            <div>
              <Reveal><Badge>DIRECT FROM THE MANUFACTURER FOR OVER {YEARS} YEARS</Badge></Reveal>
              <Reveal delay={0.1}><h1 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "clamp(48px, 7vw, 96px)", color: C.text, lineHeight: 0.95, margin: "24px 0 28px" }}><span style={{ color: "#A01830" }}>PULTTEILER</span><br/>FOR <span style={{ color: "#F0C645" }}>SCHOOL DESKS.</span><br/><span style={{ color: C.textMuted, fontSize: "0.6em" }}>THE PRIVACY SCREEN FOR FAIR EXAMS.</span></h1></Reveal>
              <Reveal delay={0.2}><p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 17, color: C.textMuted, lineHeight: 1.7, maxWidth: 520, margin: "0 0 40px" }}>The proven desk divider for class tests and exams: it prevents copying, creates a low-distraction workspace and is set up in two minutes thanks to its plug-in system. Several hundred schools in Austria, Germany and Switzerland rely on it. Fits all common school desks up to 3 cm thick.</p></Reveal>
              <Reveal delay={0.3}><div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}><Btn href="/en/quote">REQUEST A QUOTE →</Btn><Btn href="/en/products" variant="secondary">VIEW PRODUCTS</Btn></div></Reveal>
              <Reveal delay={0.35}><p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 600, color: C.text, marginTop: 24 }}>✓ Delivery to other countries on request</p></Reveal>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Reveal delay={0.1}><div className="hero-plates" style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                <div style={{ width: 160, height: 100, background: "#F0C645", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 10, cursor: "default", boxShadow: "4px 6px 16px rgba(0,0,0,0.15)", transform: "rotate(-3deg)", border: "2px solid #D4AD2E" }}>
                  <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 9, fontWeight: 700, color: C.dark, lineHeight: 1.4, letterSpacing: "0.04em" }}>🇦🇹<br/>E-INVOICES<br/>FOR FEDERAL<br/>SCHOOLS<br/>WITH YOUR EKG</span>
                </div>
                <div style={{ width: 160, height: 100, background: "#F0C645", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 10, cursor: "default", boxShadow: "4px 6px 16px rgba(0,0,0,0.15)", transform: "rotate(2deg)", border: "2px solid #D4AD2E" }}>
                  <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 8, fontWeight: 700, color: C.dark, lineHeight: 1.4, letterSpacing: "0.04em" }}>🇩🇪<br/>TAX-FREE<br/>WITH GERMAN<br/>VAT ID<br/>GERMAN BANK<br/>ACCOUNT</span>
                </div>
                <div style={{ width: 160, height: 100, background: "#F0C645", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 10, cursor: "default", boxShadow: "4px 6px 16px rgba(0,0,0,0.15)", transform: "rotate(-1deg)", border: "2px solid #D4AD2E" }}>
                  <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 9, fontWeight: 700, color: C.dark, lineHeight: 1.4, letterSpacing: "0.04em" }}>🇨🇭<br/>TAX-FREE,<br/>DUTY-FREE<br/>DELIVERY TO<br/>SWITZERLAND</span>
                </div>
              </div></Reveal>
              <Reveal delay={0.15}><div style={{ overflow: "hidden", border: `1px solid ${C.border}`, background: C.bgCard }}><Img sizes="(max-width: 768px) 100vw, 25vw" src="/images/meduni-innsbruck_2.jpeg" alt="Pultteiler in exam use at the Medical University of Innsbruck" style={{ width: "100%", height: 170, objectFit: "cover", display: "block" }}/></div></Reveal>
              <Reveal delay={0.25}><div style={{ overflow: "hidden", border: `1px solid ${C.border}`, background: C.bgCard }}><Img sizes="(max-width: 768px) 100vw, 25vw" src="/images/klassenzimmer.png" alt="Privacy screens on school desks in a classroom" loading="lazy" style={{ width: "100%", height: 170, objectFit: "cover", display: "block" }}/></div></Reveal>
              <Reveal delay={0.35}><div style={{ overflow: "hidden", border: `1px solid ${C.border}`, background: C.bgCard }}><Img sizes="(max-width: 768px) 100vw, 25vw" src="/images/pultteiler-einsatz.jpg" alt="Desk dividers in a computer room" loading="lazy" style={{ width: "100%", height: 170, objectFit: "cover", display: "block" }}/></div></Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VERTRAUENSBAND ═══ */}
      <section style={{ background: C.dark, padding: "56px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32 }}>
          {[
            { val: "AT·DE·CH", label: "SEVERAL HUNDRED SCHOOLS SUPPLIED" },
            { val: `${YEARS}+`, label: "YEARS OF MANUFACTURING EXPERIENCE" },
            { val: "100%", label: "DIRECT SALES, NO MIDDLEMEN" },
            { val: "✓", label: "PURCHASE ON INVOICE (AT, DE, CH)" },
          ].map((m, i) => (
            <Reveal key={i} delay={i * 0.08}><div style={{ textAlign: "center", padding: "8px 0" }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 52, color: "#F0C645", lineHeight: 1 }}>{m.val}</div>
              <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", color: "rgba(255,255,255,0.7)", marginTop: 10 }}>{m.label}</div>
            </div></Reveal>
          ))}
        </div>
      </section>

      {/* ═══ ZIELGRUPPEN ═══ */}
      <section style={{ padding: "96px 32px", background: C.bg }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Heading overline="FOR YOUR SCHOOL" title="THE RIGHT SOLUTION FOR EVERY SCHOOL LEVEL" sub="Primary school, secondary school or a large exam in a lecture hall: every situation is different. Choose your area:"/>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: 2 }}>
            {AUDIENCES.map((a, i) => (
              <Reveal key={a.id} delay={i * 0.08}>
                <Link href={a.href} className="hover-lift hover-zoom" style={{ background: C.bgCard, border: `1px solid ${C.border}`, textDecoration: "none", display: "flex", flexDirection: "column", height: "100%", transition: "border-color 0.3s" }} onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                  <div style={{ height: 190, overflow: "hidden", borderBottom: `1px solid ${C.border}` }}>
                    <Img sizes="(max-width: 768px) 100vw, 33vw" src={a.img} alt={a.imgAlt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
                  </div>
                  <div style={{ padding: "26px 28px 30px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, color: C.text, margin: "0 0 10px", letterSpacing: "0.02em", lineHeight: 1.05 }}>{a.title.toUpperCase()}</h3>
                    <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.65, margin: "0 0 18px", flex: 1 }}>{a.teaser}</p>
                    <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: C.accent }}>LEARN MORE →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GRÜNDE ═══ */}
      <section style={{ padding: "96px 32px", background: C.bgCard, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Heading overline="WHY PULTTEILER" title="REASONS FOR THE PULTTEILER"/>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: 2 }}>
            {[
              { title: "FAIR EXAM CONDITIONS", text: "No copying, no split groups, no two versions. All students write at the same time under identical conditions." },
              { title: "PLUG-IN SYSTEM, NO TOOLS", text: "The permanently elastic clamp holds the panel quickly and easily. Setting up and removing is effortless." },
              { title: "LOW-DISTRACTION WORKSPACE", text: "Also used outside exams: as a quiet work zone for children with concentration difficulties, proven in inclusive teaching." },
              { title: "ROBUST AND DURABLE", text: "High-quality materials for years of constant use in everyday school life. Spare parts can be reordered individually." },
              { title: "COMPACT WOODEN CASE", text: "12 complete divider systems per case. Easy to carry, stackable, space-saving in the storeroom. Cases with more than 12 dividers on request." },
              { title: "DELIVERY ACROSS EUROPE", text: "Delivered across Europe direct from the manufacturer. Tax-free to Germany with a VAT ID, tax-free and duty-free to Switzerland, other countries on request." },
            ].map((u, i) => (
              <Reveal key={i} delay={i * 0.06}><div style={{ background: C.bg, border: `1px solid ${C.border}`, padding: "36px 32px", transition: "all 0.3s", cursor: "default", height: "100%" }} onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; }} onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; }}>
                <h3 style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", color: C.text, margin: "0 0 10px" }}>{u.title}</h3>
                <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.65, margin: 0 }}>{u.text}</p>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DAS ORIGINAL — DIREKT VOM PRODUZENTEN ═══ */}
      <section style={{ padding: "96px 32px", background: C.bg, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="hero-g" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56, alignItems: "center" }}>
            <div>
              <Heading overline="THE ORIGINAL" title="DIRECT FROM THE MANUFACTURER"/>
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 16, color: C.textMuted, lineHeight: 1.75, margin: "-24px 0 18px" }}>
                The Pultteiler is also available from school suppliers, but it is made in only one place: at our premises in Altmünster on Lake Traunsee, Austria. On pultteiler.eu you buy the original straight from the source.
              </p>
              <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 16, color: C.textMuted, lineHeight: 1.75, margin: "0 0 24px" }}>
                In our home region of Upper Austria, the Pultteiler has been standard equipment in schools for decades, and from here we supply several hundred schools in Austria, Germany and Switzerland.
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {[
                  "Advice direct from the manufacturer: we know every detail of our product",
                  "All spare parts from the factory, even after many years",
                  "Special requests possible, e.g. cases with more than 12 dividers",
                ].map((l, i) => (
                  <li key={i} style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: C.text, lineHeight: 1.6, padding: "6px 0" }}>✓ {l}</li>
                ))}
              </ul>
              <div style={{ marginTop: 28 }}><Btn href="/en/gallery" variant="secondary">SEE REFERENCES AND PHOTOS →</Btn></div>
            </div>
            <Reveal delay={0.1}>
              <div style={{ overflow: "hidden", border: `1px solid ${C.border}`, background: C.bgCard }}>
                <Img src="/images/nahaufnahme.jpeg" alt="Close-up of Pultteiler dividers, the original from the manufacturer" loading="lazy" style={{ width: "100%", height: 380, objectFit: "cover", display: "block" }}/>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ LÄNDER / BESTELLUNG ═══ */}
      <section style={{ padding: "96px 32px", background: C.bgCard, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Heading overline="ORDERING MADE FOR SCHOOLS" title="HOW ORDERING WORKS IN YOUR COUNTRY" sub="No credit card checkout: you send us a request and receive a written quote. In Austria, Germany and Switzerland you pay on invoice after delivery."/>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 2 }}>
            {COUNTRY_INFO.map((c, i) => (
              <Reveal key={c.code} delay={i * 0.08}>
                <div style={{ background: C.bg, border: `1px solid ${C.border}`, padding: "32px 30px", height: "100%" }}>
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{c.flag}</div>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: C.text, margin: "0 0 14px", letterSpacing: "0.03em" }}>{c.name.toUpperCase()}</h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {c.lines.map((l, j) => <li key={j} style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.6, padding: "5px 0" }}>— {l}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RATGEBER-TEASER ═══ */}
      <section style={{ padding: "96px 32px", background: C.bg, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Heading overline="PRACTICAL KNOWLEDGE" title="GUIDE FOR SCHOOLS" sub="Fair exams, concentration, low-distraction learning environments: knowledge from over 40 years of school practice:"/>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 2 }}>
            {ARTICLES.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.07}>
                <Link href={`/en/guide/${a.slug}`} className="hover-lift" style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "28px 28px 30px", textDecoration: "none", display: "flex", flexDirection: "column", height: "100%", transition: "border-color 0.3s" }} onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                  <h3 style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, fontWeight: 700, color: C.text, lineHeight: 1.45, margin: "0 0 12px" }}>{a.title}</h3>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: C.textMuted, lineHeight: 1.6, margin: "0 0 16px", flex: 1 }}>{a.teaser}</p>
                  <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: C.accent }}>READ →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding: "96px 32px", background: C.bgCard, borderTop: `1px solid ${C.border}` }}>
        <Reveal><div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <Heading overline="GET STARTED" title="READY FOR FAIR EXAMS?" align="center" sub="Request a non-binding quote for your school. We reply soon with price and delivery terms for your country."/>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}><Btn href="/en/quote">REQUEST A QUOTE →</Btn><Btn href="/en/products" variant="secondary">VIEW PRODUCTS</Btn></div>
        </div></Reveal>
      </section>
    </div>
  );
}
