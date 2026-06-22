import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Sans_3, Anton, Special_Elite, Caveat } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import MobileCTABar from "@/components/MobileCTABar";
import { SERVICES } from "@/lib/services";
import "./globals.css";

// preload:false on all fonts — they use display:swap, so text paints
// immediately in a fallback. This keeps the 662KB of font files from
// preloading at high priority ahead of the LCP hero image on mobile.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  display: "swap",
  preload: false,
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
  preload: false,
});

const anton = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: false,
});

const specialElite = Special_Elite({
  variable: "--font-stamp",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: false,
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: false,
});

const BASE_URL = "https://www.rustandsawdustky.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Rust & Sawdust - Custom Home Improvements | Somerset, KY",
    template: "%s | Rust & Sawdust KY",
  },
  description:
    "Custom decks, porches, barns, remodels, concrete, and woodwork built by an insured, experienced crew in Somerset, KY. Serving the Lake Cumberland region and beyond within a 40 mile radius. Free quotes. 2-year warranty.",
  keywords: [
    "deck builder Somerset KY",
    "porch builder Lake Cumberland",
    "contractor Somerset Kentucky",
    "pole barn Somerset KY",
    "custom woodwork Lake Cumberland",
    "home remodel Somerset KY",
    "concrete contractor Pulaski County KY",
    "barn builder Kentucky",
    "contractor Russell County KY",
    "contractor Wayne County KY",
    "contractor Monticello KY",
    "contractor Russell Springs KY",
  ],
  authors: [{ name: "Rust & Sawdust KY" }],
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Rust & Sawdust KY",
    title: "Rust & Sawdust - Custom Home Improvements | Somerset, KY",
    description:
      "Custom decks, porches, barns, remodels, concrete, and woodwork. Insured crew serving Somerset, KY and the Lake Cumberland region and beyond within a 40 mile radius. Free quotes, 2-year warranty.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rust & Sawdust - Custom Home Improvements | Somerset, KY",
    description:
      "Custom decks, porches, barns, remodels, concrete, and woodwork. Insured crew serving Somerset, KY and the Lake Cumberland region and beyond within a 40 mile radius.",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#1F2021",
};

const THUMBTACK_URL =
  "https://www.thumbtack.com/ky/somerset/moving-companies/rust-sawdust-ky-building-services/service/329281428090347630";

// On-page customer reviews (mirrors components/ReviewsSection.tsx). Marked up so the
// star rating can surface in search results. Keep in sync with what's visible on the page.
const onPageReviews = [
  {
    author: "Steve H.",
    datePublished: "2025-09-01",
    reviewBody:
      "Highly recommend, fair and honest. A level of professionalism rarely seen today. He kept me in the loop for the entire job.",
  },
  {
    author: "James R.",
    datePublished: "2026-04-01",
    reviewBody:
      "We had a significant amount of work completed spanning several trades (tile, drywall, carpentry) and all work was completed at a very high quality.",
  },
  {
    author: "Tim D.",
    datePublished: "2026-03-01",
    reviewBody:
      "Noah is a top notch guy! He aims to please all his clients/customers. He goes above and beyond to exceed all of his customers expectations.",
  },
  {
    author: "Lisa G.",
    datePublished: "2026-03-01",
    reviewBody:
      "Noah has done several jobs for me and I have been very pleased with the work. He is easy to work with and is very honest.",
  },
  {
    author: "Anthony S.",
    datePublished: "2026-03-01",
    reviewBody:
      "This company thrives on meeting the expectations of the customers needs. Always on time. Very consistent, brutally honest in what needs to be done.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${BASE_URL}/#business`,
  name: "Rust & Sawdust",
  alternateName: ["Rust and Sawdust", "Rust & Sawdust KY", "Rust and Sawdust KY"],
  slogan: "Custom building. Crafted right.",
  url: BASE_URL,
  telephone: "+15025424473",
  email: "rustandsawdustky@gmail.com",
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/logo.png`,
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Check, Credit Card",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Somerset",
    addressRegion: "KY",
    postalCode: "42501",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.0922,
    longitude: -84.6041,
  },
  hasMap: "https://www.google.com/maps/search/?api=1&query=Rust+and+Sawdust+Somerset+KY",
  areaServed: [
    {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 37.0922, longitude: -84.6041 },
      geoRadius: "64374", // ~40 miles, in meters
    },
    "Somerset, KY",
    "Pulaski County, KY",
    "Russell County, KY",
    "Wayne County, KY",
    "Lake Cumberland Region",
    "Nancy, KY",
    "Burnside, KY",
    "Monticello, KY",
    "Russell Springs, KY",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  description:
    "Custom building, crafting & design. Decks, porches, barns, remodels, concrete, and custom woodwork built by an insured, experienced crew serving Somerset and the Lake Cumberland region and beyond within a 40 mile radius.",
  knowsAbout: [
    "Deck building",
    "Porch and patio cover construction",
    "Screened rooms and pergolas",
    "Pole barns and post-frame buildings",
    "Concrete and excavating",
    "Custom woodwork and live-edge countertops",
    "Home additions and remodeling",
    "Window installation, trim, and painting",
    "Backyard putting greens",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction & Remodeling Services",
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        url: `${BASE_URL}/services/${service.slug}`,
        serviceType: service.title,
        provider: { "@id": `${BASE_URL}/#business` },
        areaServed: "Somerset, KY and the Lake Cumberland region",
      },
    })),
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "28",
    bestRating: "5",
    worstRating: "1",
  },
  review: onPageReviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    datePublished: r.datePublished,
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody: r.reviewBody,
  })),
  sameAs: [
    "https://www.instagram.com/rustandsawdustky/",
    "https://www.facebook.com/p/Rust-and-Sawdust-KY-100064051812669/",
    THUMBTACK_URL,
    // Verified Google Business Profile (Knowledge Graph entity /g/11zg20p4f9)
    "https://www.google.com/search?kgmid=/g/11zg20p4f9",
    "https://share.google/cQXvG2ACRTAsYKc8j",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${sourceSans.variable} ${anton.variable} ${specialElite.variable} ${caveat.variable}`}
    >
      <body className="bg-white-warm dark:bg-charcoal text-charcoal dark:text-cream overflow-x-hidden font-sans antialiased paper-grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          {children}
          {/* Clearance so the fixed mobile call/text bar never hides footer content */}
          <div aria-hidden className="md:hidden h-14" />
        </ThemeProvider>
        <MobileCTABar />
      </body>
    </html>
  );
}
