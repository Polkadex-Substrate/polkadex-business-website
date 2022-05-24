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
    NEXT_PUBLIC_GA_MEASUREMENT_ID:
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-5FD4544T94',
    RANGER_HOST_URL:
      process.env.NEXT_PUBLIC_RANGER_HOST_URL || 'wss://mainnet.polkadex.trade',
    WORKABLE_URL:
      process.env.WORKABLE_URL || 'https://test-432836.workable.com',
    WORKABLE_TOKEN:
      process.env.WORKABLE_URL ||
      '6d1b13ffa60afe18c4a016cc321b8cd8858dbad70679291516a8d90cd766e6dd',
  },
};
