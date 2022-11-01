import styled from 'styled-components';

type TProps = {
  clientHeight: number;
};

export const Wrapper = styled.div<TProps>`
  /* background: ${({ theme }) => theme.colors.verticalGradient}; */

  width: 100%;

  height: 100%;
  background: linear-gradient(180deg, #242430 0%, rgba(28, 28, 38, 0) 100%);

  border-radius: 15px;
  background-position: 0 0;
`;
