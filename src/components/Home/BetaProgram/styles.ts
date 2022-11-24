import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    position: relative;
    background: ${theme.colors.primaryBackground};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 0.5rem;
    margin-top: 8rem;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    background-image: url('/img/betaProgramBg.svg');
    background-repeat: no-repeat;
    background-size: 134% 100%;
    background-position: -10rem 0;
  `}
`;
export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 7rem 6rem;
    h2 {
      font-size: 3rem;
      font-weight: 500;
    }
    a {
      background: ${theme.colors.primary};
      width: fit-content;
      padding: 1rem 3rem;
      border-radius: 0.4rem;
    }
  `}
`;

export const Hero = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: -2rem;
  bottom: 0;
  width: 70rem;
`;
