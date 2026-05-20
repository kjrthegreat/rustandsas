import FadeUp from "@/components/FadeUp";

const featured = {
  name: "Steve H.",
  date: "Sep 2025",
  service: "Exterior Painting",
  quote:
    "Highly recommend, fair and honest. A level of professionalism rarely seen today. He kept me in the loop for the entire job.",
};

const reviews = [
  {
    name: "James R.",
    date: "Apr 2026",
    service: "Tile · Drywall · Carpentry",
    quote:
      "We had a significant amount of work completed spanning several trades (tile, drywall, carpentry) and all work was completed at a very high quality.",
  },
  {
    name: "Tim D.",
    date: "Mar 2026",
    service: "General Services",
    quote:
      "Noah is a top notch guy! He aims to please all his clients/customers. He goes above and beyond to exceed all of his customers expectations.",
  },
  {
    name: "Lisa G.",
    date: "Mar 2026",
    service: "Repeat Customer",
    quote:
      "Noah has done several jobs for me and I have been very pleased with the work. He is easy to work with and is very honest.",
  },
  {
    name: "Anthony S.",
    date: "Mar 2026",
    service: "Multiple Projects",
    quote:
      "This company thrives on meeting the expectations of the customers needs. Always on time. Very consistent, brutally honest in what needs to be done.",
  },
];

const THUMBTACK_URL =
  "https://www.thumbtack.com/ky/somerset/moving-companies/rust-sawdust-ky-building-services/service/329281428090347630";

function Stars({ size = "text-base", animated = false }: { size?: string; animated?: boolean }) {
  if (animated) {
    return (
      <div className="flex gap-0.5 text-rust dark:text-cedar-pale" aria-label="5 out of 5 stars">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            aria-hidden="true"
            className="text-2xl leading-none inline-block"
            style={{ animation: "star-wave 3s ease-in-out infinite", animationDelay: `${i * 0.22}s` }}
          >
            ★
          </span>
        ))}
      </div>
    );
  }
  return (
    <span className={`${size} tracking-widest text-rust dark:text-cedar-pale leading-none`} aria-label="5 out of 5 stars">
      ★★★★★
    </span>
  );
}

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-16 lg:px-24 bg-cream-dark dark:bg-charcoal-mid overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent 0 16px, #5c3d1e 16px 18px)" }}
      />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(20,19,15,0.06)_100%)]" />

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
              <span className="shimmer-text-warm">are saying.</span>
            </h2>
          </div>

          <div className="flex items-center gap-5 border-t-2 md:border-t-0 md:border-l-2 border-charcoal/30 dark:border-cedar/30 pt-4 md:pt-0 md:pl-5">
            <div>
              <div
                className="shimmer-text-warm font-stencil text-5xl sm:text-6xl leading-none"
                style={{ animation: "shimmer-sweep 5s linear infinite, rating-breathe 3s ease-in-out infinite" }}
              >
                4.9
              </div>
              <div className="font-stamped text-[10px] tracking-[0.25em] uppercase text-walnut dark:text-stone mt-1">
                out of 5
              </div>
            </div>
            <div>
              <Stars animated />
              <div className="font-stamped text-[10px] tracking-[0.25em] uppercase text-walnut dark:text-stone mt-1">
                28 verified reviews
                <br />
                on Thumbtack
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Featured hero review */}
        <FadeUp className="mb-5">
          <article className="relative bg-charcoal dark:bg-oil border-2 border-charcoal dark:border-cedar/30 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-rust" />
            <div
              className="absolute right-4 top-0 font-heading leading-none text-rust/10 select-none pointer-events-none"
              style={{ fontSize: "clamp(120px, 18vw, 200px)" }}
              aria-hidden="true"
            >
              &rdquo;
            </div>
            <div className="relative px-10 py-10 md:px-14 md:py-12 lg:px-16 lg:py-14">
              <div className="flex items-center gap-3 mb-6">
                <Stars size="text-lg" />
                <span className="font-stamped text-[10px] tracking-[0.3em] uppercase text-stone">
                  Verified Review · Thumbtack
                </span>
              </div>
              <blockquote className="font-stencil text-2xl md:text-3xl lg:text-[2.5rem] text-cream leading-snug max-w-3xl">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-10 h-px bg-rust flex-shrink-0" />
                <div>
                  <div className="font-stencil text-lg text-cedar-pale tracking-wide">{featured.name}</div>
                  <div className="font-stamped text-[10px] tracking-[0.25em] uppercase text-stone/70 mt-0.5">
                    {featured.service} · {featured.date}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </FadeUp>

        {/* Supporting reviews — 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <FadeUp key={r.name} delay={(i + 1) * 0.07}>
              <article className="relative bg-cream dark:bg-charcoal border-2 border-charcoal/20 dark:border-cedar/30 h-full flex flex-col overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-rust/70" />
                <div className="pl-7 pr-6 pt-6 pb-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <Stars size="text-sm" />
                    <span className="font-stamped text-[9px] tracking-[0.25em] uppercase text-walnut/60 dark:text-stone/50">
                      {r.date}
                    </span>
                  </div>
                  <blockquote className="text-walnut dark:text-stone text-base md:text-[1.05rem] leading-relaxed flex-1">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <div className="mt-5 pt-4 border-t border-charcoal/15 dark:border-cedar/20">
                    <div className="font-stencil text-base text-charcoal dark:text-cream tracking-wide">
                      — {r.name}
                    </div>
                    <div className="font-stamped text-[10px] tracking-[0.2em] uppercase text-walnut dark:text-stone mt-0.5">
                      {r.service}
                    </div>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        {/* Thumbtack CTA */}
        <FadeUp delay={0.3} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 text-center">
          <p className="font-hand text-2xl text-walnut dark:text-stone">
            read every word - straight from the source:
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
