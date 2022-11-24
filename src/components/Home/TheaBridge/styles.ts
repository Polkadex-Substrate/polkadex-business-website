import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 8rem auto 0 auto;
    @media screen and (max-width: 1200px) {
      margin: 4rem 1rem;
    }
  `}
`;

export const Hero = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 3rem;
  `}
`;
export const HeroWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 40rem;
    margin: 0 auto;
    text-align: center;
    h2 {
      margin-bottom: 3rem;
      font-size: 3rem;
      font-weight: 500;
      line-height: 1.8;

      svg {
        max-width: 9rem;
        height: auto;
        overflow: hidden;
      }
    }
    p {
      line-height: ${theme.font.lineHeight.normal};
    }
  `}
`;

export const HeroIcon = styled.div`
  width: 8rem;
  margin-bottom: 3rem;
  margin: 0 auto;
`;
export const HeroVideo = styled.div`
  position: relative;
  width: 100%;
`;
export const HeroVideoFloat = styled.div`
  position: absolute;
  top: 0;
  left: 8rem;
  display: flex;
  gap: 1rem;
  span {
    display: block;
    font-family: 'Caveat';
    font-size: 2.5rem;
    margin-right: 2rem;
    white-space: nowrap;
  }
  svg {
    width: 6rem;
  }
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: -5rem;
`;
export const FeaturesHero = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 8rem;
    align-items: center;
    a {
      padding: 1rem 3rem;
      border-radius: 0.4rem;
      width: fit-content;
      justify-self: center;
      :first-child {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        transition: background 0.2s ease-in-out;
      }
      :last-child {
        color: ${theme.colors.blue};
        transition: background 0.2s ease-in-out;
        :hover {
          background: ${theme.colors.blue}19;
        }
      }
    }
    p {
      line-height: ${theme.font.lineHeight.normal};
    }
  `}
`;
export const FeaturesCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 5rem;
  margin-top: 3rem;
`;
export const FeaturesCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    p {
      line-height: ${theme.font.lineHeight.normal};
    }
    svg {
      width: 3rem;
      height: 3rem;
    }
  `}
`;
