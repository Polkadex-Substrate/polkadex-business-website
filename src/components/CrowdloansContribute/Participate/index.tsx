import * as S from './styles';

export const Participate = () => {
  return (
    <S.Wrapper id="contribute">
      <S.Title>
        <div>
          <h2>How to contribute?</h2>
          <p>
            You can contribute directly via Polkadot.js as well as using your
            favorite wallet provider.
          </p>
        </div>
      </S.Title>
      <S.Content>
        <S.RowFlat>
          <h4>Wallets</h4>
          <S.RowFlatWrapper>
            <Card
              title="Polkadot{.js}"
              img="polkadotjs"
              link="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/parachains/crowdloan"
            />
            <Card
              disabled
              title="Nova Wallet"
              img="novaWallet"
              link="https://novawallet.io"
            />
            <Card
              disabled
              title="Talisman"
              img="talisman"
              link="https://app.talisman.xyz/portfolio"
            />
            <Card
              title="SubWallet"
              img="subWallet"
              link="https://subwallet.app"
            />
          </S.RowFlatWrapper>
        </S.RowFlat>

        <S.RowFlat>
          <h4>Explorer</h4>
          <S.RowExplorerWrapper>
            <HorizontalCard
              title="Subscan"
              img="subscan"
              link="https://polkadot.subscan.io/crowdloan/2040-0?tab=contribute"
            />

            <HorizontalCard
              title="PolkaProject"
              img="polkaProject"
              link="http://polkaproject.com"
            />
            <HorizontalCard
              title="Parachains.info"
              img="parachains"
              link="https://parachains.info/auctions"
            />
          </S.RowExplorerWrapper>
        </S.RowFlat>
      </S.Content>
    </S.Wrapper>
  );
};

const Card = ({ title, img, link, disabled = false }) => (
  <S.ColumnCard disabled={disabled} href={link} target="_blank">
    <S.FlipFront>
      <img src={`img/partnerLaunch/${img}.svg`} alt="parallel finance" />
      <span>{title}</span>
    </S.FlipFront>
  </S.ColumnCard>
);

const HorizontalCard = ({ title, img, isActive = true, link = '#' }) => (
  <S.HorizontalCard isActive={isActive} href={link} target="_blank">
    <S.HorizontalCardContent>
      <img src={`img/partnerLaunch/${img}.svg`} alt="polkadotjs" />
      <div>
        <span>{title}</span>
      </div>
    </S.HorizontalCardContent>
    <S.HorizontalCardVideo />
  </S.HorizontalCard>
);
