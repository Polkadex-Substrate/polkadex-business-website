/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '/public/index.css';
import 'slick-carousel/slick/slick.css';

import PrivacyPopUp from 'components/PrivacyPopUp';
import { ThemingContext } from 'context';
import { useTheming } from 'hooks';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles';

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
    if (!state) checkCookies();
  }, [state]);

  const { theme, themeToogle } = useTheming();
  return (
    <ThemingContext.Provider value={{ theme, themeToogle }}>
      {theme.loading ? (
        <div />
      ) : (
        <ThemeProvider theme={theme.value}>
          <GlobalStyles />
          {maintenance ? <Maintenance /> : <Component {...pageProps} />}
          <PrivacyPopUp
            action={handleAccept}
            visible={state}
            link="/"
            description="When you visit our website we collect information about you using cookies and other unique identifiers to enhance your experience, analyze performance and traffic on the website, and tailor ads and content to your interests while you navigate on the web or interact with us across devices."
          />
        </ThemeProvider>
      )}
    </ThemingContext.Provider>
  );
}

export default App;
