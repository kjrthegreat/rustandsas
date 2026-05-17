import Link from "next/link";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work",     label: "Gallery" },
  { href: "#about",    label: "About" },
  { href: "#contact",  label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-cream-dark dark:bg-charcoal-light border-t border-cedar/20 dark:border-cedar/15 px-6 md:px-16 lg:px-24 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap">
        <div>
          <div className="font-heading text-lg text-charcoal dark:text-cream">
            Rust <span className="text-cedar">&</span> Sawdust
          </div>
          <div className="text-xs text-walnut dark:text-stone mt-1">
            Home Improvements · Somerset, KY · &ldquo;In God We Trust&rdquo;
          </div>
        </div>
        <ul className="flex gap-6 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-xs tracking-widest uppercase text-walnut dark:text-stone hover:text-cedar">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-xs text-stone/70 dark:text-stone/50">
          Rust &amp; Sawdust KY · 502-542-4473 · Call/Text/DM for a free quote
        </div>
      </div>
    </footer>
  );
}
