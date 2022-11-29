import { ReactNode } from 'react';

export type Props = {
  image: string;
  alt: string;
  title: string;
  description?: string;
  children?: ReactNode;
};
