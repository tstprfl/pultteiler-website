import AudienceLayout, { faqJsonLd } from "@/components/AudienceLayout";
import { YEARS } from "@/lib/site";
import { alternatesFor } from "@/lib/i18n";
import { UI_EN, OG_EN } from "@/lib/en";

export const metadata = {
  title: { absolute: "Desk Dividers for Primary Schools | Pultteiler" },
  description:
    "Privacy screens for primary school desks: no copying in tests, child-friendly height, set up in two minutes. Direct from the manufacturer.",
  alternates: alternatesFor("/en/primary-schools"),
  openGraph: OG_EN,
};

const FAQ = [
  {
    q: "Which Pultteiler size is right for primary school?",
    a: "For primary school (school years 1 to 5) we recommend Set A with 50×30 cm divider panels. The height suits the seating height of younger children: it reliably covers the neighbour's paper without shutting the children off completely, so the teacher always keeps an overview of the class.",
  },
  {
    q: "How many dividers do we need for one class?",
    a: "One wooden case contains 12 complete systems (divider panel and clamp). With double desks, one divider per desk is often enough, so one case per class. If every child should have their own privacy screen, we recommend two cases per class. On request we also assemble cases with more than 12 dividers.",
  },
  {
    q: "Can children set up the dividers themselves?",
    a: "Yes. The plug-in system needs no tools: the permanently elastic clamp is pushed onto the desktop and the panel inserted. After a short explanation, primary school children set up and remove the privacy screens themselves. Setting up a whole class takes only a few minutes.",
  },
  {
    q: "Does the Pultteiler also help children with concentration difficulties?",
    a: "Yes. Many schools use individual dividers permanently as a low-distraction workspace, for example for children with ADHD or who are easily distracted in inclusive classes. The screen reduces visual stimuli from the surroundings and creates a quiet work zone without taking the child out of the class community.",
  },
  {
    q: "How does our school order?",
    a: "You send us a request and receive a written quote. Schools in Austria, Germany and Switzerland pay on invoice after delivery, no credit card, no prepayment. For other countries we check delivery and terms individually.",
  },
];

export default function Page() {
  return (
    <div lang="en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ)) }} />
      <AudienceLayout
        ui={UI_EN}
        overline="For primary schools"
        h1={<>Privacy screens for tests in primary school</>}
        intro="Even the first tests should be fair, and some children simply need a quiet, low-distraction place to work. The Pultteiler prevents copying in primary school without isolating the children: child-friendly height, effortless set-up, built to last in everyday school life."
        img="/images/klassenzimmer.png"
        imgAlt="Pultteiler privacy screens on desks in a primary school classroom"
        situation={{
          title: "The situation in primary school",
          paragraphs: [
            "Primary school sets the course: children learn to work independently and honestly. In tests, however, they usually sit close together at double desks, and a glance at the neighbour's paper is less bad intent than almost unavoidable. Splitting classes or moving children around costs time and nerves.",
            "The Pultteiler solves this in two minutes: push the clamp onto the desktop, insert the panel, and every child has their own protected work area. After the test everything goes back into the compact wooden case in the storeroom.",
            "More and more primary schools also use the dividers in inclusive teaching: as a low-distraction workspace for children who are easily distracted, from ADHD to the autism spectrum. This creates a calm learning environment in the middle of the classroom without stigma, because all children know the screens from their tests.",
          ],
        }}
        benefits={{
          title: "Why the Pultteiler suits primary schools",
          items: [
            { title: "Child-friendly height (50×30 cm)", text: "High enough to cover the neighbour's paper, low enough for the teacher to keep every child in view and for nobody to feel shut in." },
            { title: "No tools needed", text: "Plug-in system of clamp and panel: the privacy screens for the whole class are up in two minutes. The children can easily do it themselves." },
            { title: "Low-distraction workspace", text: "Individual dividers in permanent use create quiet work zones for children with concentration difficulties, proven in inclusive classes." },
            { title: "One case per class", text: "12 complete systems in a stackable wooden case: fits in any storeroom and is ready in seconds." },
            { title: "Built to last", text: `Proven in tough everyday school use for over ${YEARS} years. If something does break, every single part can be reordered.` },
            { title: "Fits every school desk", text: "The permanently elastic clamp holds on all common school desks with desktops up to 3 cm thick, single or double desks." },
          ],
        }}
        faq={FAQ}
        ctaTitle="Ready for fair tests?"
        ctaSub="Request a non-binding quote for your primary school. We reply soon with price and delivery terms for your country."
      />
    </div>
  );
}
