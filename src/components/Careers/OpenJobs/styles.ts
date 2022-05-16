import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100rem;
  margin: 5rem auto 10rem auto;
  h2 {
    font-size: 3.5rem;
    strong {
      display: block;
    }
  }
  @media screen and (min-width: 950px) {
    margin-top: 6rem;
  }
  @media screen and (max-width: 1000px) {
    padding: 1rem;
  }
`;

export const Title = styled.div`
  text-align: center;
  h2 {
    line-height: 1.5;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 6rem;
`;

export const Jobs = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 500;
    margin-left: 1rem;
  }
  :not(:last-child) {
    margin-bottom: 2rem;
  }
`;
export const JobsContainer = styled.div`
  margin-top: 1rem;
`;

export const Card = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    border-radius: 1rem;
    background: ${theme.colors.quaternaryBackground};
    padding: 2.5rem;
    transition: background 0.3s ease-in-out;
    cursor: pointer;
    a {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      svg {
        max-width: 1rem;
        margin-top: 0.1rem;
      }
    }
    :hover {
      background: ${theme.colors.primary};
      ${Category} {
        background: ${theme.colors.white};
        color: ${theme.colors.black};
      }
    }
    :not(:last-child) {
      margin-bottom: 1rem;
    }
  `}
`;

export const CardAside = styled.div`
  p {
    font-size: 1.8rem;
    font-weight: bold;
  }
`;

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;
    span :not(:last-child) {
      position: relative;
      ::after {
        position: absolute;
        top: 50%;
        right: -0.5rem;
        content: '';
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background: ${theme.colors.text};
        opacity: 0.5;
      }
    }
  `}
`;
export const Category = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackground};
    padding: 0.2rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    transition: color 0.3s ease-in-out, background 0.3s ease-in-out;
  `}
`;
