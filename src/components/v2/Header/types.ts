export type Props = {
  logo?:
    | 'Polkaido'
    | 'Polkadex'
    | 'Crowdloans'
    | 'Thea'
    | 'Staking'
    | 'Careers';
  links?: string[];
  cta: Link;
};

type Link = {
  href: string;
  title: string;
};
