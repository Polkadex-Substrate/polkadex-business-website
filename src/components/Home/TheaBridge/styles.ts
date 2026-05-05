import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: grid;
    gap: 3rem;
    max-width: 120rem;
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
  ${({ theme }) => css`
    position: relative;
    svg {
      width: 100%;
      border: 1px solid ${theme.colors.secondaryBackgroundOpacity};
      border-radius: 1rem;
    }
    div {
      background: rgba(13, 13, 14, 0)
        linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0) 10%,
          rgba(13, 13, 14, 0.1) 50%,
          rgba(13, 13, 14, 0.5) 75%,
          rgba(13, 13, 14, 1) 100%
        )
        repeat scroll 0 0;
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
    }
  `}
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 100rem;
  margin: 0 auto;
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

      color: ${theme.colors.blue};
      transition: background 0.2s ease-in-out;
      :hover {
        background: ${theme.colors.blue}19;
      }
      svg {
        display: inline-block;
        width: 1rem;
        vertical-align: middle;
        margin-left: 0.3rem;
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
