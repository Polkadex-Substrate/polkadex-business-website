import { useTour } from '@reactour/tour';
import { Seo } from 'components';
import { DEFAULTINTRONAME } from 'components/Intro/contants';
import { Popup } from 'components/Popup';
import { Hero } from 'components/Rewards';
import { Footer, Header, Newsletter } from 'components/v2';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';

import * as S from './styles';

const Staking = dynamic(
  () => import('components/Rewards').then((mod) => mod.Staking),
  {
    ssr: false,
  },
);

export const Template = ({ apy }) => {
  const [terms, setTerms] = useState(true);

  const { setIsOpen, setCurrentStep } = useTour();

  const initialState = localStorage.getItem(DEFAULTINTRONAME) === 'false';

  const isIntroActiveViaEnv =
    process.env.REWARDS_INTRO_ACTIVE === 'true' ? !initialState : false;

  const shouldShowIntro = useMemo(
    () => !terms && isIntroActiveViaEnv,
    [terms, isIntroActiveViaEnv],
  );

  useEffect(() => {
    if (shouldShowIntro) {
      const timeout = setTimeout(() => {
        setIsOpen(true);
        setCurrentStep(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [shouldShowIntro, setIsOpen, setCurrentStep]);

  return (
    <>
      <Popup isVisible={terms} onClose={undefined}>
        <S.TermsWrapper>
          <S.Terms>
            <img src="/img/termsHero.svg" alt="Teacher illutration" />
            <div>
              <h5>Terms & Conditions</h5>
              <p>
                Claiming your PDEX rewards is a key part of the Polkadex
                Crowdloan campaign. For your reference, here are the{' '}
                <a
                  target="_blank"
                  href="https://github.com/Polkadex-Substrate/Docs/blob/master/Polkadex_Parachain_CrowdLoans.pdf"
                  rel="noreferrer"
                >
                  Terms & Conditions
                </a>{' '}
                you previously agreed upon when you contributed your DOT to the
                Polkadex Crowdloan.
              </p>
              <S.Button type="button" onClick={() => setTerms(!terms)}>
                Close
              </S.Button>
            </div>
          </S.Terms>
        </S.TermsWrapper>
      </Popup>
      <S.Wrapper>
        <Seo
          title="Polkadex Rewards"
          description="Earn rewards on Polkadex. Stake your PDEX token to secure the network and earn a high APY return."
          path="/rewards"
        />
        <Header
          links={['Products', 'Resources', 'About', 'Community']}
          cta={{
            title: 'Try the Testnet',
            href: process.env.ORDERBOOK_LINK,
          }}
        />
        <main>
          <Hero />
          <Staking apy={apy} />
          <Newsletter />
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
};
