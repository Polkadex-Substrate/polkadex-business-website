import styled, { css } from 'styled-components';

export const Flex = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Wrapper = styled(Flex)`
  ${({ theme }) => css`
    flex-direction: column;
  `}
`;

export const Actions = styled(Flex)`
  ${({ theme }) => css`
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Switch = styled(Flex)`
  ${({ theme }) => css`
    align-items: center;
  `}
`;
