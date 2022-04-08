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
            <S.CrowndloanLogo>
              <CrowndloanLogo />
            </S.CrowndloanLogo>
            <S.Menu>
              <li>
                <a href="#overview">Overview</a>
              </li>
              <li>
                <a href="#rewards">Rewards</a>
              </li>
              <li>
                <a href="#timeline">Partners</a>
              </li>
            </S.Menu>
          </S.Box>
        </S.Aside>
        <PrimaryButton content="Contribute Now" href="#contribute" />
      </S.Container>
    </S.Wrapper>
  );
};
