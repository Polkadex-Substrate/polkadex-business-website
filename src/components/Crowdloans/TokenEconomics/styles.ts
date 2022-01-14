import { Wrapper as Icon } from 'components/Icon/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  padding: 5rem 0;
  max-width: 95rem;
  margin: 0 auto;
  @media screen and (max-width: 950px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

export const Title = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin-bottom: 5rem;
  @media screen and (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
  h2 {
    font-size: 3.5rem;
  }
`;

export const Community = styled.div`
  display: grid;
  grid-gap: 1rem;
  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
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
  margin-top: 1rem;
  display: flex;
  align-items: center;

  ${Icon} {
    margin-right: 1rem;
  }
`;

export const TokenEconomics = styled.div`
  position: relative;
  display: grid;
  margin-bottom: 5rem;
  img {
    width: 100%;
    max-height: 72rem;
  }

  @media screen and (min-width: 830px) {
    grid-template-columns: 2fr 1fr;
  }

  @media screen and (max-width: 830px) {
    img {
      display: none;
    }
  }
`;
export const TokenEconomicsWrapper = styled.div`
  position: relative;
`;

export const TokenEconomicCard = styled.div<{
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}>`
  ${({ theme, top, bottom, left, right }) => css`
    span {
      display: block;
      font-weight: 600;
      /* max-width: 20rem; */
    }
    p {
      opacity: 0.4;
      font-size: 1.3rem;
    }

    @media screen and (max-width: 830px) {
      padding: 2rem;
      background: ${theme.colors.primary}0C;
      border-radius: 1rem;
      :not(:last-child) {
        margin-bottom: 1rem;
      }
    }

    @media screen and (min-width: 830px) {
      position: absolute;
      top: ${top ? `${top}rem` : 'initial'};
      bottom: ${bottom ? `${bottom}rem` : 'initial'};
      left: ${left ? `${left}rem` : 'initial'};
      right: ${right ? `${right}rem` : 'initial'};
      height: fit-content;

      div:last-child {
        position: relative;
        :before {
          content: '';
          position: absolute;
          top: 1rem;
          margin-left: 1rem;
          left: 100%;
          width: 14rem;
          height: 1px;
          background: ${theme.colors.secondaryBackground};
        }
      }
    }
  `}
`;
