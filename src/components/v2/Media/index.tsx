import { ImgHTMLAttributes } from 'react';

import * as S from './styles';

export const Media = () => {
  return (
    <S.Wrapper>
      <h2>Seen on</h2>
      <S.Content>
        <S.Container>
          <Card src="/img/mediaList/bitcointalk.png" alt="bitcointalk logo" />
          <Card src="/img/mediaList/coingecko.png" alt="coingecko logo" />
          <Card
            src="/img/mediaList/coinmarketcap.png"
            alt="coinmarketcap logo"
          />
          <Card src="/img/mediaList/marketwatch.png" alt="marketwatch logo" />
          <Card src="/img/mediaList/mashable.png" alt="mashable logo" />
          <Card src="/img/mediaList/nasddaq.png" alt="nasddaq logo" />
          <Card src="/img/mediaList/techcrunch.png" alt="techcrunch logo" />
          <Card
            src="/img/mediaList/thecointelegraph.png"
            alt="thecointelegraph logo"
          />

          <Card src="/img/mediaList/bitcointalk.png" alt="bitcointalk logo" />
          <Card src="/img/mediaList/coingecko.png" alt="coingecko logo" />
          <Card
            src="/img/mediaList/coinmarketcap.png"
            alt="coinmarketcap logo"
          />
          <Card src="/img/mediaList/marketwatch.png" alt="marketwatch logo" />
          <Card src="/img/mediaList/mashable.png" alt="mashable logo" />
          <Card src="/img/mediaList/nasddaq.png" alt="nasddaq logo" />
          <Card src="/img/mediaList/techcrunch.png" alt="techcrunch logo" />
          <Card
            src="/img/mediaList/thecointelegraph.png"
            alt="thecointelegraph logo"
          />

          <Card src="/img/mediaList/bitcointalk.png" alt="bitcointalk logo" />
          <Card src="/img/mediaList/coingecko.png" alt="coingecko logo" />
          <Card
            src="/img/mediaList/coinmarketcap.png"
            alt="coinmarketcap logo"
          />
          <Card src="/img/mediaList/marketwatch.png" alt="marketwatch logo" />
          <Card src="/img/mediaList/mashable.png" alt="mashable logo" />
          <Card src="/img/mediaList/nasddaq.png" alt="nasddaq logo" />
          <Card src="/img/mediaList/techcrunch.png" alt="techcrunch logo" />
          <Card
            src="/img/mediaList/thecointelegraph.png"
            alt="thecointelegraph logo"
          />
        </S.Container>
      </S.Content>
    </S.Wrapper>
  );
};

type Props = ImgHTMLAttributes<HTMLImageElement>;
const Card = ({ ...props }: Props) => (
  <S.Card>
    <img {...props} alt={props.alt} />
  </S.Card>
);
