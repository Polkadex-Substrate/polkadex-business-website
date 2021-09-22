module.exports = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    RANGER_HOST_URL:
      process.env.NEXT_PUBLIC_RANGER_HOST_URL ||
      'wss://blockchain.polkadex.trade',
  },
};
