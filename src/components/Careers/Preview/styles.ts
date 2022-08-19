import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  h2 {
    font-size: 3.5rem;
    strong {
      display: block;
    }
  }

  @media screen and (max-width: 1000px) {
    padding: 1rem;
  }
`;
export const ImgHero = styled.div``;

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  align-items: center;
  img {
    width: 100%;
  }

  @media screen and (min-width: 816px) {
    grid-template-columns: 1.5fr 1fr;
  }
`;

export const Aside = styled.div`
  p {
    line-height: 1.8;
    margin-top: 1.6rem;
  }
  @media screen and (max-width: 950px) {
    padding: 1rem;
  }
  @media screen and (min-width: 816px) {
    max-width: 35rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const Button = styled.a`
  ${({ theme }) => css`
    padding: 1rem;
    border: 1px solid ${theme.colors.primary};
    border-radius: 0.5rem;
    transition: background 0.3s ease-in-out;
    :hover {
      background: ${theme.colors.primary};
    }
  `}
`;

export const Pillars = styled.div`
  margin-top: 3rem;
  h3 {
    font-size: 2.6rem;
  }
`;
export const PillarsWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const PillarsCard = styled.div`
  text-align: left;
  img {
    max-height: 15rem;
  }
  p {
    line-height: 1.5;
  }
  span {
    display: block;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2;
  }
  @media screen and (min-width: 525px) {
    max-width: 25rem;
  }
`;
