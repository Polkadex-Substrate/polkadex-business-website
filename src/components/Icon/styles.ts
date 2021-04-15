import styled, { css } from 'styled-components';

export const Wrapper = styled.a`
  padding: 0.6rem;
  border-radius: 0.9rem;
  width: 3rem;
  height: 3rem;

  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackground};
    color: ${theme.colors.text};
    transition: ${theme.transition.default};

    :hover {
      background: ${theme.colors.primary};
      transform: translateY(-0.2rem);
    }
    & img {
      width: 100%;
    }
  `}
`;
