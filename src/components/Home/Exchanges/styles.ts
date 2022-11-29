import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 1;

    :before {
      content: '';
      position: absolute;
      top: 6rem;
      right: 0;
      background: ${theme.colors.primary};
      width: 30%;
      height: 7rem;
      border-radius: 50rem 0 0 50rem;
      z-index: -2;
    }
  `}
`;
export const Content = styled.div`
  max-width: 100rem;
  margin: 4rem auto 0 auto;
  @media screen and (max-width: 1000px) {
    padding: 1rem;
  }
  h2 {
    font-weight: 400;
    font-size: 1.8rem;
  }
`;

export const Container = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  gap: 1rem;
`;

export const Card = styled(motion.a)`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors.tertiaryBackgroundSolid};
    padding: 2rem;
    border-radius: 1rem;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid ${theme.colors.secondaryBackgroundOpacity};
    :hover {
      border-color: ${theme.colors.primary};
    }
    img,
    svg {
      width: 100%;
      height: 100%;
      max-height: 3.5rem;
      max-width: 3.5rem;
    }
    img {
      object-fit: contain;
    }
  `}
`;
