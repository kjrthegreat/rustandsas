import Link from "next/link";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const links = [
  { href: "#services", label: "Services" },
  { href: "#work",     label: "Gallery" },
  { href: "#about",    label: "About" },
  { href: "#reviews",  label: "Reviews" },
  { href: "#contact",  label: "Contact" },
];

const socials = [
  { href: "https://www.instagram.com/rustandsawdustky/", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.facebook.com/p/Rust-and-Sawdust-KY-100064051812669/", label: "Facebook", Icon: FacebookIcon },
];

export default function Footer() {
  return (
    <footer className="bg-oil text-cream-dark border-t-[3px] border-cedar relative overflow-hidden">

      {/* Diagonal grit stripes */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent 0 14px, #f5f0e8 14px 16px)",
        }}
      />

      {/* Big stenciled wordmark */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 md:px-16 lg:px-24 pt-10 sm:pt-12 md:pt-14 pb-8 md:pb-10 text-center">
        <div className={'font-stencil text-5xl md:text-7xl lg:text-8xl leading-none tracking-wide'}>
          <span className={'shimmer-text'}>RUST</span><span className={'text-rust'}>&amp;</span><span className={'shimmer-text'}>SAWDUST</span>
        </div>
        <div className={'breathe-text font-stamped text-[11px] md:text-sm uppercase text-cedar-pale mt-5'}>
          ★ Somerset, Kentucky · Lake Cumberland Region ★
        </div>
        <div className={'font-hand text-2xl md:text-3xl mt-2'}>
          <span className={'shimmer-text'}>&ldquo;In God We Trust.&rdquo;</span>
        </div>
      </div>

      {/* Double-rule divider — equal thirds so the 3 blocks line up evenly */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 md:px-16 lg:px-24">
        <div className="border-y-[3px] border-double border-cedar/40 py-6 grid grid-cols-1 md:grid-cols-3 items-center gap-y-4 gap-x-6">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 list-none justify-center md:justify-start">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-stamped text-[11px] tracking-[0.25em] uppercase text-cream-dark hover:text-cedar-pale">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Rust & Sawdust on ${label}`}
                className="w-9 h-9 flex items-center justify-center border-2 border-cedar/40 text-cream-dark hover:text-cream hover:bg-rust hover:border-rust transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <div className="font-stamped text-[11px] tracking-[0.2em] uppercase text-cream-dark text-center md:text-right">
            <a href="tel:5025424473" className="text-cedar-pale hover:text-cream transition-colors">502 · 542 · 4473</a>
            <span className="mx-3 text-cedar/40">|</span>
            <span>Call · Text · DM</span>
          </div>
        </div>
      </div>

      {/* Tiny stamp row */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 md:px-16 lg:px-24 py-5 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-3 flex-wrap text-center md:text-left">
        <div className="font-stamped text-[10px] tracking-[0.25em] uppercase text-stone">
          Family operated · KY proud · Insured · 2-yr warranty
        </div>
        <div className="font-stamped text-[10px] tracking-[0.25em] uppercase text-stone">
          © Rust &amp; Sawdust KY · All rights reserved
        </div>
      </div>
    </footer>
  );
}
