import { AllHTMLAttributes } from 'react';
import { IIcons } from 'utils/types';

export type Props = {
  content: string;
  icon?: IIcons;
  background?: 'primary' | 'secondary' | 'none';
};
export type ButtonProps = {
  withOpacity?: boolean;
  hasIcon?: boolean;
} & Props &
  Pick<AllHTMLAttributes<HTMLDivElement>, 'target' | 'disabled' | 'href'>;

export type ButtonFormProps = {
  action?: () => void;
  type?: 'button' | 'submit';
  disable?: boolean;
} & Props;
