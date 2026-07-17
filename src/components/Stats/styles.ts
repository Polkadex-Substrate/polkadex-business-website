import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100rem;
  margin: 8rem auto;
  @media screen and (max-width: 1050px) {
    padding: 0 2rem;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: 3.2rem 2.4rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 1.6rem;
    backdrop-filter: blur(20px);
    transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;

    :hover {
      transform: translateY(-0.4rem);
      border-color: ${theme.colors.primary}55;
    }

    span {
      display: block;
      font-size: 4.2rem;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.02em;
      background: ${theme.colors.gradient};
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      font-size: 1.4rem;
      margin-top: 1rem;
      opacity: 0.7;
    }
  `}
`;
