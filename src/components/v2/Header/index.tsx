import { Logo } from 'components';
import * as Icons from 'components/Icons';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import * as S from './styles';

export const Header = () => {
  const [state, setState] = useState(false);

  const handleClick = () => setState(!state);
  return (
    <S.Wrapper>
      <S.Container>
        <S.AsideLeft>
          <Logo size="Medium" />
          <ul>
            <li>
              <a href="/">Overview</a>
            </li>
            <li>
              <a href="/">Orderbook</a>
            </li>
            <li>
              <a href="/">Polkaido</a>
            </li>
            <li>
              <a href="/">THEA</a>
            </li>
            <li>
              <a href="/">Polkapool</a>
            </li>
            <li>
              <a href="/">Staking</a>
            </li>
          </ul>
        </S.AsideLeft>
        <S.AsideRight>
          <button type="button" onClick={handleClick}>
            All Polkadex
            <S.IconWrapper
              animate={{
                rotate: state ? '180deg' : '0deg',
              }}
            >
              <Icons.SingleArrowBottom />
            </S.IconWrapper>
          </button>
          <a href="/">Start Trading</a>
        </S.AsideRight>
      </S.Container>
      <AnimatePresence>
        {state && (
          <S.Menu
            initial={{ opacity: 0, y: '50px' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '10px' }}
          >
            <S.MenuWrapper>
              <S.MenuContainer>
                <small>Resources</small>
                <S.MenuFlex>
                  <ul>
                    <li>
                      <a href="/">Roadmap</a>
                    </li>
                    <li>
                      <a href="/">Ecosystem</a>
                    </li>
                    <li>
                      <a href="/">Wiki</a>
                    </li>
                    <li>
                      <a href="/">Blog</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/">Crowdloans</a>
                    </li>
                    <li>
                      <a href="/">Explorer</a>
                    </li>
                    <li>
                      <a href="/">Governance</a>
                    </li>
                    <li>
                      <a href="/">Migrate</a>
                    </li>
                  </ul>
                </S.MenuFlex>
              </S.MenuContainer>
              <S.MenuContainer>
                <small>Products</small>
                <ul>
                  <li>
                    <a href="/">Orderbook</a>
                  </li>
                  <li>
                    <a href="/">PolkaIDO</a>
                    <span>New</span>
                  </li>
                  <li>
                    <a href="/">THEA Bridge</a>
                    <span>New</span>
                  </li>
                  <li>
                    <a href="/">Staking</a>
                  </li>
                  <li>
                    <a href="/">Liquidity Mining</a>
                  </li>
                </ul>
              </S.MenuContainer>

              <S.MenuContainer>
                <small>About</small>
                <ul>
                  <li>
                    <a href="/">Vision</a>
                  </li>
                  <li>
                    <a href="/">Team</a>
                  </li>
                  <li>
                    <a href="/">Tokenomics</a>
                  </li>
                  <li>
                    <a href="/">Brand Assets</a>
                  </li>
                </ul>
              </S.MenuContainer>
              <S.MenuContainer>
                <small>Community</small>
                <ul>
                  <li>
                    <a href="/">Twitter</a>
                  </li>
                  <li>
                    <a href="/">Discord</a>
                  </li>
                  <li>
                    <a href="/">Telegram</a>
                  </li>
                  <li>
                    <a href="/">Reddit</a>
                  </li>
                  <li>
                    <a href="/">Github</a>
                  </li>
                </ul>
              </S.MenuContainer>
            </S.MenuWrapper>
            <S.MenuOverflow />
          </S.Menu>
        )}
      </AnimatePresence>
    </S.Wrapper>
  );
};
