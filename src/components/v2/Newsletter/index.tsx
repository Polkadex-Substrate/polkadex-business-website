import * as Icons from 'components/Icons';

import * as S from './styles';

export const Newsletter = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ImageWrapper>
          <Icons.Airplane />
        </S.ImageWrapper>
        <S.Title>
          <h2>Stay in the loop</h2>
          <p>Subscribe to the Polkadex newsletter</p>
        </S.Title>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </S.Container>
    </S.Wrapper>
  );
};
