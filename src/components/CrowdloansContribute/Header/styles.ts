import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    background: ${theme.colors.primaryBackground};
  `}
`;

export const Container = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  @media screen and (min-width: 930px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Aside = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Box = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 2rem;
    ::after {
      content: '';
      position: absolute;
      top: 0;
      left: -1rem;
      height: 2rem;
      width: 1px;
      background: ${theme.colors.secondaryBackground};
    }
  `}
`;
export const CrowndloanLogo = styled.div`
  max-width: 10rem;
`;
export const Menu = styled.div<{ isActive?: boolean }>`
  ${({ theme, isActive }) => css`
    list-style: none;
    margin-left: 1.5rem;

    li {
      font-weight: 500;
      display: inline-block;
      color: ${theme.colors.text};
      opacity: ${isActive ? 1 : 0.6};
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
