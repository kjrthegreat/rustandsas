"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between gap-4 w-full max-w-5xl bg-white-warm/95 dark:bg-charcoal-mid/95 border border-cedar/20 rounded-2xl shadow-lg shadow-charcoal/10 dark:shadow-black/30 px-5 py-3 backdrop-blur-md">

        <Link
          href="#"
          className="font-heading text-lg text-charcoal dark:text-cream tracking-wide hover:opacity-75 shrink-0"
        >
          Rust <span className="text-cedar">&</span> Sawdust
        </Link>

        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs font-semibold tracking-widest uppercase text-walnut dark:text-stone hover:text-cedar transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-cedar/25 text-walnut dark:text-stone hover:text-cedar hover:border-cedar"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-cedar hover:bg-cedar-light text-white-warm font-semibold text-xs tracking-widest uppercase px-5 h-8"
          >
            Free Quote
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-cedar/25 text-walnut dark:text-stone"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center text-charcoal dark:text-cream"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="absolute top-full mt-2 left-4 right-4 bg-white-warm/95 dark:bg-charcoal-mid/95 border border-cedar/20 rounded-2xl shadow-lg flex flex-col gap-3 px-6 py-5 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold tracking-widest uppercase text-walnut dark:text-stone hover:text-cedar"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-1 inline-flex items-center justify-center rounded-full bg-cedar hover:bg-cedar-light text-white-warm font-semibold text-xs tracking-widest uppercase px-6 h-9"
          >
            Free Quote
          </Link>
        </div>
      )}
    </div>
  );
}
