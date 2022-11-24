import * as Icons from 'components/Icons';
import { ImgHTMLAttributes } from 'react';

import * as S from './styles';

export const SeenOn = () => {
  return (
    <S.Wrapper>
      <h2>Seen on</h2>
      <S.Content>
        <S.ContentFlex>
          <Card src="/img/partners/coingecko.png" alt="CoinGecko logo" />
          <Card icon="Investing" />
          <Card icon="Cointelegraph" />
          <Card src="/img/partners/bitcoinTalk.png" alt="BitcoinTalk logo" />
          <Card src="/img/partners/decrypt.png" alt="Decrypt logo" />
          <Card icon="Nasdaq" />
        </S.ContentFlex>
        <S.ContentFlex>
          <Card src="/img/partners/techCrunch.png" alt="TechCrunch logo" />
          <Card icon="Mashable" />
          <Card icon="MarketWatch" />
          <Card src="/img/partners/yahooFinance.png" alt="Yahoo Finance logo" />
          <Card icon="CoinmarketcapLogo" />
          <Card src="/img/partners/hackerNoon.png" alt="HackerNoon logo" />
        </S.ContentFlex>
      </S.Content>
    </S.Wrapper>
  );
};

type Props = { icon?: string } & ImgHTMLAttributes<HTMLImageElement>;
const Card = ({ icon = null, ...props }: Props) => {
  const IconComponent = Icons[icon];
  return (
    <S.Card>
      {icon?.length ? <IconComponent /> : <img {...props} alt={props.alt} />}
    </S.Card>
  );
};
