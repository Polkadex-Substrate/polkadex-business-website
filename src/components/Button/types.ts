import { IIcons } from 'utils/types';

export type Props = {
  content: string;
  icon?: IIcons;
  background?: 'primary' | 'secondary' | 'none';
};
export type ButtonProps = {
  withOpacity?: boolean;
  href: string;
  hasIcon?: boolean;
} & Props;

export type ButtonFormProps = {
  action?: () => void;
  type?: 'button' | 'submit';
  disable?: boolean;
} & Props;
