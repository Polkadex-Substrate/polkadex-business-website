/* eslint-disable jsx-a11y/anchor-is-valid */
import * as Logo from 'components/Logo';
import Link from 'next/link';
import { useState } from 'react';

import * as S from './styles';

export type FlatLink = {
  title: string;
  href: string;
  /** true for anchor links to homepage sections, e.g. "#tokenomicsHighlight" */
  isHomeAnchor?: boolean;
  /** true if external (opens new tab) */
  external?: boolean;
};

export type HeaderFlatProps = {
  links?: FlatLink[];
  cta?: { title: string; href: string; external?: boolean };
};

/**
 * Flat header — no dropdowns, direct links, single primary CTA.
 * Replacement for the mega-menu `<Header />` for landing-page use.
 */
export const HeaderFlat = ({
  links = defaultLinks,
  cta = defaultCta,
}: HeaderFlatProps) => {
  const [open, setOpen] = useState(false);

  return (
    <S.Main>
      <S.Container>
        <S.AsideLeft>
          <Logo.Polkadex />
          <nav>
            {links.map((l) => (
              <Link
                key={l.title}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noreferrer noopener' : undefined}
              >
                {l.title}
              </Link>
            ))}
          </nav>
        </S.AsideLeft>
        <S.AsideRight>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? 'Close' : 'Menu'}
          </button>
          <Link
            href={cta.href}
            target={cta.external ? '_blank' : undefined}
            rel={cta.external ? 'noreferrer noopener' : undefined}
          >
            {cta.title}
          </Link>
        </S.AsideRight>
      </S.Container>
      {open && (
        <S.MobileMenu>
          {links.map((l) => (
            <Link
              key={l.title}
              href={l.href}
              onClick={() => setOpen(false)}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noreferrer noopener' : undefined}
            >
              {l.title}
            </Link>
          ))}
        </S.MobileMenu>
      )}
    </S.Main>
  );
};

// Homepage anchor links — from any page, click routes to `/` and scrolls
// to the section. Landing-page-optimized: users stay on the pitch flow
// instead of jumping to detail pages. Full detail pages remain reachable
// via the footer for SEO and deep-linking.
const defaultLinks: FlatLink[] = [
  { title: 'About', href: '/#hero' },
  { title: 'Orderbook', href: '/#orderbook' },
  { title: 'Tokenomics', href: '/#tokenomics' },
  { title: 'Roadmap', href: '/#roadmap' },
  { title: 'Staking', href: '/#staking' },
];

const defaultCta: HeaderFlatProps['cta'] = {
  title: 'Get PDEX',
  href: 'https://buypdex.com',
  external: true,
};
