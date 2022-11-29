import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const AsideRight = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2rem;
    a {
      background: ${theme.colors.text};
      color: ${theme.colors.inverse} !important;
      padding: 1rem 3rem;
      border-radius: 0.4rem;
      white-space: nowrap;
      transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
      :hover {
        background: ${theme.colors.primary};
        color: ${theme.colors.white} !important;
      }
    }

    button {
      color: ${theme.colors.text};
      @media screen and (min-width: 835px) {
        display: none;
      }
      svg {
        display: inline-block;
        vertical-align: middle;
        width: 0.8rem;
        margin-left: 0.2rem;
      }
    }
  `}
`;

export const Main = styled.header`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    z-index: 5;
    background: ${theme.colors.primaryBackground};
    padding: 1rem 0;
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
  `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100rem;
  margin: 0 auto;

  ul li a,
  ${AsideRight} a {
    font-size: 1.3rem;
  }
  padding: 1rem;
  @media screen and (min-width: 1200px) {
    padding: 1rem 0;
  }
`;

export const AsideLeft = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 2rem;
    align-items: center;
    ul {
      display: flex;
      align-items: center;
      gap: 2rem;
      @media screen and (max-width: 835px) {
        display: none;
      }
      li {
        cursor: pointer;
        list-style: none;
        svg {
          display: inline-block;
          vertical-align: middle;
          width: 0.8rem;
          margin-left: 0.2rem;
        }
      }
    }
    svg {
      fill: ${theme.colors.text};
    }
  `}
`;

export const IconWrapper = styled(motion.span)`
  display: inline-block;
  margin-left: 0.5rem;
`;

export const Menu = styled(motion.div)`
  position: absolute;
  width: 100%;
  top: 0;
  margin: 4.5rem auto 0 auto;
  padding: 1rem;
  min-height: calc(100vh - 4.5rem);
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1200px) {
    padding: 1rem 0;
  }
`;

export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    padding: 3rem 2rem;
    border-radius: 1.5rem;
    background: white;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    gap: 2rem;
    box-shadow: ${theme.shadow.secondary};
    max-width: 100rem;
    margin: 0 auto;
    z-index: 2;
    width: 100%;
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    small {
      display: block;
      color: #a0a5ab;
      margin-bottom: 1rem;
    }
  `}
`;

export const Li = styled.li<{ isDisabled?: boolean }>`
  ${({ theme, isDisabled = false }) => css`
    list-style: none;
    font-size: 1.5rem;
    font-weight: bold;
    :not(:last-child) {
      margin-bottom: 1.5rem;
    }
    a {
      transition: color 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
      color: ${isDisabled ? 'gray' : theme.colors.black};
      cursor: ${isDisabled ? 'not-allowed' : 'pointer'};

      :hover {
        color: ${isDisabled ? 'gray' : theme.colors.primary};
      }
    }

    span {
      background: ${theme.colors.primary}19;
      color: ${theme.colors.primary};
      padding: 0.1rem 0.2rem;
      border-radius: 0.5rem;
      font-size: 1.1rem;
      font-weight: 400;
      margin-left: 0.5rem;
      vertical-align: middle;
    }
  `}
`;

export const MenuOverflow = styled.div`
  /* opacity: 0; */
  position: absolute;
  top: -5rem;
  width: 100%;
  height: 108%;
  flex: 1;
  z-index: 1;
`;

export const MenuFlex = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  @media screen and (max-width: 620px) {
    justify-content: space-between;
  }
`;
