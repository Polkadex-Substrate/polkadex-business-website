import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 790px) {
    flex-direction: column;

    & p {
      margin: 3rem 0 2rem 0;
    }
  }
  & p {
    margin-right: 1rem;
    word-break: break-all;
  }
`;
