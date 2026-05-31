import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, Anton, Special_Elite, Caveat } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const anton = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const specialElite = Special_Elite({
  variable: "--font-stamp",
  subsets: ["latin"],
  weight: ["400"],
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const BASE_URL = "https://www.rustandsawdustky.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Rust & Sawdust - Custom Home Improvements | Somerset, KY",
    template: "%s | Rust & Sawdust KY",
  },
  description:
    "Custom decks, porches, barns, remodels, concrete, and woodwork built by an insured, experienced crew in Somerset, KY. Serving the Lake Cumberland region. Free quotes. 2-year warranty.",
  keywords: [
    "deck builder Somerset KY",
    "porch builder Lake Cumberland",
    "contractor Somerset Kentucky",
    "pole barn Somerset KY",
    "custom woodwork Lake Cumberland",
    "home remodel Somerset KY",
    "concrete contractor Pulaski County KY",
    "barn builder Kentucky",
  ],
  authors: [{ name: "Rust & Sawdust KY" }],
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Rust & Sawdust KY",
    title: "Rust & Sawdust - Custom Home Improvements | Somerset, KY",
    description:
      "Custom decks, porches, barns, remodels, concrete, and woodwork. Insured crew serving Somerset, KY and the Lake Cumberland region. Free quotes, 2-year warranty.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rust & Sawdust - Custom Home Improvements | Somerset, KY",
    description:
      "Custom decks, porches, barns, remodels, concrete, and woodwork. Insured crew serving Somerset, KY and the Lake Cumberland region.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Rust & Sawdust",
  url: BASE_URL,
  telephone: "+15025424473",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Somerset",
    addressRegion: "KY",
    addressCountry: "US",
  },
  areaServed: [
    "Somerset, KY",
    "Pulaski County, KY",
    "Lake Cumberland Region",
    "Nancy, KY",
    "Burnside, KY",
    "Monticello, KY",
  ],
  description:
    "Custom building, crafting & design. Decks, porches, barns, remodels, concrete, and custom woodwork built by an insured, experienced crew serving the Lake Cumberland region.",
  sameAs: [
    "https://www.instagram.com/rustandsawdustky/",
    "https://www.facebook.com/p/Rust-and-Sawdust-KY-100064051812669/",
  ],
  priceRange: "$$",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
