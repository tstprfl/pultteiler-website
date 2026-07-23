import AudienceLayout, { faqJsonLd } from "@/components/AudienceLayout";

export const metadata = {
  title: "Pultteiler für die Volksschule & Grundschule — Sichtschutz für Schularbeiten",
  description:
    "Sichtschutz für Schultische in Volksschule & Primarstufe: Abschreiben bei Schularbeiten verhindern, reizarmer Arbeitsplatz für konzentriertes Arbeiten. Kindgerechte Höhe, Kauf auf Rechnung, direkt vom Hersteller.",
  alternates: { canonical: "/volksschule" },
};

const FAQ = [
  {
    q: "Welche Pultteiler-Größe ist für die Volksschule richtig?",
    a: "Für die Volksschule bzw. Grundschule (1.–5. Schuljahr) empfehlen wir Set A mit 50×30 cm hohen Teilerplatten. Die Höhe ist auf die Sitzhöhe jüngerer Kinder abgestimmt: Sie verdeckt das Blatt des Nachbarn zuverlässig, ohne die Kinder komplett voneinander abzuschirmen — die Lehrkraft behält jederzeit den Überblick über die Klasse.",
  },
  {
    q: "Wie viele Pultteiler brauchen wir für eine Klasse?",
    a: "Ein Holzkoffer enthält 12 komplette Systeme (Teilerplatte + Klammer). Bei Doppeltischen genügt oft ein Teiler pro Tisch, also 1 Koffer pro Klasse. Wenn jedes Kind einen eigenen Sichtschutz erhalten soll, empfehlen sich 2 Koffer pro Klasse. Auf Anfrage stellen wir auch Koffer mit mehr als 12 Teilern zusammen.",
  },
  {
    q: "Können auch Kinder die Pultteiler selbst aufbauen?",
    a: "Ja. Das Stecksystem kommt ohne Werkzeug aus: Die dauerelastische Klammer wird auf die Tischplatte gesteckt, die Teilerplatte eingeschoben — fertig. Volksschulkinder bauen den Sichtschutz nach kurzer Anleitung selbst auf und ab, der Aufbau für eine ganze Klasse dauert nur wenige Minuten.",
  },
  {
    q: "Hilft der Pultteiler auch Kindern mit Konzentrationsschwierigkeiten?",
    a: "Ja. Viele Schulen setzen einzelne Teiler dauerhaft als reizarmen Arbeitsplatz ein — etwa für Kinder mit ADHS oder erhöhter Ablenkbarkeit im inklusiven Unterricht. Der Sichtschutz reduziert visuelle Reize aus dem Umfeld und schafft eine ruhige Arbeitszone, ohne das Kind aus der Klassengemeinschaft zu nehmen.",
  },
  {
    q: "Wie bestellt unsere Schule — geht Kauf auf Rechnung?",
    a: "Ja, ausschließlich: Sie bestellen per Anfrageformular oder im Shop und zahlen bequem auf Rechnung — keine Kreditkarte, keine Vorkasse. Österreichische Bundesschulen erhalten auf Wunsch eine E-Rechnung mit ihrer EKG-Nummer, deutsche Schulen mit UID-Nummer eine steuerfreie Lieferung.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ)) }} />
      <AudienceLayout
        overline="FÜR VOLKSSCHULEN, GRUNDSCHULEN & PRIMARSTUFE"
        h1={<>SICHTSCHUTZ FÜR SCHULARBEITEN IN DER VOLKSSCHULE</>}
        intro="Schon die ersten Schularbeiten sollen fair ablaufen — und manche Kinder brauchen einfach einen ruhigen, reizarmen Platz zum Arbeiten. Der Pultteiler verhindert Abschreiben in der Volksschule und Grundschule, ohne die Kinder zu isolieren: kindgerechte Höhe, kinderleichter Aufbau, unverwüstlich im Schulalltag."
        img="/images/klassenzimmer.png"
        imgAlt="Pultteiler als Sichtschutz auf Schultischen in einem Volksschul-Klassenzimmer"
        situation={{
          title: "DIE SITUATION IN DER PRIMARSTUFE",
          paragraphs: [
            "In der Volksschule werden die Weichen gestellt: Kinder lernen, selbstständig und ehrlich zu arbeiten. Bei Schularbeiten und Lernzielkontrollen sitzen sie aber meist dicht nebeneinander an Doppeltischen — der Blick aufs Nachbarblatt ist da keine böse Absicht, sondern fast unvermeidlich. Klassen zu teilen oder Kinder umzusetzen kostet Zeit und Nerven.",
            "Der Pultteiler löst das Problem in zwei Minuten: Klammer auf die Tischplatte stecken, Teilerplatte einschieben — jedes Kind hat seinen eigenen, geschützten Arbeitsbereich. Nach der Schularbeit wandert alles zurück in den kompakten Holzkoffer im Materialraum.",
            "Immer mehr Volksschulen nutzen die Teiler zusätzlich im inklusiven Unterricht: als reizarmen Arbeitsplatz für Kinder, die sich leicht ablenken lassen — von ADHS bis Autismus-Spektrum. So entsteht eine ruhige Lernumgebung mitten in der Klasse, ganz ohne Stigmatisierung, denn den Sichtschutz kennen alle Kinder von den Schularbeiten.",
          ],
        }}
        benefits={{
          title: "DARUM PASST DER PULTTEILER IN DIE VOLKSSCHULE",
          items: [
            { title: "KINDGERECHTE HÖHE (50×30 CM)", text: "Hoch genug, um das Nachbarblatt zu verdecken — niedrig genug, damit die Lehrkraft jedes Kind im Blick behält und sich niemand eingesperrt fühlt." },
            { title: "AUFBAU OHNE WERKZEUG", text: "Stecksystem aus Klammer und Platte: In zwei Minuten steht der Sichtschutz für die ganze Klasse. Auch die Kinder selbst schaffen das problemlos." },
            { title: "REIZARMER ARBEITSPLATZ", text: "Einzelne Teiler dauerhaft im Einsatz schaffen ruhige Arbeitszonen für Kinder mit Konzentrationsschwierigkeiten — bewährt in Inklusionsklassen." },
            { title: "EIN KOFFER PRO KLASSE", text: "12 komplette Systeme im stapelbaren Holzkoffer — passt in jeden Materialraum und ist in Sekunden zur Hand." },
            { title: "UNVERWÜSTLICH", text: "Seit über 40 Jahren im harten Schulalltag bewährt. Sollte doch einmal etwas kaputtgehen: Jedes Einzelteil ist nachbestellbar." },
            { title: "PASST AUF JEDEN SCHULTISCH", text: "Die dauerelastische Klammer hält auf allen gängigen Schultischen mit Tischplatten bis 3 cm Stärke — egal ob Einzel- oder Doppeltisch." },
          ],
        }}
        products={{
          title: "UNSERE EMPFEHLUNG FÜR DIE PRIMARSTUFE",
          sub: "Für die 1. bis 5. Schulstufe empfehlen wir Set A mit der niedrigeren Platte — abgestimmt auf die Sitzhöhe jüngerer Kinder.",
          items: [
            {
              name: "SET A — GELB — BIS 5. SCHULJAHR",
              desc: "1 Holzkoffer mit 12 Teilerplatten (50×30 cm) und 12 Klammern. Die richtige Höhe für die Volksschule.",
              price: "€ 241,00",
              note: "inkl. MwSt & Lieferung (AT/DE) — Preis Schweiz: € 238,00 steuerfrei inkl. Lieferung",
              img: "/images/koffer-gelb.jpg",
              href: "/produkte",
              cta: "IM SHOP BESTELLEN",
              primary: true,
            },
            {
              name: "GRÖSSERE MENGEN?",
              desc: "Sie statten mehrere Klassen oder die ganze Schule aus? Fordern Sie ein unverbindliches Angebot an — wir stellen auch Koffer mit mehr als 12 Teilern zusammen.",
              img: "/images/Koffer_1.png",
              href: "/angebot",
              cta: "ANGEBOT ANFORDERN →",
            },
          ],
        }}
        faq={FAQ}
        ctaTitle="BEREIT FÜR FAIRE SCHULARBEITEN?"
        ctaSub="Fordern Sie ein unverbindliches Angebot für Ihre Volksschule an — oder bestellen Sie direkt im Shop. Kauf auf Rechnung, Lieferung in 5–10 Werktagen."
      />
    </>
  );
}
