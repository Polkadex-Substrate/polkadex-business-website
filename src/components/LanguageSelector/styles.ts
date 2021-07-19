import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: ease-in-out 0.2s;
    select {
      margin: 0 0.5rem;
      appearance: none;
      outline: 0;
      box-shadow: none;
      border: 0;
      background-image: none;
      color: ${theme.colors.text};
      cursor: pointer;
    }
    & :hover {
      opacity: 0.8;
    }
  `}
`;
