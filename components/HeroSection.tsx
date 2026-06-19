import Link from "next/link";

// Responsive hero sources — phones grab a small file, desktops a larger one.
// This is the LCP element, so we also preload it (link hoisted to <head> by React 19).
const HERO_SRCSET =
  "/images/ep-640.webp 640w, /images/ep-828.webp 828w, /images/ep-1086.webp 1086w";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-oil">
      {/* Preload the LCP hero image (responsive) */}
      <link
        rel="preload"
        as="image"
        imageSrcSet={HERO_SRCSET}
        imageSizes="100vw"
        fetchPriority="high"
      />
      {/* Background - zoomed in on porch structure, sky cropped out */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/ep-1086.webp"
        srcSet={HERO_SRCSET}
        sizes="100vw"
        alt="Post-frame pole barn with a metal roof under construction by Rust & Sawdust in Somerset, KY"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-[center_55%] opacity-80"
      />
      {/* Grit overlay + vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-oil/85 via-oil/45 to-oil/95" />
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-50"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col flex-1 justify-center items-center text-center px-5 sm:px-6 md:px-16 lg:px-24 pt-32 pb-32 sm:pt-40 sm:pb-36 md:pt-44 md:pb-44">
        {/* Top eyebrow - stamped */}
        <div className="flex flex-col items-center gap-2 mb-7">
          <span className="breathe-text font-stamped text-[9px] uppercase text-stone">
            Somerset, Kentucky
          </span>
          <span className="shimmer-text shimmer-underline font-stamped text-[12px] sm:text-[13px] tracking-[0.28em] uppercase">
            In God We Trust
          </span>
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-7 max-w-4xl">
          <span className="shimmer-text">Custom building.</span>
          <br />
          <em className="font-normal shimmer-text">Crafted right.</em>
        </h1>

        <p className="text-stone text-base md:text-lg max-w-2xl leading-relaxed mb-10">
          Decks, porches, barns, remodels, concrete, and custom woodwork -
          built by an insured, experienced crew serving Somerset and the Lake
          Cumberland region and beyond within a 40 mile radius.
          Call or text for a free quote today.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center bg-rust hover:bg-cedar text-white-warm font-stencil text-base tracking-widest uppercase px-8 h-12 border-2 border-cream/90 shadow-[4px_4px_0_0_rgba(0,0,0,0.6)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.6)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Get a Free Quote
          </Link>
          <Link
            href="#work"
            className="inline-flex items-center justify-center font-stencil text-base tracking-widest uppercase text-cream-dark px-8 h-12 border-2 border-cream/40 hover:border-cedar hover:text-cedar-pale"
          >
            See Our Work <span className="ml-1 leading-none">→</span>
          </Link>
        </div>

        <a
          href="https://www.thumbtack.com/ky/somerset/moving-companies/rust-sawdust-ky-building-services/service/329281428090347630"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 border border-cedar/40 hover:border-cedar bg-oil/40 group transition-colors"
          aria-label="4.9 out of 5 stars — 28 verified reviews on Thumbtack"
        >
          <span className="text-rust text-xl leading-none tracking-widest" aria-hidden="true">★★★★★</span>
          <div className="w-px h-4 bg-cedar/40 flex-shrink-0" />
          <span className="font-stamped text-[11px] tracking-[0.22em] uppercase text-stone group-hover:text-cedar-pale transition-colors">
            4.9 · 28 Reviews on Thumbtack
          </span>
        </a>
      </div>

      {/* Bottom ribbon - 3+2 layout on mobile/tablet, single row on desktop */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-oil border-t-[3px] border-cedar">
        <div className="grid grid-cols-6 md:grid-cols-5 md:divide-x md:divide-cedar/25 items-center">
          {[
            { num: "01", label: "Insured" },
            { num: "02", label: "Free Estimates" },
            { num: "03", label: "2-Yr Warranty" },
            { num: "04", label: "Veteran Discount" },
            { num: "05", label: "502-542-4473", phone: true },
          ].map((stat, i) => {
            const isPhone = i === 4;
            // Mobile/tablet grid-cols-6: items 1-3 each col-span-2 fill row 1.
            // Item 4 col-start-2 col-span-2 sits at cols 2-3 of row 2; item 5 col-span-2
            // sits at cols 4-5 - leaves cols 1 & 6 empty so the pair centers.
            // On md+ everything reverts to one cell each.
            const colClasses =
              i < 3
                ? "col-span-2 md:col-span-1"
                : i === 3
                ? "col-span-2 col-start-2 md:col-span-1 md:col-start-auto"
                : "col-span-2 md:col-span-1";

            const classes = `flex items-center justify-center gap-1.5 sm:gap-2 py-2 px-2 sm:py-2.5 md:py-3 sm:px-3 whitespace-nowrap ${colClasses}`;

            const inner = (
              <>
                <span className="font-stencil text-cedar text-sm sm:text-base md:text-lg">
                  {stat.num}
                </span>
                <span className="font-stamped text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.2em] uppercase text-cream-dark">
                  {stat.label}
                </span>
              </>
            );

            return isPhone ? (
              <a
                key={stat.label}
                href="tel:5025424473"
                className={`${classes} hover:bg-cedar/10 transition-colors`}
                aria-label="Call 502-542-4473"
              >
                {inner}
              </a>
            ) : (
              <div key={stat.label} className={classes}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
