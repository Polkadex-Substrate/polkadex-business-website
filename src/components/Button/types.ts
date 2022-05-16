import { AllHTMLAttributes } from 'react';
import { IIcons } from 'utils/types';

export type Props = {
  content: string;
  icon?: IIcons;
  background?: string;
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
