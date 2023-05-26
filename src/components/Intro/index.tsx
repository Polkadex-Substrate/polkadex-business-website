/* eslint-disable react/no-unknown-property */
import { PopoverContentProps, StepType, TourProvider } from '@reactour/tour';
import { useRewards } from 'hooks/useRewards';
import { useWallet } from 'hooks/useWallet';
import Link from 'next/link';
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { defaultStyles } from './config';
import { DEFAULTINTRONAME } from './contants';
import * as S from './styles';

const initialState = process.browser && localStorage.getItem(DEFAULTINTRONAME);

export function Intro({ children }: { children: ReactNode }) {
  const { hasRewards } = useRewards();

  const steps: StepType[] = useMemo(
    () => [
      {
        selector: '.start',
        content: (
          <S.Container>
            <img src="/img/tutorialHero.svg" alt="Teacher illutration" />
            <div>
              <h6>Step-by-step: Check and claim your PDEX rewards</h6>
              <p>
                Follow this simple guide to learn how to check and claim your
                PDEX rewards.
              </p>
            </div>
          </S.Container>
        ),
        position: 'center',
        styles: defaultStyles,
      },
      {
        selector: '.selectWallet',
        content: (
          <S.Container>
            <div>
              <h6>1. Select a wallet</h6>
              <p>
                Select the wallet address you used to contribute to the Polkadex
                Crowdloan. For now, you can only connect to this rewards claim
                DApp using a{' '}
                <Link href="https://polkadot.js.org/extension">
                  Polkadot.js extension
                </Link>
                -enabled wallet.
              </p>
            </div>
          </S.Container>
        ),
        position: 'bottom',
        styles: defaultStyles,
        disableActions: true,
      },
      {
        selector: hasRewards ? '.initiateButton' : '.noRewards',
        content: (
          <S.Container>
            <div>
              <h6>
                2.{' '}
                {hasRewards
                  ? 'Claim your rewards!'
                  : 'There are no rewards available'}
              </h6>
              <p>
                {hasRewards
                  ? 'Click "Unlock Rewards" to claim your total rewards. The "Total vested to date" includes the initial unlocked 25% plus the amount vested so far. These will be unlocked and transferable. The remaining rewards will continue vesting into your wallet until the end of the lease period.'
                  : 'Have you selected the correct wallet?'}
              </p>
            </div>
          </S.Container>
        ),
        position: 'bottom',
        styles: defaultStyles,
        disableActions: true,
      },
      {
        selector: '.latestRewards',
        content: (
          <S.Container>
            <div>
              <h6>3. Want to earn even more PDEX? Start staking!</h6>
              <p>
                You can put all your PDEX rewards to work and maximize your
                daily PDEX earnings by staking both the unlocked and locked
                portions of your crowdloan rewards!
              </p>
            </div>
          </S.Container>
        ),
        position: 'bottom',
        styles: defaultStyles,
        disableActions: true,
      },
    ],
    [hasRewards],
  );

  return (
    <TourProvider
      steps={steps}
      defaultOpen={!initialState}
      ContentComponent={ContentComponent}
    >
      {children}
    </TourProvider>
  );
}

const ContentComponent = (props: PopoverContentProps) => {
  const [terms, setTerms] = useState(true);
  const [state, setState] = useState(!!initialState);
  const { steps, currentStep, setIsOpen, setCurrentStep } = props;
  const { content } = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const { account, isInjected } = useWallet();
  const { hasRewards, claimed, isTransactionLoading } = useRewards();

  const showNextButton = !isLastStep && currentStep === 0 && isInjected;
  const showSkipButton =
    isLastStep ||
    (currentStep === 1 && !isInjected) ||
    (!hasRewards && currentStep === 2);

  const userHasClaimedRewards = useMemo(
    () => hasRewards && Number(claimed) > 0 && !isTransactionLoading,
    [isTransactionLoading, hasRewards, claimed],
  );

  const handleChangeIntroView = useCallback(() => {
    localStorage.setItem(DEFAULTINTRONAME, state ? 'false' : 'true');
    setState(!state);
  }, [state]);

  useEffect(() => {
    if (account && currentStep === 1) setTimeout(() => setCurrentStep(2), 200);
  }, [account, setCurrentStep, currentStep]);

  useEffect(() => {
    if (userHasClaimedRewards && currentStep === 2)
      setTimeout(() => setCurrentStep(3), 200);
  }, [setCurrentStep, currentStep, userHasClaimedRewards]);

  return (
    <S.Wrapper>
      {terms ? (
        <S.Terms>
          <img src="/img/termsHero.svg" alt="Teacher illutration" />
          <div>
            <h5>Terms & Conditions</h5>
            <p>
              Claiming your PDEX rewards is a key part of the Polkadex Crowdloan
              campaign. For your reference,{' '}
              <a
                target="_blank"
                href="https://github.com/Polkadex-Substrate/Docs/blob/master/Polkadex_Parachain_CrowdLoans.pdf"
                rel="noreferrer"
              >
                here are the Terms & Conditions
              </a>{' '}
              you previously agreed upon when you contributed your DOT to the
              Polkadex Crowdloan.
            </p>
            <S.Button type="button" onClick={() => setTerms(!terms)}>
              Close
            </S.Button>
          </div>
        </S.Terms>
      ) : (
        <>
          {typeof content === 'function'
            ? content({ ...props })
            : (content as ReactNode)}
          <S.FlexActions>
            <S.Actions>
              <button type="button" onClick={() => setIsOpen(false)}>
                {showSkipButton ? 'Done' : 'Skip'}
              </button>
              <S.Label htmlFor="changeIntro">
                <input
                  id="changeIntro"
                  type="checkbox"
                  checked={state}
                  onChange={handleChangeIntroView}
                />
                Don&apos;t show again
              </S.Label>
            </S.Actions>
            {showNextButton && (
              <S.Button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                Next
              </S.Button>
            )}
          </S.FlexActions>
        </>
      )}
      <style jsx global>
        {`
          body {
            overflow: ${state ? 'hidden' : 'auto'};
          }
        `}
      </style>
    </S.Wrapper>
  );
};
