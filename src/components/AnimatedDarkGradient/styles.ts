import styled from 'styled-components';

type TProps = {
  clientHeight: number;
};

export const Wrapper = styled.div<TProps>`
  /* background: ${({theme}) => theme.colors.verticalGradient}; */

  width: 100%;

  background: linear-gradient(
    180deg,
    #242430 0%,
    rgba(28, 28, 38, 0) 80%,
    #242430 100%
  );

  border-radius: 15px;
  background-position: 0 0;

  animation: background 2.5s infinite alternate;
  animation-timing-function: ease-in;

  @keyframes background {
    0% {
      background-position: 0 0;
    }

    100% {
      background-position: ${({clientHeight}) => clientHeight}px
        ${({clientHeight}) => clientHeight}px;
    }
  }
  transition: 500ms transform;
`;
