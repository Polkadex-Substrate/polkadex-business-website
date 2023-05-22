import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link rel="stylesheet" href="/index.css" />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://polkadex.trade/" />
          <meta
            property="og:title"
            content="Polkadex Orderbook - Decentralized Crypto Currency Exchange"
          />
          <meta
            property="og:description"
            content="Trade crypto with fully decentralized peer-to-peer orderbook based trading engine for Web3. Polkadex Orderbook - the CEXiest DEX in DeFi."
          />
          <meta
            property="og:image"
            content="https://polkadex.trade/twitterCardImage.jpg"
          />
          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://polkadex.trade/" />
          <meta
            property="twitter:title"
            content="Polkadex Orderbook - Decentralized Crypto Currency Exchange"
          />
          <meta
            property="twitter:description"
            content="Trade crypto with fully decentralized peer-to-peer orderbook based trading engine for Web3. Polkadex Orderbook - the CEXiest DEX in DeFi."
          />
          <meta
            property="twitter:image"
            content="https://polkadex.trade/twitterCardImage.jpg"
          />
          <link
            rel="preload"
            href="/fonts/SuisseIntl-Black.woff"
            as="font"
            crossOrigin="anonymous"
            type="font/woff"
          />
          <link
            rel="preload"
            href="/fonts/SuisseIntl-Bold.woff"
            as="font"
            crossOrigin="anonymous"
            type="font/woff"
          />
          <link
            rel="preload"
            href="/fonts/SuisseIntl-SemiBold.woff"
            as="font"
            crossOrigin="anonymous"
            type="font/woff"
          />
          <link
            rel="preload"
            href="/fonts/SuisseIntl-Regular.woff"
            as="font"
            crossOrigin="anonymous"
            type="font/woff"
          />
          <link
            rel="preload"
            href="/fonts/SuisseIntl-Light.woff"
            as="font"
            crossOrigin="anonymous"
            type="font/woff"
          />
          <link
            rel="preload"
            href="/fonts/SuisseIntl-Thin.woff"
            as="font"
            crossOrigin="anonymous"
            type="font/woff"
          />
          <link
            rel="preload"
            href="/fonts/work-sans-v8-latin-300.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/fonts/work-sans-v8-latin-regular.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/fonts/work-sans-v8-latin-600.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/fonts/Caveat-Regular.ttf"
            as="font"
            crossOrigin="anonymous"
            type="font/ttf"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
