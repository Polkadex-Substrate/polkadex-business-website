import { Logo } from 'components';
import { PrimaryButton } from 'components/Button';
import { StakingLogo } from 'components/Logo';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Aside>
          <Logo />
          <S.Box>
            <S.Logo href="/crowdloans" target="_blank">
              <StakingLogo />
            </S.Logo>
            <S.Menu>
              <li>
                <a href="#stats">Stats</a>
              </li>
              <li>
                <a href="#overview">Overview</a>
              </li>
              <li>
                <a href="#rewards">Rewards</a>
              </li>
              <li>
                <a href="#howtostake">How to Stake</a>
              </li>
            </S.Menu>
          </S.Box>
        </S.Aside>
        <PrimaryButton
          content="Stake Now"
          href="#overview"
          background="white"
          color="black"
        />
      </S.Container>
    </S.Wrapper>
  );
};
