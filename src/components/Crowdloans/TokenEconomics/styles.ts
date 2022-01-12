import { Wrapper as Icon } from 'components/Icon/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  padding: 5rem 0;
  max-width: 95rem;
  margin: 0 auto;
  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

export const Title = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin-bottom: 5rem;
    h2 {
      font-size: 3.5rem;
    }
  `}
`;

export const Community = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackgroundOpacity};
    padding: 3rem;
    span {
      display: block;
      margin-bottom: 1rem;
      font-size: 1.6rem;
      font-weight: bold;
    }
    :first-child > a {
      display: block;
      margin-top: 1rem;
      font-weight: 500;
      color: ${theme.colors.primary};
    }
  `}
`;

export const Social = styled.div`
  ${({ theme }) => css`
    margin-top: 1rem;
    ul {
      list-style: none;
    }
    li {
      display: inline-block;
      text-decoration: none;
    }

    ${Icon} {
      background: none;
      svg {
        fill: ${theme.colors.primary};
      }
    }
  `}
`;

export const TokenEconomics = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-bottom: 5rem;
  img {
    width: 100%;
    max-height: 72rem;
  }
`;
export const TokenEconomicsWrapper = styled.div`
  position: relative;
`;

export const TokenEconomicCard = styled.div`
  position: relative;
  span {
    font-weight: 600;
  }
  :not(:last-child) {
    margin-bottom: 5rem;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20rem;
    height: 1px;
    background: black;
  }
`;
