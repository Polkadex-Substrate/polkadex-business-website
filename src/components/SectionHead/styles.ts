import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ align: 'center' | 'left' }>`
  ${({ align }) => css`
    text-align: ${align};
    max-width: 82rem;
    margin: 0 ${align === 'center' ? 'auto' : '0'} 5rem
      ${align === 'center' ? 'auto' : '0'};
  `}
`;

export const Eyebrow = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    padding: 0.5rem 1.2rem;
    background: ${theme.colors.primary}22;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary}55;
    border-radius: 100px;
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 2rem;
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 4rem;
    font-weight: 500;
    line-height: 1.15;
    letter-spacing: -0.02em;
    margin-bottom: 1.5rem;
    strong {
      color: ${theme.colors.primary};
      font-weight: 600;
    }
    @media screen and (max-width: 700px) {
      font-size: 3rem;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: 1.6rem;
    line-height: 1.6;
    opacity: 0.7;
    max-width: 62rem;
    margin: 0 auto;
  `}
`;
