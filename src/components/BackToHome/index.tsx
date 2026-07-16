import Link from 'next/link';

import * as S from './styles';

type Props = {
  /** Overrides the default "← Back to home" label if needed. */
  label?: string;
  /** Path to link to; defaults to '/'. */
  href?: string;
};

/**
 * Small brand-styled link that sends visitors back to the homepage.
 * Meant to sit at the top of any long detail page (tokenomics, roadmap,
 * staking, etc.) where the header logo alone isn't discoverable enough.
 */
export const BackToHome = ({
  label = '← Back to home',
  href = '/',
}: Props) => (
  <S.Wrapper>
    <Link href={href}>{label}</Link>
  </S.Wrapper>
);
