import * as S from './styles';

const OthersProducts = () => (
  <S.Wrapper>
    <S.ProductsContainer>
      <S.Col>
        <S.ColContainer>
          <S.Tag>Soon</S.Tag>
          <img
            src="/img/polkadexIDO.svg"
            alt="Misterious Polkadex IDO Platform screenshot"
          />
          <S.Card>
            <div>
              <span>2021 Q3-Q4</span>
              <h5>Polkadex IDO Platform</h5>
            </div>
            <p>
              Polkadex IDO Platform allows token projects to create ERC-20 like
              tokens. Teams can raise funds and get listed on the Polkadex
              exchange in one click.
            </p>
          </S.Card>
        </S.ColContainer>
      </S.Col>
      <S.Col id="mobileApp">
        <S.ColContainer>
          <S.Tag>Soon</S.Tag>
          <img
            src="/img/polkadexAppMobile.svg"
            alt="Misterious Polkadex IDO Platform screenshot"
          />
          <S.Card>
            <div>
              <span>2021 Q3-Q4</span>
              <h5>Polkadex Mobile</h5>
            </div>
            <p>
              Polkadex Mobile allows traders to place modify and cancel trades
              from their air-gapped cold wallets as well as receive funds
              directly to it. It shows a paradigm shift in traditional trading.
            </p>
          </S.Card>
        </S.ColContainer>
      </S.Col>
    </S.ProductsContainer>
  </S.Wrapper>
);

export default OthersProducts;
