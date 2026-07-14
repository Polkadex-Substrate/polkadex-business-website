# Hidden Sections — Temporary

Everything in this list is currently hidden on polkadex.ee via `{/* ... */}` JSX comments so nothing is deleted. To bring any item back, delete the surrounding `{/* */}` (and remove any trailing note comment). Every entry links directly to the file and line so you can find it fast.

Last updated: 2026-07-14

## Homepage sections (`src/pages/index.tsx`)

| Section | Component | Location | Reason |
|---|---|---|---|
| Kylix Lending block | `<KylixLending />` | `src/pages/index.tsx:60` | Temporarily hidden |
| Join Polkadex open beta program | `<BetaProgram />` | `src/pages/index.tsx:58` | Temporarily hidden |
| PolkaIDO platform | `<Polkaido />` | `src/pages/index.tsx:62` | Temporarily hidden |

## Sub-sections inside home components

| Section | Component | Location | Reason |
|---|---|---|---|
| "List your token on Polkadex Orderbook" CTA | `<Listing />` inside `Orderbook` | `src/components/Home/Orderbook/index.tsx:83` | Temporarily hidden |

## Footer links (`src/components/v2/Footer/index.tsx`)

| Link | Location | Reason |
|---|---|---|
| Polkapool AMM | `src/components/v2/Footer/index.tsx:48-50` | Temporarily hidden |
| PolkaIDO | `src/components/v2/Footer/index.tsx:51-59` | Temporarily hidden |

## Main-menu links (`src/components/v2/Header/index.tsx`)

Products column:

| Link | Location |
|---|---|
| PolkaIDO | `src/components/v2/Header/index.tsx:57-60` |
| PolkaPool | `src/components/v2/Header/index.tsx:61-64` |
| Open Beta | `src/components/v2/Header/index.tsx:65-73` |
| Rewards | `src/components/v2/Header/index.tsx:74-76` |

Resources column:

| Link | Location |
|---|---|
| Ambassadors Hub | `src/components/v2/Header/index.tsx:125-133` |

## Previously hidden (older changes, kept for reference)

- Team page — `src/pages/team.tsx` renamed to `team.tsx.disabled`; menu link at `src/components/v2/Header/index.tsx:146-151` commented out.

## How to un-hide

1. Open the file listed above.
2. Delete the `{/* */}` around the entry.
3. If the entry has a trailing note like `— temporarily hidden`, delete that too.
4. Update this file: move the row to a "Restored" section or delete it.

## Notes

- Kylix still appears as a small partner logo in `src/components/Home/Partners/data.ts` (first entry). Not removed here because it's a partner tile, not a section — remove only if the partnership itself has ended.
- Imports for hidden components (e.g. `BetaProgram`, `Polkaido`, `KylixLending`) are intentionally left in `src/pages/index.tsx` so re-enabling is a one-line change.
- Nothing has been deleted — everything is commented out. Restoring the previous state is a search-and-replace of `{/* ` → `` and ` */}` → `` on the specific lines.
