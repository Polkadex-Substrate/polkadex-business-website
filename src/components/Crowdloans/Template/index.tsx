import { Footer, Newsletter } from 'components';
import {
  About,
  HeaderCustom,
  Hero,
  Timeline,
  TokenEconomics,
  TokenUtility,
} from 'components/Crowdloans';
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
  const [isVisible, setIsVisible] = useState(false);

  const { footer, newsletter, header }: IHomeTranslations =
    HomeTranslations['en-US'];

  const handleAccept = () => {
    localStorage.setItem('crowdloansTerms', 'true');
    setState(true);
  };

  const checkTerms = useCallback(() => {
    const result = localStorage.getItem('crowdloansTerms');
    if (result === 'true') setState(true);
  }, []);

  useEffect(() => {
    if (!state) checkTerms();
  }, [state, checkTerms]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting === true) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: [0] },
    );

    observer.observe(document.querySelector('#participate'));
    return () => observer.disconnect();
  }, []);

  return (
    <S.Wrapper>
      <Head>
        <title>
          Help Polkadex secure a Parachain slot. Join the Crowdloan now!
        </title>
      </Head>
      <HeaderCustom {...header} />
      <S.Terms isVisible={isVisible && !state}>
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
      <main>
        <Hero />
        <About />
        <Rewards />
        <Calculator />
        <TokenUtility />
        <ChainModel />
        <Timeline />
        <Participate hasAccepted={state} />
        <TokenEconomics />
        <Faq />
        <Newsletter {...newsletter} />
      </main>
      <Footer {...footer} />;
    </S.Wrapper>
  );
};
