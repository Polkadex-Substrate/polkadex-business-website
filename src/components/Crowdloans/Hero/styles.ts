import { PrimaryWrapper as Button } from 'components/Button/styles';
import { Wrapper as Icon } from 'components/Icon/styles';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-gap: 1rem;
  padding: 15rem 0 4rem 0;
  max-width: 95rem;
  margin: 0 auto;
  grid-template-columns: 1fr 1.3fr;
  @media screen and (max-width: 900px) {
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
  margin-top: 18rem;
  cursor: pointer;

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
