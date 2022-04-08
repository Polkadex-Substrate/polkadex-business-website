import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 90rem;
  margin: 3rem auto 0 auto;
  @media screen and (min-width: 950px) {
    margin-top: 6rem;
  }
  h2 {
    font-size: 3.5rem;
    strong {
      display: block;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  align-items: center;
  img {
    width: 100%;
  }

  @media screen and (min-width: 700px) {
    grid-template-columns: 1.5fr 1fr;
  }
`;

export const Aside = styled.div`
  max-width: 35rem;

  p {
    line-height: 1.8;
    margin-top: 1.6rem;
  }
  @media screen and (max-width: 950px) {
    padding: 1rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Button = styled.a`
  svg {
    max-width: 1rem;
    margin-left: 0.5rem;
  }
`;
export const Chain = styled.div`
  margin-top: 4rem;
  @media screen and (max-width: 945px) {
    padding: 1rem;
  }
`;
export const ChainTitle = styled.div`
  h2 {
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
      max-width: 25rem;
    }
    @media screen and (max-width: 860px) {
      margin-bottom: 2rem;
    }

    @media screen and (min-width: 860px) {
      position: absolute;
      :nth-child(1) {
        top: 10rem;
        left: 20rem;
      }
      :nth-child(2) {
        top: 28rem;
        left: 8rem;
      }
      :nth-child(3) {
        top: 46rem;
        left: 0;
      }
      :nth-child(4) {
        bottom: 60rem;
        right: 0;
      }
      :nth-child(5) {
        bottom: 45rem;
        right: 3rem;
      }
      :nth-child(6) {
        bottom: 30rem;
        right: 8rem;
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
