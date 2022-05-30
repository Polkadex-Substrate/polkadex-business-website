import * as Icons from 'components/Icons';
import Link from 'next/link';

import * as S from './styles';

export const Footer = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <div>
          <span>Polkadex</span>
          <ul>
            <li>
              <Link href="/">Overview</Link>
            </li>
            <li>
              <Link href="/">Features</Link>
            </li>
            <li>
              <Link href="/">Roadmap</Link>
            </li>
            <li>
              <Link href="/">Team</Link>
            </li>
            <li>
              <Link href="/">Tokenomics</Link>
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
                  <Link href="/">Orderbook</Link>
                </li>
                <li>
                  <Link href="/">Polkapool AMM</Link>
                </li>
                <li>
                  <Link href="/">Polkaido</Link>
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
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Partners</Link>
            </li>
            <li>
              <Link href="/">Contract</Link>
            </li>
            <li>
              <Link href="/">Brand Assets</Link>
            </li>
            <li>
              <a href="/">
                Careers <small>We&apos;re higing</small>
              </a>
            </li>
          </ul>
        </div>
      </S.Header>
      <S.Footer>
        <S.Copyright>
          <ul>
            <li>Copyright © 2021 Polkadex, Inc.</li>
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
        <S.Social>
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
