import {
  PopoverContentProps,
  StepType,
  TourProvider,
  useTour,
} from '@reactour/tour';
import Link from 'next/link';
import React, { ReactNode, useCallback, useMemo, useState } from 'react';

import { defaultStyles } from './config';
import { DEFAULTINTRONAME } from './contants';
import * as S from './styles';

const initialState = localStorage.getItem(DEFAULTINTRONAME);

export function Intro({ children }: { children: ReactNode }) {
  const hasExtension = false;
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
            <h6>1. Select a wallet</h6>
            <p>
              These are the available wallets. For now, you can only connect
              your wallet using Polkadot.js extension.
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
    [],
  );

  return (
    <TourProvider
      steps={steps}
      defaultOpen
      // defaultOpen={!initialState}
      showNavigation={false}
      showDots={false}
      showBadge
      ContentComponent={ContentComponent}
    >
      <Actions>{children}</Actions>
    </TourProvider>
  );
}

const ContentComponent = (props: PopoverContentProps) => {
  const [state, setState] = useState(!!initialState);
  const { steps, currentStep, setIsOpen, setCurrentStep } = props;
  const { content } = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  const handleChangeIntroView = useCallback(() => {
    localStorage.setItem(DEFAULTINTRONAME, state ? 'false' : 'true');
    setState(!state);
  }, [state]);

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
            {isLastStep ? 'Done' : 'Skip'}
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
        {!isLastStep && (
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

const Actions = ({ children }: { children: ReactNode }) => {
  const { setCurrentStep, currentStep, setIsOpen } = useTour();

  return <>{children}</>;
};
