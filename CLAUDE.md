@AGENTS.md

# Project: Rust & Sawdust KY

Next.js 16 static export site for a home improvement contractor in Somerset, KY.

## Repos & Deployment

| Thing | Value |
|---|---|
| GitHub (primary) | `kjrthegreat/rustandsas` — `origin` |
| GitHub (shared/backup) | `zak1269/rustandsas` — `zak` remote |
| Cloudflare Pages URL | https://rustandsas.pages.dev |
| Custom domain (pending) | rustandsawdustky.com |
| Cloudflare project name | `rustandsas` |
| Cloudflare account | Rybarczykkyle@gmail.com |

## Deploy Command

```bash
npm run build && npx wrangler pages deploy out --project-name=rustandsas --branch=main
```

Auto-deploy via GitHub Actions is configured in `.github/workflows/deploy.yml` but requires
`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets to be added to the GitHub repo.

## Build

- Framework: Next.js 16 (`output: "export"` — fully static)
- Build output: `out/`
- Build command: `npm run build`
- Node: 20+

## Key Files

- `app/layout.tsx` — global metadata, JSON-LD LocalBusiness schema
- `app/sitemap.ts` — auto-generated sitemap (targets rustandsawdustky.com)
- `app/robots.ts` — robots.txt
- `lib/services.ts` — service page data (slugs, meta titles, descriptions, bullets)
- `app/services/[slug]/page.tsx` — 8 keyword-targeted local SEO service pages
- `components/ServicesSection.tsx` — homepage service cards (linked to service pages)
