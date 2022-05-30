import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const AsideRight = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 2rem;
    align-items: center;
    a {
      background: white;
      color: black !important;
      border-radius: 0.8rem;
      padding: 1rem;
      transition: background 0.2s ease-in-out;
      :hover {
        background: ${theme.colors.primary};
      }
    }
    button {
      cursor: pointer;
      color: ${theme.colors.text};
      svg {
        width: 0.8rem;
      }
    }
  `}
`;

export const Wrapper = styled.header`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    position: relative;
    margin: 0 auto;
  `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
  display: flex;
  gap: 3rem;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    @media screen and (max-width: 835px) {
      display: none;
    }
    li {
      list-style: none;
    }
  }
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
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 3rem;
    box-shadow: ${theme.shadow.secondary};
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    small {
      display: block;
      color: #a0a5ab;
      margin-bottom: 1rem;
    }
    a {
      transition: color 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
      color: black;
      :hover {
        color: ${theme.colors.primary};
      }
    }
    li {
      list-style: none;
      font-size: 1.5rem;
      font-weight: bold;

      :not(:last-child) {
        margin-bottom: 1.5rem;
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
  opacity: 0;
  flex: 1;
`;

export const MenuFlex = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  @media screen and (max-width: 620px) {
    justify-content: space-between;
  }
`;
