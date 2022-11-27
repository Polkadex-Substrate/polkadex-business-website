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
              {links.map((item, i) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-to-interactive-role
                <li role="button" key={i} onClick={handleClick}>
                  {item} <Icons.ArrowSingleBottom />
                </li>
              ))}
            </ul>
          </S.AsideLeft>
          <S.AsideRight>
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
                  <small>Products</small>
                  <ul>
                    <li>
                      <Link href="/orderbook">Orderbook</Link>
                    </li>
                    <li>
                      <Link href="/staking">Staking</Link>
                    </li>
                    <li>
                      <Link href="/">PolkaIDO</Link>
                      <span>Soon</span>
                    </li>
                    <li>
                      <Link href="/">PolkaPool</Link>
                      <span>Soon</span>
                    </li>
                    <li>
                      <Link href="/">Open Beta</Link>
                    </li>
                    <li>
                      <Link href="/">Parachain</Link>
                      <span>Soon</span>
                    </li>
                  </ul>
                </S.MenuContainer>
                <S.MenuContainer>
                  <small>Resources</small>
                  <S.MenuFlex>
                    <ul>
                      <li>
                        <a href="/">Mainnet Explorer</a>
                      </li>
                      <li>
                        <a href="/">Subscan</a>
                      </li>
                      <li>
                        <a href="/">Docs</a>
                      </li>
                      <li>
                        <a href="/">Github Repository</a>
                      </li>
                      <li>
                        <a href="/">Brand Assets</a>
                      </li>
                      <li>
                        <a href="/">Substrate</a>
                      </li>
                      <li>
                        <a href="/">Ambassadors Hub</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="/">Explorer</a>
                      </li>
                    </ul>
                  </S.MenuFlex>
                </S.MenuContainer>
                <S.MenuContainer>
                  <small>About</small>
                  <ul>
                    <li>
                      <Link href="/v2/#vision">Token Economics</Link>
                    </li>
                    <li>
                      <a href="/v2/#team">Roadmap</a>
                    </li>
                    <li>
                      <a href="/v2/#tokenomicss">Team</a>
                    </li>
                  </ul>
                </S.MenuContainer>
                <S.MenuContainer>
                  <small>Community</small>
                  <ul>
                    <li>
                      <a href="/">Medium</a>
                    </li>
                    <li>
                      <a href="/">Twitter</a>
                    </li>
                    <li>
                      <a href="/">Telegram</a>
                    </li>
                    <li>
                      <a href="/">Discord</a>
                    </li>
                    <li>
                      <a href="/">Reddit</a>
                    </li>
                    <li>
                      <a href="/">LinkedIn</a>
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
