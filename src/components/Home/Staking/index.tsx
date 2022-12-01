import * as Icons from 'components/Icons';
import { useAnimation } from 'hooks';
import Link from 'next/link';

import * as S from './styles';

export const Staking = ({ apy = '' }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <AsideLeft />
        <AsideRight apy={apy} />
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

const AsideLeft = () => {
  const animationProps = useAnimation({ duration: 0.5 });

  return (
    <S.Hero {...animationProps}>
      <Icons.StakingHero />
    </S.Hero>
  );
};

const AsideRight = ({ apy }) => {
  const animationProps = useAnimation({ duration: 1.5 });

  return (
    <S.Content {...animationProps}>
      <div>
        <h2>
          <strong>Stake PDEX</strong> and earn up to <strong> {apy} APY</strong>
        </h2>
        <p>
          It’s simple. Create your account and start earning passive income
          today.
        </p>
      </div>

      <Link href="https://polkadex.trade/staking#howtostake">
        Stake your PDEX now
      </Link>
    </S.Content>
  );
};
