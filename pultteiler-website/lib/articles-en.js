// Englische Ratgeber-Artikel (Gegenstück zu lib/articles.js). Pfad jeweils /en/guide/<slug>,
// deutsches Gegenstück in lib/i18n.js (PAGE_PAIRS).
export const ARTICLES_EN = [
  {
    slug: "research-on-copying-in-exams",
    title: "What Research Says About Copying in Exams: It Comes Down to the Neighbour",
    seoTitle: "Research on Copying in Exams",
    description: "Four studies show that copying in exams happens almost only between seat neighbours. What this means for desk dividers, with sources.",
    teaser: "Copying happens between seat neighbours, not across rows: what field experiments at universities show, and what follows for desk dividers.",
    date: "2026-10-10",
    img: "/images/kurhaus-tischreihe.jpg",
  },
  {
    slug: "privacy-screens-for-exams",
    title: "Privacy Screens for Class Tests: How to Create Fair Exam Conditions",
    seoTitle: "Privacy Screens for Class Tests",
    description: "Why a privacy screen makes sense in class tests, which requirements it must meet and how it works in everyday school life.",
    teaser: "Why a privacy screen makes sense in class tests, which requirements it must meet and how it works in practice.",
    date: "2026-09-23",
    img: "/images/klassenzimmer.png",
  },
  {
    slug: "desk-dividers-for-exams",
    title: "Desk Dividers for Exams: What Really Matters",
    seoTitle: "Desk Dividers for Exams: Buyer's Guide",
    description: "Desk dividers compared: sizes, fixing, material and handling. A practical buyer's guide for schools and exam centres.",
    teaser: "Size, fixing, material, handling: the practical buyer's guide to desk dividers for exams.",
    date: "2026-09-23",
    img: "/images/nahaufnahme.jpeg",
  },
  {
    slug: "prevent-cheating-in-exams",
    title: "How to Prevent Copying in Class Tests: 7 Methods Compared",
    seoTitle: "Prevent Copying in Tests: 7 Methods",
    description: "Split groups, two versions, seating plans, privacy screens: which methods against copying in tests work, and what they cost in daily school life.",
    teaser: "Split groups, two versions, strict seating plans or privacy screens? Seven methods against copying, honestly compared.",
    date: "2026-09-23",
    img: "/images/pultteiler-2.jpg",
  },
  {
    slug: "low-distraction-workspace",
    title: "A Low-Distraction Workspace at School: Supporting Concentration with Desk Dividers",
    seoTitle: "Low-Distraction Workspace at School",
    description: "How a low-distraction workspace helps children concentrate, and how schools set one up with desk dividers without renovation.",
    teaser: "How a low-distraction workspace helps children concentrate, and how schools set it up without renovation.",
    date: "2026-09-23",
    img: "/images/pultteiler-einsatz.jpg",
  },
];

export const articleEn = (slug) => {
  const a = ARTICLES_EN.find((x) => x.slug === slug);
  return { ...a, path: `/en/guide/${a.slug}` };
};
