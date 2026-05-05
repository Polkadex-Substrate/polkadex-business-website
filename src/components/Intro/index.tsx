/* eslint-disable react/no-unknown-property */
import { StepType, TourProps, TourProvider } from '@reactour/tour';
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

export function Intro({ children }: { children: ReactNode }) {
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
        selector: '.initiateButton',
        content: (
          <S.Container>
            <div>
              <h6>2. Claim your rewards!</h6>
              <p>
                Click &quot;<strong>Unlock Rewards</strong>&quot; to claim your
                total rewards. The &quot;Total vested to date&quot; includes the
                initial unlocked 25% plus the amount vested so far. These will
                be unlocked and transferable. The remaining rewards will
                continue vesting into your wallet until the end of the lease
                period.
              </p>
            </div>
          </S.Container>
        ),
        position: 'bottom',
        styles: defaultStyles,
        disableActions: true,
      },
      {
        selector: '.noRewards',
        content: (
          <S.Container>
            <div>
              <h6>2. There are no rewards available</h6>
              <p>Have you selected the correct wallet?</p>
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
      {
        selector: '.howToStaking',
        content: (
          <S.Container>
            <div>
              <h6>Just follow the following steps</h6>
              <p>
                After completion, your coins will be secure and earning daily.
              </p>
            </div>
          </S.Container>
        ),
        position: 'bottom',
        styles: defaultStyles,
        disableActions: true,
      },
    ],
    [],
  );

  return (
    <TourProvider steps={steps} ContentComponent={ContentComponent}>
      {children}
    </TourProvider>
  );
}

const ContentComponent = (props: TourProps) => {
  const initialState =
    typeof window !== 'undefined' &&
    localStorage.getItem(DEFAULTINTRONAME) === 'true';

  const [state, setState] = useState(initialState);

  const { account, isInjected } = useWallet();
  const {
    hasRewards,
    claimed,
    isTransactionLoading,
    isTransactionSuccess,
    onOpenStaking,
  } = useRewards();

  const { steps, currentStep, setIsOpen, setCurrentStep, isOpen } = props;
  const { content } = steps[currentStep];

  const isLastStep = currentStep === steps.length - 1;

  const showNextButton = !isLastStep && currentStep === 0 && isInjected;
  const showSkipButton =
    isLastStep ||
    (currentStep === 1 && !isInjected) ||
    (!hasRewards && currentStep === 2);

  const showNextStakingButton = currentStep === 4;
  const userHasClaimedRewards = useMemo(
    () => hasRewards && Number(claimed) > 0 && !isTransactionLoading,
    [isTransactionLoading, hasRewards, claimed],
  );

  const handleChangeIntroView = useCallback(() => {
    localStorage.setItem(DEFAULTINTRONAME, state ? 'false' : 'true');
    setState(!state);
  }, [state]);

  useEffect(() => {
    if (account && currentStep === 1) {
      const timeout = setTimeout(() => setCurrentStep(hasRewards ? 2 : 3), 300);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [account, setCurrentStep, currentStep, hasRewards]);

  useEffect(() => {
    if (userHasClaimedRewards && currentStep === 2) {
      const timeout = setTimeout(() => setCurrentStep(3), 300);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [setCurrentStep, currentStep, userHasClaimedRewards]);

  useEffect(() => {
    if (isTransactionSuccess && currentStep === 2) {
      const timeout = setTimeout(() => setCurrentStep(4), 300);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [setCurrentStep, currentStep, isTransactionSuccess]);

  return (
    <S.Wrapper>
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
          {showNextStakingButton && (
            <S.Button
              type="button"
              onClick={() => {
                onOpenStaking();
                setCurrentStep(5);
              }}
            >
              Next
            </S.Button>
          )}
        </S.FlexActions>
      </>

      <style jsx global>
        {`
          body {
            overflow: ${isOpen ? 'hidden' : 'auto'};
          }
        `}
      </style>
    </S.Wrapper>
  );
};
