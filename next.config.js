module.exports = {
  output: 'export',
  trailingSlash: false,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  generateBuildId: async () => {
    try {
      const gitCommitHash = execSync('git rev-parse HEAD').toString().trim();
      return gitCommitHash;
    } catch (error) {
      return 'orderbookBusinessDefault';
    }
  },
  env: {
    GOOGLE_ANALYTICS:
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || 'G-DYTPWG3R5M',
    NEXT_PUBLIC_GA_MEASUREMENT_ID:
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-5FD4544T94',
    RANGER_HOST_URL:
      process.env.NEXT_PUBLIC_RANGER_HOST_URL ||
      'wss://polkadex.public.curie.radiumblock.co/ws',
    WORKABLE_URL:
      process.env.WORKABLE_URL || 'https://test-432836.workable.com',
    WORKABLE_TOKEN:
      process.env.WORKABLE_URL ||
      '6d1b13ffa60afe18c4a016cc321b8cd8858dbad70679291516a8d90cd766e6dd',
    SUBSCAN_URL:
      process.env.SUBSCAN_URL || 'https://polkadex.api.subscan.io/api',
    SUBSCAN_API: process.env.SUBSCAN_API || '1542770994e249439ecf422602aba56d',
    STAKING_SCRAP:
      process.env.STAKING_SCRAP || 'https://stakingscrapping.herokuapp.com',
    FRESHDESK_API: process.env.FRESHDESK_API || 'wM7w7b8XzSd3L5esNQL',
    FRESHDESK_BASE_URL:
      process.env.FRESHDESK_BASE_URL ||
      'https://construapp.freshdesk.com/api/v2',
    REWARDS_INTRO_ACTIVE: process.env.REWARDS_INTRO_ACTIVE || 'true',
    ORDERBOOK_LINK:
      process.env.ORDERBOOK_LINK ||
      'https://orderbook.polkadex.ee/trading/DOTUSDT',
  },
};
