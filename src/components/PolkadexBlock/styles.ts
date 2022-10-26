import styled from 'styled-components';

type TProps = {
  isViewed: boolean;
};

export const Wrapper = styled.section`
  padding-bottom: 92px;

  @media screen and (max-width: 664px) {
    padding-bottom: 32px;
  }
`;

export const Title = styled.h2<TProps>`
  font-size: 4rem;
  margin-bottom: 28px;

  text-align: center;

  white-space: pre-wrap;

  opacity: ${({isViewed}) => +isViewed};

  transform: translateY(${({isViewed}) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;
`;

export const Buttons = styled.div<TProps & {current: number}>`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;

  column-gap: 16px;

  width: 60%;
  margin: 0 auto;

  opacity: ${({isViewed}) => +isViewed};

  transform: translateY(${({isViewed}) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;

  & > a {
    justify-content: center;

    &:not(:nth-child(${({current}) => current + 1})) {
      border: 1px solid ${({theme}) => theme.colors.disable};
    }
  }
  margin-bottom: 32px;
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
  @media screen and (max-width: 1000px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    row-gap: 16px;
  }
`;

export const Tabs = styled.ul`
  padding-left: 0;
`;
export const Tab = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const TabWrapper = styled.div`
  width: 65%;
  display: flex;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const TabImage = styled.div`
  padding: 10px 20px;
  & > svg {
    width: 500px;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }
`;
export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;

  @media screen and (max-width: 1000px) {
    align-items: center;
    text-align: center;
  }
`;
export const TabTitle = styled.h4<TProps>`
  font-weight: 500;
  font-size: 3.4rem;
  color: ${({theme}) => theme.colors.primary};
  margin-bottom: 15px;

  opacity: ${({isViewed}) => +isViewed};

  transform: translateY(${({isViewed}) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;

  @media screen and (max-width: 720px) {
    font-size: 32px;
  }
`;
export const TabSubtitle = styled.h5<TProps>`
  font-size: 3rem;
  margin-bottom: 15px;
  font-size: 2rem;
  font-weight: 400;

  opacity: ${({isViewed}) => +isViewed};

  transform: translateY(${({isViewed}) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;
  @media screen and (max-width: 720px) {
    font-size: 2.2rem;
  }
`;
export const TabDescription = styled.p<TProps>`
  font-size: 1.5rem;

  line-height: 160%;
  font-weight: 400;
  margin-bottom: 30px;

  opacity: ${({isViewed}) => +isViewed};

  transform: translateY(${({isViewed}) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;

  @media screen and (max-width: 720px) {
    font-size: 1.2rem;
  }
`;
export const LearnMore = styled.a`
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  cursor: pointer;
  & a {
    margin-right: 20px;
  }

  & > svg {
    width: 16px;
    height: 12px;
    margin-left: 6px;
  }
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;

  & > a {
    border-radius: 12px;
    font-weight: 500;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
  }
  @media screen and (max-width: 560px) {
    flex-direction: column;
  }
`;
