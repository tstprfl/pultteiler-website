import Link from "next/link";
import ArticleLayout, { A } from "@/components/ArticleLayout";
import { articleEn } from "@/lib/articles-en";
import { alternatesFor } from "@/lib/i18n";
import { OG_EN } from "@/lib/en";

const meta = { ...articleEn("privacy-screens-for-exams"), short: "Privacy screens for class tests", imgAlt: "Privacy screens on school desks during a class test" };

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
        { href: "/en/guide/prevent-cheating-in-exams", label: "How to prevent copying in class tests: 7 methods compared" },
        { href: "/en/guide/desk-dividers-for-exams", label: "Desk dividers for exams: what really matters" },
        { href: "/en/secondary-schools", label: "Pultteiler for secondary schools" },
      ]}
    >
      <p style={A.p}>
        Class tests should show what each student can really do. In practice, however, 20 to 30 young people sit close together, often at double desks, with a clear view of the neighbour's paper. A <strong style={A.strong}>privacy screen for class tests</strong> solves this basic problem where it arises: at the school desk.
      </p>

      <h2 style={A.h2}>WHY A PRIVACY SCREEN MAKES SENSE IN CLASS TESTS</h2>
      <p style={A.p}>
        Copying is rarely planned cheating; mostly it is opportunity. Anyone who is unsure and has the neighbour's paper in view anyway will look. Everyone bears the consequences: the grade loses meaning, honest students feel disadvantaged, and the teacher spends the exam supervising instead of supporting.
      </p>
      <p style={A.p}>
        A privacy screen between the workplaces takes the opportunity away, and with it changes the atmosphere of the exam: every child works in their own quiet zone. Many teachers report that concentration in the room rises noticeably, because the constant temptation to compare oneself with others also disappears.
      </p>

      <h2 style={A.h2}>THREE REQUIREMENTS FOR A GOOD PRIVACY SCREEN</h2>
      <h3 style={A.h3}>1. The right height: not too low, not too high</h3>
      <p style={A.p}>
        The privacy screen must cover the neighbour's paper even when someone leans forward. At the same time it must not get in the way of supervision: the teacher must be able to see every workplace. Proven sizes are <strong style={A.strong}>50×30 cm for primary school</strong> and <strong style={A.strong}>50×40 cm from school year 6</strong>, matched to the seating height of each age group.
      </p>
      <h3 style={A.h3}>2. Set up in minutes, without tools</h3>
      <p style={A.p}>
        A class test lasts 50 to 100 minutes, and setting up the privacy screens must not take anything away from that. Plug-in systems, where a clamp is pushed onto the desktop and the panel inserted, are the fastest in practice: the class equips its own desks, and everything is ready in two to three minutes.
      </p>
      <h3 style={A.h3}>3. Robust enough for everyday school life</h3>
      <p style={A.p}>
        A class set of privacy screens is set up and removed dozens of times per school year, by children's hands. What matters are unbreakable panels, permanently elastic clamps that do not wear out, and the option to <Link href="/en/products" style={A.a}>reorder individual parts</Link> instead of replacing the whole set.
      </p>

      <h2 style={A.h2}>HOW IT WORKS IN PRACTICE</h2>
      <ul style={A.ul}>
        <li style={A.li}><strong style={A.strong}>Storage:</strong> one compact case with 12 systems per class in the storeroom, fetched when needed.</li>
        <li style={A.li}><strong style={A.strong}>Set-up:</strong> at the start of the lesson the students attach the dividers themselves, which becomes routine after two or three tests.</li>
        <li style={A.li}><strong style={A.strong}>During the test:</strong> the teacher sees every place over the dividers, the children see only their own paper.</li>
        <li style={A.li}><strong style={A.strong}>Removal:</strong> panels out, clamps off, back into the case. The room is unchanged for the next lesson.</li>
      </ul>

      <h2 style={A.h2}>A COMMON OBJECTION: “DOESN'T THIS SIGNAL MISTRUST?”</h2>
      <p style={A.p}>
        Experience from hundreds of schools shows the opposite: when the privacy screen applies to <em>everyone</em>, students perceive it as fair. Nobody is suspected, nobody has to be moved, nobody gets the “special seat at the front by the teacher's desk”. The privacy screen makes honest work normal instead of singling people out. And the same dividers can be used outside exams as a <Link href="/en/guide/low-distraction-workspace" style={A.a}>low-distraction workspace</Link> for phases that require concentration.
      </p>

      <h2 style={A.h2}>CONCLUSION</h2>
      <p style={{ ...A.p, marginBottom: 0 }}>
        A privacy screen for class tests is the simplest measure with the greatest effect: it removes the opportunity to copy, saves the teacher organisational effort (no split groups, no two versions) and creates the same fair conditions for everyone. What to look out for in detail when choosing one is covered in <Link href="/en/guide/desk-dividers-for-exams" style={A.a}>Desk dividers for exams: what really matters</Link>.
      </p>
    </ArticleLayout>
  );
}
