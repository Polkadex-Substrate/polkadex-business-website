import { Logo } from 'components';
import { PrimaryButton } from 'components/Button';
import { CareersLogo } from 'components/Logo';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Aside>
          <Logo />
          <S.Flex>
            <S.Box>
              <S.Logo>
                <CareersLogo />
              </S.Logo>
              <S.Menu>
                <li>
                  <a href="#overview">Overview</a>
                </li>
                <li>
                  <a href="#vision">Vision</a>
                </li>
              </S.Menu>
            </S.Box>
            <PrimaryButton content="Open Jobs" href="#overview" />
          </S.Flex>
        </S.Aside>
      </S.Container>
    </S.Wrapper>
  );
};
