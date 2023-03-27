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
  const steps: StepType[] = useMemo(
    () => [
      {
        selector: '.selectWallet',
        content: (
          <div className={S.Wrapper}>
            <h6>Connect your Polkadex wallet</h6>
            <p>
              In order to use Thea bridge, you&apos;ll need to connect a wallet.
              If you don&apos;t have one, you can create one using the{' '}
              <Link href="https://polkadot.js.org/extension/">
                Polkadot.js extension
              </Link>
              .
            </p>
          </div>
        ),
        position: 'bottom',
        styles: defaultStyles,
        disableActions: true,
      },
      {
        selector: '.nativeAvailableWallets',
        content: (
          <div className={S.Wrapper}>
            <h6>1. Select a wallet</h6>
            <p>
              These are the available wallets. For now, you can only connect
              your wallet using Polkadot.js extension.
            </p>
          </div>
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
      showNavigation={false}
      showDots={false}
      showBadge={false}
      ContentComponent={ContentComponent}
    >
      <Actions>{children}</Actions>
    </TourProvider>
  );
}

const ContentComponent = (props: PopoverContentProps) => {
  const [state, setState] = useState(!!initialState);
  const { steps, currentStep } = props;
  const { content } = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  const handleChangeIntroView = useCallback(() => {
    localStorage.setItem(DEFAULTINTRONAME, state ? 'false' : 'true');
    setState(!state);
  }, [state]);

  return (
    <div className={styles.wrapper}>
      <>
        {typeof content === 'function'
          ? content({ ...props })
          : (content as ReactNode)}
      </>
      <div className={styles.actions}>
        <div>
          <Button
            theme={isLastStep ? 'solid' : 'borderless'}
            onClick={() => props.setIsOpen(false)}
            type={isLastStep ? 'primary' : 'tertiary'}
          >
            {isLastStep ? 'Done' : 'Skip'}
          </Button>
        </div>
        <div className={styles.switch}>
          <Checkbox
            checked={state}
            aria-label="Close tour"
            onChange={handleChangeIntroView}
          >
            Don't show again
          </Checkbox>
        </div>
      </div>
    </div>
  );
};

const Actions = ({ children }: { children: ReactNode }) => {
  const { setCurrentStep, currentStep, setIsOpen } = useTour();

  return <>{children}</>;
};
