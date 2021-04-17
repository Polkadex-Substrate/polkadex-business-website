import PrivacyPopUp from 'components/PrivacyPopUp';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import { theme } from 'styles/theme';

import Maintenance from './maintenance';

const maintenance = false;

function App({ Component, pageProps }: AppProps) {
  const [state, setState] = useState(false);

  const handleAccept = () => {
    localStorage.setItem('CookiesAccepted', 'true');
    setState(false);
  };
  function checkCookies() {
    const result = localStorage.getItem('CookiesAccepted');
    if (result !== 'true') setState(true);
  }

  useEffect(() => {
    checkCookies();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Polkadex</title>

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
          <meta property="og:title" content="Welcome to Polkadex" />
          <meta
            property="og:description"
            content="A fully decentralized, peer-peer, orderbook based cryptocurrency exchange for the Defi ecosystem in Substrate."
          />
          <meta property="og:url" content="https://www.polkadex.trade" />
          <meta
            property="og:image"
            content="https://polkadex.trade/twitterCardSummary.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="https://polkadex.trade/twitterCardSummary.jpg"
          />
          <meta name="twitter:site" content="@polkadex" />
          <meta name="twitter:creator" content="@polkadex" />
        </Head>
        <GlobalStyles />
        {maintenance ? <Maintenance /> : <Component {...pageProps} />}

        <PrivacyPopUp
          action={handleAccept}
          visible={state}
          link="/"
          description="When you visit our website we collect information about you using cookies and other unique identifiers to enhance your experience, analyze performance and traffic on the website, and tailor ads and content to your interests while you navigate on the web or interact with us across devices."
        />
      </ThemeProvider>
    </>
  );
}

export default App;
