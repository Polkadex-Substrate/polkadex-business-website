import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: 950px) {
    margin-top: 6rem;
  }
  h2 {
    font-weight: 550;
    font-size: 3rem;
    @media screen and (min-width: 660px) {
      font-size: 4rem;
    }
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 5rem;
    align-items: center;
    img {
      width: 100%;
      border-right: 1px solid ${theme.colors.secondaryBackgroundOpacity};
      border-top: 1px solid ${theme.colors.secondaryBackgroundOpacity};
      max-width: 100rem;
    }

    @media screen and (min-width: 700px) {
      grid-template-columns: 1.5fr 1fr;
    }
  `}
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 700px) {
    max-width: 35rem;
  }
  p {
    line-height: 1.8;
    margin-top: 1.6rem;
  }
  a {
    width: fit-content;
  }
  @media screen and (max-width: 950px) {
    padding: 1rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const Chain = styled.div`
  max-width: 90rem;
  margin: 6rem auto 0 auto;
  @media screen and (max-width: 945px) {
    padding: 1rem;
  }
`;
export const ChainTitle = styled.div`
  h2 {
    font-weight: 550;
    font-size: 3rem;
    @media screen and (min-width: 660px) {
      font-size: 4rem;
    }
    margin-bottom: 1rem;
  }
`;

export const ChainContainer = styled.div`
  @media screen and (min-width: 860px) {
    background-image: url('/img/chain.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    min-height: 90rem;
    position: relative;
  }

  @media screen and (max-width: 860px) {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

export const ChainCard = styled.div`
  ${({ theme }) => css`
    @media screen and (min-width: 545px) {
      max-width: 30rem;
      :nth-child(1) {
        max-width: 36rem;
      }
    }
    @media screen and (max-width: 860px) {
      margin-bottom: 2rem;
    }

    @media screen and (min-width: 860px) {
      position: absolute;
      :nth-child(1) {
        top: 10rem;
        left: 0rem;
      }
      :nth-child(2) {
        top: 28rem;
        left: 0rem;
      }
      :nth-child(3) {
        top: 46rem;
        left: 0rem;
      }
      :nth-child(4) {
        top: 18rem;
        right: 0;
      }
      :nth-child(5) {
        top: 32rem;
        right: 0;
      }
      :nth-child(6) {
        bottom: 30rem;
        right: 3rem;
      }
    }
    p {
      position: relative;
      line-height: 1.6;
      margin-left: 2.5rem;
      ::after {
        background: ${theme.colors.primary};
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        content: '';
        position: absolute;
        left: -2.5rem;
        top: 0.7rem;
      }
    }
  `}
`;
