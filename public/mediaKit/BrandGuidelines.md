# Polkadex — Brand Kit

Quick-reference cheatsheet for the Polkadex brand, covering the **business
website** ([polkadex.ee](https://polkadex.ee)) and the **Mainnet Explorer**
([explorer.polkadex.ee](https://explorer.polkadex.ee)).

Token sources of truth:

| Surface          | Source                                                  |
| ---------------- | ------------------------------------------------------- |
| Business website | `src/styles/theme.ts` (light + dark themes)             |
| Mainnet Explorer | `:root` block in the explorer's `styles.css`            |

The live, interactive version of the explorer kit is at
[`explorer.polkadex.ee/brand`](https://explorer.polkadex.ee/brand).
When the brand evolves, edit the token source and this document together.

## Colour palette

### Brand (shared)

| Role         | Hex       | Use                                                        |
| ------------ | --------- | ---------------------------------------------------------- |
| Primary      | `#E6007A` | Primary CTAs, brand emphasis, active nav state.            |
| Primary glow | `rgba(230, 0, 122, 0.2)` | Hover halos, focus rings.                   |
| Violet       | `#6745D2` | Secondary brand colour on the website; gradient endpoint.  |
| Green        | `#00E676` | Positive metrics and growth (explorer secondary).          |

**Brand gradient** (website hero/CTA surfaces):
`linear-gradient(47.94deg, #E6007A 0%, #6745D2 98.88%)`
Secondary gradient: `linear-gradient(48.65deg, #2B0017 31.73%, #E6007A 143.69%)`

### Surfaces — business website

| Role                  | Dark theme                  | Light theme |
| --------------------- | --------------------------- | ----------- |
| Primary background    | `#0D0D10`                   | `#F9FBFC`   |
| Tertiary background   | `#2E303C`                   | `#F9FBFC99` |
| Secondary bg (solid)  | `#2F3340`                   | `#E8ECF2`   |
| Secondary bg (tinted) | `rgba(139, 161, 190, 0.2)`  | same        |
| Text                  | `#FFFFFF`                   | `#000000`   |
| Secondary text        | `#A8ADB7`                   | `#A8ADB7`   |

### Surfaces — explorer (dark only)

| Role       | Hex / value               |
| ---------- | ------------------------- |
| Background | `#08080C`                 |
| Surface    | `#12121A`                 |
| Glass      | `rgba(20, 20, 30, 0.6)`   |
| Border     | `rgba(255, 255, 255, 0.08)`; hover `rgba(230, 0, 122, 0.4)` |
| Text       | primary `#FFFFFF`, secondary `#9CA3AF`, muted `#6B7280` |

### Semantic

| Role     | Website   | Explorer  |
| -------- | --------- | --------- |
| Success  | `#0CA564` | `#14F195` |
| Error    | —         | `#FF4D4D` |
| Info     | `#148FE8` | —         |
| Warning  | `#FFA500` | —         |
| Disabled | `#77777D` | —         |

**Usage rule.** Use Primary for the most-important call to action on a screen
— only one per view. Greens are for positive states (success badges, growth
indicators), never for primary actions. Keep semantic colours for their
semantic role; don't repaint a positive action red.

## Typography

| Surface          | Primary face | Notes                                          |
| ---------------- | ------------ | ---------------------------------------------- |
| Business website | **Work Sans** (300/400/600) | Self-hosted woff2. Body falls back to the Open Sans system stack defined in `theme.ts`. |
| Business website | **Suisse Intl** (200–700)   | Editorial/secondary face, self-hosted woff.    |
| Business website | **Caveat**                  | Handwritten accent, used sparingly.            |
| Explorer         | **Inter** (300–700)         | Google Fonts.                                  |
| Both             | `Courier New, monospace`    | Addresses, hashes, URLs, storage keys.         |

### Type scale — website (`html { font-size: 62.5% }`, so 1rem = 10px)

| Token   | Size              |
| ------- | ----------------- |
| xsmall  | `1.2rem` (12 px)  |
| small   | `1.4rem` (14 px)  |
| medium  | `1.5rem` (15 px) — body default |
| large   | `1.8rem` (18 px)  |
| xlarge  | `2.0rem` (20 px)  |
| xxlarge | `2.8rem` (28 px)  |

Weights: light 300, normal 400, bold 600. Line-height: 1 (small) / 1.5 (normal).

### Type scale — explorer

| Use     | Weight | Size               | Letter-spacing |
| ------- | ------ | ------------------ | -------------- |
| Display | 800    | `2.4rem` (~38 px)  | `-0.01em`      |
| H1      | 700    | `1.7rem` (~27 px)  | normal         |
| H2      | 700    | `1.2rem` (~19 px)  | normal         |
| Body    | 400    | `0.95rem` (~15 px) | normal         |
| Caption | 400    | `0.82rem` (~13 px) | normal         |
| Mono    | 400    | `0.9rem`           | normal         |

Line-height conventions: 1.1 display, 1.2 headings, 1.6 body, 1.65 long-form prose.

## Logo

Full logo pack (light/dark variants, icon-only marks, PNG/SVG/JPG at 1–3x):
`public/mediaKit/PolkadexLogo.zip` or the website's
[Media Kit page](https://polkadex.ee/mediaKit).

**Clear space**: padding equal to the height of the mark on all four sides.
**Minimum size**: 32 px on screen, 12 mm in print.
**Background**: use the light-background variant on light surfaces and the
dark-background variant on dark surfaces; works on the brand colour itself;
avoid busy photography.

**Don't**: recolour the logo, skew it, stretch it, add a drop shadow, animate
it gratuitously, or place it over imagery without sufficient contrast.

## Iconography

- **Website**: custom SVG icon set in `public/img/icons/` (generated into React
  components via `yarn generateIcons`). Also packaged as
  `public/mediaKit/PolkadexIcons.zip`.
- **Explorer**: Boxicons 2.1.4 via the `bx-*` class system. Standard sizes:
  16 px inline, 20 px buttons, 24 px headings, 42 px hero affordances. Tint
  with `currentColor`; switch to the brand primary for emphasis.

## Spacing, radii, motion

### Website (`theme.ts`)

| Token              | Value                                  |
| ------------------ | -------------------------------------- |
| Radius small       | `0.7rem`                               |
| Radius medium      | `1rem`                                 |
| Radius large       | `1.3rem`                               |
| Spacing scale      | `0.5 / 0.8 / 1.6 / 2.4 / 3.2 / 4.0 / 4.8 / 5.6rem` |
| Grid container     | `120rem`; gutter `3.2rem`              |
| Transition default | `all 0.3s cubic-bezier(.25,.8,.25,1)`  |
| Transition fast    | `0.1s ease-in-out`                     |
| Z-layers           | base 10 / menu 20 / overlay 30 / modal 40 / top 50 |

### Explorer

| Token                 | Value       |
| --------------------- | ----------- |
| `--radius-sm`         | `8px`       |
| `--radius-md`         | `12px`      |
| `--radius-lg`         | `16px`      |
| `--sidebar-width`     | `260px`     |
| `--transition-fast`   | `0.2s ease` |
| `--transition-normal` | `0.3s ease` |

Spacing follows a 4 px grid: `4, 8, 12, 16, 20, 24, 32, 48`.

## Voice in three lines

1. **Direct.** Lead with the verb. *"Connect your wallet"* beats
   *"Authentication is available via wallet connection."*
2. **Honest.** Name limitations. *"We cannot delete on-chain data"* is more
   useful than a paragraph of legalese.
3. **Concrete.** Show the number, not the adjective. *"Backfilled to block
   8,402,991"* beats *"extensive history."*

## Don't

- Don't add new colours outside this palette. Extend by adjusting alpha on
  existing tokens.
- Don't use the brand primary as a body-text colour — it's reserved for
  actions and emphasis.
- Don't recolour the logo for a one-off use. If you need a single-tone version
  for a constrained surface, ship a proper monochrome variant alongside it.
- Explorer only: don't introduce third-party JavaScript or analytics — the
  privacy page promises none, and the brand follows.

## Assets & further reference

- **Media Kit page:** [polkadex.ee/mediaKit](https://polkadex.ee/mediaKit)
- **Logo pack:** `public/mediaKit/PolkadexLogo.zip`
- **Icons:** `public/mediaKit/PolkadexIcons.zip`
- **Screenshots:** `public/mediaKit/PolkadexScreenshots.zip`
- **Complete kit:** `public/mediaKit/PolkadexMediaKit.zip`
- **Website tokens:** `src/styles/theme.ts` · **Explorer tokens:** `styles.css` `:root`
- **Interactive explorer cheatsheet:** [`explorer.polkadex.ee/brand`](https://explorer.polkadex.ee/brand)
