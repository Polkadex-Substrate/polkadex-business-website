import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100rem;
  margin: 6rem auto 12rem auto;
  @media screen and (min-width: 1175px) {
    min-height: 145rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  max-width: 50rem;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export const RoadContainer = styled.div`
  position: relative;
  @media screen and (min-width: 1080px) {
    background-image: url('/img/road.svg');
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 20rem;
  }

  @media screen and (min-width: 1160px) {
    min-height: 150rem;
  }

  @media screen and (max-width: 1160px) and (min-width: 1080px) {
    min-height: 142rem;
  }
  @media screen and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Box = styled.div`
  position: relative;
  height: 100%;
`;
export const Cards = styled.div``;

export const Phase = styled.section`
  max-width: 100rem;
  margin: 6rem auto 10rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  @media screen and (max-width: 1050px) {
    padding: 0 2rem;
  }
`;

export const PhaseCard = styled.div<{ active?: boolean }>`
  ${({ theme, active }) => css`
    display: grid;
    grid-template-columns: 16rem 1fr auto;
    align-items: start;
    gap: 2.4rem;
    padding: 2.8rem 3rem;
    background: ${active
      ? `${theme.colors.primary}12`
      : theme.colors.secondaryBackgroundOpacity};
    border: 1px solid
      ${active
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
      gap: 1.2rem;
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
    padding-top: 0.4rem;
    span.emoji {
      font-size: 2rem;
    }
  `}
`;

export const PhaseBody = styled.div`
  ${({ theme }) => css`
    h3 {
      font-size: 2.2rem;
      font-weight: 600;
      margin-bottom: 1.4rem;
      color: ${theme.colors.text};
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      font-size: 1.45rem;
      line-height: 1.55;
      color: ${theme.colors.secondaryText};
      ::before {
        content: '✓';
        flex-shrink: 0;
        color: ${theme.colors.green};
        font-weight: 700;
        margin-top: 0.1rem;
      }
    }
    /* Upcoming phases: hollow bullets instead of checks */
    &[data-upcoming='true'] li::before {
      content: '○';
      color: ${theme.colors.secondaryText};
      font-weight: 400;
    }
  `}
`;

export const PhaseStatus = styled.div<{
  variant: 'completed' | 'active' | 'upcoming';
}>`
  ${({ theme, variant }) => css`
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.5rem 1.2rem;
    border-radius: 100px;
    white-space: nowrap;
    margin-top: 0.4rem;
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
