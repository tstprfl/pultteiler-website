import Link from "next/link";
import ArticleLayout, { A } from "@/components/ArticleLayout";
import { ARTICLES } from "@/lib/articles";

const meta = { ...ARTICLES.find((a) => a.slug === "sichtschutz-klassenarbeit"), short: "Sichtschutz für die Klassenarbeit", imgAlt: "Sichtschutz auf Schultischen während einer Klassenarbeit" };

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `/ratgeber/${meta.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout
      meta={meta}
      related={[
        { href: "/ratgeber/abschreiben-verhindern-schularbeit", label: "Abschreiben bei der Schularbeit verhindern: 7 Methoden im Vergleich" },
        { href: "/ratgeber/trennwand-schultisch-pruefung", label: "Trennwand für den Schultisch: Worauf es bei Prüfungen ankommt" },
        { href: "/sekundarstufe", label: "Pultteiler für die Sekundarstufe" },
      ]}
    >
      <p style={A.p}>
        Klassenarbeiten sollen zeigen, was jede Schülerin und jeder Schüler wirklich kann. In der Praxis sitzen dabei aber 20 bis 30 junge Menschen dicht nebeneinander — oft an Doppeltischen, mit freiem Blick auf das Nachbarblatt. Ein <strong style={A.strong}>Sichtschutz für die Klassenarbeit</strong> löst dieses Grundproblem direkt am Entstehungsort: am Schultisch.
      </p>

      <h2 style={A.h2}>WARUM EIN SICHTSCHUTZ BEI KLASSENARBEITEN SINNVOLL IST</h2>
      <p style={A.p}>
        Abschreiben ist selten geplante Täuschung — meist ist es Gelegenheit. Wer unsicher ist und das Nachbarblatt ohnehin im Blickfeld hat, schaut hin. Die Folgen tragen alle: Die Note verliert an Aussagekraft, ehrliche Schülerinnen und Schüler fühlen sich benachteiligt, und die Lehrkraft verbringt die Prüfung mit Überwachen statt mit Betreuen.
      </p>
      <p style={A.p}>
        Ein Sichtschutz zwischen den Arbeitsplätzen nimmt die Gelegenheit aus dem Spiel — und verändert damit die Atmosphäre der Prüfung: Jedes Kind arbeitet in seiner eigenen, ruhigen Zone. Viele Lehrkräfte berichten, dass die Konzentration im Raum spürbar steigt, weil auch die ständige Versuchung wegfällt, sich mit den anderen zu vergleichen.
      </p>

      <h2 style={A.h2}>DREI ANFORDERUNGEN AN EINEN GUTEN SICHTSCHUTZ</h2>
      <h3 style={A.h3}>1. Die richtige Höhe — nicht zu niedrig, nicht zu hoch</h3>
      <p style={A.p}>
        Der Sichtschutz muss das Nachbarblatt auch dann verdecken, wenn sich jemand vorbeugt. Gleichzeitig darf er die Aufsicht nicht behindern: Die Lehrkraft muss jeden Arbeitsplatz einsehen können. Bewährt haben sich <strong style={A.strong}>50×30 cm für die Volksschule</strong> und <strong style={A.strong}>50×40 cm ab dem 6. Schuljahr</strong> — abgestimmt auf die Sitzhöhe der jeweiligen Altersstufe.
      </p>
      <h3 style={A.h3}>2. Aufbau in Minuten, ohne Werkzeug</h3>
      <p style={A.p}>
        Eine Klassenarbeit dauert 50 bis 100 Minuten — der Aufbau des Sichtschutzes darf davon nichts wegnehmen. Stecksysteme, bei denen eine Klammer auf die Tischplatte gesteckt und die Platte eingeschoben wird, sind in der Praxis am schnellsten: Die Klasse rüstet ihre Tische selbst, in zwei bis drei Minuten steht alles.
      </p>
      <h3 style={A.h3}>3. Robust genug für den Schulalltag</h3>
      <p style={A.p}>
        Ein Klassensatz Sichtschutz wird pro Schuljahr dutzende Male auf- und abgebaut — von Kinderhänden. Entscheidend sind bruchfeste Platten, dauerelastische Klammern, die nicht ausleiern, und die Möglichkeit, <Link href="/produkte" style={A.a}>einzelne Teile nachzubestellen</Link>, statt den ganzen Satz zu ersetzen.
      </p>

      <h2 style={A.h2}>SO LÄUFT DER EINSATZ IN DER PRAXIS</h2>
      <ul style={A.ul}>
        <li style={A.li}><strong style={A.strong}>Lagerung:</strong> Ein kompakter Koffer mit 12 Systemen pro Klasse im Materialraum — bei Bedarf holt ihn der Tagesdienst.</li>
        <li style={A.li}><strong style={A.strong}>Aufbau:</strong> Zu Beginn der Stunde stecken die Schülerinnen und Schüler die Teiler selbst auf — das gehört nach zwei, drei Klassenarbeiten zur Routine.</li>
        <li style={A.li}><strong style={A.strong}>Während der Arbeit:</strong> Die Lehrkraft sieht über die Teiler hinweg jeden Platz, die Kinder sehen nur ihr eigenes Blatt.</li>
        <li style={A.li}><strong style={A.strong}>Abbau:</strong> Platten raus, Klammern ab, zurück in den Koffer — der Raum ist für die nächste Stunde unverändert nutzbar.</li>
      </ul>

      <h2 style={A.h2}>HÄUFIGER EINWAND: „WIRKT DAS NICHT WIE MISSTRAUEN?"</h2>
      <p style={A.p}>
        Die Erfahrung aus hunderten Schulen zeigt das Gegenteil: Wenn der Sichtschutz für <em>alle</em> gilt, empfinden ihn Schülerinnen und Schüler als fair — niemand wird verdächtigt, niemand muss umgesetzt werden, niemand bekommt den „Extra-Platz vorne beim Pult". Der Sichtschutz normalisiert ehrliches Arbeiten, statt Einzelne zu markieren. Und: Dieselben Teiler lassen sich außerhalb von Prüfungen als <Link href="/ratgeber/reizarmer-arbeitsplatz-schule" style={A.a}>reizarmer Arbeitsplatz</Link> für konzentrationsintensive Phasen nutzen.
      </p>

      <h2 style={A.h2}>FAZIT</h2>
      <p style={{ ...A.p, marginBottom: 0 }}>
        Ein Sichtschutz für Klassenarbeiten ist die einfachste Maßnahme mit der größten Wirkung: Er beseitigt die Gelegenheit zum Abschreiben, spart der Lehrkraft Organisationsaufwand (keine Gruppenteilung, keine zwei Angaben) und schafft für alle dieselben fairen Bedingungen. Worauf Sie bei der Auswahl im Detail achten sollten, lesen Sie im Beitrag <Link href="/ratgeber/trennwand-schultisch-pruefung" style={A.a}>Trennwand für den Schultisch: Worauf es bei Prüfungen ankommt</Link>.
      </p>
    </ArticleLayout>
  );
}
