import styled from 'styled-components';

type TProps = {
  isViewed: boolean;
};

export const Wrapper = styled.div`
  padding: 150px 20px 0;
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 39rem auto;
`;
export const Container = styled.div`
  padding-left: 15px;

  transition: transform 1s ease-in;

  position: relative;
  background-image: url(/img/orderbookAppMockup.svg);
  background-size: 1600px 100vw;

  background-position: right;
  background-repeat: no-repeat;

  @media screen and (max-width: 762px) {
    background-image: none;
  }
`;

export const ContentWrapper = styled.div`
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
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;

  opacity: ${({ isViewed }) => +isViewed};
  transform: translateY(${({ isViewed }) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;
`;
export const Available = styled.p`
  font-size: 1.5rem;
  margin-top: 4rem;
  @media screen and (max-width: 878px) {
    text-align: center;
    align-items: center;
  }
`;

export const Subtitle = styled.h3<TProps>`
  font-size: 3rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2.5rem;

  opacity: ${({ isViewed }) => +isViewed};
  transform: translateY(${({ isViewed }) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;
  strong {
    font-weight: 550;
  }
`;
export const Advice = styled.p<TProps>`
  font-size: 1.6rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};

  opacity: ${({ isViewed }) => +isViewed};
  transform: translateY(${({ isViewed }) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;
`;
export const Soon = styled.div``;
