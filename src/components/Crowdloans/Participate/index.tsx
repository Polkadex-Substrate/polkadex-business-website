import { Icon } from 'components';

import * as S from './styles';

export const Participate = () => {
  return (
    <S.Wrapper id="participate">
      <S.Title>
        <div>
          <h2>Participate in Polkadex Crowdloans</h2>
        </div>
        <div>
          <p>
            Be part of blockchain history by helping kick start your favorite
            parachains.
          </p>
        </div>
      </S.Title>
      <S.Content>
        <S.Row>
          <S.Column>
            <h4>Launch Partners</h4>
            <S.ColumnBox>
              <Card
                title="Parallel Finance"
                description="Launch Partner"
                img="parallelFinance"
              />
              <Card
                title="Bifrost"
                description="Launch Partner"
                img="bifrost"
              />
              <Card
                title="Equilibrium"
                description="Launch Partner"
                img="equilibrium"
              />
            </S.ColumnBox>
          </S.Column>
          <S.Column>
            <h4>Wallets</h4>
            <S.ColumnBox>
              <Card
                title="Polkadot{.js}"
                description="Wallet"
                img="polkadotjs"
              />
            </S.ColumnBox>
          </S.Column>
        </S.Row>
        <S.RowFlat>
          <h4>Wallets</h4>
          <S.RowFlatWrapper>
            <HorizontalCard
              title="Kucoin"
              description="Exchange"
              img="kucoin"
            />
            <HorizontalCard
              title="AscendEX"
              description="Exchange"
              img="ascendEX"
            />
            <HorizontalCard
              title="Kraken"
              description="Exchange"
              img="kraken"
            />
            <HorizontalCard title="Huobi" description="Exchange" img="huobi" />
            <HorizontalCard
              title="Gate.io"
              description="Exchange"
              img="gateio"
            />
            <HorizontalCard title="Okex" description="Exchange" img="okex" />
            <HorizontalCard title="MXC" description="Exchange" img="mxc" />
          </S.RowFlatWrapper>
        </S.RowFlat>
        <S.RowFlat>
          <h4>Explorer</h4>
          <S.RowFlatWrapper>
            <HorizontalCard
              title="Subscan"
              description="Explorer"
              img="subscan"
            />
            <HorizontalCard
              title="DotMarketCap"
              description="Explorer"
              img="dotMarketCap"
            />
          </S.RowFlatWrapper>
        </S.RowFlat>
      </S.Content>
    </S.Wrapper>
  );
};

const Card = ({ title, description, img }) => (
  <S.ColumnCard>
    <S.ColumnHeader>
      <div />
      <div>
        <Icon background="none" name="Video" />
        <span>Watch Tutorial</span>
      </div>
    </S.ColumnHeader>
    <S.ColumnBody>
      <img src={`img/partnerLaunch/${img}.svg`} alt="parallel finance" />
    </S.ColumnBody>
    <S.ColumnFooter>
      <span>{title}</span>
      <p>{description}</p>
    </S.ColumnFooter>
  </S.ColumnCard>
);

const HorizontalCard = ({ title, description, img }) => (
  <S.HorizontalCard>
    <S.HorizontalCardContent>
      <img src={`img/partnerLaunch/${img}.svg`} alt="polkadotjs" />
      <div>
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </S.HorizontalCardContent>
    <S.HorizontalCardVideo>
      <Icon background="none" name="Video" />
      <span>Watch Tutorial</span>
    </S.HorizontalCardVideo>
  </S.HorizontalCard>
);
