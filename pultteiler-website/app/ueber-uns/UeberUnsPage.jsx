"use client";
import { C } from "@/lib/colors";
import { Reveal, Heading, Btn } from "@/components/ui";

export default function UeberUnsPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Heading overline="ÜBER UNS" title={"SCHULMITTEL BLASCHEGG\nAUS ALTMÜNSTER AM TRAUNSEE"} sub="Direkt vom Hersteller — seit über 40 Jahren für Schulen — europaweit."/>
          <Reveal><div style={{ border: `1px solid ${C.border}`, overflow: "hidden", marginBottom: 2, background: C.bgCard }}><img src="/images/meduni-innsbruck_2.jpeg" alt="Pultteiler im Einsatz" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}/></div></Reveal>
          {[
            { title: "DIE IDEE HINTER DEM PULTTEILER", texts: ["Michael Blaschegg war selbst Lehrer — und kennt die Herausforderungen im Schulalltag aus erster Hand. Tag für Tag werden an unseren Schulen Schularbeiten, informelle Tests, Kontrollarbeiten und Diktate abgehalten. Bei diesen Arbeiten wollen unsere Schüler konzentriert, ungestört und ruhig ihre Leistung zeigen.", "Aus dieser Erfahrung heraus entstand der Pultteiler — eine stabile Trennwand für Schultische, die sowohl Arbeitserleichterung für den Lehrer als auch Unterstützung für die Schüler ist."] },
            { title: "WARUM DER PULTTEILER FUNKTIONIERT", texts: ["Es ist nicht mehr notwendig, die Klasse bei einer schriftlichen Lernzielkontrolle in verschiedene Gruppen zu unterteilen — die Möglichkeit der gerechten Benotung ist durch den Sichtschutz garantiert. Vorbesprechung, Nachbesprechung und Verbesserung der Arbeiten erledigt die Klasse gemeinsam.", "Das Wandern in einen größeren Klassenraum mit einzelnen Pulten ist nicht mehr notwendig. Die Schüler fühlen sich in der gewohnten Umgebung ihres Klassenraums bei Arbeiten am wohlsten.", "Der stabile Pultteiler schafft Ordnung und einen eigenen Arbeitsplatz. Die Schüler werden von ihren Sitznachbarn nicht abgelenkt, sie können konzentriert ihre Aufgaben erledigen. Die Klammer aus hochwertigem, dauerelastischem Kunststoff ermöglicht einen sicheren Stand der Trennplatte und ist rasch aufgesteckt."] },
            { title: "AN SCHULEN BELIEBT", texts: ["Schon viele Schulen in Österreich und Deutschland sind begeistert von dieser Arbeitshilfe. Der Pultteiler wird an Volksschulen, Mittelschulen, Gymnasien und Hochschulen gleichermaßen eingesetzt — überall dort, wo schriftliche Prüfungen zum Schulalltag gehören.", "Gefertigt wird direkt in Altmünster am Traunsee — und von dort europaweit an Schulen geliefert."] },
          ].map((section, si) => (
            <Reveal key={si} delay={(si + 1) * 0.05}>
              <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "48px 40px", marginBottom: 2 }}>
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: C.text, margin: "0 0 24px" }}>{section.title}</h2>
                {section.texts.map((t, ti) => <p key={ti} style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: C.textMuted, lineHeight: 1.75, margin: ti === section.texts.length - 1 ? 0 : "0 0 20px" }}>{t}</p>)}
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.3}><div style={{ marginTop: 48, textAlign: "center" }}>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 15, color: C.textMuted, marginBottom: 24 }}>Fragen zum Pultteiler? Wir sind gerne für Sie da.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}><Btn href="/produkte">ZUM SHOP</Btn><Btn href="/kontakt" variant="secondary">KONTAKT AUFNEHMEN →</Btn></div>
          </div></Reveal>
        </div>
      </section>
    </div>
  );
}
