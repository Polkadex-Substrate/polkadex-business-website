import styled from 'styled-components';

type TProps = {
  isViewed: boolean;
};

export const Wrapper = styled.div`
  padding: 150px 20px 0;
  background-image: url(/img/orderbookAppMockup.svg);
  background-size: 1300px 100vw;

  background-position: right;
  background-repeat: no-repeat;
  @media screen and (max-width: 1200px) {
    padding: 80px 20px;
  }
  @media screen and (max-width: 1000px) {
    background-size: 1000px 100vw;

    padding: 60px 20px;
  }
  @media screen and (max-width: 762px) {
    background-image: none;
  }
`;
export const Container = styled.div`
  padding-left: 15px;

  transition: transform 1s ease-in;

  position: relative;

  @media screen and (min-width: 576px) {
    padding-left: calc(50vw - 280px);
  }
  @media screen and (min-width: 768px) {
    padding-left: calc(50vw - 470px);
  }
  @media screen and (min-width: 992px) {
    padding-left: calc(50vw - 590px);
  }
  @media screen and (min-width: 1200px) {
    padding-left: calc(50vw - 700px);
  }
`;

export const ContentWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding-bottom: 300px;
  @media screen and (max-width: 1000px) {
    width: 65%;
  }
  @media screen and (max-width: 762px) {
    width: 100%;
    text-align: center;
    align-items: center;
    padding-bottom: 20px;
  }
`;
export const Title = styled.h2<TProps>`
  font-weight: 600;
  color: ${({theme}) => theme.colors.primary};
  margin-bottom: 20px;

  opacity: ${({isViewed}) => +isViewed};
  transform: translateY(${({isViewed}) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;
`;
export const Available = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 100px;
  @media screen and (max-width: 878px) {
    text-align: center;
    align-items: center;
  }
`;

export const Subtitle = styled.h3<TProps>`
  font-size: 3rem;

  color: ${({theme}) => theme.colors.text};
  margin-bottom: 40px;

  opacity: ${({isViewed}) => +isViewed};
  transform: translateY(${({isViewed}) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;
`;
export const Advice = styled.p<TProps>`
  font-size: 2rem;

  color: ${({theme}) => theme.colors.text};
  margin-bottom: 30px;

  opacity: ${({isViewed}) => +isViewed};
  transform: translateY(${({isViewed}) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;
`;
export const Soon = styled.div``;
