import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 1;
    /* Content has margin-top: 4rem above the h2. Mirror that below the
       card grid so the wrapper is symmetric around the cards — otherwise
       the bottom band ends up "closer" to the cards than the top band. */
    padding-bottom: 4rem;

    :before,
    :after {
      content: '';
      position: absolute;
      background: ${theme.colors.primary};
      width: 30%;
      height: 15rem;
      z-index: -2;
    }
    /* Each band peeks 1px past its respective horizontal edge — the most
       subtle version. html font-size: 62.5% means 1rem = 10px, so
       -0.1rem = -1px. */
    :before {
      top: -0.1rem;
      left: 0;
      border-radius: 0 50rem 50rem 0;
    }
    :after {
      bottom: -0.1rem;
      right: 0;
      border-radius: 50rem 0 0 50rem;
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
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(116px, 1fr));
  gap: 1rem;
`;

export const Card = styled(motion.a)`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10rem;
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
      max-height: 4.5rem;
      max-width: 4.5rem;
    }
    img {
      object-fit: contain;
    }
  `}
`;

export const Badge = styled.span`
  ${({ theme }) => css`
    position: absolute;
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    border-radius: 0.2rem;
    background: ${theme.colors.primary}33;
    right: 0.8rem;
    padding: 0 0.2rem;
  `}
`;
