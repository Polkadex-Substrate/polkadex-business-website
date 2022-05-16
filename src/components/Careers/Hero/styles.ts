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
    background: ${theme.colors.primaryBackground};
    padding: 4rem 2rem;

    @media screen and (min-width: 660px) {
      padding: 12rem 2rem 12rem 2rem;
    }
    background-image: url('/img/careersHero.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right center;
    display: grid;
    border-radius: 2rem;
    @media screen and (min-width: 550px) {
      grid-template-columns: 1fr 1fr;
    }
  `}
`;
export const Aside = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 40rem;
    h1 {
      line-height: 1.1;
      @media screen and (min-width: 660px) {
        font-size: 5rem;
      }

      strong {
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
export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Button = styled.a`
  border-radius: 1rem;
  border: 0.9px solid ${({ theme }) => theme.colors.white};
  padding: 1rem 1.5rem;
`;
