import { Logo } from 'components';
import { PrimaryButton } from 'components/Button';
import { CrowndloanLogo } from 'components/Logo';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Aside>
          <Logo />
          <S.Box>
            <S.CrowndloanLogo href="/crowdloans" target="_blank">
              <CrowndloanLogo />
            </S.CrowndloanLogo>
            <S.Menu>
              <li>
                <a href="#rewards">Rewards</a>
              </li>
              <li>
                <a href="#contribute">Partners</a>
              </li>
              <li>
                <a href="#about">Polkadex</a>
              </li>
              <li>
                <a href="/crowdloans" target="_blank">
                  More Info
                </a>
              </li>
            </S.Menu>
          </S.Box>
        </S.Aside>
        <PrimaryButton content="Contribute Now" href="#contribute" />
      </S.Container>
    </S.Wrapper>
  );
};
