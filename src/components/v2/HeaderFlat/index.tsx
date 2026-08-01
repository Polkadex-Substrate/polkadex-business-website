/* eslint-disable jsx-a11y/anchor-is-valid */
import * as Logo from 'components/Logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { track } from 'utils/analytics';

import * as S from './styles';

export type FlatLink = {
  title: string;
  href: string;
  /** true if external (opens new tab) */
  external?: boolean;
};

export type HeaderFlatProps = {
  links?: FlatLink[];
  cta?: { title: string; href: string; external?: boolean };
};

// Section ids observed for the active-nav highlight (homepage only).
const SECTION_IDS = ['about', 'tokenomics', 'orderbook', 'roadmap', 'staking'];

/**
 * Flat header — no dropdowns, direct links, single primary CTA.
 *
 * Behavior:
 * - Hides when scrolling down, reveals when scrolling up ("smart header"),
 *   so reading space stays clean but the CTA is one flick away.
 * - Gains a blurred background + bottom border once scrolled past the top.
 * - Highlights the nav link of the section currently in view.
 */
export const HeaderFlat = ({
  links = defaultLinks,
  cta = defaultCta,
}: HeaderFlatProps) => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const lastY = useRef(0);
  const router = useRouter();

  // On the testnet guide itself the default CTA would link to the page the
  // visitor is already on — send them onward to the app instead.
  const resolvedCta =
    cta === defaultCta && router.pathname === '/testnet-guide'
      ? {
          title: 'Open the Testnet App',
          href: 'https://orderbook-app-test.polkadex.ee/',
          external: true,
        }
      : cta;

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Smart hide/reveal + scrolled state
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Only hide after scrolling past the header itself; always show near top.
      if (y < 120) {
        setHidden(false);
      } else {
        const goingDown = y > lastY.current;
        // Small threshold so tiny scroll jitters don't toggle it.
        if (Math.abs(y - lastY.current) > 6) setHidden(goingDown);
      }
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section highlight
  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter(Boolean) as HTMLElement[];
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting section.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <S.Main data-hidden={hidden && !open} data-scrolled={scrolled}>
      <S.Container>
        <S.AsideLeft>
          <Logo.Polkadex />
          <nav>
            {links.map((l) => {
              const anchorId = l.href.split('#')[1];
              const isActive = !!anchorId && anchorId === activeId;
              return (
                <Link
                  key={l.title}
                  href={l.href}
                  className={isActive ? 'active' : undefined}
                  target={l.external ? '_blank' : undefined}
                  rel={l.external ? 'noreferrer noopener' : undefined}
                >
                  {l.title}
                </Link>
              );
            })}
          </nav>
        </S.AsideLeft>
        <S.AsideRight>
          <Link
            href={resolvedCta.href}
            onClick={() => track('CTA: Try Testnet', { placement: 'header' })}
            target={resolvedCta.external ? '_blank' : undefined}
            rel={resolvedCta.external ? 'noreferrer noopener' : undefined}
          >
            {resolvedCta.title}
          </Link>
          {/* Hamburger renders after the CTA so it hugs the right edge on
              mobile instead of floating mid-bar. */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {/* Hamburger / close icon — inline SVG, no dependency */}
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              {open ? (
                <path
                  d="M6 6 L18 18 M18 6 L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7 h16 M4 12 h16 M4 17 h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </S.AsideRight>
      </S.Container>
      {/* Mobile drawer — fixed overlay below the header bar, so it can't be
          clipped by the sticky header or hidden by transforms. */}
      <S.MobileMenu id="mobile-nav" data-open={open}>
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
        <Link
          href={resolvedCta.href}
          onClick={() => setOpen(false)}
          className="cta"
          target={resolvedCta.external ? '_blank' : undefined}
          rel={resolvedCta.external ? 'noreferrer noopener' : undefined}
        >
          {resolvedCta.title}
        </Link>
      </S.MobileMenu>
    </S.Main>
  );
};

// Order mirrors the section order on the homepage.
const defaultLinks: FlatLink[] = [
  { title: 'About', href: '/#about' },
  { title: 'Tokenomics', href: '/#tokenomics' },
  { title: 'Orderbook', href: '/#orderbook' },
  { title: 'Roadmap', href: '/#roadmap' },
  { title: 'Staking', href: '/#staking' },
];

// Testnet-phase CTA: one clear action, routed through the onboarding guide
// rather than straight to the app (users need wallet + faucet + cross-chain
// setup first). At mainnet launch, swap back to:
//   { title: 'Get PDEX', href: 'https://buypdex.com', external: true }
const defaultCta: HeaderFlatProps['cta'] = {
  title: 'Try the Testnet',
  href: '/testnet-guide',
};
