/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://polkadex.trade',
  generateRobotsTxt: true,
  priority: 0.8,
  changefreq: 'daily',
  additionalPaths: async (config) => [
    await config.transform({ ...config, priority: 1 }, '/'),
  ],
  exclude: ['/v2/device', '/v2/polkaido', '/v2/careers', '/v2'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
