import { css, keyframes } from 'styled-components';

/** Slow drift for the decorative background blobs — almost imperceptible
 *  movement that keeps sections feeling alive. Apply inside a section's
 *  ::before / ::after via the `blobDriftCss` helpers. */
export const blobDrift = keyframes`
  0%   { transform: translate(0, 0) scale(1); }
  33%  { transform: translate(3rem, -2rem) scale(1.06); }
  66%  { transform: translate(-2rem, 2.5rem) scale(0.97); }
  100% { transform: translate(0, 0) scale(1); }
`;

export const blobDriftAlt = keyframes`
  0%   { transform: translate(0, 0) scale(1); }
  33%  { transform: translate(-2.5rem, 2rem) scale(0.96); }
  66%  { transform: translate(2rem, -2.5rem) scale(1.05); }
  100% { transform: translate(0, 0) scale(1); }
`;

/** Gate any animation behind the user's motion preference. */
export const motionSafe = (styles: ReturnType<typeof css>) => css`
  @media (prefers-reduced-motion: no-preference) {
    ${styles}
  }
`;

export const blobDriftCss = motionSafe(css`
  animation: ${blobDrift} 40s ease-in-out infinite;
`);

export const blobDriftAltCss = motionSafe(css`
  animation: ${blobDriftAlt} 48s ease-in-out infinite;
`);

/** Loading shimmer for skeleton placeholders. */
export const skeletonShimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const skeletonCss = css`
  ${({ theme }) => css`
    display: inline-block;
    border-radius: 0.6rem;
    background: linear-gradient(
      90deg,
      ${theme.colors.secondaryBackgroundOpacity} 25%,
      ${theme.colors.secondaryBackground} 50%,
      ${theme.colors.secondaryBackgroundOpacity} 75%
    );
    background-size: 200% 100%;
    @media (prefers-reduced-motion: no-preference) {
      animation: ${skeletonShimmer} 1.6s ease-in-out infinite;
    }
  `}
`;
