import { Polkadex } from 'components';
import { Crowndloan } from 'components/Logo';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Aside>
          <Polkadex />
          <S.Box>
            <S.CrowndloanLogo href="/crowdloans" target="_blank">
              <Crowndloan />
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
      </S.Container>
    </S.Wrapper>
  );
};
