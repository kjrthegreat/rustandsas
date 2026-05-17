import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Rust & Sawdust — Home Improvements | Somerset, KY",
  description:
    "Custom building, crafting & design. Decks, porches, barns, remodels, concrete, and custom woodwork — built by an insured, experienced crew serving the Lake Cumberland region.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="bg-white-warm dark:bg-charcoal text-charcoal dark:text-cream overflow-x-hidden font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
