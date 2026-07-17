import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    z-index: 10;
    width: 4.8rem;
    height: 4.8rem;
    padding: 0;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background: ${theme.colors.primaryBackground}ee;
    backdrop-filter: blur(10px);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35),
      0 0 0 1px ${theme.colors.secondaryBackground};
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    :hover {
      transform: translateY(-0.3rem);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45),
        0 0 0 1px ${theme.colors.primary}66;
    }

    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
    .track {
      stroke: ${theme.colors.secondaryBackground};
    }
    .progress {
      stroke: ${theme.colors.primary};
    }
    .arrow {
      stroke: ${theme.colors.text};
      transition: stroke 0.2s ease-in-out;
    }
    :hover .arrow {
      stroke: ${theme.colors.primary};
    }

    @media screen and (max-width: 700px) {
      bottom: 2rem;
      right: 2rem;
      width: 4.2rem;
      height: 4.2rem;
    }
  `}
`;
