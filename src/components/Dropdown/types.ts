import { ReactNode } from 'react';

type Props = {
  title: ReactNode | string;
  children: ReactNode;
  direction?: 'left' | 'right';
};

export type StyleProps = {
  isOpen?: boolean;
};

export default Props;
