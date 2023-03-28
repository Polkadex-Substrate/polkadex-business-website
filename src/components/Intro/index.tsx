import {
  PopoverContentProps,
  StepType,
  TourProvider,
  useTour,
} from '@reactour/tour';
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
  const { isInjected } = useWallet();
  const steps: StepType[] = useMemo(
    () => [
      {
        selector: '.start',
        content: (
          <S.Container>
            <h6>Verify and Withdraw Your Reward</h6>
            <p>
              Discover how to verify and withdraw your rewards with our
              easy-to-follow guide. Learn the steps to ensure you receive your
              well-deserved rewards.
            </p>
          </S.Container>
        ),
        position: 'center',
        styles: defaultStyles,
      },
      {
        selector: '.selectWallet',
        content: (
          <S.Container>
            <h6>
              {isInjected ? '1. Select a wallet' : 'Oops, no accounts detected'}
            </h6>
            <p>
              {isInjected ? (
                ' These are the available wallets. For now, you can only connect your wallet using Polkadot.js extension.'
              ) : (
                <>
                  It seems like you either don&rsquo;t have an account on
                  Polkadot.js or don&rsquo;t have Polkadot.js installed. Create
                  one using the{' '}
                  <Link href="https://polkadot.js.org/extension/">
                    Polkadot.js extension
                  </Link>
                  .
                </>
              )}
            </p>
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
            <h6>2. Initiate Your Claim to Check for Available Rewards</h6>
            <p>
              Click on the ‘Initiate Claim’ button to see if your wallet has any
              available rewards. Don’t miss out on the opportunity to claim your
              well-deserved rewards. .
            </p>
          </S.Container>
        ),
        position: 'bottom',
        styles: defaultStyles,
        disableActions: true,
      },
      {
        selector: '.availableRewards',
        content: (
          <S.Container>
            <h6>3. Your Available Rewards from This Wallet</h6>
            <p>
              Check out the rewards that are currently available to you from
              this wallet. Don’t miss out on the opportunity to claim your
              well-deserved rewards.
            </p>
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
            <h6>Latest Rewards Distributed</h6>
            <p>
              Check out the latest rewards that have been distributed. See if
              you’re eligible to claim any of these rewards and don’t miss out
              on the opportunity to receive your well-deserved rewards.
            </p>
          </S.Container>
        ),
        position: 'bottom',
        styles: defaultStyles,
        disableActions: true,
      },
    ],
    [isInjected],
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
  const [state, setState] = useState(!!initialState);
  const { steps, currentStep, setIsOpen, setCurrentStep } = props;
  const { content } = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  const { account, isInjected } = useWallet();
  const { doesAccountHaveRewards } = useRewards();

  const handleChangeIntroView = useCallback(() => {
    localStorage.setItem(DEFAULTINTRONAME, state ? 'false' : 'true');
    setState(!state);
  }, [state]);

  useEffect(() => {
    if (account) setInterval(() => setCurrentStep(2), 300);
  }, [account, setCurrentStep]);

  useEffect(() => {
    if (doesAccountHaveRewards) setInterval(() => setCurrentStep(3), 300);
  }, [doesAccountHaveRewards, setCurrentStep]);

  return (
    <S.Wrapper>
      <>
        {typeof content === 'function'
          ? content({ ...props })
          : (content as ReactNode)}
      </>
      <S.FlexActions>
        <S.Actions>
          <button type="button" onClick={() => setIsOpen(false)}>
            {isLastStep || (currentStep === 1 && !isInjected) ? 'Done' : 'Skip'}
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
        {!isLastStep && !(currentStep === 1 && !isInjected) && (
          <S.Button
            type="button"
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Next
          </S.Button>
        )}
      </S.FlexActions>
    </S.Wrapper>
  );
};
