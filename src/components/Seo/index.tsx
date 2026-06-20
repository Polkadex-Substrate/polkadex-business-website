import Head from 'next/head';

const SITE_URL = 'https://polkadex.ee';
const DEFAULT_TITLE =
  'Polkadex Orderbook - Decentralized Crypto Currency Exchange';
const DEFAULT_DESCRIPTION =
  'Trade crypto with fully decentralized peer-to-peer orderbook based trading engine for Web3. Polkadex Orderbook - the CEXiest DEX in DeFi.';
const DEFAULT_IMAGE = `${SITE_URL}/twitterCardImage.jpg`;

export interface SeoProps {
  /** Page <title>. Falls back to the site default. */
  title?: string;
  /** Meta description. Falls back to the site default. */
  description?: string;
  /** Path of the page, e.g. "/staking". Used for canonical + og:url. */
  path?: string;
  /** Absolute URL of the social share image. */
  image?: string;
  /** Set true on utility pages that should not be indexed. */
  noindex?: boolean;
}

/**
 * Centralised SEO head tags: title, description, canonical, Open Graph and
 * Twitter cards. Every tag carries a `key` so Next.js de-duplicates against
 * any defaults, keeping exactly one of each per page.
 */
export const Seo = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '',
  image = DEFAULT_IMAGE,
  noindex = false,
}: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="title" content={title} key="meta-title" />
      <meta name="description" content={description} key="description" />
      <link rel="canonical" href={url} key="canonical" />
      {noindex && (
        <meta name="robots" content="noindex, nofollow" key="robots" />
      )}
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta property="og:image" content={image} key="og:image" />
      {/* Twitter */}
      <meta
        property="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta property="twitter:url" content={url} key="twitter:url" />
      <meta property="twitter:title" content={title} key="twitter:title" />
      <meta
        property="twitter:description"
        content={description}
        key="twitter:description"
      />
      <meta property="twitter:image" content={image} key="twitter:image" />
    </Head>
  );
};
