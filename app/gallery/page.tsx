import type { Metadata } from "next";
import Link from "next/link";
import GalleryFilter from "@/components/GalleryFilter";
import { SERVICES } from "@/lib/services";
import { SERVICE_IMAGES } from "@/lib/service-images";

const ALL_TILES = SERVICES.flatMap((service) =>
  (SERVICE_IMAGES[service.slug] ?? []).map((img) => ({
    src: img.src,
    alt: img.alt,
    title: img.title,
    slug: service.slug,
    serviceTitle: service.title,
  }))
);

const BASE_URL = "https://www.rustandsawdustky.com";

export const metadata: Metadata = {
  title: "Project Gallery | Rust & Sawdust KY",
  description:
    "Photos of decks, porches, pole barns, custom woodwork, remodels, concrete, golf greens, and specialty builds by Rust & Sawdust KY in Somerset and the Lake Cumberland region.",
  alternates: { canonical: `${BASE_URL}/gallery` },
  openGraph: {
    title: "Project Gallery | Rust & Sawdust KY",
    description:
      "Recent projects by Rust & Sawdust KY — decks, porches, barns, remodels, concrete, woodwork, and more in Somerset, KY.",
    url: `${BASE_URL}/gallery`,
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Project Gallery", item: `${BASE_URL}/gallery` },
  ],
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-oil text-cream-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* Top notice strip */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-oil text-cedar-pale font-stamped text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase py-1 text-center border-b border-cedar/40 overflow-hidden whitespace-nowrap">
        <span className="px-2">Somerset, KY</span>
        <span className="text-cedar/60">★</span>
        <span className="px-2">Insured · 2-Yr Warranty</span>
        <span className="hidden sm:inline text-cedar/60">★</span>
        <span className="hidden sm:inline px-2">502 · 542 · 4473</span>
      </div>

      {/* Minimal navbar */}
      <div className="fixed top-[24px] left-0 right-0 z-50 flex justify-center px-2 sm:px-3">
        <nav className="flex items-center justify-between w-full max-w-6xl bg-charcoal-mid/95 border-y-[3px] border-x border-cedar/40 shadow-[0_4px_0_0_rgba(0,0,0,0.5)] px-4 sm:px-5 py-2.5 backdrop-blur-md">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="font-stencil text-xl sm:text-2xl text-cream-dark leading-none">
              RUST<span className="text-rust">&amp;</span>SAWDUST
            </div>
            <span className="hidden sm:inline-block font-stamped text-[9px] tracking-widest uppercase text-stone leading-tight border-l border-cedar/40 pl-2">
              KY
              <br />
              Co.
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/#services"
              className="hidden md:inline font-stamped text-[11px] font-bold tracking-[0.18em] uppercase text-cream hover:text-cedar-pale transition-colors"
            >
              All Services
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center bg-rust hover:bg-cedar text-white-warm font-stencil text-sm tracking-widest uppercase px-5 h-9 border-2 border-cream/30 shadow-[3px_3px_0_0_rgba(0,0,0,0.5)] transition-colors"
            >
              Free Quote →
            </Link>
          </div>
        </nav>
      </div>

      {/* Page content */}
      <main className="pt-44 pb-24 px-5 sm:px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="font-stamped text-[10px] tracking-[0.3em] uppercase text-stone mb-6">
            <Link href="/" className="hover:text-cedar-pale transition-colors">
              Home
            </Link>
            <span className="mx-2 text-cedar/40">›</span>
            <span className="text-rust">Project Gallery</span>
          </div>

          {/* Header */}
          <div className="mb-10 border-y-[3px] border-double border-cedar/50 py-6">
            <div className="font-stamped text-[10px] tracking-[0.3em] uppercase text-rust mb-3">
              § Recent Work · Somerset, KY
            </div>
            <h1 className="font-stencil text-5xl sm:text-6xl md:text-7xl text-cream leading-[0.9]">
              Project Gallery
            </h1>
            <p className="font-hand text-2xl text-cedar-pale mt-4">
              - decks, barns, remodels, golf greens & more.
            </p>
          </div>

          {/* Filter chips + counter (client) */}
          <GalleryFilter gridSelector="#gallery-grid" />

          {/* Grid — server-rendered so crawlers see all 79 alts immediately.
              The client filter just sets data-gallery-active on this wrapper;
              CSS hides non-matching tiles. */}
          <div
            id="gallery-grid"
            className="gallery-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3"
            data-gallery-active="all"
          >
            {ALL_TILES.map((tile, i) => (
              <a
                key={`${tile.slug}-${tile.src}`}
                href={tile.src}
                target="_blank"
                rel="noopener noreferrer"
                title={tile.title}
                aria-label={tile.alt}
                data-service={tile.slug}
                className="group relative block aspect-square overflow-hidden bg-charcoal-mid border-2 border-cedar/30 hover:border-rust transition-colors"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tile.src}
                  alt={tile.alt}
                  title={tile.title}
                  loading={i < 8 ? "eager" : "lazy"}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-0 left-0 right-0 font-stamped text-[9px] tracking-[0.2em] uppercase text-cream-dark bg-oil/85 px-2 py-1.5 border-t border-cedar/40">
                  {tile.serviceTitle}
                </span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 border-y-[3px] border-double border-cedar/50 py-10 text-center">
            <p className="font-hand text-2xl text-stone mb-6">
              - See something you like?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center bg-rust hover:bg-cedar text-white-warm font-stencil text-base tracking-widest uppercase px-8 h-12 border-2 border-cream/30 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] transition-colors"
              >
                Get a Free Quote →
              </Link>
              <a
                href="tel:5025424473"
                className="inline-flex items-center justify-center border-2 border-cedar/40 hover:border-cedar text-cream-dark font-stencil text-base tracking-widest uppercase px-8 h-12 transition-colors"
              >
                Call 502·542·4473
              </a>
            </div>
          </div>

          <div className="mt-8 font-stamped text-[10px] tracking-[0.25em] uppercase text-stone">
            <Link href="/#services" className="hover:text-cedar-pale transition-colors">
              ← View all services
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-[3px] border-cedar/40 py-8 px-5 sm:px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-stamped text-[10px] tracking-[0.25em] uppercase text-stone">
            Family operated · KY proud · Insured · 2-yr warranty
          </div>
          <div className="font-stamped text-[10px] tracking-[0.25em] uppercase text-stone">
            <a href="tel:5025424473" className="text-cedar-pale hover:text-cream transition-colors">
              502 · 542 · 4473
            </a>
            <span className="mx-3 text-cedar/40">|</span>
            Somerset, KY
          </div>
        </div>
      </footer>
    </div>
  );
}
