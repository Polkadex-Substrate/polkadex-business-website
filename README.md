# Polkadex Business Website

An open-source repository for the Polkadex Business Website front end interface maintained by Polkadex Inc.

Polkadex is a fully non-custodial peer-to-peer orderbook-based cryptocurrency exchange for the DeFi ecosystem built on Substrate.

## Interface

Web: [polkadex.ee](https://polkadex.ee)

## Directory Structure

| Folder           | Contents                                                                   |
| ---------------- | -------------------------------------------------------------------------- |
| src/components   | All UI components used in this application.                                |
| src/data         | Manual data related to the old crowdloans.                                 |
| src/hooks        | All React hooks used in this application.                                  |
| src/translations | Translation files for internationalization purposes.                       |
| src/providers    | Context providers for managing global state and side effects.              |
| src/pages        | All individual page components for the application.                        |
| src/styles       | Global styles and styles for older pages.                                  |
| src/utils        | Utility functions and tools used in the migration page and other features. |

## Running the Interface Locally

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying to Cloudflare Pages

Deployment uses [Wrangler](https://developers.cloudflare.com/workers/wrangler/) (configured in `wrangler.toml`, project `polkadex-business-website`). Authenticate once with `npx wrangler login` (or set `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`), then:

```bash
yarn deploy        # builds the static export and uploads out/
yarn deploy:only   # uploads the existing out/ without rebuilding
```

## Social Media

- [Twitter](https://twitter.com/polkadex)
- [Telegram](https://t.me/Polkadex)
- [Discord](https://discord.com/invite/Uvua83QAzk)
- [LinkedIn](https://www.linkedin.com/company/69690544)
- [Medium](https://polkadex.medium.com/)
- [Reddit](https://www.reddit.com/r/polkadex)
- [Youtube](https://www.youtube.com/channel/UC6fXRDT4lLKlXG3gP0PP06Q)

## Polkadex Links:

- Polkadex Business Website: [polkadex.ee](https://polkadex.ee)
- Polkadex Docs: [docs.polkadex.ee](https://docs.polkadex.ee)
- Polkadex UX [https://github.com/Polkadex-Substrate/polkadex-ts/tree/main/packages/ui]
- Polkadex API [https://github.com/Polkadex-Substrate/polkadex-ts/tree/main/packages/polkadex-api]
- React Providers [https://github.com/Polkadex-Substrate/polkadex-ts/tree/main/packages/react-providers]
- Thea [https://github.com/Polkadex-Substrate/polkadex-ts/tree/main/packages/thea]
- Polkadex Docs Website [https://github.com/Polkadex-Substrate/polkadex-docs]
