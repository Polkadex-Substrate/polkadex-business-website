module.exports = {
  experimental: {
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
  env: {
    GOOGLE_ANALYTICS:
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || 'G-DYTPWG3R5M',
    GOOGLE_ANALYTICS_CTA:
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_CTA || 'G-5FD4544T94',
    RANGER_HOST_URL:
      process.env.NEXT_PUBLIC_RANGER_HOST_URL || 'wss://mainnet.polkadex.trade',
  },
};
