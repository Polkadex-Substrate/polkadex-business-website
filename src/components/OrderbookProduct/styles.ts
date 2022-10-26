import styled from 'styled-components';

type TProps = {
  isViewed: boolean;
};

export const Wrapper = styled.section`
  padding: 64px 20px;
  padding-top: 0;
  background-image: url('/img/violetBg.svg');
  background-repeat: no-repeat;
  background-size: 60% 100%;
  background-position: left;
  @media screen and (max-width: 780px) {
    background-image: none;
  }
`;

export const TechnologiesContainer = styled.div`
  & h4 {
    font-size: 1.5rem;
  }
  & img {
    width: 100%;
  }
  @media screen and (min-width: 780px) {
    & h4 {
      margin-bottom: -5rem;
    }
  }
`;

export const Subtitle = styled.h3<TProps>`
  margin-bottom: 23px;

  font-size: 4rem;
  font-weight: 700;

  opacity: ${({isViewed}) => +isViewed};

  transform: translateY(${({isViewed}) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;

  @media screen and (max-width: 780px) {
    font-size: 2.2rem;
  }
`;
export const Text = styled.p<TProps & {size: number}>`
  font-size: ${({size = 1.6}) => size}rem;
  line-height: 160%;
  white-space: pre-wrap;

  opacity: ${({isViewed}) => +isViewed};

  transform: translateY(${({isViewed}) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;

  @media screen and (max-width: 780px) {
    font-size: 1.4rem;
  }
`;

export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 780px) {
    flex-direction: column;
    text-align: center;
  }
`;
export const Item = styled.div`
  width: 40%;
  @media screen and (max-width: 780px) {
    width: 100%;
  }
  &:first-child {
    padding-top: 12px;
  }
`;

export const Button = styled.div<TProps>`
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  opacity: ${({isViewed}) => +isViewed};

  transform: translateY(${({isViewed}) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;

  & > a {
    text-align: center;
    justify-content: center;
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
  }
`;
