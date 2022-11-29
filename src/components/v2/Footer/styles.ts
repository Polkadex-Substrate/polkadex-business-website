import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isDark?: boolean }>`
  ${({ theme, isDark }) => css`
    max-width: 100rem;
    margin: 4rem auto 0 auto;
    color: ${isDark ? theme.colors.white : theme.colors.text};
    padding-bottom: 2rem;
    @media screen and (max-width: 1200px) {
      margin: 4rem 1rem;
    }
    li {
      list-style: none;
    }
    svg {
      fill: ${theme.colors.black};
    }
  `}
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 4rem;
  span {
    display: block;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid ${theme.colors.secondaryBackgroundOpacity};
  `}
`;
export const Copyright = styled.div`
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
`;

export const Social = styled.div<{ isDark: boolean }>`
  ${({ theme, isDark }) => css`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    ul {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
    a svg {
      width: 1.5rem;
      height: 1.5rem;
      fill: ${isDark ? theme.colors.white : theme.colors.text};
    }
  `}
`;
