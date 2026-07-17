import { SectionHead } from 'components';

import * as S from './styles';

type Platform = {
  name: string;
  handle: string;
  href: string;
  icon: React.ReactNode;
};

// Compact SVG platform marks — inlined so we don't add another dependency.
const XIcon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const DiscordIcon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const TelegramIcon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.51.26l.182-2.575 4.687-4.235c.203-.18-.044-.279-.315-.099L8.83 13.933l-2.5-.79c-.542-.169-.552-.549.114-.812l9.759-3.756c.453-.163.849.109.703.783z" />
  </svg>
);

const MediumIcon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const GithubIcon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const platforms: Platform[] = [
  {
    name: 'X',
    handle: '@polkadex',
    href: 'https://twitter.com/polkadex',
    icon: XIcon,
  },
  {
    name: 'Discord',
    handle: 'Join the community',
    href: 'https://discord.gg/Jh5nSd6gj',
    icon: DiscordIcon,
  },
  {
    name: 'Telegram',
    handle: '@Polkadex',
    href: 'https://t.me/Polkadex',
    icon: TelegramIcon,
  },
  {
    name: 'Medium',
    handle: 'Read our blog',
    href: 'https://polkadex.medium.com',
    icon: MediumIcon,
  },
  {
    name: 'GitHub',
    handle: 'Explore the code',
    href: 'https://github.com/Polkadex-Substrate',
    icon: GithubIcon,
  },
];

/**
 * Full-width social-follow strip. Replaces the newsletter form as the
 * primary community touchpoint — every platform is a real active channel,
 * so visitors get an immediate way to follow updates without waiting for
 * a newsletter that isn't being sent.
 */
export const SocialFollow = () => (
  <S.Wrapper id="community">
    <SectionHead
      eyebrow="Stay in the loop"
      title={
        <>
          Follow along <strong>as we ship</strong>
        </>
      }
      description="We post updates every week — testnet notes, roadmap shifts, and validator news. Pick your channel."
    />
    <S.Grid>
      {platforms.map((p) => (
        <S.Card
          key={p.name}
          href={p.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${p.name} — ${p.handle}`}
        >
          <S.IconWrap>{p.icon}</S.IconWrap>
          <span className="platform">{p.name}</span>
          <span className="handle">{p.handle}</span>
        </S.Card>
      ))}
    </S.Grid>
  </S.Wrapper>
);
