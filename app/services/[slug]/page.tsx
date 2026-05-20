import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/lib/services";

const BASE_URL = "https://www.rustandsawdustky.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${BASE_URL}/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${BASE_URL}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <div className="min-h-screen bg-oil text-cream-dark">
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
            <Link href="/" className="hover:text-cedar-pale transition-colors">Home</Link>
            <span className="mx-2 text-cedar/40">›</span>
            <Link href="/#services" className="hover:text-cedar-pale transition-colors">Services</Link>
            <span className="mx-2 text-cedar/40">›</span>
            <span className="text-rust">{service.title}</span>
          </div>

          {/* Header */}
          <div className="mb-10 border-y-[3px] border-double border-cedar/50 py-6">
            <div className="font-stamped text-[10px] tracking-[0.3em] uppercase text-rust mb-3">
              § Service Order · Somerset, KY
            </div>
            <h1 className="font-stencil text-5xl sm:text-6xl md:text-7xl text-cream leading-[0.9]">
              {service.title}
            </h1>
            <p className="font-hand text-2xl text-cedar-pale mt-4">
              - {service.tagline}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-14">
            {/* Description */}
            <div>
              <p className="text-base md:text-lg leading-relaxed text-stone mb-6">
                {service.description}
              </p>
              <p className="text-sm leading-relaxed text-stone/70">
                Serving Somerset, Pulaski County, and the Lake Cumberland region.
                Insured crew. 2-year warranty on all work. Veteran &amp; first-time
                customer discounts available.
              </p>
            </div>

            {/* What's included card */}
            <div className="bg-charcoal-mid border-2 border-cedar/30">
              <div className="flex items-center justify-between px-6 py-2 bg-charcoal text-cream-dark border-b-2 border-cedar/30">
                <span className="font-stamped text-[10px] tracking-[0.25em] uppercase">What&apos;s Included</span>
                <span className="font-stencil text-cedar text-lg">№ {String(SERVICES.findIndex((s) => s.slug === service.slug) + 1).padStart(2, "0")}</span>
              </div>
              <ul className="p-6 space-y-3">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-stencil text-rust text-lg leading-none shrink-0">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <span className="text-stone leading-relaxed text-sm">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="border-y-[3px] border-double border-cedar/50 py-10 text-center">
            <p className="font-hand text-2xl text-stone mb-6">
              - Ready to get started?
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
