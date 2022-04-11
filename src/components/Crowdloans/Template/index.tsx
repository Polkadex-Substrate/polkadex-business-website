import { Footer, Newsletter } from 'components';
import {
  About,
  HeaderCustom,
  Hero,
  Timeline,
  TokenEconomics,
  TokenUtility,
} from 'components/Crowdloans';
import { Popup } from 'components/Popup';
import Head from 'next/head';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { HomeTranslations, IHomeTranslations } from 'translations';

import { Calculator } from '../Calculator';
import { ChainModel } from '../ChainModel';
import { Faq } from '../Faq';
import { Participate } from '../Participate';
import { Rewards } from '../Rewards';
import * as S from './styles';

export const Template = () => {
  const [state, setState] = useState(false);
  const [isVisible, setIsVisible] = useState({ isVisible: false, url: '' });

  const { footer, newsletter, header }: IHomeTranslations =
    HomeTranslations['en-US'];

  const handleAccept = () => {
    localStorage.setItem('crowdloansTerms', 'true');
    setState(true);
    setTimeout(() => {
      window.open(isVisible.url);
    }, 1000);
  };

  const checkTerms = useCallback(() => {
    const result = localStorage.getItem('crowdloansTerms');
    if (result === 'true') setState(true);
  }, []);

  useEffect(() => {
    if (!state) checkTerms();
  }, [state, checkTerms]);

  return (
    <S.Wrapper>
      <Head>
        <title>
          Help Polkadex secure a Parachain slot. Join the Crowdloan now!
        </title>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
               gtag('config','${process.env.GOOGLE_ANALYTICS}');
          `,
          }}
        />
      </Head>
      <HeaderCustom {...header} />
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
                In order to proceed please read and agree to the
                <a href="/terms" target="_blank">
                  terms and conditions
                </a>
              </p>
            </div>
          </S.TermsContainer>
        </S.Terms>
      </Popup>
      <main>
        <Hero />
        <About />
        <Rewards />
        <Calculator />
        <TokenUtility />
        <ChainModel />
        <Timeline />
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
        <TokenEconomics />
        <Faq />
        <Newsletter {...newsletter} />
      </main>
      <Footer {...footer} />;
    </S.Wrapper>
  );
};
