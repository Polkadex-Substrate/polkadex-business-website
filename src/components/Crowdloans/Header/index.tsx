import { CrowndloanLogo, Icon, Logo } from 'components';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.AsideLeft>
          <Logo />
          <S.Menu>
            <li>
              <a href="#/">Products</a>
            </li>
            <li>
              <a href="#/">Resources</a>
            </li>
            <li>
              <a href="#/">Learn and Support</a>
            </li>
          </S.Menu>
        </S.AsideLeft>
        <S.AsideRight>
          <S.Social>
            <li>
              <a href="/#">
                <Icon name="Discord" />
              </a>
            </li>
            <li>
              <a href="/#">
                <Icon name="Reddit" />
              </a>
            </li>
            <li>
              <a href="/#">
                <Icon name="Youtube" />
              </a>
            </li>
          </S.Social>
          <S.Cta>
            <Icon name="Telegram" />
            <span>Join on Telegram</span>
          </S.Cta>
        </S.AsideRight>
      </S.Header>
      <S.Footer>
        <S.AsideLeft>
          <S.CrowndloanLogo>
            <CrowndloanLogo />
          </S.CrowndloanLogo>
          <S.Menu>
            <li>
              <a href="#/">Overview</a>
            </li>
            <li>
              <a href="#/">Rewards</a>
            </li>
            <li>
              <a href="#/">Timeline & Rules</a>
            </li>
            <li>
              <a href="#/">Launch Partners</a>
            </li>
            <li>
              <a href="#/">FAQ</a>
            </li>
          </S.Menu>
        </S.AsideLeft>
        <S.AsideRight>
          <S.Calculate>
            <a href="/#">
              <Icon background="none" name="Calculator" />
              Calculate Rewards
            </a>
          </S.Calculate>
        </S.AsideRight>
      </S.Footer>
    </S.Wrapper>
  );
};
