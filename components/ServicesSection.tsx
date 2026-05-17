import FadeUp from "@/components/FadeUp";

const services = [
  { num: "01", title: "Decks & Porches",      blurb: "Covered porches, open decks, and overhangs built with cedar and treated lumber. Seasonal pricing available." },
  { num: "02", title: "Screened Rooms",        blurb: "Enclosed screened porches and outdoor living rooms — great for lake houses and year-round enjoyment." },
  { num: "03", title: "Buildings & Barns",     blurb: "Post-frame pole barns, garages, and outbuildings with metal roofing. Seasonal pricing available." },
  { num: "04", title: "Concrete",              blurb: "Driveways, patios, and flatwork. Stained and standard finishes. Seasonal pricing available." },
  { num: "05", title: "Custom Woodwork",       blurb: "Live-edge countertops, pipe shelving, built-in bars, pergolas, and one-of-a-kind interior builds." },
  { num: "06", title: "Windows & Trim",        blurb: "Window installation, interior trim work, and finish carpentry done with care and attention to detail." },
  { num: "07", title: "Painting",              blurb: "Interior and exterior painting. Seasonal pricing available — a great time to freshen up your home." },
  { num: "08", title: "Remodeling & Repairs",  blurb: "Kitchen, bathroom, and general home remodeling. No job too small — done right the first time." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 md:px-16 lg:px-24 bg-white-warm dark:bg-charcoal">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <FadeUp className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-6 h-px bg-cedar" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cedar">What we do</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal dark:text-white-warm leading-tight mb-5">
            Custom building,
            <br />
            <em className="font-normal text-cedar">crafting & design.</em>
          </h2>
          <p className="text-walnut dark:text-stone leading-relaxed text-base md:text-lg">
            Seasonal pricing on decks, concrete, buildings, paint, and more.
            Call or text{" "}
            <span className="text-cedar font-semibold">502-542-4473</span>{" "}
            and we&apos;ll figure out the best way to make it happen.
          </p>
        </FadeUp>

        {/* 2-column card grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <FadeUp key={service.num} delay={i * 0.05}>
              <div className="group flex gap-5 p-6 rounded-xl border border-cedar/10 dark:border-cedar/10 bg-cream/50 dark:bg-charcoal-mid hover:border-cedar/35 hover:bg-cream dark:hover:bg-charcoal-light h-full">
                <span className="text-xs font-mono text-cedar/40 pt-0.5 shrink-0 w-5">{service.num}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-charcoal dark:text-cream text-[0.95rem] mb-2 group-hover:text-cedar">
                    {service.title}
                  </div>
                  <div className="text-sm text-walnut dark:text-stone leading-relaxed">
                    {service.blurb}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
