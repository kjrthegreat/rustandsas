"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { SERVICES } from "@/lib/services";
import { SERVICE_IMAGES } from "@/lib/service-images";

const TOTAL = SERVICES.reduce(
  (sum, s) => sum + (SERVICE_IMAGES[s.slug]?.length ?? 0),
  0
);

function Inner({ gridSelector }: { gridSelector: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState<string>("all");

  useEffect(() => {
    const param = searchParams.get("service");
    if (param && SERVICES.some((s) => s.slug === param)) setActive(param);
    else setActive("all");
  }, [searchParams]);

  // Sync data-gallery-active attribute on the grid element so CSS filters tiles.
  useEffect(() => {
    const grid = document.querySelector<HTMLElement>(gridSelector);
    if (grid) grid.dataset.galleryActive = active;
  }, [active, gridSelector]);

  const setFilter = (slug: string) => {
    setActive(slug);
    const params = new URLSearchParams();
    if (slug !== "all") params.set("service", slug);
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const visibleCount =
    active === "all" ? TOTAL : SERVICE_IMAGES[active]?.length ?? 0;
  const activeTitle =
    active === "all"
      ? null
      : SERVICES.find((s) => s.slug === active)?.title ?? null;

  return (
    <>
      <div className="mb-8">
        <div className="font-stamped text-[10px] tracking-[0.3em] uppercase text-rust mb-3">
          § Filter by Service
        </div>
        <div className="flex flex-wrap gap-2">
          <Chip
            label="All Work"
            count={TOTAL}
            active={active === "all"}
            onClick={() => setFilter("all")}
          />
          {SERVICES.map((s) => {
            const count = SERVICE_IMAGES[s.slug]?.length ?? 0;
            if (count === 0) return null;
            return (
              <Chip
                key={s.slug}
                label={s.title}
                count={count}
                active={active === s.slug}
                onClick={() => setFilter(s.slug)}
              />
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between mb-5 border-y-[3px] border-double border-cedar/40 py-3">
        <span className="font-stamped text-[10px] tracking-[0.3em] uppercase text-stone">
          {activeTitle
            ? `${activeTitle} · ${visibleCount} photos`
            : `All Projects · ${visibleCount} photos`}
        </span>
        {active !== "all" && (
          <button
            type="button"
            onClick={() => setFilter("all")}
            className="font-stamped text-[10px] tracking-[0.25em] uppercase text-cedar-pale hover:text-rust transition-colors"
          >
            Clear filter ✕
          </button>
        )}
      </div>
    </>
  );
}

function Chip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`font-stamped text-[10px] sm:text-[11px] tracking-[0.2em] uppercase px-3 py-2 border-2 transition-colors ${
        active
          ? "bg-rust text-white-warm border-rust"
          : "border-cedar/40 text-cream-dark hover:border-rust hover:text-rust"
      }`}
    >
      {label}
      <span
        className={`ml-2 font-stencil text-[11px] ${
          active ? "text-cream" : "text-stone"
        }`}
      >
        {String(count).padStart(2, "0")}
      </span>
    </button>
  );
}

export default function GalleryFilter({
  gridSelector,
}: {
  gridSelector: string;
}) {
  return (
    <Suspense fallback={null}>
      <Inner gridSelector={gridSelector} />
    </Suspense>
  );
}
