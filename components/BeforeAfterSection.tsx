import Image from "@/components/AppImage";
import FadeUp from "@/components/FadeUp";

const cards = [
  {
    no: "042",
    src: "/images/489956216_1114534607358256_9119355287785532819_n.jpg",
    project: "Custom Bar & Pipe Shelving",
    detail: "Live-edge walnut countertop with a custom sink cutout, black pipe shelving wall, and shiplap base — a complete bar room transformation.",
  },
  {
    no: "067",
    src: "/images/670497905_18106916803888879_7349982229797857235_n.jpg",
    project: "Lakeside Storage Rack",
    detail: "Cedar storage rack at the water's edge, housing kayaks and life vests — clean, functional, built for lake living.",
  },
];

export default function BeforeAfterSection() {
  return (
    <section id="ba" className="py-24 px-6 md:px-16 lg:px-24 bg-cream-dark dark:bg-oil">
      <div className="max-w-6xl mx-auto">

        <FadeUp className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="font-stamped text-[11px] tracking-[0.3em] uppercase text-rust dark:text-cedar-pale mb-3">
              ✚ Featured Job Cards
            </div>
            <h2 className="font-stencil text-5xl md:text-7xl text-charcoal dark:text-cream leading-[0.9]">
              Built with <span className="text-rust dark:text-cedar-pale">purpose.</span>
            </h2>
          </div>
          <p className="font-hand text-2xl text-walnut dark:text-stone md:max-w-xs tilt-r">
            pulled from the job book
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <FadeUp key={i} delay={i * 0.12}>
              <div className="bg-cream dark:bg-charcoal-mid border-2 border-charcoal/85 dark:border-cedar/30">
                {/* Job-slip header */}
                <div className="flex items-center justify-between px-5 py-2.5 bg-charcoal dark:bg-oil text-cream-dark border-b-2 border-charcoal dark:border-cedar/30">
                  <span className="font-stamped text-[10px] tracking-[0.25em] uppercase">
                    Job Card · No. {card.no}
                  </span>
                </div>

                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={card.src}
                    alt={card.project}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="font-stencil text-2xl text-charcoal dark:text-cream leading-tight">
                      {card.project}
                    </h3>
                  </div>
                  <div className="rule-grit text-cedar mb-3" />
                  <p className="text-walnut dark:text-stone text-sm leading-relaxed">{card.detail}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
