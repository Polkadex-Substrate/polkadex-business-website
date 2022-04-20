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
            Support Polkadex, invest in the next generation of Web3 Exchanges,
            and be a part of the future of Defi and earn your PDEX rewards!
          </p>
          <PrimaryButton content="Stake Now" href="#stake" />
        </S.Aside>
      </S.Container>
    </S.Wrapper>
  );
};
