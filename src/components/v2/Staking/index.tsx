import Link from 'next/link';

import * as S from './styles';

export const Staking = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Hero>
          <img src="/img/stakingHero.svg" alt="" />
        </S.Hero>
        <S.Content>
          <span>Polkadex Staking</span>
          <h2>
            Stake $PDEX and EARN up to <strong> 43.34% APY</strong>
          </h2>
          <p>
            It’s simple. Create your account and start earning passive income
            today.
          </p>
          <Link href="/">Stake your PDEX now</Link>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};
