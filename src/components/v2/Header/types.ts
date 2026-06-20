import { HTMLAttributeAnchorTarget } from 'react';

export type Props = {
  logo?:
    | 'Polkaido'
    | 'Polkadex'
    | 'Crowdloans'
    | 'Hyperbridge'
    | 'Staking'
    | 'Careers';
  links?: string[];
  cta: Link;
  target?: HTMLAttributeAnchorTarget;
};

type Link = {
  href: string;
  title: string;
};
