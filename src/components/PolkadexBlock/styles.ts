import { Wrapper as Button } from 'components/Button/styles';
import styled, { css } from 'styled-components';

type TProps = {
  isViewed: boolean;
};

export const Wrapper = styled.section`
  padding-bottom: 2rem;

  @media screen and (max-width: 664px) {
    padding-bottom: 32px;
  }
`;

export const Title = styled.h2<TProps>`
  font-size: 3rem;
  margin-bottom: 28px;
  font-weight: 550;
  text-align: center;

  white-space: pre-wrap;

  opacity: ${({ isViewed }) => +isViewed};

  transform: translateY(${({ isViewed }) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;
`;

export const Buttons = styled.div<TProps & { current: number }>`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;

  column-gap: 16px;

  width: 60%;
  margin: 0 auto;

  opacity: ${({ isViewed }) => +isViewed};

  transform: translateY(${({ isViewed }) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;

  & > a {
    justify-content: center;

    &:not(:nth-child(${({ current }) => current + 1})) {
      border: 1px solid ${({ theme }) => theme.colors.disable};
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

  ${Button} {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

export const Tabs = styled.ul`
  padding-left: 0;
`;
export const Tab = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem 0;
`;

export const TabWrapper = styled.div<{ hasImage?: boolean }>`
  ${({ theme, hasImage }) => css`
    width: 65%;
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    background: ${theme.colors.tertiaryBackgroundOpacity};
    border-radius: 2rem;
    padding: 5rem;
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
    @media screen and (min-width: 1000px) {
      grid-template-columns: ${hasImage ? 'auto 40rem' : '1fr'};
    }
  `}
`;
export const TabImage = styled.div`
  max-width: 60rem;
`;
export const TabContent = styled.div`
  justify-self: flex-start;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    align-items: center;
    text-align: center;
  }
`;
export const TabTitle = styled.h4<TProps>`
  font-weight: 500;
  font-size: 3.4rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 15px;

  opacity: ${({ isViewed }) => +isViewed};

  transform: translateY(${({ isViewed }) => (isViewed ? 0 : 20)}%);

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

  opacity: ${({ isViewed }) => +isViewed};

  transform: translateY(${({ isViewed }) => (isViewed ? 0 : 20)}%);

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

  opacity: ${({ isViewed }) => +isViewed};

  transform: translateY(${({ isViewed }) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;

  @media screen and (max-width: 720px) {
    font-size: 1.2rem;
  }
`;
export const LearnMore = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  & a {
    margin-right: 20px;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 560px) {
    flex-direction: column;
  }
`;
