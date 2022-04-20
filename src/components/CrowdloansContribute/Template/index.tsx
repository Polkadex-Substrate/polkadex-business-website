/* eslint-disable react/no-danger */
import { Footer } from 'components';
import {
  About,
  Cta,
  Header,
  Hero,
  Participate,
  Rewards,
} from 'components/CrowdloansContribute';
import { Popup } from 'components/Popup';
import { Stats, StatsCard } from 'components/Stats';
import Head from 'next/head';
import Script from 'next/script';
import { event, GoogleAnalytics } from 'nextjs-google-analytics';
import { useCallback, useEffect, useState } from 'react';
import { HomeTranslations, IHomeTranslations } from 'translations';

import * as S from './styles';

export const Template = () => {
  const [state, setState] = useState(false);
  const [isVisible, setIsVisible] = useState({
    isVisible: false,
    url: '',
    label: '',
  });

  const handleAccept = () => {
    localStorage.setItem('crowdloansTermsCta', 'true');
    setState(true);
    event('Click', {
      category: 'Contribute',
      label: isVisible.label,
      value: 1,
    });
    setTimeout(() => {
      window.open(isVisible.url);
    }, 1000);
  };

  const checkTerms = useCallback(() => {
    const result = localStorage.getItem('crowdloansTermsCta');
    if (result === 'true') setState(true);
  }, []);

  useEffect(() => {
    if (!state) checkTerms();
  }, [state, checkTerms]);

  const { footer }: IHomeTranslations = HomeTranslations['en-US'];
  return (
    <>
      <GoogleAnalytics />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            !function(e,i){if(!e.pixie){var n=e.pixie=function(e,i,a){n.actionQueue.push({action:e,actionValue:i,params:a})};n.actionQueue=[];var a=i.createElement("script");a.async=!0,a.src="//acdn.adnxs.com/dmp/up/pixie.js";var t=i.getElementsByTagName("head")[0];t.insertBefore(a,t.firstChild)}}(window,document);
pixie('init', '7a7062db-796b-4937-9aad-8d980417f3ff');
            `,
        }}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `pixie('event', 'PageView');`,
        }}
      />
      <Script
        src="https://secure.adnxs.com/px?id=1577865&t=1"
        type="text/javascript"
        strategy="afterInteractive"
      />
      <S.Wrapper>
        <Head>
          <title>
            Polkadex Crowdloan for the Polkadot parachain is live with 2M $PEDEX
            rewards pool for contributors.
          </title>

          <noscript>
            <img
              src="https://ib.adnxs.com/pixie?pi=7a7062db-796b-4937-9aad-8d980417f3ff&e=PageView&script=0"
              alt="Pixel by Adnxs"
              width="1"
              height="1"
              style={{ display: 'none' }}
            />
          </noscript>
        </Head>
        <Header />
        <Popup
          onClose={() => setIsVisible({ ...isVisible, isVisible: false })}
          isVisible={isVisible.isVisible && !state}
        >
          <S.Terms isVisible={isVisible.isVisible && !state}>
            <S.TermsContainer>
              <h2>Crowdloans terms and conditions</h2>
              <div>
                <label htmlFor="terms">
                  <input
                    checked={state}
                    type="checkbox"
                    id="terms"
                    onChange={handleAccept}
                  />
                  <span />
                </label>
                <p>
                  I agree to
                  <a href="/terms" target="_blank">
                    Polkadex&apos;s terms and conditions
                  </a>
                </p>
              </div>
            </S.TermsContainer>
          </S.Terms>
        </Popup>

        <main>
          <Hero />
          <Stats>
            <>
              <StatsCard title="LP15-LP8" description="Auction Starts" />
              <StatsCard title="1M DOT" description="Auction Cap" />
              <StatsCard title="96 weeks" description="Lease Duration" />
              <StatsCard title="2M PDEX" description="Rewards" />
            </>
          </Stats>
          <Rewards />
          <Participate
            onAccept={
              !isVisible.isVisible && !state
                ? (url, label) => {
                    setIsVisible({
                      isVisible: !isVisible.isVisible,
                      url,
                      label,
                    });
                  }
                : (url, label) =>
                    event('Click', {
                      category: 'Contribute',
                      label,
                      value: 1,
                    })
            }
            hasAccepted={state}
          />
          <About />
          <Cta />
        </main>
        <Footer {...footer} full={false} />
      </S.Wrapper>
    </>
  );
};
