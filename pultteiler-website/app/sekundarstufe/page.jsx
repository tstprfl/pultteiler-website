import AudienceLayout, { faqJsonLd } from "@/components/AudienceLayout";
import { alternatesFor } from "@/lib/i18n";

export const metadata = {
  title: { absolute: "Trennwände für Klassenarbeiten: Sichtschutz für Schultische" },
  description:
    "Trennwände für Klassenarbeiten und Tests ab dem 6. Schuljahr: kein Abschreiben, 50×40 cm, Aufbau ohne Werkzeug. Direkt vom Hersteller, Kauf auf Rechnung.",
  alternates: alternatesFor("/sekundarstufe"),
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
    q: "Warum eine Klammer statt einer freistehenden Stellwand?",
    a: "Freistehende Stellwände stehen lose auf dem Tisch und kippen leicht um, etwa bei einem Stoß mit dem Ellbogen. Der Pultteiler wird mit einer Klammer an der Tischplatte befestigt: Er steht fest wie montiert und ist trotzdem ohne Werkzeug in Sekunden auf- und abgebaut.",
  },
  {
    q: "Was hält der Pultteiler im Schulalltag aus?",
    a: "Die Teiler sind seit über 40 Jahren im Dauereinsatz an weiterführenden Schulen — die Platten aus hochwertigem Kunststoff und die elastischen Klammern überstehen auch häufiges Auf- und Abbauen durch Jugendliche. Jedes Einzelteil (Platte, Klammer, Koffer) ist einzeln nachbestellbar.",
  },
  {
    q: "Sind die Trennwände aus Plastik oder aus Karton?",
    a: "Die Teilerplatten bestehen aus hochwertigem, bruchfestem Kunststoff, nicht aus Karton. Gehalten werden sie von dauerelastischen Klammern, die auch häufiges Auf- und Abbauen überstehen. Geht doch einmal eine Platte verloren, ist sie einzeln nachbestellbar.",
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
        overline="Für Mittelschulen, Gymnasien & Berufsschulen"
        h1={<>Trennwände für Klassenarbeiten in der Sekundarstufe</>}
        intro="Schularbeiten, Klassenarbeiten, Tests, Vergleichsarbeiten: In der Sekundarstufe wird häufig und unter Notendruck geprüft. Der Pultteiler macht jede Prüfung fair — als Trennwand für den Schultisch, die das Abschreiben zuverlässig verhindert und in Minuten auf- und abgebaut ist."
        img="/images/pultteiler-einsatz.jpg"
        imgAlt="Sichtschutz-Trennwände auf Schultischen im EDV-Raum einer weiterführenden Schule"
        situation={{
          title: "Die Situation in der Sekundarstufe",
          paragraphs: [
            "Je höher der Notendruck, desto größer die Versuchung: In der Sekundarstufe ist Abschreiben bei Klassenarbeiten ein reales Problem — und mit Smartphone-Verboten allein nicht gelöst, solange der Blick aufs Nachbarblatt freie Bahn hat. Die klassischen Auswege kosten alle Beteiligten Zeit: Gruppen teilen, zwei Aufgabensätze erstellen, Räume tauschen, Sitzpläne umbauen.",
            "Mit dem Pultteiler schreibt die ganze Klasse gleichzeitig unter identischen Bedingungen — eine Aufgabenstellung, ein Raum, keine Gruppenteilung. Die 50×40 cm hohe Trennwand verdeckt das Nachbarblatt auch bei älteren Schülerinnen und Schülern zuverlässig, selbst wenn sich jemand vorbeugt.",
            "Auch außerhalb von Prüfungen leisten die Teiler gute Dienste: als Sichtschutz in EDV-Räumen bei digitalen Tests, für konzentrierte Stillarbeitsphasen oder als reizarmer Arbeitsplatz für Schülerinnen und Schüler, die sich leicht ablenken lassen.",
          ],
        }}
        benefits={{
          title: "Darum setzen weiterführende Schulen auf den Pultteiler",
          items: [
            { title: "Höhere Platte (50×40 cm)", text: "Auf die Sitzhöhe ab dem 6. Schuljahr abgestimmt: verdeckt das Nachbarblatt zuverlässig — auch beim Vorbeugen oder Zur-Seite-Lehnen." },
            { title: "Eine Klasse, eine Prüfung", text: "Keine Gruppenteilung, keine zwei Aufgabensätze, kein Raumtausch: Alle schreiben gleichzeitig unter identischen, fairen Bedingungen." },
            { title: "In Minuten einsatzbereit", text: "Werkzeugloser Aufbau per Stecksystem — die Klasse baut die Teiler zu Prüfungsbeginn selbst auf. Danach zurück in den Koffer." },
            { title: "Auch für EDV-Räume", text: "Die Klammer passt auf Computertische bis 3 cm Plattenstärke — Sichtschutz auch bei digitalen Tests und Online-Prüfungen." },
            { title: "Zwei Farben zur Wahl", text: "Set B gibt es in Gelb und dezentem Grau — passend zur Einrichtung Ihrer Schule." },
            { title: "Ersatzteile einzeln", text: "Platten, Klammern und Koffer sind einzeln nachbestellbar — Ihre Anschaffung bleibt über Jahre vollständig nutzbar." },
          ],
        }}
        products={{
          title: "Unsere Empfehlung ab dem 6. Schuljahr",
          sub: "Set B mit der höheren 50×40-cm-Platte — wahlweise in Gelb oder Grau. Ein Koffer enthält 12 komplette Systeme.",
          items: [
            {
              name: "Set B — Gelb — ab 6. Schuljahr",
              desc: "1 Holzkoffer mit 12 Teilerplatten (50×40 cm) und 12 Klammern.",
              price: "€ 275,00",
              note: "inkl. 20% USt (AT/DE) — Preis Schweiz: € 249,00 steuerfrei. Ab 3 Koffer-Sets versandkostenfrei.",
              img: "/images/koffer-gelb.jpg",
              href: "/produkte",
              cta: "Im Shop bestellen",
              primary: true,
            },
            {
              name: "Set B — Grau — ab 6. Schuljahr",
              desc: "1 Holzkoffer mit 12 Teilerplatten (50×40 cm) und 12 Klammern — in dezentem Grau.",
              price: "€ 275,00",
              note: "inkl. 20% USt (AT/DE) — Preis Schweiz: € 249,00 steuerfrei. Ab 3 Koffer-Sets versandkostenfrei.",
              img: "/images/koffer-grau.jpg",
              href: "/produkte",
              cta: "Im Shop bestellen",
              primary: true,
            },
            {
              name: "Mehrere Klassen ausstatten?",
              desc: "Für Jahrgangsstufen oder die ganze Schule erstellen wir gerne ein individuelles Angebot — auch mit Koffern über 12 Teiler.",
              img: "/images/Koffer_1.png",
              href: "/angebot",
              cta: "Angebot anfordern →",
            },
          ],
        }}
        faq={FAQ}
        ctaTitle="Faire Klassenarbeiten — ab der nächsten Prüfung"
        ctaSub="Fordern Sie ein unverbindliches Angebot für Ihre Schule an — oder bestellen Sie direkt im Shop. Kauf auf Rechnung, Lieferung in 5–10 Werktagen."
      />
    </>
  );
}
