import * as Icons from 'components/Icons';

import * as S from './styles';

export const Newsletter = ({
  title = 'Stay in the loop',
  description = 'Subscribe to the Polkadex newsletter',
}) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ImageWrapper>
          <Icons.Airplane />
        </S.ImageWrapper>
        <S.Title>
          <h2>{title}</h2>
          <p>{description}</p>
        </S.Title>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </S.Container>
    </S.Wrapper>
  );
};
