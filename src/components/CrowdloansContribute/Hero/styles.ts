import { PrimaryWrapper } from 'components/Button/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100rem;
  margin: 0 auto;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primaryBackground};
    padding: 13rem 2rem 12rem 2rem;
    background-image: url('/img/hero.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right bottom;
    display: grid;
    border-radius: 2rem;
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
    h1 {
      line-height: 1.1;
      @media screen and (min-width: 660px) {
        font-size: 6rem;
      }
      small {
        display: block;
        font-size: 2.8rem;
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
