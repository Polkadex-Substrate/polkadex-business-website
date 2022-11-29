import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 100rem;
    margin: 5rem auto 0 auto;
    @media screen and (max-width: 1000px) {
      padding: 1rem;
    }
    h2 {
      font-weight: 400;
      font-size: 1.8rem;
    }
  `}
`;

export const Content = styled.div`
  display: grid;
  gap: 3rem;
  margin-top: 3rem;
`;

export const ContentFlex = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    :not(:last-child) {
      border-bottom: 1px solid ${theme.colors.secondaryBackgroundOpacity};
      padding-bottom: 2rem;
    }
  `}
`;

export const Card = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    width: 150px;
    height: 60px;
    cursor: pointer;
    padding: 1rem;
    :not(:last-child) {
      border-right: 1px solid ${theme.colors.secondaryBackgroundOpacity};
      padding-right: 1.5rem;
      margin-right: 1.5rem;
    }
    img {
      object-fit: contain;
      max-height: 4rem;
      max-width: 12rem;
    }
    svg {
      width: 100%;
    }
    :not(:last-child) {
      /* border-right: 1px solid ${theme.colors.secondaryBackground}; */
    }
  `}
`;
