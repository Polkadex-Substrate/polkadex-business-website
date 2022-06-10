/* eslint-disable jsx-a11y/anchor-is-valid */
import * as Icons from 'components/Icons';
import Link from 'next/link';

import * as S from './styles';

export const Footer = ({ isDark = false }) => {
  return (
    <S.Wrapper isDark={isDark}>
      <S.Header>
        <div>
          <span>Polkadex</span>
          <ul>
            <li>
              <Link href="/v2/#overview">Overview</Link>
            </li>
            <li>
              <Link href="/v2/#features">Features</Link>
            </li>
            <li>
              <Link href="/v2/#roadmap">Roadmap</Link>
            </li>
            <li>
              <Link href="/v2/#team">Team</Link>
            </li>
            <li>
              <Link href="/v2/#tokenomics">Tokenomics</Link>
            </li>
          </ul>
        </div>
        <div>
          <S.Container>
            <div>
              <span>Community</span>
              <ul>
                <li>
                  <a href="/" target="_blank">
                    Web3 Foundation
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    Polkadot
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <span>Products</span>
              <ul>
                <li>
                  <Link href="/v2/orderbook">Orderbook</Link>
                </li>
                <li>
                  <Link href="/v2/polkapool">Polkapool AMM</Link>
                </li>
                <li>
                  <Link href="/v2/polkaido">PolkaIDO</Link>
                </li>
                <li>
                  <Link href="/v2/thea">THEA Bridge</Link>
                </li>
              </ul>
            </div>
          </S.Container>
        </div>
        <div>
          <span>Recources</span>
          <ul>
            <li>
              <a href="/" target="_blank">
                Documentations
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                Github Repository
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                Substrate
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                Tutorials
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                System Status
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span>Compay</span>
          <ul>
            <li>
              <Link href="/v2/about">About Us</Link>
            </li>
            <li>
              <Link href="/v2/partners">Partners</Link>
            </li>
            <li>
              <Link href="/v2/contract">Contract</Link>
            </li>
            <li>
              <Link href="/v2/brandassets">Brand Assets</Link>
            </li>
            <li>
              <Link href="/v2/careers">
                <a>
                  Careers <small>We&apos;re higing</small>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </S.Header>
      <S.Footer>
        <S.Copyright>
          <ul>
            <li>Copyright © 2022 Polkadex, Inc.</li>
            <li>
              <a href="/" target="_blank">
                Terms
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                Privacy
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                Contributions
              </a>
            </li>
          </ul>
        </S.Copyright>
        <S.Social isDark={isDark}>
          <span>Join us on</span>
          <ul>
            <li>
              <a href="/" target="_blank">
                <Icons.Github />
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <Icons.Discord />
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <Icons.Twitter />
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <Icons.LinkedIn />
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <Icons.Medium />
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <Icons.Telegram />
              </a>
            </li>
          </ul>
        </S.Social>
      </S.Footer>
    </S.Wrapper>
  );
};
