import * as Icons from 'components/Icons';
import * as Logo from 'components/Logo';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import * as S from './styles';
import * as T from './types';

export const Header = ({ logo = undefined, links = [], cta }: T.Props) => {
  const [state, setState] = useState(false);

  const handleClick = () => setState(!state);
  const LogoComponent = Logo[logo];
  return (
    <S.Main>
      <S.Wrapper>
        <S.Container>
          <S.AsideLeft>
            <Logo.Polkadex />
            {logo?.length && <LogoComponent size="Medium" />}
            <ul>
              {links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
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
            <a href={cta.href}>{cta.title}</a>
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
                      <Link href="/v2/orderbook">Orderbook</Link>
                    </li>
                    <li>
                      <Link href="/v2/polkaido">PolkaIDO</Link>
                      <span>New</span>
                    </li>
                    <li>
                      <Link href="/v2/thea">THEA Bridge</Link>
                      <span>New</span>
                    </li>
                    <li>
                      <a href="/v2/staking">Staking</a>
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
                    <li>
                      <Link href="/v2/careers">Careers</Link>
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
              <S.MenuOverflow onClick={handleClick} />
            </S.Menu>
          )}
        </AnimatePresence>
      </S.Wrapper>
    </S.Main>
  );
};
