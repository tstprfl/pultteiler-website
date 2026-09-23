import AudienceLayout, { faqJsonLd } from "@/components/AudienceLayout";
import { YEARS } from "@/lib/site";
import { alternatesFor } from "@/lib/i18n";
import { UI_EN, OG_EN } from "@/lib/en";

export const metadata = {
  title: { absolute: "Desk Dividers for Secondary Schools | Pultteiler" },
  description:
    "Desk dividers for tests and exams from school year 6: 50×40 cm panels, tool-free set-up, durable in daily use. Direct from the manufacturer.",
  alternates: alternatesFor("/en/secondary-schools"),
  openGraph: OG_EN,
};

const FAQ = [
  {
    q: "Which divider size is suitable for secondary schools?",
    a: "From school year 6 we recommend Set B with 50×40 cm divider panels. Older students sit higher, and the taller panel reliably covers the neighbour's paper even when someone leans forward or to the side.",
  },
  {
    q: "How quickly is a class set of dividers set up?",
    a: "A complete class set is up in under five minutes: push the clamp onto the desktop, insert the panel, done. No tools are needed. Many schools let students set up the dividers themselves at the start of the exam, which takes less than two minutes.",
  },
  {
    q: "Will the divider fit our school desks?",
    a: "The permanently elastic clamp fits all common school desks with a desktop up to 3 cm thick: single desks, double desks and desks in computer rooms. For special cases we are happy to advise you in advance.",
  },
  {
    q: "How durable is the Pultteiler in everyday school use?",
    a: `The dividers have been in constant use at secondary schools for over ${YEARS} years. The panels made of high-quality plastic and the elastic clamps withstand frequent set-up and removal by teenagers. Every single part (panel, clamp, case) can be reordered individually.`,
  },
  {
    q: "How does ordering work for our school?",
    a: "You send us a request and receive a written quote. Schools in Austria, Germany and Switzerland pay on invoice, no credit card, no prepayment: Austrian federal schools receive e-invoices with their EKG number, German schools with a VAT ID receive a tax-free intra-community delivery, and Switzerland is supplied tax-free and duty-free. For other countries we check delivery and terms individually.",
  },
];

export default function Page() {
  return (
    <div lang="en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ)) }} />
      <AudienceLayout
        ui={UI_EN}
        overline="FOR SECONDARY SCHOOLS, GRAMMAR SCHOOLS AND VOCATIONAL SCHOOLS"
        h1={<>DESK DIVIDERS FOR TESTS IN SECONDARY SCHOOL</>}
        intro="Class tests, exams, comparative assessments: in secondary school, students are tested often and under pressure for grades. The Pultteiler makes every exam fair. A desk divider that reliably prevents copying and is set up and removed in minutes."
        img="/images/pultteiler-einsatz.jpg"
        imgAlt="Privacy dividers on desks in the computer room of a secondary school"
        situation={{
          title: "THE SITUATION IN SECONDARY SCHOOL",
          paragraphs: [
            "The higher the pressure for grades, the greater the temptation: in secondary school, copying in tests is a real problem, and banning smartphones alone does not solve it as long as the view of the neighbour's paper is clear. The classic workarounds cost everyone time: splitting groups, writing two sets of questions, swapping rooms, rearranging seating plans.",
            "With the Pultteiler the whole class writes at the same time under identical conditions: one set of questions, one room, no split groups. The 50×40 cm divider reliably covers the neighbour's paper even for older students, even when someone leans forward.",
            "The dividers are also useful outside exams: as privacy screens in computer rooms for digital tests, for focused silent work, or as a low-distraction workspace for students who are easily distracted.",
          ],
        }}
        benefits={{
          title: "WHY SECONDARY SCHOOLS CHOOSE THE PULTTEILER",
          items: [
            { title: "TALLER PANEL (50×40 CM)", text: "Matched to the seating height from school year 6: reliably covers the neighbour's paper, even when leaning forward or to the side." },
            { title: "ONE CLASS, ONE EXAM", text: "No split groups, no two sets of questions, no room swaps: everyone writes at the same time under identical, fair conditions." },
            { title: "READY IN MINUTES", text: "Tool-free plug-in set-up: the class sets up the dividers itself at the start of the exam. Afterwards everything goes back into the case." },
            { title: "FOR COMPUTER ROOMS TOO", text: "The clamp fits computer desks up to 3 cm thick, providing privacy for digital tests and online exams." },
            { title: "TWO COLOURS", text: "Set B is available in yellow and subtle grey, to match your school's furnishings." },
            { title: "INDIVIDUAL SPARE PARTS", text: "Panels, clamps and cases can be reordered individually, so your purchase stays fully usable for years." },
          ],
        }}
        products={{
          title: "OUR RECOMMENDATION FROM SCHOOL YEAR 6",
          sub: "Set B with the taller 50×40 cm panel, in yellow or grey. One case contains 12 complete systems.",
          items: [
            {
              name: "SET B: YELLOW, FROM SCHOOL YEAR 6",
              desc: "1 wooden case with 12 divider panels (50×40 cm) and 12 clamps.",
              img: "/images/koffer-gelb.jpg",
              href: "/en/quote",
              cta: "REQUEST A QUOTE →",
              primary: true,
            },
            {
              name: "SET B: GREY, FROM SCHOOL YEAR 6",
              desc: "1 wooden case with 12 divider panels (50×40 cm) and 12 clamps, in subtle grey.",
              img: "/images/koffer-grau.jpg",
              href: "/en/quote",
              cta: "REQUEST A QUOTE →",
              primary: true,
            },
            {
              name: "EQUIPPING SEVERAL CLASSES?",
              desc: "For whole year groups or the entire school we are happy to prepare an individual quote, including cases with more than 12 dividers.",
              img: "/images/Koffer_1.png",
              href: "/en/quote",
              cta: "REQUEST A QUOTE →",
            },
          ],
        }}
        faq={FAQ}
        ctaTitle="FAIR TESTS, STARTING WITH THE NEXT EXAM"
        ctaSub="Request a non-binding quote for your school. We reply soon with price and delivery terms for your country."
      />
    </div>
  );
}
