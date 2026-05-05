import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Colors, Sizes } from 'utils/types';

export type Props = {
  children?: ReactNode;
  background?: Colors;
  color?: Colors;
  isFull?: boolean;
  size?: Sizes;
  hoverColor?: Colors;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
