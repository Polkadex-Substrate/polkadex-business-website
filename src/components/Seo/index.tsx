import Head from 'next/head';

const SITE_URL = 'https://polkadex.ee';
const SITE_NAME = 'Polkadex';
const TWITTER_HANDLE = '@polkadex';
const DEFAULT_TITLE =
  'Polkadex — The Sovereign Layer 1 Purpose-Built for Trading';
const DEFAULT_DESCRIPTION =
  'Polkadex is an independent Layer 1 blockchain built with Substrate for high-performance decentralized trading. CEX-speed orderbook with on-chain settlement, non-custodial, cross-chain via Hyperbridge. Live on testnet.';
// New filename (not twitterCardImage.jpg) so social platforms' link-preview
// caches fetch the updated artwork instead of serving the stale image.
const DEFAULT_IMAGE = `${SITE_URL}/ogImage.jpg`;

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

// Organization + WebSite structured data — tells search engines and AI
// crawlers who Polkadex is, canonically. Rendered once per page.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Polkadex',
      url: SITE_URL,
      logo: `${SITE_URL}/android-icon-192x192.png`,
      description:
        'Polkadex is an independent Layer 1 blockchain built with Substrate, engineered for high-performance decentralized trading. Orders are matched by the high-performance OCEX engine and every trade settles on-chain, non-custodially. The sudo key has been removed — all protocol upgrades are governed on-chain.',
      sameAs: [
        'https://twitter.com/polkadex',
        'https://github.com/Polkadex-Substrate',
        'https://polkadex.medium.com',
        'https://t.me/Polkadex',
        'https://discord.gg/Jh5nSd6gj',
        'https://www.linkedin.com/company/69690544',
        'https://www.reddit.com/r/polkadex',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

/**
 * Centralised SEO head tags: title, description, canonical, Open Graph,
 * Twitter cards, and JSON-LD structured data. Every tag carries a `key`
 * so Next.js de-duplicates against any defaults, keeping exactly one of
 * each per page.
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
      <meta property="og:site_name" content={SITE_NAME} key="og:site_name" />
      <meta property="og:locale" content="en_US" key="og:locale" />
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta property="og:image" content={image} key="og:image" />
      <meta property="og:image:width" content="1200" key="og:image:width" />
      <meta property="og:image:height" content="630" key="og:image:height" />
      <meta
        property="og:image:alt"
        content="Polkadex — the sovereign Layer 1 purpose-built for trading"
        key="og:image:alt"
      />
      {/* Twitter */}
      <meta
        property="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta
        property="twitter:site"
        content={TWITTER_HANDLE}
        key="twitter:site"
      />
      <meta property="twitter:url" content={url} key="twitter:url" />
      <meta property="twitter:title" content={title} key="twitter:title" />
      <meta
        property="twitter:description"
        content={description}
        key="twitter:description"
      />
      <meta property="twitter:image" content={image} key="twitter:image" />
      {/* Structured data for search engines and AI crawlers */}
      <script
        type="application/ld+json"
        key="jsonld"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};
