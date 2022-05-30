import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  max-width: 110rem;
  margin: 4rem auto 0 auto;
  @media screen and (max-width: 1200px) {
    padding: 4rem 1rem 2rem 1rem;
  }
`;

export const Slider = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  gap: 1rem;
`;

export const Features = styled.div`
  display: flex;
  column-gap: 3rem;
  row-gap: 6rem;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 8rem;
  span {
    display: block;
    font-weight: 550;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.6;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30rem;

  img {
    align-self: flex-start;
    max-height: 14rem;
    object-fit: contain;
  }
`;
export const FlexCard = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  gap: 2rem;
  max-width: 70rem;
  img {
    width: 100%;
    max-width: 35rem;
  }
`;
export const FlexTitle = styled.div``;
export const SliderImage = styled.div`
  position: relative;
  img {
    width: 100%;
  }
`;
export const Controls = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 1rem;
    background: ${theme.colors.white};
    border-radius: 10rem;
    padding: 0.5rem;
  `}
`;

export const Button = styled.button<{ isActive?: boolean }>`
  ${({ theme, isActive }) => css`
    background: ${isActive ? theme.colors.primary : 'none'};
    color: ${isActive ? theme.colors.white : theme.colors.black};
    border-radius: 10rem;
    padding: 1rem 2rem;
    font-weight: bold;
    font-size: 1.4rem;
  `}
`;

export const Title = styled.div`
  h2 {
    line-height: 1.2;
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 1.5;
  }
`;
export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    a {
      :first-child {
        background: ${theme.colors.white};
        color: ${theme.colors.black};
        border-radius: 0.8rem;
        padding: 1rem 2rem;
      }
      svg {
        width: 1rem;
        height: 1rem;
      }
    }
  `}
`;
