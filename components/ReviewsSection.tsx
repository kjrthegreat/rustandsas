import FadeUp from "@/components/FadeUp";

const reviews = [
  {
    no: "01",
    name: "James R.",
    date: "Apr 2026",
    service: "Tile · Drywall · Carpentry",
    quote: "We had a significant amount of work completed spanning several trades (tile, drywall, carpentry) and all work was completed at a very high quality.",
  },
  {
    no: "02",
    name: "Tim D.",
    date: "Mar 2026",
    service: "General Services",
    quote: "Noah is a top notch guy! He aims to please all his clients/customers. He goes above and beyond to exceed all of his customers expectations.",
  },
  {
    no: "03",
    name: "Lisa G.",
    date: "Mar 2026",
    service: "Repeat Customer",
    quote: "Noah has done several jobs for me and I have been very pleased with the work. He is easy to work with and is very honest.",
  },
  {
    no: "04",
    name: "Anthony S.",
    date: "Mar 2026",
    service: "Multiple Projects",
    quote: "This company thrives on meeting the expectations of the customers needs. Always on time. Very consistent, brutally honest in what needs to be done.",
  },
  {
    no: "05",
    name: "Steve H.",
    date: "Sep 2025",
    service: "Exterior Painting",
    quote: "Highly recommend, fair and honest. A level of professionalism rarely seen today. He kept me in the loop for the entire job.",
  },
];

const THUMBTACK_URL =
  "https://www.thumbtack.com/ky/somerset/moving-companies/rust-sawdust-ky-building-services/service/329281428090347630";

function Stars({ size = "text-base" }: { size?: string }) {
  return (
    <span className={`${size} tracking-widest text-rust dark:text-cedar-pale leading-none`} aria-label="5 out of 5 stars">
      ★★★★★
    </span>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-24 px-6 md:px-16 lg:px-24 bg-cream-dark dark:bg-charcoal-mid">
      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <FadeUp className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="font-stamped text-[11px] tracking-[0.3em] uppercase text-rust dark:text-cedar-pale mb-3">
              ✚ Word on the street
            </div>
            <h2 className="font-stencil text-5xl md:text-7xl leading-[0.95] text-charcoal dark:text-cream">
              What folks
              <br />
              <span className="text-rust dark:text-cedar-pale">are saying.</span>
            </h2>
          </div>

          {/* Rating summary block */}
          <div className="flex items-center gap-5 border-l-2 border-charcoal/30 dark:border-cedar/30 pl-5">
            <div>
              <div className="font-stencil text-6xl text-charcoal dark:text-cream leading-none">4.9</div>
              <div className="font-stamped text-[10px] tracking-[0.25em] uppercase text-walnut dark:text-stone mt-1">
                out of 5
              </div>
            </div>
            <div>
              <Stars size="text-xl" />
              <div className="font-stamped text-[10px] tracking-[0.25em] uppercase text-walnut dark:text-stone mt-1">
                28 verified reviews
                <br />
                on Thumbtack
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Review cards — 3 across desktop, last 2 centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <FadeUp key={r.no} delay={parseInt(r.no) * 0.05}>
              <article className="relative bg-cream dark:bg-charcoal border-2 border-charcoal/85 dark:border-cedar/30 h-full flex flex-col">
                {/* Header strip */}
                <div className="flex items-center justify-between px-5 py-2 bg-charcoal dark:bg-oil text-cream-dark border-b-2 border-charcoal dark:border-cedar/30">
                  <span className="font-stamped text-[10px] tracking-[0.25em] uppercase">
                    Verified · № {r.no}
                  </span>
                  <Stars size="text-sm" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  {/* Opening quote mark */}
                  <div className="font-heading text-7xl text-rust/30 dark:text-cedar/30 leading-none mb-1 select-none">
                    &ldquo;
                  </div>

                  <blockquote className="text-walnut dark:text-stone text-sm md:text-base leading-relaxed -mt-4">
                    {r.quote}
                  </blockquote>

                  <div className="rule-grit text-cedar mt-5 mb-4" />

                  <footer className="font-stamped text-[11px] tracking-wide text-charcoal dark:text-cream flex items-baseline justify-between gap-3 mt-auto">
                    <div>
                      <div className="font-stencil text-base tracking-wide leading-tight">
                        — {r.name}
                      </div>
                      <div className="text-walnut dark:text-stone text-[10px] tracking-[0.2em] uppercase mt-0.5">
                        {r.service}
                      </div>
                    </div>
                    <span className="text-walnut/70 dark:text-stone/70 text-[10px] tracking-[0.2em] uppercase">
                      {r.date}
                    </span>
                  </footer>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        {/* Thumbtack plug */}
        <FadeUp delay={0.3} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 text-center">
          <p className="font-hand text-2xl text-walnut dark:text-stone">
            read every word — straight from the source:
          </p>
          <a
            href={THUMBTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-rust hover:bg-cedar text-white-warm font-stencil text-base tracking-widest uppercase px-7 h-12 border-2 border-charcoal shadow-[4px_4px_0_0_rgba(20,19,15,0.45)] hover:shadow-[2px_2px_0_0_rgba(20,19,15,0.45)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            See all 28 on Thumbtack →
          </a>
        </FadeUp>

      </div>
    </section>
  );
}
