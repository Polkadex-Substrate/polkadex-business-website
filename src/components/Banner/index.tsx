import Link from 'next/link';

import * as S from './styles';
import { Props } from './types';

export const Banner = ({ title, description, buttonTitle, href }: Props) => (
  <S.Wrapper>
    <S.Container>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={href} target="_blank" rel="noreferrer">
          {buttonTitle}
        </Link>
      </div>
      <div />
    </S.Container>
    <img alt="polkadex crowdloan city" src="/img/heroMockup1.png" />
  </S.Wrapper>
);
