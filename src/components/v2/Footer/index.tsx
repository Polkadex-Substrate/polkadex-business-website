/* eslint-disable jsx-a11y/anchor-is-valid */
import * as Icons from 'components/Icons';
import Link from 'next/link';

import * as S from './styles';

/**
 * Slim footer — no duplication with the sticky header nav (community
 * feedback). Only genuinely useful links that don't belong in the main
 * navigation: explorer, docs, code, guides, media kit.
 *
 * Legal links intentionally absent for now: the old Terms/Privacy PDFs on
 * GitHub are outdated. Better to show nothing than inaccurate documents.
 * When updated docs are ready, host them at /terms and /privacy and add
 * the links back here.
 */
export const Footer = ({ isDark = false }) => {
  const currentYear = new Date().getFullYear();
  return (
    <S.Wrapper isDark={isDark}>
      <S.Header>
        <div>
          <span>Network</span>
          <ul>
            <li>
              <a
                href="https://explorer.polkadex.ee"
                target="_blank"
                rel="noreferrer noopener"
              >
                Mainnet Explorer
              </a>
            </li>
            <li>
              <Link href="/testnet-guide">Testnet Guide</Link>
            </li>
            <li>
              <a
                href="https://buypdex.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                Get PDEX
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span>Developers</span>
          <ul>
            <li>
              <a
                href="https://docs.polkadex.ee/"
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
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://hyperbridge.network"
                target="_blank"
                rel="noreferrer"
              >
                Hyperbridge
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span>Company</span>
          <ul>
            <li>
              <Link href="/mediaKit">Media Kit</Link>
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
      </S.Header>
      <S.Footer>
        <S.Copyright>
          <ul>
            <li>© {currentYear} Polkadex, Inc.</li>
          </ul>
        </S.Copyright>
        <S.Social isDark={isDark}>
          <span>Join us on</span>
          <ul>
            <li>
              <a
                href="https://discord.gg/Jh5nSd6gj"
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
