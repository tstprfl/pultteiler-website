import Link from "next/link";
import ArticleLayout, { A } from "@/components/ArticleLayout";
import { articleEn } from "@/lib/articles-en";
import { alternatesFor } from "@/lib/i18n";
import { OG_EN } from "@/lib/en";

const meta = { ...articleEn("desk-dividers-for-exams"), short: "Desk dividers for exams", imgAlt: "Close-up of Pultteiler desk dividers" };

export const metadata = {
  title: { absolute: `${meta.seoTitle} | Pultteiler` },
  description: meta.description,
  alternates: alternatesFor(meta.path),
  openGraph: OG_EN,
};

export default function Page() {
  return (
    <ArticleLayout
      lang="en"
      meta={meta}
      related={[
        { href: "/en/guide/privacy-screens-for-exams", label: "Privacy screens for class tests: creating fair exam conditions" },
        { href: "/en/universities", label: "Desk dividers for universities and exam centres" },
        { href: "/en/how-it-works", label: "How the plug-in system works" },
      ]}
    >
      <p style={A.p}>
        Buying <strong style={A.strong}>desk dividers for exams</strong> for your school is a decision for many years: a good class set survives hundreds of exams. All the more important to ask the right questions before you buy. This buyer's guide summarises what matters in practice, from the fixing method to spare parts.
      </p>

      <h2 style={A.h2}>FIXING: THE MOST IMPORTANT DIFFERENCE</h2>
      <p style={A.p}>
        Exam dividers come in three designs, and the fixing method decides how useful they are day to day:
      </p>
      <ul style={A.ul}>
        <li style={A.li}><strong style={A.strong}>Free-standing screens:</strong> cardboard or plastic displays that stand loosely on the desk. Cheap but prone to tipping over: one nudge of an elbow and the screen lies on the neighbour's paper. Cardboard versions also do not last long.</li>
        <li style={A.li}><strong style={A.strong}>Screwed-on systems:</strong> permanently mounted dividers are stable but turn the desk into an exam desk for good. Impractical for normal classrooms, and the assembly effort per exam is unacceptable.</li>
        <li style={A.li}><strong style={A.strong}>Clamp systems (plug-in):</strong> an elastic clamp grips the desktop and the divider panel is slotted in. Stands as firmly as a mounted screen but is set up and removed in seconds. The standard for exam use, proven for decades.</li>
      </ul>
      <p style={A.p}>
        Important with clamp systems: check the <strong style={A.strong}>thickness of the desktop</strong>. Common clamps hold desktops up to 3 cm, which covers practically all school desks, including computer room desks and most lecture hall writing surfaces.
      </p>

      <h2 style={A.h2}>SIZE: MATCH IT TO THE AGE GROUP</h2>
      <p style={A.p}>
        The divider must interrupt the line of sight to the neighbour's paper, and that depends on the seating height:
      </p>
      <ul style={A.ul}>
        <li style={A.li}><strong style={A.strong}>Up to school year 5: 50×30 cm.</strong> Fully sufficient for the seating height of younger children and not intimidating. The teacher keeps a clear view of every child.</li>
        <li style={A.li}><strong style={A.strong}>From school year 6: 50×40 cm.</strong> Teenagers sit higher and lean further, and the taller panel still reliably covers the paper.</li>
      </ul>
      <p style={A.p}>
        For mixed use (such as exam centres with adults) the 40 cm height is the right choice. More on our pages for <Link href="/en/primary-schools" style={A.a}>primary schools</Link>, <Link href="/en/secondary-schools" style={A.a}>secondary schools</Link> and <Link href="/en/universities" style={A.a}>universities and exam centres</Link>.
      </p>

      <h2 style={A.h2}>MATERIAL AND DURABILITY</h2>
      <p style={A.p}>
        School equipment has a hard life. Cardboard screens are worn out, bent or scribbled on after one school year. <strong style={A.strong}>Unbreakable plastic panels</strong> have proven themselves: wipeable, torsion-resistant, unaffected by moisture. For the clamps, permanent elasticity is what counts: after the thousandth use they must grip just as well as on the first day.
      </p>
      <p style={A.p}>
        Just as important: <strong style={A.strong}>being able to buy spare parts individually.</strong> If a panel gets lost or a clamp breaks, the whole set should not become unusable. Ask before buying whether panels, clamps and storage are available individually. With manufacturers who produce in-house this is usual, with traded goods often not.
      </p>

      <h2 style={A.h2}>STORAGE AND LOGISTICS</h2>
      <p style={A.p}>
        An underestimated point: where do 25 dividers go between exams? <strong style={A.strong}>Stackable cases with 12 complete systems each</strong> are practical. They fit in any storeroom, can be carried by one person and make the class set “lendable”: the case goes wherever an exam is taking place.
      </p>

      <h2 style={A.h2}>PROCUREMENT CHECKLIST</h2>
      <ul style={A.ul}>
        <li style={A.li}>Clamp system instead of loose screens: stands firmly without assembly</li>
        <li style={A.li}>Panel height suited to the age group (30 cm primary, 40 cm from secondary level)</li>
        <li style={A.li}>Clamp fits your desktop thickness (up to 3 cm is standard)</li>
        <li style={A.li}>Unbreakable plastic instead of cardboard</li>
        <li style={A.li}>Spare parts can be reordered individually</li>
        <li style={A.li}>Compact, stackable storage</li>
        <li style={A.li}>Purchase on invoice possible (procurement that suits schools)</li>
      </ul>

      <h2 style={A.h2}>CONCLUSION</h2>
      <p style={{ ...A.p, marginBottom: 0 }}>
        The best desk divider is the one that still works as a matter of course after five years of constant use: plugged in rather than free-standing, plastic rather than cardboard, spare parts rather than a new purchase. How the privacy screen affects the exam situation in practice is covered in <Link href="/en/guide/privacy-screens-for-exams" style={A.a}>Privacy screens for class tests</Link>.
      </p>
    </ArticleLayout>
  );
}
