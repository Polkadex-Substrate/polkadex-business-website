import { Footer } from 'components';
import {
  About,
  Cta,
  Header,
  Hero,
  Participate,
  Rewards,
  Stats,
} from 'components/CrowdloansContribute';
import { Popup } from 'components/Popup';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import { HomeTranslations, IHomeTranslations } from 'translations';

import * as S from './styles';

export const Template = () => {
  const [state, setState] = useState(false);
  const [isVisible, setIsVisible] = useState({ isVisible: false, url: '' });

  const handleAccept = () => {
    localStorage.setItem('crowdloansTermsCta', 'true');
    setState(true);
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
    <S.Wrapper>
      <Head>
        <title>
          Polkadex Crowdloan for the Polkadot parachain is live with 2M $PEDEX
          rewards pool for contributors.
        </title>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_CTA}`}
        />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config','${process.env.GOOGLE_ANALYTICS_CTA}');
          `,
          }}
        />
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
        <Stats />
        <Rewards />
        <Participate
          onAccept={
            !isVisible.isVisible && !state
              ? (url) => {
                  setIsVisible({
                    isVisible: !isVisible.isVisible,
                    url,
                  });
                }
              : undefined
          }
          hasAccepted={state}
        />
        <About />
        <Cta />
      </main>
      <Footer {...footer} full={false} />
    </S.Wrapper>
  );
};
