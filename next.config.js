module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)?',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000',
          },
        ],
      },
    ];
  },
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
      process.env.STAKING_SCRAP ||
      'https://strapi-production-5f75.up.railway.app',
    REWARDS_INTRO_ACTIVE: process.env.REWARDS_INTRO_ACTIVE || 'true',
    STAKING_SCRAP_TOKEN:
      process.env.STAKING_SCRAP_TOKEN ||
      '64884814288cec3482534e508918677352f7199bc03cb4a80b0ee18a10fc479e237dabd77cd514722eccd37523dc1cc5286f67995726df6cd038cffcd5e202581f90d56bebf08515005366a1eacaafeefa4471e04128279b796c84a9b84b0603cd401169d754300ee12e9fc1cb5ed43d02331bba02c35ecc1520debd8e49e662',
  },
};
