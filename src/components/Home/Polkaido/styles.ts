import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  max-width: 100rem;
  margin: 15rem auto 0 auto;
  @media screen and (max-width: 1200px) {
    margin: 4rem 1rem;
  }
  @media screen and (max-width: 720px) {
    padding: 1rem;
  }
`;

export const Hero = styled.div`
  display: grid;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  @media screen and (min-width: 720px) {
    grid-template-columns: 1fr minmax(auto, 30rem);
    margin-bottom: 10rem;
  }
`;

export const AsideLeft = styled(motion.div)`
  img {
    width: 100%;
    @media screen and (min-width: 720px) {
      transform: scale(1.7) translate(-10rem, 2rem);
    }
    @media screen and (max-width: 720px) {
      transform: translate(-8%, 2rem);
    }
  }
`;
export const AsideRight = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 720px) {
      align-items: center;
      text-align: center;
    }
    h2 {
      margin-bottom: 3rem;
      font-size: 3rem;
      font-weight: 500;
      line-height: 1.8;

      svg {
        display: block;
        width: 20rem;
        height: auto;
        overflow: hidden;
      }
    }
    p {
      line-height: ${theme.font.lineHeight.normal};
    }
  `}
`;

export const AsideRightIcon = styled.div`
  width: 8rem;
  margin-bottom: 3rem;
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;
    a {
      border-radius: 0.4rem;
      color: ${theme.colors.blue};
      svg {
        display: inline-block;
        width: 1rem;
        vertical-align: middle;
      }
    }
  `}
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* margin-top: -5rem; */
  @media screen and (max-width: 1000px) {
    padding: 1rem;
  }
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
