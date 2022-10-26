import styled from 'styled-components';

export const Wrapper = styled.div<{
  isVisible: boolean;
  hasNotRelative: boolean;
}>`
  padding: 0 15px;

  transition: transform 1s ease-in;

  position: ${({hasNotRelative}) => (hasNotRelative ? 'static' : 'relative')};

  @media screen and (min-width: 576px) {
    padding: 0 calc(50vw - 280px);
  }
  @media screen and (min-width: 768px) {
    padding: 0 calc(50vw - 470px);
  }
  @media screen and (min-width: 992px) {
    padding: 0 calc(50vw - 590px);
  }
  @media screen and (min-width: 1200px) {
    padding: 0 calc(50vw - 700px);
  }
`;

export const ObservBox = styled.div`
  width: -1px;
`;
