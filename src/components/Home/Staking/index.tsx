import * as Icons from 'components/Icons';
import Link from 'next/link';

import * as S from './styles';

export const Staking = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Hero>
          <Icons.StakingHero />
        </S.Hero>
        <S.Content>
          <div>
            <h2>
              <strong>Stake PDEX</strong> and eran up to{' '}
              <strong> 43.34% APY</strong>
            </h2>
            <p>
              It’s simple. Create your account and start earning passive income
              today.
            </p>
          </div>

          <Link href="/">Stake your PDEX now</Link>
        </S.Content>
      </S.Container>
      <S.HeroTopImage>
        <Icons.StakeLineTop />
      </S.HeroTopImage>
      <S.HeroBottomImage>
        <Icons.StakeLineBottom />
      </S.HeroBottomImage>
    </S.Wrapper>
  );
};
