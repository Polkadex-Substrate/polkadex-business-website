import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-right: 28px;

  /* animation: 6s shake alternate-reverse infinite ease-in-out;

  @keyframes shake {
    0% {
      transform: translateY(50px) translateX(0);
    }
    25% {
      transform: translateY(100px) translateX(0);
    }
    50% {
      transform: translateY(50px) translateX(0);
    }
    75% {
      transform: translateY(100px) translateX(0);
    }
    100% {
      transform: translateY(50px) translateX(0);
    }
  } */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

type TProps = {
  position?: {
    x?: number;
    y?: number;
  };
};

export const IconWrapper = styled.div<TProps>`
  width: 30px;
  height: 30px;

  transform: translateY translateX;
`;

// transform: translateY(${({ position }) => position?.y || 27}px)
// translateX(${({ position }) => position?.x || 3}px);
