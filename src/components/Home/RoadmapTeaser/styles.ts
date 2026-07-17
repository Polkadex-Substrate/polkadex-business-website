import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    padding: 8rem 2rem;
    max-width: 130rem;
    margin: 4rem auto;
    overflow: hidden;
    isolation: isolate;

    ::before,
    ::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.24;
      z-index: -1;
    }
    ::before {
      background: ${theme.colors.secondary};
      width: 45rem;
      height: 45rem;
      top: -14rem;
      left: -10rem;
    }
    ::after {
      background: ${theme.colors.primary};
      width: 50rem;
      height: 50rem;
      bottom: -18rem;
      right: -12rem;
    }

    @media screen and (max-width: 960px) {
      padding: 6rem 2rem;
      margin: 2rem auto;
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    text-align: center;
    max-width: 82rem;
    margin: 0 auto 5rem;

    span {
      display: inline-block;
      padding: 0.5rem 1.2rem;
      background: ${theme.colors.primary}22;
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary}55;
      border-radius: 100px;
      font-size: 1.3rem;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    h2 {
      font-size: 4rem;
      font-weight: 500;
      line-height: 1.15;
      letter-spacing: -0.02em;
      margin-bottom: 1.5rem;
      strong {
        color: ${theme.colors.primary};
        font-weight: 600;
      }
    }

    p {
      font-size: 1.6rem;
      line-height: 1.6;
      opacity: 0.7;
      max-width: 62rem;
      margin: 0 auto;
    }

    @media screen and (max-width: 700px) {
      h2 {
        font-size: 3rem;
      }
    }
  `}
`;

export const TimelineWrap = styled.div`
  position: relative;
  max-width: 100rem;
  margin: 0 auto;
`;

export const ProgressTrack = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: -2.4rem;
    top: 1rem;
    bottom: 1rem;
    width: 3px;
    border-radius: 3px;
    background: ${theme.colors.secondaryBackground};
    @media screen and (max-width: 1120px) {
      display: none;
    }
  `}
`;

export const ProgressLine = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background: ${theme.colors.gradient};
    transform-origin: top center;
  `}
`;

export const Timeline = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  `}
`;

/* Transient ($-prefixed) props: styled-components strips these before they
   reach the DOM — required because this renders via as={motion.div}, which
   forwards ordinary props straight through to the element. */
export const Phase = styled.div<{ $active?: boolean }>`
  ${({ theme, $active }) => css`
    display: grid;
    grid-template-columns: 12rem 1fr auto;
    align-items: center;
    gap: 2.4rem;
    padding: 2.4rem 3rem;
    background: ${$active
      ? `${theme.colors.primary}12`
      : theme.colors.secondaryBackgroundOpacity};
    border: 1px solid
      ${$active
        ? `${theme.colors.primary}55`
        : theme.colors.secondaryBackground};
    border-radius: 1.2rem;
    transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;

    :hover {
      transform: translateX(0.4rem);
      border-color: ${theme.colors.primary}66;
    }

    @media screen and (max-width: 780px) {
      grid-template-columns: 1fr;
      gap: 0.8rem;
      padding: 2rem;
    }
  `}
`;

export const PhaseLabel = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: ${theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 0.08em;
  `}
`;

export const PhaseBody = styled.div`
  ${({ theme }) => css`
    h3 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 0.4rem;
      color: ${theme.colors.text};
    }
    p {
      font-size: 1.4rem;
      line-height: 1.55;
      opacity: 0.7;
      margin: 0;
    }
  `}
`;

export const Status = styled.div<{ variant: 'completed' | 'active' | 'upcoming' }>`
  ${({ theme, variant }) => css`
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    border-radius: 100px;
    white-space: nowrap;
    ${variant === 'completed' &&
    css`
      background: ${theme.colors.green}22;
      color: ${theme.colors.green};
    `}
    ${variant === 'active' &&
    css`
      background: ${theme.colors.primary}22;
      color: ${theme.colors.primary};
    `}
    ${variant === 'upcoming' &&
    css`
      background: ${theme.colors.secondaryBackgroundOpacity};
      color: ${theme.colors.text};
      opacity: 0.7;
    `}
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin-top: 4rem;
    a {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 1.2rem 2.4rem;
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      border-radius: 0.6rem;
      font-weight: 500;
      transition: opacity 0.2s ease-in-out;
      :hover {
        opacity: 0.9;
      }
    }
  `}
`;
