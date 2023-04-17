import { PopoverContentProps, StepType, TourProvider } from '@reactour/tour';
import { useRewards } from 'hooks/useRewards';
import { useWallet } from 'hooks/useWallet';
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
  const steps: StepType[] = useMemo(
    () => [
      {
        selector: '.start',
        content: (
          <S.Container>
            <img src="/img/tutorialHero.svg" alt="Teacher illutration" />
            <div>
              <h6>Step-by-step: Verify and withdraw your reward</h6>
              <p>
                Discover how to verify and withdraw your rewards with our
                easy-to-follow guide. Learn the steps to ensure you receive your
                well-deserved rewards.
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
                These are the available wallets. For now, you can only connect
                your wallet using Polkadot.js extension.
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
              <h6>2. Initiate Your Claim to Check for Available Rewards</h6>
              <p>
                Click on the ‘Initiate Claim’ button to see if your wallet has
                any available rewards. Don’t miss out on the opportunity to
                claim your well-deserved rewards. .
              </p>
            </div>
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
            <div>
              <h6>3. Your Available Rewards from This Wallet</h6>
              <p>
                Check out the rewards that are currently available to you from
                this wallet. Don’t miss out on the opportunity to claim your
                well-deserved rewards.
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
              <h6>4. Claim your rewards now!</h6>
              <p>
                Don’t miss out on the opportunity to claim your rewards. Click
                on the ‘Initiate Claim’.
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
              <h6>Latest Rewards Distributed</h6>
              <p>
                Check out the latest rewards that have been distributed. See if
                you’re eligible to claim any of these rewards and don’t miss out
                on the opportunity to receive your well-deserved rewards.
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
    if (account && currentStep === 1) setInterval(() => setCurrentStep(2), 300);
  }, [account, setCurrentStep, currentStep]);

  useEffect(() => {
    if (doesAccountHaveRewards && currentStep === 2)
      setInterval(() => setCurrentStep(3), 300);
  }, [doesAccountHaveRewards, setCurrentStep, currentStep]);

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
