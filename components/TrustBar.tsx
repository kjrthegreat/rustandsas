import { ShieldCheck, Clock, Package, Tag, Phone } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Insured" },
  { icon: Clock,       label: "Free Estimates" },
  { icon: Package,     label: "Custom Building & Design" },
  { icon: Tag,         label: "Seasonal Pricing Available" },
  { icon: Phone,       label: "502-542-4473" },
];

export default function TrustBar() {
  return (
    <div className="bg-cream-dark dark:bg-charcoal-light border-y border-cedar/20 dark:border-cedar/15 py-4 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-walnut dark:text-stone">
            <item.icon size={15} className="text-cedar shrink-0" />
            <span className="text-xs font-semibold tracking-wide">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
