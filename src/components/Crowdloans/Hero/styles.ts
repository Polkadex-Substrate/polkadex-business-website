import { PrimaryWrapper as Button } from 'components/Button/styles';
import { Wrapper as Icon } from 'components/Icon/styles';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-gap: 1rem;
  max-width: 95rem;
  margin: 0 auto;
  padding-top: 5rem;

  @media screen and (max-width: 950px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media screen and (min-width: 720px) {
    grid-template-columns: 1fr 1.3fr;
    padding: 15rem 0 4rem 0;
  }

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }

  img {
    width: 100%;
  }
`;

export const ScrollDown = styled.div`
  cursor: pointer;
  margin-top: 5rem;
  @media screen and (min-width: 720px) {
    margin-top: 18rem;
  }
  ${Icon} {
    animation: goBottom 1s infinite;

    @keyframes goBottom {
      0% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(1rem);
      }

      100% {
        transform: translateY(0);
      }
    }
  }

  span {
    display: block;
    margin-bottom: 0.5rem;

    ${Icon} {
      opacity: 0.5;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;

  ${Button}:first-child {
    margin-right: 1rem;
  }

  ${Button}:last-child {
    div {
      background: none;
    }
  }
`;
