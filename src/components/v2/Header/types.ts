export type Props = {
  logo?:
    | 'Polkaido'
    | 'Polkadex'
    | 'Crowdloans'
    | 'Thea'
    | 'Staking'
    | 'Careers';
  links?: Link[];
  cta: Link;
};

type Link = {
  href: string;
  title: string;
};
