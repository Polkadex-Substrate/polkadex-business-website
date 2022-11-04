import * as Icons from 'components/Icons';

import * as S from './styles';

export const About = () => {
  return (
    <S.Wrapper id="about">
      <S.Container>
        <S.About>
          <S.AboutWrapper>
            <S.Title>
              <h2>What is Polkadex Orderbook?</h2>
              <p>
                Polkadex is a fully decentralized, peer-to-peer orderbook-based
                cryptocurrency exchange for the DeFi ecosystem built on
                Substrate. The main idea behind Polkadex is to create a platform
                that combines the benefits of centralized and decentralized
                exchanges into one cutting-edge solution that caters to all
                crypto traders.
              </p>
            </S.Title>
            <div />
          </S.AboutWrapper>
          <S.AboutImage>
            <img src="/img/orderbookMockup.png" alt="Orderbook mockup" />
          </S.AboutImage>
        </S.About>
        <S.Benefits>
          <h3>Why list on Polkadex Orderbook?</h3>
          <S.Content>
            <Card icon="ListingSwap">
              It’s a DEX that looks, feels, and performs like a CEX
            </Card>
            <Card icon="ListingLiquidity">Own your liquidity</Card>
            <Card icon="ListingIntegration">
              Drive volume with your own market-maker bot integrations
            </Card>
            <Card icon="ListingTrading">
              Level up with advanced trading functionality and limit orders
            </Card>
            <Card icon="ListingWallet">
              Keep your traders in control with non-custodial trading and
              gas-less trades
            </Card>
            <Card icon="ListingFrequency">Enable high frequency trading</Card>
            <Card icon="ListingEasy">Easy & transparent listing process</Card>
            <Card icon="ListingFees">No hidden fees</Card>
          </S.Content>
          <S.Actions>
            <a href="/testing..">
              Learm more about Orderbook{' '}
              <div>
                <Icons.ArrowRight />
              </div>{' '}
            </a>
            <a href="/testing">Start trading</a>
          </S.Actions>
        </S.Benefits>
      </S.Container>
    </S.Wrapper>
  );
};

const Card = ({ children, icon = 'Wallet' }) => {
  const IconComponent = Icons[icon];
  return (
    <S.Card>
      <div>
        <IconComponent />
      </div>
      <p>{children}</p>
    </S.Card>
  );
};
