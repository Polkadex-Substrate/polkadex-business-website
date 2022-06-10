import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100rem;
  margin: 0 auto;

  @media screen and (min-width: 520px) {
    background-image: url('/img/stakingCta.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    min-height: 110rem;
    position: relative;
  }

  @media screen and (max-width: 1000px) {
    padding: 1rem;
  }
`;

export const Card = styled.div`
  ${({ theme }) => css`
    @media screen and (max-width: 519px) {
      :first-child {
        margin-bottom: 5rem;
      }
    }

    @media screen and (min-width: 520px) {
      position: absolute;
      max-width: 33rem;
      padding: 0;

      :first-child {
        top: 10rem;
        right: 0;
        h2 strong {
          display: block;
        }
      }
      :last-child {
        bottom: 0rem;
        left: 0;
      }
    }

    h2 {
      font-size: 3rem;
      strong {
        color: ${theme.colors.primary};
      }
    }
    p {
      margin-top: 2rem;
      line-height: 1.7;
    }
  `}
`;
