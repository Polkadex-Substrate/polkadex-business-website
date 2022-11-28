/* eslint-disable jsx-a11y/anchor-is-valid */
import * as Icons from 'components/Icons';
import * as Logo from 'components/Logo';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import * as S from './styles';
import * as T from './types';

export const Header = ({ links = [], cta }: T.Props) => {
  const [state, setState] = useState(false);

  const handleClick = () => setState(!state);
  return (
    <S.Main>
      <S.Wrapper>
        <S.Container>
          <S.AsideLeft>
            <Logo.Polkadex />
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
            <a href={cta.href} target="_blank" rel="noreferrer">
              {cta.title}
            </a>
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
                    <S.Li>
                      <Link href="/orderbook">Orderbook</Link>
                    </S.Li>
                    <S.Li>
                      <Link href="/staking">Staking</Link>
                    </S.Li>
                    <S.Li isDisabled>
                      <Link href="#">PolkaIDO</Link>
                      <span>Soon</span>
                    </S.Li>
                    <S.Li isDisabled>
                      <Link href="#">PolkaPool</Link>
                      <span>Soon</span>
                    </S.Li>
                    <S.Li>
                      <a
                        href="https://github.com/Polkadex-Substrate/Polkadex-Open-Beta"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open Beta
                      </a>
                    </S.Li>
                    <S.Li>
                      <a
                        href="https://polkadex.medium.com/polkadex-has-secured-a-parachain-slot-a04513f2c913"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Parachain
                      </a>
                    </S.Li>
                  </ul>
                </S.MenuContainer>
                <S.MenuContainer>
                  <small>Resources</small>
                  <S.MenuFlex>
                    <ul>
                      <S.Li>
                        <a
                          href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fmainnet.polkadex.trade#/explorer"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Mainnet Explorer
                        </a>
                      </S.Li>
                      <S.Li>
                        <a
                          href="https://polkadex.subscan.io/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Subscan
                        </a>
                      </S.Li>
                      <S.Li>
                        <a
                          href="https://docs.polkadex.trade/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Docs
                        </a>
                      </S.Li>
                      <S.Li>
                        <a
                          href="https://github.com/Polkadex-Substrate"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github Repository
                        </a>
                      </S.Li>
                      <S.Li>
                        <Link href="/brandAssets">Brand Assets</Link>
                      </S.Li>
                      <S.Li>
                        <a
                          href="https://www.substrate.io/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Substrate
                        </a>
                      </S.Li>
                      <S.Li>
                        <a
                          href="https://github.com/Polkadex-Substrate/Docs/blob/master/POLKADEX_AMBASSADOR_PROGRAM_T%26C.pdf"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ambassadors Hub
                        </a>
                      </S.Li>
                    </ul>
                  </S.MenuFlex>
                </S.MenuContainer>
                <S.MenuContainer>
                  <small>About</small>
                  <ul>
                    <S.Li>
                      <a
                        href="https://docs.polkadex.trade/tokenEconomics"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Token Economics
                      </a>
                    </S.Li>
                    <S.Li isDisabled>
                      <a href="#">Roadmap</a>
                      <span>Soon</span>
                    </S.Li>
                    <S.Li>
                      <a
                        href="https://docs.polkadex.trade/polkadexTeam"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Team
                      </a>
                    </S.Li>
                  </ul>
                </S.MenuContainer>
                <S.MenuContainer>
                  <small>Community</small>
                  <ul>
                    <S.Li>
                      <a href="https://polkadex.medium.com/">Medium</a>
                    </S.Li>
                    <S.Li>
                      <a
                        href="https://twitter.com/polkadex"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Twitter
                      </a>
                    </S.Li>
                    <S.Li>
                      <a
                        href="https://t.me/Polkadex"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Telegram
                      </a>
                    </S.Li>
                    <S.Li>
                      <a
                        href="https://discord.com/invite/Uvua83QAzk"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Discord
                      </a>
                    </S.Li>
                    <S.Li>
                      <a
                        href="https://www.reddit.com/r/polkadex"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Reddit
                      </a>
                    </S.Li>
                    <S.Li>
                      <a
                        href="https://www.linkedin.com/company/69690544"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                    </S.Li>
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
