import { ReactNode } from 'react';

export type Props = {
  title: string;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
};
