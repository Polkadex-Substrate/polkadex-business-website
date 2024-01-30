/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '/public/index.css';
import 'slick-carousel/slick/slick.css';
import 'react-toastify/dist/ReactToastify.css';

import PrivacyPopUp from 'components/PrivacyPopUp';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { OverlayProvider } from 'react-aria';
import { ThemeProvider } from 'styled-components';
import { defaultThemes, GlobalStyles } from 'styles';

import { ApiProvider, WalletProvider } from '../providers';
import Maintenance from './maintenance';

const maintenance = false;

function App({ Component, pageProps }: AppProps) {
  const [state, setState] = useState(false);
  const router = useRouter();

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

  return (
    <OverlayProvider>
      <ThemeProvider theme={defaultThemes.dark}>
        <GlobalStyles />
        <PrivacyPopUp
          action={handleAccept}
          visible={state}
          link="/"
          description="When you visit our website we collect information about you using cookies and other unique identifiers to enhance your experience, analyze performance and traffic on the website, and tailor ads and content to your interests while you navigate on the web or interact with us across devices."
        />
        {router.pathname.includes('rewards') ? (
          <Providers>
            <>{maintenance ? <Maintenance /> : <Component {...pageProps} />}</>
          </Providers>
        ) : (
          <>{maintenance ? <Maintenance /> : <Component {...pageProps} />}</>
        )}
      </ThemeProvider>
    </OverlayProvider>
  );
}

const Providers = ({ children }: { children: ReactNode }) => (
  <WalletProvider>
    <ApiProvider>{children}</ApiProvider>
  </WalletProvider>
);

export default App;
