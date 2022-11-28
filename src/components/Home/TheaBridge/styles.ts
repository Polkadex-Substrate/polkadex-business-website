import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: grid;
    gap: 3rem;
    max-width: 100rem;
    margin: 8rem auto 0 auto;
    @media screen and (max-width: 1200px) {
      margin: 4rem auto;
    }
    @media screen and (max-width: 1000px) {
      padding: 1rem;
    }
  `}
`;

export const Hero = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 4rem;
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
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2 {
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
  @media screen and (max-width: 670px) {
    margin-top: 5rem;
  }
`;
export const HeroVideoPreview = styled.div`
  svg {
    width: 100%;
  }
`;

export const HeroVideoFloat = styled.div`
  position: absolute;
  top: -5rem;
  left: 2rem;
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
`;
export const FeaturesHero = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 2rem;
    align-items: center;
    @media screen and (min-width: 670px) {
      grid-template-columns: 3fr 1fr;
    }
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
  gap: 2rem;
  margin-top: 3rem;
`;

export const FeaturesCard = styled(motion.div)`
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
