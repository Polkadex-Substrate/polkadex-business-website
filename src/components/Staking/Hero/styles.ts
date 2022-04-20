import { PrimaryWrapper } from 'components/Button/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    padding: 1rem;
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: 8rem 2rem;

    @media screen and (min-width: 660px) {
      padding: 15rem 2rem 18rem 2rem;
    }
    background-image: url('/img/stakingHero.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right bottom;
    border-radius: 2.5rem;
  `}
`;
export const Aside = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 60rem;
    margin: 0 auto;
    text-align: center;
    color: ${theme.colors.black};
    h1 {
      line-height: 1.1;
      @media screen and (min-width: 660px) {
        font-size: 5rem;
      }
      strong {
        display: block;
      }
      span {
        color: ${theme.colors.primary};
      }
    }

    p {
      margin: 2rem 0;
      line-height: 1.5;
    }

    ${PrimaryWrapper} {
      width: fit-content;
    }
  `}
`;

export const Button = styled.a`
  border-radius: 1rem;
  border: 0.9px solid ${({ theme }) => theme.colors.white};
  padding: 1rem 1.5rem;
`;
