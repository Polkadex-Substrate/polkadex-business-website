import { PrimaryWrapper as Button } from 'components/Button/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 90rem;
  margin: 0 auto;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackgroundOpacity};
    padding: 5rem;
    display: grid;
    border-radius: 2rem;
    @media screen and (min-width: 710px) {
      background-image: url('/img/ctaHero.svg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: right;
      grid-template-columns: 1fr 1fr;
    }
  `}
`;
export const Aside = styled.div`
  ${() => css`
    @media screen and (min-width: 710px) {
      max-width: 30rem;
    }
    h2 {
      font-size: 3.5rem;
    }
    p {
      margin-top: 1rem;

      margin-bottom: 2rem;
      line-height: 1.5;
    }
    ${Button} {
      width: fit-content;
    }
  `}
`;
