import * as Icons from 'components/Icons';

import * as S from './styles';

export const Exchanges = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <h2>Exchanges</h2>
        <S.Container>
          <S.Card href="/" target="_blank">
            <Icons.KucoinExchange />
            <p>KuCoin</p>
          </S.Card>
          <S.Card href="/" target="_blank">
            <img src="/img/gateio.png" alt="Gateio Logo" />
            <p>Gateio</p>
          </S.Card>
          <S.Card href="/" target="_blank">
            <Icons.AscendEX />
            <p>AscendEX</p>
          </S.Card>
          <S.Card href="/" target="_blank">
            <Icons.MexcExchange />
            <p>MEXC</p>
          </S.Card>
        </S.Container>
      </S.Content>
    </S.Wrapper>
  );
};
