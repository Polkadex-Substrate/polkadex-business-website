# Dependency vulnerability remediation

Changes applied to `package.json` to clear the Dependabot alerts. **You must run
`yarn install` and then `yarn build` to apply and verify these** — the lockfile
needs regenerating and the changes haven't been built in CI yet.

## Direct dependency bumps

| Package | From | To | Note |
| ------- | ---- | -- | ---- |
| next    | ^15.0.0 | ^15.5.19 | Patches the critical cache-poisoning / image-optimization CVEs. Stays on 15.x (16.x is a major — held back deliberately). |
| axios   | ^1.8.4  | ^1.17.0  | Fixes DoS, SSRF, and prototype-pollution advisories. |
| ethers  | ^5.4.6  | ^5.8.0   | Stays on v5 (v6 is breaking and the @polkadex/@ethersproject deps require v5). |
| swiper  | ^8.3.2  | ^12.2.0  | Major bump for the critical advisory. Required a code migration (below). |

## Resolutions added (transitive CVEs)

`lodash` (bumped ^4.17.21 → ^4.18.1, since ≤4.17.23 is still flagged),
`handlebars`, `form-data`, `ws`, `follow-redirects`, `postcss`,
`brace-expansion`, and a pin on `axios`. These force patched versions deep in
the tree without changing app code.

## Swiper v8 → v12 code migration

The v8 `SwiperCore.use([Pagination])` API was removed in v9+. Migrated both
consumers to the `modules` prop:

- `src/components/Crowdloans/About/index.tsx`
- `src/components/Staking/HowToStake/index.tsx`

The `swiper/css*` imports in `_app.tsx` are unchanged (those paths still exist in v12).

## Deliberately NOT changed: @polkadex/* packages

Dependabot/`npm audit` suggested "upgrading" `@polkadex/blockchain-api` and
`@polkadex/utils`, but the suggested targets (1.1.53 and 0.2.1) are **older**
than what's installed (1.1.61 / 1.1.46) — applying them would downgrade and
break the app. Their actual vulnerabilities live in transitive deps
(`ws`, `@ethersproject/*`, `bn.js`) and are handled by the resolutions above
instead.

## Lower-risk items left for the reinstall to resolve

Several high/moderate transitive packages (`svgo`, `minimatch`, `picomatch`,
`tmp`, `flatted`, `ajv`, `js-yaml`) come in only through `@svgr/cli`, a
**devDependency** used by the `generateIcons` script — they are not in the
production bundle or runtime. A clean `yarn install` will pull patched versions
where the tree allows; forcing them via resolutions risks breaking the build
chain, so they were left to resolve naturally. Re-run `yarn audit` after install
to confirm the remaining count.

## Verify

```bash
yarn install
yarn build
yarn audit   # confirm criticals/highs are cleared
```

If the build breaks on swiper, double-check the two migrated components render
their carousels (Crowdloans About, Staking "How to Stake").
