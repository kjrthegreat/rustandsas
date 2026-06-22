// Homeowner-facing FAQ. The visible accordion (components/FaqSection.tsx) and the
// FAQPage JSON-LD are both generated from this one array, so the structured data
// always matches what's on the page (Google requires that parity).
//
// Answers use only confirmed facts: insured, free estimates, 2-year warranty,
// veteran + first-time discounts, ~40 mile radius from Somerset, residential +
// commercial + facility management. Phone 502-542-4473. No invented claims.

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. Estimates are always free. Send us a few details or photos of your project and we'll get you a price - or come out for a free on-site look when a job needs a closer measure.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes, we're a licensed and insured local crew. Every job also comes with a 2-year warranty on our work.",
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "We do. We work on homes, commercial buildings, and facility-management projects across the Somerset and Lake Cumberland area - from a backyard deck to a full commercial remodel.",
  },
  {
    question: "How far outside Somerset do you travel?",
    answer:
      "We're based in Somerset, KY and serve roughly a 40 mile radius - including Pulaski County, the Lake Cumberland region, Burnside, Nancy, Science Hill, Eubank, Russell Springs, and Monticello. Not sure if you're in range? Just give us a call.",
  },
  {
    question: "Do you build custom decks and porches?",
    answer:
      "Yes - decks, covered porches, screened rooms, pergolas, and patio covers are some of our most-requested work. We build with cedar or pressure-treated lumber and size every build to your home.",
  },
  {
    question: "Do your projects include a warranty?",
    answer:
      "Every job we do comes with a 2-year warranty. If something isn't right, we make it right.",
  },
  {
    question: "Can I text photos of my project for a quote?",
    answer:
      "Absolutely - that's the fastest way to get a number. Text photos of your project to 502-542-4473 and we'll get back to you with a quote.",
  },
  {
    question: "Do you offer any discounts?",
    answer:
      "We do. U.S. veterans are always discounted, and every first-time customer gets a discounted price on their first job with us.",
  },
];
