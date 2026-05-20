# Rust & Sawdust - Site TODO

## SEO & Content
- [ ] **Blog section** - `/blog` route with MDX or CMS-backed posts. Topics: seasonal maintenance tips, project spotlights, "how to choose a contractor in Somerset KY", Lake Cumberland builds, etc. Needs per-post meta/OG tags and category tags.
- [ ] **Dedicated service pages** - Individual routes (`/services/decks`, `/services/additions`, etc.) each targeting a long-tail keyword like "deck builder Somerset KY". Unique content, photos, and CTA per page.
- [ ] **Service area / locations page** - List all areas served: Somerset, Pulaski County, Lake Cumberland region, Nancy, Burnside, Monticello, and surrounding towns. Boosts local SEO for nearby communities.
- [ ] **Local SEO schema markup** - JSON-LD `LocalBusiness` schema with name, address, phone, service area, hours, and aggregate rating. Helps land in Google's local map/pack results.
- [ ] **sitemap.xml + robots.txt** - Auto-generate via `app/sitemap.ts`. Submit to Google Search Console. Required for any SEO work to take effect.

## Features
- [ ] **Google Reviews integration** - Pull live Google Business reviews via API or embed so ReviewsSection stays fresh automatically. Static fallback if API unavailable. Star rating summary at top.
- [ ] **FAQ section** - Accordion-style FAQ: licensing/insurance, service area, timeline estimates, payment/financing, permits, veteran discount. Add `FAQPage` schema for Google rich snippets.
- [ ] **Project portfolio / case study pages** - Individual pages per completed project with full photo gallery, description, scope, location (e.g. "Lake Cumberland deck build"), and timeline. Linked from GallerySection.
- [ ] **Google Maps embed** - Interactive map in Contact or About section showing Somerset KY service area. Trust signal + local SEO.
- [ ] **Financing / payment options section** - Explain payment terms, financing partners, or payment plans. Reduces friction for larger renovation/addition jobs.

## Completed
- [x] Remove all em dashes from source files
- [x] SEO foundation — expanded metadata, Open Graph, Twitter cards, canonical URL (rustandsawdustky.com)
- [x] JSON-LD `GeneralContractor` schema with address, phone, service area, and social links
- [x] `sitemap.xml` + `robots.txt` auto-generated at build time
- [x] 8 keyword-targeted service pages under `/services/[slug]`
- [x] Service cards on homepage linked to service pages ("Learn More →")
- [x] Deployed to Cloudflare Pages — https://rustandsas.pages.dev
- [x] GitHub repo moved to `kjrthegreat/rustandsas` as primary
