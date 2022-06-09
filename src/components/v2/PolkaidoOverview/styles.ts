import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css``}
`;
export const Container = styled.div`
  ${({ theme }) => css`
    padding: 8rem 1rem;
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`;

export const Title = styled.div`
  h2 {
    line-height: 1.2;
    font-size: 5rem;
  }
`;
export const Comparison = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 10rem;
  margin-top: 3rem;
`;
export const ComparisonCard = styled.div`
  ${({ theme }) => css`
    :nth-child(2) {
      margin-bottom: 11rem;
      svg {
        width: 4rem;
      }
    }
    :last-child {
      ${ComparisonContainer} {
        span {
          background: ${theme.colors.white};
        }
      }
    }
  `}
`;
export const ComparisonContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.tertiaryBackgroundOpacity};
    border-radius: 2rem;
    padding: 5rem 3rem;
    div {
      display: flex;
      align-items: center;
      justify-content: space-around;
      max-width: 30rem;
      margin: 0 auto;
      span {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 1rem;
        background: ${theme.colors.secondaryBackgroundOpacity};
        width: 8rem;
        height: 5rem;
        border-radius: 1rem;
        img {
          object-fit: contain;
          max-width: 3rem;
          width: 100%;
        }
      }
    }
  `}
`;
export const ComparisonWrapper = styled.div`
  padding: 2rem;
  span {
    display: block;
    font-weight: 550;
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.6;
  }
`;

export const Overview = styled.div`
  background-image: url('/img/statHero.svg');
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 45rem;
  padding-top: 5rem;
`;

export const OverviewContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`;
export const OverviewWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  max-width: 90rem;
`;

export const OverviewCard = styled.div`
  span {
    display: block;
    font-size: 4rem;
  }
`;
