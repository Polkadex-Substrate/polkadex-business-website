/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://polkadex.ee',
  generateRobotsTxt: true,
  priority: 0.8,
  // Honest changefreq: the site updates around releases, not daily.
  changefreq: 'weekly',
  additionalPaths: async (config) => [
    await config.transform(
      { ...config, priority: 1, changefreq: 'daily' },
      '/',
    ),
  ],
  exclude: [
    '/v2/device',
    '/v2/polkaido',
    '/v2/careers',
    '/v2',
    '/brandAssets', // duplicate of /mediaKit (legacy redirect)
    '/accessDenied',
    '/maintenance',
    '/404',
    '/terms', // orphaned until updated legal docs are ready
  ],
  robotsTxtOptions: {
    policies: [
      // Standard crawlers
      { userAgent: '*', allow: '/' },
      // ── AI crawlers — explicitly allowed ─────────────────────────────
      // Being represented accurately in AI assistants (ChatGPT, Claude,
      // Perplexity, Gemini) is distribution for a project in relaunch.
      // These bots default to allowed under `*`, but explicit entries
      // survive future policy tightening and document intent.
      { userAgent: 'GPTBot', allow: '/' }, // OpenAI training
      { userAgent: 'OAI-SearchBot', allow: '/' }, // ChatGPT search
      { userAgent: 'ChatGPT-User', allow: '/' }, // ChatGPT browsing
      { userAgent: 'ClaudeBot', allow: '/' }, // Anthropic
      { userAgent: 'Claude-User', allow: '/' }, // Claude browsing
      { userAgent: 'PerplexityBot', allow: '/' }, // Perplexity
      { userAgent: 'Google-Extended', allow: '/' }, // Gemini training
      { userAgent: 'Applebot-Extended', allow: '/' }, // Apple Intelligence
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'CCBot', allow: '/' }, // Common Crawl
    ],
  },
};
