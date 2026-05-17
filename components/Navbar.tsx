"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Thin "shop notice" strip across the very top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-oil text-cedar-pale font-stamped text-[10px] tracking-[0.25em] uppercase py-1 text-center border-b-2 border-cedar/40">
        <span className="px-2">Somerset, KY</span>
        <span className="text-cedar/60">★</span>
        <span className="px-2">Insured · 2-Yr Warranty</span>
        <span className="text-cedar/60">★</span>
        <span className="px-2">Veteran &amp; First-Time Discounts</span>
        <span className="text-cedar/60">★</span>
        <span className="px-2">502 · 542 · 4473</span>
      </div>

      <div className="fixed top-[26px] left-0 right-0 z-50 flex justify-center px-3">
        <nav className="flex items-center justify-between gap-4 w-full max-w-6xl bg-cream/95 dark:bg-oil/95 border-y-[3px] border-x border-charcoal dark:border-cedar/40 shadow-[0_4px_0_0_rgba(0,0,0,0.18)] dark:shadow-[0_4px_0_0_rgba(0,0,0,0.5)] px-5 py-2.5 backdrop-blur-md">

          <Link href="#" className="flex items-center gap-2 shrink-0 group">
            <div className="font-stencil text-2xl text-charcoal dark:text-cream-dark leading-none">
              RUST<span className="text-rust">&amp;</span>SAWDUST
            </div>
            <span className="hidden sm:inline-block font-stamped text-[9px] tracking-widest uppercase text-walnut dark:text-stone leading-tight border-l border-cedar/40 pl-2">
              KY
              <br />
              Co.
            </span>
          </Link>

          <ul className="hidden md:flex gap-7 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-stamped text-[11px] font-bold tracking-[0.18em] uppercase text-charcoal dark:text-cream hover:text-rust dark:hover:text-cedar-pale transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-rust hover:bg-cedar text-white-warm font-stencil text-sm tracking-widest uppercase px-5 h-9 border-2 border-charcoal shadow-[3px_3px_0_0_rgba(20,19,15,0.55)]"
            >
              Free Quote →
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              className="w-8 h-8 flex items-center justify-center text-charcoal dark:text-cream border-2 border-charcoal dark:border-cedar/40"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="absolute top-full mt-1 left-3 right-3 bg-cream dark:bg-oil border-x border-y-[3px] border-charcoal dark:border-cedar/40 shadow-[0_4px_0_0_rgba(0,0,0,0.18)] flex flex-col gap-3 px-6 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-stamped text-sm font-bold tracking-widest uppercase text-charcoal dark:text-cream hover:text-rust"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-1 inline-flex items-center justify-center bg-rust text-white-warm font-stencil text-sm tracking-widest uppercase px-6 h-10 border-2 border-charcoal"
            >
              Free Quote →
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
