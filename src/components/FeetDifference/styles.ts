import styled from 'styled-components';

type TPropsGeneral = {
  isViewed: boolean;
};

export const Wrapper = styled.div`
  padding: 64px 0;
`;

export const Title = styled.h2<TPropsGeneral>`
  text-align: center;
  margin-bottom: 0.8rem;
  font-size: 4rem;
  font-weight: 550;
  opacity: ${({ isViewed }) => +isViewed};
  transition: 500ms opacity;
  @media screen and (max-width: 650px) {
    font-size: 4rem;
  }
`;
export const Subtitle = styled.h3<TPropsGeneral>`
  text-align: center;
  margin-bottom: 3rem;
  font-weight: normal;
  font-size: 1.6rem;

  opacity: ${({ isViewed }) => +isViewed};

  transition: 500ms opacity;
`;

export const ButtonWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type TProps = {
  current: boolean;
  prev: boolean;
  next: boolean;
  hidden?: boolean;
  i: number;
};
export const Slide = styled.div<TProps>`
  position: relative;

  z-index: ${({ current, i }) => (current ? 10 : i)};
`;

export const Img = styled.img<TProps>`
  max-width: 100%;

  filter: blur(${({ current }) => (current ? 0 : 2)}px);

  transform: ${({ current, next, prev, i }) =>
    current
      ? ''
      : `translateX(${
          !prev && next ? `${-85 * -i}%` : prev && !next ? `${85 * -i}%` : '0%'
        })`};

  transition: 500ms filter, 500ms transform;

  background-color: #000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Sliders = styled.div`
  margin-top: 57px;

  position: relative;

  ::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    width: 100%;
    height: 100%;
    /* background: linear-gradient(90deg, #1c1c26 10%, #1c1c2600 50%); */

    background: rgb(28, 28, 38);
    background: radial-gradient(
      circle,
      rgba(28, 28, 38, 0.4) 60%,
      rgba(28, 28, 38, 1) 90%,
      rgba(28, 28, 38) 50%
    );
    z-index: 4;

    pointer-events: none;
  }
`;
