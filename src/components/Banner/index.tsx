import Link from 'next/link';

import * as S from './styles';
import { Props } from './types';

export const Banner = ({ title, description, buttonTitle, href }: Props) => (
  <S.Wrapper>
    <S.Container>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={href}>{buttonTitle}</Link>
      </div>
      <div />
    </S.Container>
    <img alt="polkadex crowdloan city" src="/img/crowdloanHeroBanner.svg" />
  </S.Wrapper>
);
