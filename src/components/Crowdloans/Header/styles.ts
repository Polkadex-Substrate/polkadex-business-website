import { Wrapper as Icon } from 'components/Icon/styles';
import { Link } from 'components/Logo/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  max-width: 95rem;
  margin: 2rem auto 0 auto;
  p,
  a {
    font-size: 1.5rem;
  }
`;

export const Menu = styled.ul<{ isActive?: boolean }>`
  ${({ theme, isActive }) => css`
    list-style: none;
    margin-left: 1.5rem;

    li {
      font-weight: 500;
      display: inline-block;
      color: ${isActive ? theme.colors.text : '#515177'};
      transition: color 0.3s ease;

      :hover {
        color: ${theme.colors.text};
      }

      :not(:last-child) {
        margin-right: 1.5rem;
      }
    }

    a {
      font-size: 1.3rem;
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.text};
    border-radius: 1rem 0 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Menu} li {
      color: ${theme.colors.inverse};
    }
    ${Link} svg {
      fill: ${theme.colors.inverse};
    }
  `}
`;

export const AsideLeft = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const CrowndloanLogo = styled.div`
  max-width: 10rem;
`;

export const AsideRight = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    list-style: none;

    svg {
      fill: ${theme.colors.inverse};
    }
  `}
`;

export const Social = styled.ul`
  list-style: none;

  li {
    display: inline-block;
    margin-right: 1rem;
  }
`;
export const Cta = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.inverse};
    border-radius: 1rem 0 0 1rem;
    padding: 1.1rem;
    a {
      vertical-align: middle;
      font-size: 1.3rem;
    }
    ${Icon} {
      display: inline-block;
      margin-right: 0.5rem;
      background: ${theme.colors.text};
    }
  `}
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;
export const Calculate = styled.div`
  ${({ theme }) => css`
    a {
      font-size: 1.3rem;
    }
    ${Icon} {
      display: inline-block;
      margin-right: 0.5rem;

      svg {
        fill: ${theme.colors.text};
      }
    }
  `}
`;
