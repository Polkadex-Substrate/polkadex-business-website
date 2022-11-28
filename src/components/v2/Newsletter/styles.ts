import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Wrapper = styled(motion.section)`
  ${({ theme }) => css`
    max-width: 100rem;
    margin: 8rem auto 5rem auto;

    @media screen and (max-width: 1200px) {
      margin: 4rem 1rem;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 2rem;
    background: ${theme.colors.primaryBackground};
    border: 1px solid ${theme.colors.secondaryBackground};
    background-image: url('/img/newsletterBg.svg');
    background-repeat: no-repeat;
    background-size: 134% 100%;
    background-position: -10rem 0;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
    @media screen and (min-width: 657px) {
      padding: 6rem 4rem;
    }
    @media screen and (max-width: 770px) {
      background-size: cover;
    }
    form {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      flex: 1;
      border-radius: 1rem;
      background: ${theme.colors.secondaryBackgroundOpacity};
      border: 1px solid ${theme.colors.secondaryBackground};
      @media screen and (min-width: 430px) {
        flex-direction: row;
        padding-left: 1.5rem;
        min-width: 35rem;
      }
      input {
        width: 100%;
        color: ${theme.colors.text};
        @media screen and (max-width: 430px) {
          padding: 2rem;
        }
      }
      button {
        padding: 1.8rem;
        background: ${theme.colors.primary};
        color: white;
        font-weight: bold;
        border-radius: 1rem;
        cursor: pointer;
        transition: background 0.3s ease-in-out;
        :hover {
          background: ${theme.colors.primary}CC;
        }
      }
      @media screen and (min-width: 657px) {
        max-width: 30rem;
      }
    }
  `}
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: -4rem;
  right: 3rem;
  @media screen and (min-width: 657px) {
    left: 3rem;
  }
  svg {
    width: 8rem;
  }
`;

export const Title = styled.div`
  color: white;
  h2 {
    font-size: 3rem;
    font-weight: 550;
    line-height: 1.5;
  }
`;
