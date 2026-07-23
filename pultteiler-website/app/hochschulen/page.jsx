import AudienceLayout, { faqJsonLd } from "@/components/AudienceLayout";

export const metadata = {
  title: "Sichtschutz für Prüfungen an Hochschulen & Prüfungszentren — Großbestellungen vom Hersteller",
  description:
    "Trennwände für schriftliche Prüfungen in Hörsälen und Prüfungszentren: hohe Stückzahlen, schneller Auf- und Abbau, Referenz MedUni Innsbruck. Individuelle Angebote direkt vom Hersteller, Kauf auf Rechnung.",
  alternates: { canonical: "/hochschulen" },
};

const FAQ = [
  {
    q: "Liefern Sie auch mehrere hundert Trennwände für große Prüfungen?",
    a: "Ja. Hochschulen und Prüfungszentren beliefern wir mit hohen Stückzahlen — als Hersteller produzieren wir bedarfsgerecht und stellen auch Koffer mit mehr als 12 Teilern zusammen. Fordern Sie ein individuelles Angebot mit Ihrer benötigten Menge an, wir kalkulieren projektbezogen.",
  },
  {
    q: "Wie schnell sind große Stückzahlen vor einer Prüfung aufgebaut?",
    a: "Das Stecksystem kommt ohne Werkzeug aus: Klammer aufstecken, Platte einschieben. Ein eingespieltes Team rüstet damit auch große Hörsäle in kurzer Zeit — pro Arbeitsplatz dauert der Aufbau nur wenige Sekunden. Nach der Prüfung verschwinden die Teiler platzsparend in stapelbaren Holzkoffern.",
  },
  {
    q: "Passen die Trennwände auf Hörsaal-Klapptische und Labortische?",
    a: "Die dauerelastische Klammer hält auf allen Tischplatten bis 3 cm Stärke — darunter die meisten Hörsaal-Schreibflächen, Seminar- und Labortische. Die MedUni Innsbruck setzt unsere Teiler unter anderem in Laborräumen ein. Bei speziellen Tischformaten klären wir die Eignung gerne vorab, auf Wunsch mit Musterlieferung.",
  },
  {
    q: "Welche Referenzen gibt es im Hochschulbereich?",
    a: "Unsere Teiler sind unter anderem an der Medizinischen Universität Innsbruck im Prüfungseinsatz. Insgesamt beliefern wir seit über 40 Jahren mehrere hundert Bildungseinrichtungen in Österreich, Deutschland und der Schweiz — von der Volksschule bis zur Universität.",
  },
  {
    q: "Wie läuft Beschaffung und Rechnungsstellung ab?",
    a: "Sie erhalten ein schriftliches Angebot für Ihre Beschaffungsstelle und zahlen nach Lieferung auf Rechnung — keine Vorkasse, keine Kreditkarte. Österreichische Bundeseinrichtungen erhalten E-Rechnungen mit EKG-Nummer, deutsche Einrichtungen mit UID-Nummer eine steuerfreie Lieferung (deutsches Bankkonto vorhanden), Schweizer Einrichtungen eine steuerfreie, unverzollte Lieferung.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ)) }} />
      <AudienceLayout
        overline="FÜR UNIVERSITÄTEN, FACHHOCHSCHULEN & PRÜFUNGSZENTREN"
        h1={<>SICHTSCHUTZ FÜR PRÜFUNGEN IN HÖRSAAL & PRÜFUNGSZENTRUM</>}
        intro="Wenn hunderte Studierende gleichzeitig schreiben, muss die Prüfungsaufsicht sich auf die Ausstattung verlassen können. Unsere Trennwände sichern schriftliche Prüfungen in Hörsälen, Seminarräumen und Prüfungszentren — in hohen Stückzahlen, direkt vom Hersteller, im Einsatz u. a. an der MedUni Innsbruck."
        img="/images/meduni-innsbruck_2.jpeg"
        imgAlt="Pultteiler-Trennwände im Prüfungseinsatz an der Medizinischen Universität Innsbruck"
        situation={{
          title: "DIE SITUATION BEI GROSSPRÜFUNGEN",
          paragraphs: [
            "Aufnahmetests, Modulklausuren, Staatsprüfungen: An Hochschulen entscheiden schriftliche Prüfungen über Studienplätze und Abschlüsse — entsprechend hoch sind die Anforderungen an Täuschungssicherheit und Rechtssicherheit. Gleichzeitig sitzen die Teilnehmenden in Hörsälen dichter als in jedem Klassenzimmer.",
            "Jeden zweiten Platz freizulassen halbiert die Raumkapazität; mehrere Aufgabenversionen zu erstellen vervielfacht den Korrekturaufwand und bleibt angreifbar. Die wirtschaftlichere Lösung: Sichtschutz direkt am Arbeitsplatz. Mit dem Pultteiler nutzen Sie die volle Raumkapazität — bei voller Täuschungssicherheit für jede Prüfungsvariante.",
            "Als Hersteller liefern wir die Stückzahlen, die Sie brauchen, kalkulieren projektbezogen und stehen auch nach Jahren mit Ersatzteilen bereit. Die Medizinische Universität Innsbruck vertraut bei Prüfungen — bis hinein in die Laborräume — auf unsere Teiler.",
          ],
        }}
        benefits={{
          title: "DARUM SETZEN HOCHSCHULEN AUF DEN PULTTEILER",
          items: [
            { title: "HOHE STÜCKZAHLEN AB WERK", text: "Als Hersteller produzieren wir bedarfsgerecht — vom einzelnen Prüfungsraum bis zur Ausstattung ganzer Prüfungszentren. Projektbezogene Kalkulation." },
            { title: "VOLLE RAUMKAPAZITÄT", text: "Kein Freilassen jedes zweiten Platzes, keine Mehrfach-Aufgabenversionen: Jeder Arbeitsplatz wird prüfungstauglich — der Raum bleibt voll nutzbar." },
            { title: "SEKUNDENSCHNELLER AUFBAU", text: "Werkzeugloses Stecksystem: wenige Sekunden pro Arbeitsplatz. Auch große Hörsäle sind mit kleinem Team rasch gerüstet — und ebenso schnell wieder geräumt." },
            { title: "PLATZSPARENDE LAGERUNG", text: "12 Systeme pro stapelbarem Holzkoffer — auf Anfrage auch größere Koffer. Hunderte Teiler lagern kompakt bis zum nächsten Prüfungstermin." },
            { title: "REFERENZ MEDUNI INNSBRUCK", text: "Im Prüfungseinsatz an der Medizinischen Universität Innsbruck — vom Hörsaal bis ins Labor. Weitere Referenzen nennen wir auf Anfrage gerne." },
            { title: "BESCHAFFUNGSKONFORM", text: "Schriftliches Angebot, Lieferung auf Rechnung, E-Rechnung (AT), steuerfreie Lieferung mit UID (DE) bzw. unverzollt (CH) — passend zu Ihren Einkaufsprozessen." },
          ],
        }}
        products={{
          title: "IHR WEG ZUM ANGEBOT",
          sub: "Bei Großabnahmen kalkulieren wir individuell — nach Stückzahl, Plattengröße und Lieferziel. Gerne senden wir vorab ein Muster.",
          items: [
            {
              name: "INDIVIDUELLES ANGEBOT",
              desc: "Nennen Sie uns Stückzahl, Einsatzort und Wunschtermin — Sie erhalten kurzfristig ein schriftliches Angebot für Ihre Beschaffungsstelle.",
              img: "/images/meduni-innsbruck_1.jpeg",
              href: "/angebot",
              cta: "ANGEBOT ANFORDERN →",
              primary: true,
            },
            {
              name: "ERST TESTEN: EINZELNER KOFFER",
              desc: "Sie möchten die Teiler zuerst in einer Prüfung erproben? Bestellen Sie einen Koffer mit 12 Systemen direkt im Shop — Kauf auf Rechnung.",
              price: "ab € 241,00",
              note: "inkl. MwSt & Lieferung (AT/DE) — Schweiz steuerfrei inkl. Lieferung",
              img: "/images/koffer-grau.jpg",
              href: "/produkte",
              cta: "ZUM SHOP",
            },
          ],
        }}
        faq={FAQ}
        ctaTitle="PLANEN SIE IHRE NÄCHSTE GROSSPRÜFUNG MIT UNS"
        ctaSub="Schicken Sie uns Stückzahl und Termin — wir antworten kurzfristig mit einem individuellen Angebot inklusive aller Liefer- und Rechnungsdetails für AT, DE und CH."
      />
    </>
  );
}
