import AudienceLayout, { faqJsonLd } from "@/components/AudienceLayout";

export const metadata = {
  title: "Trennwand für Schultische in der Sekundarstufe — Sichtschutz für Klassenarbeiten & Tests",
  description:
    "Abschreiben bei Klassenarbeiten, Schularbeiten und Tests verhindern: Sichtschutz-Trennwände für Schultische ab dem 6. Schuljahr. 50×40 cm, werkzeugloser Aufbau, Kauf auf Rechnung — direkt vom Hersteller.",
  alternates: { canonical: "/sekundarstufe" },
};

const FAQ = [
  {
    q: "Welche Trennwand-Größe eignet sich für die Sekundarstufe?",
    a: "Ab dem 6. Schuljahr empfehlen wir Set B mit 50×40 cm hohen Teilerplatten. Ältere Schülerinnen und Schüler sitzen höher — die höhere Platte verdeckt das Nachbarblatt auch dann zuverlässig, wenn sich jemand vorbeugt oder zur Seite lehnt.",
  },
  {
    q: "Wie schnell ist ein Klassensatz Trennwände aufgebaut?",
    a: "Ein kompletter Klassensatz steht in unter fünf Minuten: Klammer auf die Tischplatte stecken, Platte einschieben, fertig. Es wird kein Werkzeug benötigt. Viele Schulen lassen die Schülerinnen und Schüler die Teiler zu Beginn der Prüfung selbst aufbauen — das dauert keine zwei Minuten.",
  },
  {
    q: "Passt die Trennwand auf unsere Schultische?",
    a: "Die dauerelastische Klammer passt auf alle gängigen Schultische mit einer Tischplattenstärke bis 3 cm — Einzeltische, Doppeltische und auch Tische in EDV-Räumen. Bei Sonderfällen beraten wir Sie gerne vorab.",
  },
  {
    q: "Was hält der Pultteiler im Schulalltag aus?",
    a: "Die Teiler sind seit über 40 Jahren im Dauereinsatz an weiterführenden Schulen — die Platten aus hochwertigem Kunststoff und die elastischen Klammern überstehen auch häufiges Auf- und Abbauen durch Jugendliche. Jedes Einzelteil (Platte, Klammer, Koffer) ist einzeln nachbestellbar.",
  },
  {
    q: "Wie läuft die Bestellung für unsere Schule ab?",
    a: "Sie bestellen per Anfrageformular oder direkt im Shop und zahlen auf Rechnung — keine Kreditkarte, keine Vorkasse. Österreichische Bundesschulen erhalten E-Rechnungen mit ihrer EKG-Nummer, deutsche Schulen mit UID-Nummer eine steuerfreie innergemeinschaftliche Lieferung. In die Schweiz liefern wir steuerfrei und unverzollt.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ)) }} />
      <AudienceLayout
        overline="FÜR MITTELSCHULEN, GYMNASIEN & BERUFSSCHULEN"
        h1={<>TRENNWÄNDE FÜR KLASSENARBEITEN IN DER SEKUNDARSTUFE</>}
        intro="Schularbeiten, Klassenarbeiten, Tests, Vergleichsarbeiten: In der Sekundarstufe wird häufig und unter Notendruck geprüft. Der Pultteiler macht jede Prüfung fair — als Trennwand für den Schultisch, die das Abschreiben zuverlässig verhindert und in Minuten auf- und abgebaut ist."
        img="/images/pultteiler-einsatz.jpg"
        imgAlt="Sichtschutz-Trennwände auf Schultischen im EDV-Raum einer weiterführenden Schule"
        situation={{
          title: "DIE SITUATION IN DER SEKUNDARSTUFE",
          paragraphs: [
            "Je höher der Notendruck, desto größer die Versuchung: In der Sekundarstufe ist Abschreiben bei Klassenarbeiten ein reales Problem — und mit Smartphone-Verboten allein nicht gelöst, solange der Blick aufs Nachbarblatt freie Bahn hat. Die klassischen Auswege kosten alle Beteiligten Zeit: Gruppen teilen, zwei Aufgabensätze erstellen, Räume tauschen, Sitzpläne umbauen.",
            "Mit dem Pultteiler schreibt die ganze Klasse gleichzeitig unter identischen Bedingungen — eine Aufgabenstellung, ein Raum, keine Gruppenteilung. Die 50×40 cm hohe Trennwand verdeckt das Nachbarblatt auch bei älteren Schülerinnen und Schülern zuverlässig, selbst wenn sich jemand vorbeugt.",
            "Auch außerhalb von Prüfungen leisten die Teiler gute Dienste: als Sichtschutz in EDV-Räumen bei digitalen Tests, für konzentrierte Stillarbeitsphasen oder als reizarmer Arbeitsplatz für Schülerinnen und Schüler, die sich leicht ablenken lassen.",
          ],
        }}
        benefits={{
          title: "DARUM SETZEN WEITERFÜHRENDE SCHULEN AUF DEN PULTTEILER",
          items: [
            { title: "HÖHERE PLATTE (50×40 CM)", text: "Auf die Sitzhöhe ab dem 6. Schuljahr abgestimmt: verdeckt das Nachbarblatt zuverlässig — auch beim Vorbeugen oder Zur-Seite-Lehnen." },
            { title: "EINE KLASSE, EINE PRÜFUNG", text: "Keine Gruppenteilung, keine zwei Aufgabensätze, kein Raumtausch: Alle schreiben gleichzeitig unter identischen, fairen Bedingungen." },
            { title: "IN MINUTEN EINSATZBEREIT", text: "Werkzeugloser Aufbau per Stecksystem — die Klasse baut die Teiler zu Prüfungsbeginn selbst auf. Danach zurück in den Koffer." },
            { title: "AUCH FÜR EDV-RÄUME", text: "Die Klammer passt auf Computertische bis 3 cm Plattenstärke — Sichtschutz auch bei digitalen Tests und Online-Prüfungen." },
            { title: "ZWEI FARBEN ZUR WAHL", text: "Set B gibt es in Gelb und dezentem Grau — passend zur Einrichtung Ihrer Schule." },
            { title: "ERSATZTEILE EINZELN", text: "Platten, Klammern und Koffer sind einzeln nachbestellbar — Ihre Anschaffung bleibt über Jahre vollständig nutzbar." },
          ],
        }}
        products={{
          title: "UNSERE EMPFEHLUNG AB DEM 6. SCHULJAHR",
          sub: "Set B mit der höheren 50×40-cm-Platte — wahlweise in Gelb oder Grau. Ein Koffer enthält 12 komplette Systeme.",
          items: [
            {
              name: "SET B — GELB — AB 6. SCHULJAHR",
              desc: "1 Holzkoffer mit 12 Teilerplatten (50×40 cm) und 12 Klammern.",
              price: "€ 255,00",
              note: "inkl. MwSt & Lieferung (AT/DE) — Preis Schweiz: € 252,00 steuerfrei inkl. Lieferung",
              img: "/images/koffer-gelb.jpg",
              href: "/produkte",
              cta: "IM SHOP BESTELLEN",
              primary: true,
            },
            {
              name: "SET B — GRAU — AB 6. SCHULJAHR",
              desc: "1 Holzkoffer mit 12 Teilerplatten (50×40 cm) und 12 Klammern — in dezentem Grau.",
              price: "€ 255,00",
              note: "inkl. MwSt & Lieferung (AT/DE) — Preis Schweiz: € 252,00 steuerfrei inkl. Lieferung",
              img: "/images/koffer-grau.jpg",
              href: "/produkte",
              cta: "IM SHOP BESTELLEN",
              primary: true,
            },
            {
              name: "MEHRERE KLASSEN AUSSTATTEN?",
              desc: "Für Jahrgangsstufen oder die ganze Schule erstellen wir gerne ein individuelles Angebot — auch mit Koffern über 12 Teiler.",
              img: "/images/Koffer_1.png",
              href: "/angebot",
              cta: "ANGEBOT ANFORDERN →",
            },
          ],
        }}
        faq={FAQ}
        ctaTitle="FAIRE KLASSENARBEITEN — AB DER NÄCHSTEN PRÜFUNG"
        ctaSub="Fordern Sie ein unverbindliches Angebot für Ihre Schule an — oder bestellen Sie direkt im Shop. Kauf auf Rechnung, Lieferung in 5–10 Werktagen."
      />
    </>
  );
}
