# SEO audit — June 2026

Audit of the Polkadex business website's SEO setup, with fixes applied.

## Issues found & fixed

### 1. Duplicate Open Graph / Twitter tags (was a real bug)
`_document.tsx` hardcoded a full set of OG/Twitter tags pointing at the
homepage on **every** page. Several pages (`/staking`, `/orderbook`,
`/roadmap`, `/tokeneconomics`, `/listing`) then added their *own* `og:title`,
so those pages emitted **two `og:title` tags** — and every other page
advertised the homepage's title/description/URL when shared on social.

**Fix:** removed the global OG/Twitter block from `_document.tsx` and created a
shared `<Seo>` component (`src/components/Seo`) that renders one correct set of
title, description, canonical, OG and Twitter tags per page. Every tag carries
a `key` so Next.js de-duplicates.

### 2. No canonical URLs
No page declared a canonical link — a duplicate-content risk, made worse by
`/brandAssets` now serving the same content as `/mediaKit` (legacy redirect).

**Fix:** `<Seo path="...">` emits a per-page `<link rel="canonical">`.

### 3. Social tags now per-page
Each page passes its own title/description/path to `<Seo>`. Pages updated:
`/` (home), `/orderbook`, `/staking`, `/rewards`, `/listing`, `/roadmap`,
`/tokeneconomics`, `/mediaKit`, `/terms`.

### 4. Missing meta descriptions
`/mediaKit`, `/terms`, `/404` had a title but no description. All now have one.

### 5. Non-indexable pages were indexable
`/404`, `/maintenance`, `/accessDenied` are now marked `noindex, nofollow` via
`<Seo noindex>`, and `/brandAssets`, `/accessDenied`, `/maintenance`, `/404`
are excluded from the generated sitemap (`next-sitemap.config.js`).

### 6. Stale copy in tags
Replaced recycled "CEXiest DEX" descriptions on roadmap/token-economics with
page-relevant copy, and dropped the deprecated `keywords` meta (ignored by
search engines) from the staking/rewards pages.

## Still healthy (no change needed)
- `<html lang="en">` set, favicons/apple-icons/manifest complete, theme-color set.
- Font preloading and `preconnect` to Google Fonts in place.
- `robots.txt` + sitemap auto-generated on build (`postbuild` → next-sitemap);
  both are git-ignored build artifacts and regenerate each deploy.
- `twitterCardImage.jpg` social image present in `/public`.

## Recommendations (not applied — your call)
- **JSON-LD structured data**: add an `Organization` schema on the homepage
  (logo, name, sameAs social links) for richer search results. Easy to add to
  the `<Seo>` component if you want it.
- **Per-page social images**: all pages currently share `twitterCardImage.jpg`.
  Page-specific OG images (e.g. for /staking, /mediaKit) improve click-through.
  The `<Seo image="...">` prop already supports this — just supply the files.
- **`og:locale`** and **Twitter `@site` handle** (`@polkadex`) could be added to
  `<Seo>` for completeness.

## Verify after install
The site builds with lint/type errors ignored (by config), and the SEO changes
type-check clean. After `yarn install`, run `yarn build` and spot-check the
rendered `<head>` of a couple of pages (view-source) to confirm exactly one
title / canonical / og:title each.
