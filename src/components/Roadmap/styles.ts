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
`;

export const PhaseCard = styled.div`
  ${({ theme }) => css`
    position: relative;
    border: 1px solid ${theme.colors.secondaryBackground};
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 820px) {
      flex-direction: row;
      gap: 5rem;
    }
    strong,
    small {
      position: absolute;
      font-weight: 500;
      font-size: 1.5rem;
      padding: 2rem;
      right: 0;
      top: 0;
    }
    strong {
      background: ${theme.colors.green};
    }
    small {
      background: ${theme.colors.secondaryBackground};
      padding: 2rem;
    }
  `}
`;

export const PhaseCardAsideLeft = styled.div`
  padding: 4rem;
  min-width: 20rem;
  span {
    font-size: 2rem;
    font-weight: 500;
    opacity: 0.2;
    padding: 2rem;
  }
`;

export const PhaseCardAsideRight = styled.div<{ active: boolean }>`
  ${({ theme, active }) => css`
    flex: 1;
    display: flex;
    gap: 3rem;
    background: ${active
      ? theme.colors.secondaryBackgroundOpacity
      : theme.colors.tertiaryBackgroundOpacity};
    border-left: 1px solid ${theme.colors.secondaryBackgroundOpacity};
    padding: 4rem;

    @media screen and (max-width: 820px) {
      flex-direction: column;
    }
    & div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;
      min-width: 4rem;
      min-height: 4rem;
      width: 4rem;
      height: 4rem;
      background: ${active
      ? `${theme.colors.primary}66`
      : theme.colors.secondaryBackgroundOpacity};
      border-radius: 100rem;
      margin-top: -0.3rem;
    }
    & div:last-child {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      h3 {
        font-size: 3rem;
        font-weight: 450;
      }
      ol {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-left: 3rem;
        li {
          color: ${theme.colors.secondaryText};
          line-height: 1.5;
        }
      }
    }
  `}
`;
