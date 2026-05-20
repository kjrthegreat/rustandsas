import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";

export const dynamic = "force-static";

const BASE_URL = "https://www.rustandsawdustky.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...servicePages,
  ];
}
