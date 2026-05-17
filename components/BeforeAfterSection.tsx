import Image from "@/components/AppImage";
import { Badge } from "@/components/ui/badge";
import FadeUp from "@/components/FadeUp";

const cards = [
  {
    src: "/images/489956216_1114534607358256_9119355287785532819_n.jpg",
    tag: "Finished Project",
    project: "Custom Bar & Pipe Shelving",
    detail: "Live-edge walnut countertop with a custom sink cutout, black pipe shelving wall, and shiplap base — built as a complete bar room transformation.",
  },
  {
    src: "/images/670497905_18106916803888879_7349982229797857235_n.jpg",
    tag: "Finished Project",
    project: "Lakeside Storage Rack",
    detail: "Custom-built cedar storage rack at the water's edge, housing kayaks and life vests — a clean, functional build made for lake living.",
  },
];

export default function BeforeAfterSection() {
  return (
    <section id="ba" className="py-24 px-6 md:px-16 lg:px-24 bg-white-warm dark:bg-charcoal">
      <div className="max-w-6xl mx-auto">

        <FadeUp className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-6 h-px bg-cedar" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cedar">Featured Projects</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal dark:text-white-warm">
            Built with <em className="font-normal text-cedar">purpose.</em>
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <FadeUp key={i} delay={i * 0.12}>
              <div className="rounded-2xl overflow-hidden bg-cream dark:bg-charcoal-mid border border-cedar/15 group">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={card.src}
                    alt={card.project}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-cedar text-white font-semibold text-xs tracking-wide border-0">
                      {card.tag}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-charcoal dark:text-white-warm mb-2">{card.project}</h3>
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
