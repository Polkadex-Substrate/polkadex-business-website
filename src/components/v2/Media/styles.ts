import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin: 15rem 0 0 0;
    color: ${theme.colors.black};
    overflow: hidden;
    @media screen and (max-width: 1200px) {
      margin: 4rem 2rem;
    }
    h2 {
      max-width: 110rem;
      margin: 0 auto;
      font-weight: 550;
      font-size: 1.8rem;
    }
  `}
`;
export const Content = styled.div`
  position: relative;
  margin-top: 2rem;
  ::before,
  ::after {
    position: absolute;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: '';
    height: 100%;
    width: 25%;
    z-index: 2;
    pointer-events: none;
  }
  ::before {
    left: 0;
    top: 0;
  }
  ::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }
`;

export const Container = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  /* gap: 4rem; */
  width: calc(150px * 24);
  animation: scroll 35s linear infinite;
  :hover {
    animation-play-state: paused;
  }
  @keyframes scroll {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(calc(-150px * 8));
    }
  }
`;

export const Card = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  width: 150px;
  height: 60px;
  cursor: pointer;
  img {
    object-fit: contain;
    max-height: 4rem;
    max-width: 12rem;
  }
`;
