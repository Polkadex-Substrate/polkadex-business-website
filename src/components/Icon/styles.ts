import styled, { css } from 'styled-components';

export const Wrapper = styled.a`
  padding: 0.6rem;
  border-radius: 0.9rem;
  max-width: 3rem;
  max-height: 3rem;
  min-width: 1.5rem;
  min-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackground};
    color: ${theme.colors.text};
    transition: ${theme.transition.default};

    :hover {
      background: ${theme.colors.primary};
      transform: translateY(-0.2rem);
    }
    & img {
      width: fit-content;
    }
  `}
`;
