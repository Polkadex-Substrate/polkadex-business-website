import fs from 'fs-extra';
import type { GetServerSideProps } from 'next';

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps<{}> = async ({
  res,
  req,
}) => {
  const currentUrl = req.headers.host;
  const isProduction = process.env.NODE_ENV === 'production';
  const BASE_URL = isProduction ? 'https://polkadex.trade' : currentUrl;

  const staticPaths = fs
    .readdirSync('./src/pages')
    .filter((staticPage) => {
      return ![
        'api',
        '_app.js',
        '_document.js',
        '404.js',
        'sitemap.xml.js',
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });

  const allPaths = [...staticPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url, i) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>${i === 0 ? 1.0 : 0.8}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
