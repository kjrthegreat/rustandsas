import Image from "@/components/AppImage";
import FadeUp from "@/components/FadeUp";

const cards = [
  {
    no: "042",
    src: "/images/489956216_1114534607358256_9119355287785532819_n.jpg",
    project: "Custom Bar & Pipe Shelving",
    detail: "Live-edge walnut countertop with a custom sink cutout, black pipe shelving wall, and shiplap base - a complete bar room transformation.",
  },
  {
    no: "067",
    src: "/images/670497905_18106916803888879_7349982229797857235_n.jpg",
    project: "Lakeside Storage Rack",
    detail: "Cedar storage rack at the water's edge, housing kayaks and life vests - clean, functional, built for lake living.",
  },
];

export default function BeforeAfterSection() {
  return (
    <section id="ba" className="relative py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-16 lg:px-24 bg-cream-dark dark:bg-oil overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent 0 16px, #5c3d1e 16px 18px)" }} />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(20,19,15,0.06)_100%)]" />
      <div className="relative max-w-6xl mx-auto">

        <FadeUp className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="font-stamped text-[11px] tracking-[0.3em] uppercase text-rust dark:text-cedar-pale mb-3">
              ✚ Recent Projects
            </div>
            <h2 className="font-stencil text-5xl md:text-7xl text-charcoal dark:text-cream leading-[0.9]">
              Built with <span className={'shimmer-text-warm'}>purpose.</span>
            </h2>
          </div>
          <p className="font-hand text-2xl text-walnut dark:text-stone md:max-w-xs tilt-r">
            pulled from the job book
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <FadeUp key={i} delay={i * 0.12}>
              <div className="relative bg-cream dark:bg-charcoal-mid border-2 border-charcoal/20 dark:border-cedar/30 overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-rust" />

                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={card.src}
                    alt={card.project}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
                </div>

                <div className="pl-7 pr-6 pt-5 pb-6">
                  <div className="font-stamped text-[9px] tracking-[0.3em] uppercase text-rust dark:text-cedar-pale mb-2">
                    ✚ Featured Project
                  </div>
                  <h3 className="font-stencil text-2xl md:text-3xl text-charcoal dark:text-cream leading-tight mb-3">
                    {card.project}
                  </h3>
                  <p className="text-base text-walnut dark:text-stone leading-relaxed">{card.detail}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
