import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
  `}
  margin: 6rem auto;
  @media screen and (min-width: 1175px) {
    min-height: 145rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  max-width: 40rem;
  margin: 0 auto 6rem auto;
  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export const RoadContainer = styled.div`
  position: relative;

  @media screen and (min-width: 1080px) {
    background-image: url('/img/road.svg');
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 20rem;
  }

  @media screen and (min-width: 1160px) {
    min-height: 150rem;
  }

  @media screen and (max-width: 1160px) and (min-width: 1080px) {
    min-height: 142rem;
  }
  @media screen and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Box = styled.div`
  position: relative;
  height: 100%;
`;
export const Cards = styled.div``;
