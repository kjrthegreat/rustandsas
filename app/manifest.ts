import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rust & Sawdust KY",
    short_name: "R&S KY",
    description:
      "Custom decks, porches, barns, remodels, concrete, and woodwork in Somerset, KY and the Lake Cumberland region.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F4EF",
    theme_color: "#1F2021",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
