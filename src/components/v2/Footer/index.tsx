/* eslint-disable jsx-a11y/anchor-is-valid */
import * as Icons from 'components/Icons';
import { ThemeSwitcher } from 'components/ThemeSwitcher';
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
              <a
                href="https://docs.polkadex.trade/"
                target="_blank"
                rel="noreferrer"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="https://docs.polkadex.trade/whatispolkadex"
                target="_blank"
                rel="noreferrer"
              >
                Features
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="https://docs.polkadex.trade/polkadexTeam"
                target="_blank"
                rel="noreferrer"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="https://docs.polkadex.trade/tokenEconomics"
                target="_blank"
                rel="noreferrer"
              >
                Tokenomics
              </a>
            </li>
          </ul>
        </div>
        <div>
          <S.Container>
            <div>
              <span>Community</span>
              <ul>
                <li>
                  <a
                    href="https://web3.foundation/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Web3 Foundation
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.polkadot.network/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Polkadot
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <span>Products</span>
              <ul>
                <li>
                  <Link href="/orderbook">Orderbook</Link>
                </li>
                <li>
                  <Link href="#">Polkapool AMM</Link>
                </li>
                <li>
                  <a
                    href="https://docs.polkadex.trade/IDOPlatform"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PolkaIDO
                  </a>
                </li>
                <li>
                  <a
                    href="https://polkadex.medium.com/thea-a-better-decentralized-token-bridge-ac2e362a2a2b"
                    target="_blank"
                    rel="noreferrer"
                  >
                    THEA Bridge
                  </a>
                </li>
              </ul>
            </div>
          </S.Container>
        </div>
        <div>
          <span>Recources</span>
          <ul>
            <li>
              <a
                href="https://docs.polkadex.trade/"
                target="_blank"
                rel="noreferrer"
              >
                Docs
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Polkadex-Substrate"
                target="_blank"
                rel="noreferrer"
              >
                Github Repository
              </a>
            </li>
            <li>
              <a
                href="https://www.substrate.io/"
                target="_blank"
                rel="noreferrer"
              >
                Substrate
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UC6fXRDT4lLKlXG3gP0PP06Q"
                target="_blank"
                rel="noreferrer"
              >
                Tutorials
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span>Company</span>
          <ul>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Partners</Link>
            </li>
            <li>
              <Link href="#">Contract</Link>
            </li>
            <li>
              <Link href="brandAssets">Brand Assets</Link>
            </li>
            <li>
              <Link href="/v2/careers">Careers</Link>
            </li>
          </ul>
        </div>
      </S.Header>
      <S.Footer>
        <S.Copyright>
          <ul>
            <li>
              <ThemeSwitcher />
            </li>
            <li>Copyright © 2022 Polkadex, Inc.</li>
            <li>
              <Link
                href="https://github.com/Polkadex-Substrate/Docs/blob/master/Polkadex_Terms_of_Use.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Terms
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/Polkadex-Substrate/Docs/blob/master/Polkadex_Privacy_Policy.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Privacy
              </a>
            </li>
          </ul>
        </S.Copyright>
        <S.Social isDark={isDark}>
          <span>Join us on</span>
          <ul>
            <li>
              <a
                href="https://discord.com/invite/Uvua83QAzk"
                target="_blank"
                rel="noreferrer"
              >
                <Icons.Discord />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/polkadex"
                target="_blank"
                rel="noreferrer"
              >
                <Icons.Twitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/69690544"
                target="_blank"
                rel="noreferrer"
              >
                <Icons.LinkedIn />
              </a>
            </li>
            <li>
              <a
                href="https://polkadex.medium.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Icons.Medium />
              </a>
            </li>
            <li>
              <a href="https://t.me/Polkadex" target="_blank" rel="noreferrer">
                <Icons.Telegram />
              </a>
            </li>
            <li>
              <a
                href="https://www.reddit.com/r/polkadex"
                target="_blank"
                rel="noreferrer"
              >
                <Icons.Reddit />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UC6fXRDT4lLKlXG3gP0PP06Q"
                target="_blank"
                rel="noreferrer"
              >
                <Icons.Youtube />
              </a>
            </li>
          </ul>
        </S.Social>
      </S.Footer>
    </S.Wrapper>
  );
};
