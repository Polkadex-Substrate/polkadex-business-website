import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 110rem;
  margin: 4rem auto 0 auto;
  @media screen and (max-width: 1200px) {
    padding: 4rem 1rem 2rem 1rem;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const Container = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

export const Card = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.tertiaryBackgroundOpacity};
    padding: 2rem;
    border-radius: 1rem;
    transition: background 0.3s ease-in-out;
    :hover {
      background: ${theme.colors.secondaryBackgroundOpacity};
    }
    img {
      width: 100%;
      height: 100%;
      max-height: 5rem;
      max-width: 10rem;
      object-fit: contain;
    }
    p {
      margin-top: 6rem;
    }
  `}
`;
