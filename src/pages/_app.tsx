import PrivacyPopUp from 'components/PrivacyPopUp';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import { theme } from 'styles/theme';

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
        <GlobalStyles />
        <Component {...pageProps} />

        <PrivacyPopUp
          action={handleAccept}
          visible={state}
          link="https://polkadex.trade/privacy"
          description="When you visit our website we collect information about you using cookies and other unique identifiers to enhance your experience, analyze performance and traffic on the website, and tailor ads and content to your interests while you navigate on the web or interact with us across devices."
        />
      </ThemeProvider>
    </>
  );
}

export default App;
