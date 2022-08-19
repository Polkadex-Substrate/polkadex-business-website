import { Polkadex } from 'components';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Aside>
          <Polkadex />
          <S.Box>
            <S.CrowndloanLogo
              href="/https://polkadex.medium.com/polkadex-has-secured-a-parachain-slot-a04513f2c913  "
              target="_blank"
            />
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
                <a
                  href="/https://polkadex.medium.com/polkadex-has-secured-a-parachain-slot-a04513f2c913  "
                  target="_blank"
                >
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
