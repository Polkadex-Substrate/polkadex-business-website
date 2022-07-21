import { PrimaryButton } from 'components/Button';

import * as S from './styles';

export const Hero = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Aside>
          <h1>
            Stake your PDEX
            <strong>
              and earn <span>44.7% APY</span>
            </strong>
          </h1>
          <p>
            Make your PDEX work for you and enjoy passive income. Stake your
            PDEX to secure the Polkadex network and earn daily rewards!
          </p>
          <PrimaryButton content="Stake now" href="#howtostake" />
        </S.Aside>
      </S.Container>
    </S.Wrapper>
  );
};
