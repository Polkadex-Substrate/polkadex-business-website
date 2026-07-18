/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '/public/index.css';
import 'slick-carousel/slick/slick.css';
import 'react-toastify/dist/ReactToastify.css';

import { BackToTop } from 'components/BackToTop';
import { AnimatePresence, motion } from 'framer-motion';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import { OverlayProvider } from 'react-aria';
import { ThemeProvider } from 'styled-components';
import { defaultThemes, GlobalStyles } from 'styles';

import { ApiProvider, WalletProvider } from '../providers';
import Maintenance from './maintenance';

const maintenance = false;

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Cross-page anchor fix: with AnimatePresence mode="wait", the destination
  // page's DOM doesn't exist yet when the browser attempts its native hash
  // scroll, so links like /#tokenomics from an inner page land at the top.
  // Re-run the scroll once the new page has mounted and the 150ms transition
  // has finished. scroll-margin-top (global.ts) keeps the sticky-header offset.
  useEffect(() => {
    const scrollToHash = (url: string) => {
      const hash = url.split('#')[1];
      if (!hash) return;
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const reduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
          ).matches;
          el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
        }
      }, 400);
    };
    router.events.on('routeChangeComplete', scrollToHash);
    return () => {
      router.events.off('routeChangeComplete', scrollToHash);
    };
  }, [router.events]);

  return (
    <OverlayProvider>
      <ThemeProvider theme={defaultThemes.dark}>
        <GlobalStyles />
        {/* Cookie consent banner retired: Google Analytics was removed in
            favor of Plausible (cookieless, privacy-first, proxied through
            our domain). Nothing on the site sets tracking cookies anymore,
            so there is nothing to consent to. If a cookie-setting service
            is ever reintroduced, restore <PrivacyPopUp /> from
            components/PrivacyPopUp. */}
        {/* Quick cross-route fade so page changes feel like one application.
            NOTE: do NOT add initial={false} here — AnimatePresence propagates
            it via PresenceContext to every descendant motion component,
            which silently disables all ScrollReveal / stagger entrance
            animations on first page load. The cost of omitting it is a
            single 150ms fade-in on first paint, which reads as polish. */}
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {router.pathname.includes('rewards') ? (
              <Providers>
                <>
                  {maintenance ? <Maintenance /> : <Component {...pageProps} />}
                </>
              </Providers>
            ) : (
              <>{maintenance ? <Maintenance /> : <Component {...pageProps} />}</>
            )}
          </motion.div>
        </AnimatePresence>
        {/* Global scroll-to-top FAB with reading-progress ring. */}
        <BackToTop />
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
