import { AllHTMLAttributes } from 'react';
import { IColors, IIcons } from 'utils/types';

export type Props = {
  content: string;
  icon?: IIcons;
  background?: IColors;
  color?: IColors;
};

export type ButtonProps = {
  withOpacity?: boolean;
  hasIcon?: boolean;
  onClick?: (e?: any) => void | undefined;
} & Props &
  Pick<AllHTMLAttributes<HTMLDivElement>, 'target' | 'disabled' | 'href'>;

export type ButtonFormProps = {
  action?: () => void;
  type?: 'button' | 'submit';
  disable?: boolean;
} & Props;
