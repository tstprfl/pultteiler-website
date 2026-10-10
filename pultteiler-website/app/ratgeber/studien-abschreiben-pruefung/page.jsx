import Link from "next/link";
import ArticleLayout, { A } from "@/components/ArticleLayout";
import { ARTICLES } from "@/lib/articles";
import { alternatesFor } from "@/lib/i18n";

const meta = { ...ARTICLES.find((a) => a.slug === "studien-abschreiben-pruefung"), short: "Studien zu Abschreiben", imgAlt: "Prüfungssaal mit Trennwänden auf jedem Tisch", imgPos: "center 72%" };

export const metadata = {
  title: meta.seoTitle || meta.title,
  description: meta.description,
  alternates: alternatesFor("/ratgeber/studien-abschreiben-pruefung"),
};

const ext = { ...A.a, wordBreak: "break-word" };

export default function Page() {
  return (
    <ArticleLayout
      meta={meta}
      related={[
        { href: "/ratgeber/abschreiben-verhindern-schularbeit", label: "Abschreiben bei der Schularbeit verhindern: 7 Methoden im Vergleich" },
        { href: "/ratgeber/trennwand-schultisch-pruefung", label: "Trennwand für den Schultisch: Worauf es bei Prüfungen ankommt" },
        { href: "/hochschulen", label: "Trennwände für Klausuren in Hörsälen und Prüfungszentren" },
      ]}
    >
      <p style={A.p}>
        Wie viel wird bei Prüfungen tatsächlich abgeschrieben, und wo genau passiert es? Diese Fragen haben Forschende an Universitäten in den USA und in Deutschland mit Antwortmustern aus echten Prüfungen untersucht. Die Ergebnisse sind erstaunlich einheitlich: <strong style={A.strong}>Abgeschrieben wird beim direkten Sitznachbarn</strong>, und sobald die Sichtlinie zum Nachbarblatt wegfällt, verschwindet das Problem fast vollständig. Dieser Artikel fasst die wichtigsten Studien zusammen und zeigt, was sie für den Einsatz einer Trennwand am Schultisch bedeuten.
      </p>

      <h2 style={A.h2}>Wie man Abschreiben überhaupt messen kann</h2>
      <p style={A.p}>
        Befragungen unterschätzen das Thema, weil kaum jemand gerne zugibt, abgeschrieben zu haben. Die neueren Studien gehen deshalb anders vor: Sie vergleichen bei Multiple-Choice-Prüfungen, wie ähnlich die Antworten von Sitznachbarn sind, und stellen das der Ähnlichkeit von Personen gegenüber, die weit auseinander sitzen. Besonders aussagekräftig sind <strong style={A.strong}>gleiche falsche Antworten</strong>: Wer dieselbe richtige Lösung hat, kann einfach beide gelernt haben. Wer denselben Fehler macht, hat mit hoher Wahrscheinlichkeit beim Nachbarn nachgesehen.
      </p>

      <h2 style={A.h2}>Vier Studien, ein Muster</h2>

      <h3 style={A.h3}>1. Feldexperiment mit Universitätsstudierenden (Cagala, Glogowsky, Rincke 2024)</h3>
      <p style={A.p}>
        Drei Ökonomen haben in einer Klausur die Antwortähnlichkeit zwischen Sitznachbarn und Nicht-Nachbarn verglichen, veröffentlicht im Journal of Human Resources. Ergebnis: Unter normaler Aufsicht haben <strong style={A.strong}>mindestens 7,7% der nebeneinander sitzenden Paare</strong> voneinander abgeschrieben. Zwischen Vorder- und Hintermann fand sich keine Auffälligkeit, das Abschreiben läuft über die Sitzreihe. Paare aus leistungsschwächeren Studierenden schrieben häufiger ab. Eine enge Aufsicht hat das Abschreiben beseitigt. Bemerkenswert am Rande: Eine zu unterschreibende Ehrlichkeitserklärung hat das Abschreiben nicht gesenkt, sondern verdoppelt.
      </p>

      <h3 style={A.h3}>2. 242 Studierende, eine Zwischenprüfung (Levitt und Lin 2015)</h3>
      <p style={A.p}>
        Der Ökonom Steven Levitt, bekannt durch das Buch Freakonomics, hat mit Ming-Jen Lin die Prüfungen eines naturwissenschaftlichen Einführungskurses an einer amerikanischen Spitzenuniversität analysiert. In der Zwischenprüfung mit freier Platzwahl fanden sie Hinweise auf Abschreiben bei <strong style={A.strong}>mindestens 10% der 242 Studierenden</strong>. Für die Abschlussprüfung wurden die Plätze zufällig zugewiesen und die Aufsicht verstärkt: Danach war von den Auffälligkeiten praktisch nichts mehr übrig. Gemeinsames Lernen konnten die Autoren als Erklärung ausschließen, weil sie wussten, wer ursprünglich nebeneinander sitzen wollte.
      </p>

      <h3 style={A.h3}>3. Zufällige Platzzuweisung im Vergleich (Fendler, Yates, Godbey 2018)</h3>
      <p style={A.p}>
        Drei Forscher der Georgia State University haben eine Prüfung so gestaltet, dass sich Abschreiben direkt messen lässt. Eine Gruppe durfte die Plätze frei wählen, die andere bekam Plätze zugelost. Ergebnis: ein <strong style={A.strong}>signifikanter Rückgang des gemessenen Abschreibens</strong> bei zugewiesenen Plätzen. Die Autoren betonen, dass damit erstmals tatsächliches Verhalten statt anonymer Selbstauskünfte gemessen wurde.
      </p>

      <h3 style={A.h3}>4. Der Klassiker: Abstand und Testformen (Houston 1976)</h3>
      <p style={A.p}>
        Schon 1976 hat John P. Houston im Journal of Educational Psychology in zwei Experimenten untersucht, wie das Abschreiben bei Multiple-Choice-Prüfungen vom Abstand zwischen den Studierenden und vom Einsatz alternativer Testformen abhängt. Eine Folgestudie von 1986 betrachtete zusätzlich, welche Rolle Bekanntschaft und freie oder zugewiesene Plätze spielen. Das Thema ist also seit fünfzig Jahren Forschungsgegenstand, und die Stellschrauben sind seither dieselben: Nähe, Sichtlinie, Platzwahl.
      </p>

      <h2 style={A.h2}>Was die Studien gemeinsam haben</h2>
      <ul style={A.ul}>
        <li style={A.li}><strong style={A.strong}>Abschreiben ist ein Nachbarschaftsphänomen.</strong> Es findet zwischen direkten Sitznachbarn statt, nicht über Reihen hinweg.</li>
        <li style={A.li}><strong style={A.strong}>Die Größenordnung ist relevant.</strong> Je nach Studie waren 8% bis 10% der Studierenden beteiligt, und das an Universitäten mit erwachsenen Teilnehmenden.</li>
        <li style={A.li}><strong style={A.strong}>Gelegenheit entscheidet.</strong> Alle wirksamen Gegenmaßnahmen nehmen die Gelegenheit weg: Abstand, zugeloste Plätze, enge Aufsicht. Appelle und Erklärungen bringen nichts.</li>
      </ul>

      <h2 style={A.h2}>Was das für die Trennwand am Schultisch bedeutet</h2>
      <p style={A.p}>
        Eine Studie, die Trennwände auf Schultischen selbst untersucht hat, gibt es nach unserer Recherche nicht. Die vorhandene Forschung beschreibt aber genau den Mechanismus, an dem eine Trennwand ansetzt: die <strong style={A.strong}>freie Sichtlinie zum Nachbarblatt</strong>. Abstand und zugeloste Plätze wirken, weil sie diese Sichtlinie unterbrechen. Beides kostet im Schulalltag jedoch etwas: Abstand braucht einen größeren Raum oder eine geteilte Klasse, zugeloste Plätze brauchen Organisation vor jeder Arbeit, enge Aufsicht bindet die Lehrkraft.
      </p>
      <p style={A.p}>
        Die <Link href="/ratgeber/trennwand-schultisch-pruefung" style={A.a}>Trennwand am Schultisch</Link> unterbricht die Sichtlinie, ohne den Raum zu wechseln, die Klasse zu teilen oder die Sitzordnung umzubauen. Sie steht in wenigen Augenblicken, die Klasse bleibt zusammen, und die Lehrkraft kann Ansprechperson bleiben statt Aufsichtsorgan. Welche Methoden im Alltag sonst noch wirken und was sie kosten, zeigt unser <Link href="/ratgeber/abschreiben-verhindern-schularbeit" style={A.a}>Vergleich von sieben Methoden gegen Abschreiben</Link>.
      </p>

      <h2 style={A.h2}>Exkurs: Abschirmung und Konzentration</h2>
      <p style={A.p}>
        Zur Frage, ob eine Abschirmung am Tisch auch beim konzentrierten Arbeiten hilft, gibt es eine ältere Untersuchung: Robert Johnson hat 1981 an der University of Tennessee sechs leicht ablenkbare Volksschulkinder beim Arbeiten mit und ohne Tischabschirmung beobachtet. Bei den Drittklässlern nahmen das Arbeitsverhalten und die erledigten Aufgaben zu, bei den Fünftklässlern änderte sich wenig. Die Stichprobe ist klein, die Ergebnisse sind nicht auf alle Kinder übertragbar. Als Hinweis passt das Ergebnis aber zu dem, was Schulen uns vom <Link href="/ratgeber/reizarmer-arbeitsplatz-schule" style={A.a}>reizarmen Arbeitsplatz</Link> berichten.
      </p>

      <h2 style={A.h2}>Fazit</h2>
      <p style={A.p}>
        Die Forschung ist sich einig: Abschreiben bei Prüfungen ist vor allem eine Frage der Gelegenheit, und die Gelegenheit heißt Sitznachbar. Wer die Sichtlinie zum Nachbarblatt unterbricht, löst das Problem an der Wurzel. Die Trennwand am Schultisch ist dafür der Weg mit dem geringsten Aufwand. Gerne beraten wir Sie zur passenden Ausstattung, <Link href="/angebot" style={A.a}>fordern Sie ein unverbindliches Angebot an</Link>.
      </p>

      <h2 style={A.h2}>Quellen</h2>
      <ul style={{ ...A.ul, fontSize: 14, marginBottom: 0 }}>
        <li style={A.li}>Cagala, T., Glogowsky, U., Rincke, J. (2024): Detecting and Preventing Cheating in Exams: Evidence from a Field Experiment. Journal of Human Resources 59(1), 210–241. <a href="https://jhr.uwpress.org/content/59/1/210" target="_blank" rel="noopener noreferrer" style={ext}>jhr.uwpress.org</a></li>
        <li style={A.li}>Levitt, S. D., Lin, M.-J. (2015): Catching Cheating Students. NBER Working Paper 21628. <a href="https://www.nber.org/papers/w21628" target="_blank" rel="noopener noreferrer" style={ext}>nber.org</a></li>
        <li style={A.li}>Fendler, R. J., Yates, M. C., Godbey, J. M. (2018): Observing and Deterring Social Cheating on College Exams. International Journal for the Scholarship of Teaching and Learning 12(1), Art. 4. <a href="https://eric.ed.gov/?id=EJ1172223" target="_blank" rel="noopener noreferrer" style={ext}>eric.ed.gov</a></li>
        <li style={A.li}>Houston, J. P. (1976): Amount and Loci of Classroom Answer Copying, Spaced Seating, and Alternate Test Forms. Journal of Educational Psychology 68(6), 729–735. <a href="https://eric.ed.gov/?id=EJ156029" target="_blank" rel="noopener noreferrer" style={ext}>eric.ed.gov</a></li>
        <li style={A.li}>Houston, J. P. (1986): Classroom Answer Copying: Roles of Acquaintanceship and Free Versus Assigned Seating. Journal of Educational Psychology 78(3), 230–232.</li>
        <li style={A.li}>Johnson, R. W. (1981): The Effects of Study Carrels on the Behavior and Academic Performance of Distractible Elementary School Children. Dissertation, University of Tennessee. <a href="https://trace.tennessee.edu/entities/publication/7de42620-c8be-4716-914d-10612c880cca" target="_blank" rel="noopener noreferrer" style={ext}>trace.tennessee.edu</a></li>
      </ul>
    </ArticleLayout>
  );
}
