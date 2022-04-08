import { ReactNode } from 'react';

export type Props = {
  isVisible: boolean;
  onClose: () => void | undefined;
  children: ReactNode;
  isBottomPosition?: boolean;
  isRightPosition?: boolean;
  isMessage?: boolean;
  size?:
    | 'small'
    | 'extraSmall'
    | 'medium'
    | 'extraMedium'
    | 'large'
    | 'extraLarge'
    | 'giant'
    | 'extraGiant'
    | 'full'
    | 'fitContent';
};
