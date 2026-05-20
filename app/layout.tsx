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

export const metadata: Metadata = {
  title: "Rust & Sawdust - Home Improvements | Somerset, KY",
  description:
    "Custom building, crafting & design. Decks, porches, barns, remodels, concrete, and custom woodwork - built by an insured, experienced crew serving the Lake Cumberland region.",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
