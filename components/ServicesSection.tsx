import FadeUp from "@/components/FadeUp";
import Link from "next/link";

const services = [
  { num: "01", slug: "decks-porches",           title: "Decks, Porches & Patio Covers", blurb: "Covered porches, open decks, awnings, and overhangs. Cedar & treated lumber. Seasonal pricing." },
  { num: "02", slug: "screened-rooms-pergolas", title: "Screened Rooms & Pergolas",      blurb: "Screened porches, pergolas, and outdoor living rooms. Built for lake-house life." },
  { num: "03", slug: "buildings-barns-sheds",   title: "Buildings, Barns & Sheds",       blurb: "Post-frame pole barns, garages, sheds, custom outbuildings - finished to match your home." },
  { num: "04", slug: "concrete-excavating",     title: "Concrete & Excavating",          blurb: "Driveways, patios, flatwork, site prep & excavating. Stained or standard." },
  { num: "05", slug: "custom-woodwork",         title: "Custom Woodwork",                blurb: "Live-edge counters, pipe shelving, bars, one-of-a-kind interior builds. Dream it, we build it." },
  { num: "06", slug: "additions-remodels",      title: "Home Add-Ons & Remodels",        blurb: "Additions, bathrooms, kitchens, full renos. Residential and commercial work." },
  { num: "07", slug: "windows-trim-painting",   title: "Windows, Trim & Painting",       blurb: "Window install, interior trim, finish carpentry, and interior/exterior paint." },
  { num: "08", slug: "golf-greens-specialty",   title: "Golf Greens & Specialty",        blurb: "Backyard golf greens and one-off custom projects. No job too big or small." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-16 lg:px-24 bg-cream-dark dark:bg-charcoal overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent 0 16px, #5c3d1e 16px 18px)" }} />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(20,19,15,0.06)_100%)]" />
      <div className="relative max-w-6xl mx-auto">

        {/* Header - newspaper masthead */}
        <FadeUp className="mb-14 border-y-[3px] border-double border-charcoal dark:border-cedar/50 py-6">
          <div className="flex items-baseline justify-between gap-6 flex-wrap">
            <div className="font-stamped text-[10px] tracking-[0.3em] uppercase text-rust dark:text-cedar-pale">
              § Catalogue of Services · No. 1
            </div>
            <div className="font-stamped text-[10px] tracking-[0.3em] uppercase text-walnut dark:text-stone">
              Somerset · Lake Cumberland · Kentucky
            </div>
          </div>
          <h2 className="font-stencil text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal dark:text-cream leading-[0.9] mt-4">
            If you can dream it,
          </h2>
          <h2 className={'font-stencil text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] mt-1'}>
            <span className={'shimmer-text-warm'}>we&apos;ll build it.</span>
          </h2>
          <p className="mt-5 font-hand text-2xl text-walnut dark:text-stone tilt-l">
            - no matter what.
          </p>
        </FadeUp>

        <div className="mt-6 mb-10 text-walnut dark:text-stone max-w-3xl">
          <p className="text-base md:text-lg leading-relaxed">
            Residential, commercial, and facility management work - every job backed by a{" "}
            <span className="font-stencil text-rust dark:text-cedar-pale">2-YEAR WARRANTY</span>.
            Seasonal pricing on decks, concrete, buildings, and paint. Call or text{" "}
            <a href="tel:5025424473" className="font-stencil text-rust dark:text-cedar-pale hover:text-cedar transition-colors">502·542·4473</a>{" "}
            - we&apos;ll figure out the best way to make it happen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <FadeUp key={service.num} delay={i * 0.04}>
              <Link
                href={`/services/${service.slug}`}
                className="block group relative bg-cream dark:bg-charcoal-mid border-2 border-charcoal/20 dark:border-cedar/30 overflow-hidden hover:border-rust hover:shadow-[6px_6px_0_0_rgba(20,19,15,0.18)] dark:hover:shadow-[6px_6px_0_0_rgba(184,115,51,0.2)] transition-all"
              >
                {/* Rust left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-rust/60 group-hover:bg-rust transition-colors" />

                {/* Faded number watermark */}
                <div
                  className="absolute right-4 bottom-1 font-stencil leading-none text-charcoal/[0.055] dark:text-cream/[0.045] select-none pointer-events-none"
                  style={{ fontSize: "clamp(72px, 9vw, 110px)" }}
                  aria-hidden="true"
                >
                  {service.num}
                </div>

                <div className="relative pl-7 pr-6 pt-6 pb-6">
                  <div className="font-stamped text-[9px] tracking-[0.3em] uppercase text-rust dark:text-cedar-pale mb-3">
                    ✚ Service {service.num}
                  </div>

                  <h3 className="font-stencil text-2xl md:text-[1.65rem] text-charcoal dark:text-cream leading-tight mb-4 group-hover:text-rust dark:group-hover:text-cedar-pale transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-base text-walnut dark:text-stone leading-relaxed mb-6">
                    {service.blurb}
                  </p>

                  <div className="flex items-center gap-2 font-stamped text-[10px] tracking-[0.25em] uppercase text-rust dark:text-cedar-pale">
                    View service <span className="font-stencil text-sm group-hover:translate-x-1 inline-block transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
