const items = [
  "Insured",
  "Free Estimates",
  "2-Yr Warranty Included",
  "Veteran Discount",
  "First-Timer Discount",
  "Custom Building",
  "Residential · Commercial · Facility Mgmt",
];

export default function TrustBar() {
  return (
    <div className="bg-oil text-cream-dark border-y-[3px] border-cedar/70 py-4 px-4 relative overflow-hidden">
      {/* Diagonal grit stripes */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0 12px, #f5f0e8 12px 14px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        {items.map((label, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="font-stencil text-cedar text-base sm:text-lg">★</span>
            <span className="font-stencil text-xs sm:text-sm tracking-[0.18em] text-cream-dark whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
