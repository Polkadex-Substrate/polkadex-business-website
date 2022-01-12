import { Icon, PrimaryButton } from 'components';

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
              >
                <S.Rewards>
                  <span>Rewards</span>
                  <ul>
                    <li>
                      <strong>4 PARA</strong> tokens <strong>per DOT</strong>
                    </li>
                    <li>
                      <strong>1 cDOT</strong> per <strong>every DOT</strong>
                    </li>
                    <li>
                      <strong>5%</strong> Referral Bonus
                    </li>
                  </ul>
                  <PrimaryButton content="Contribute Now!" href="#/" />
                </S.Rewards>
              </Card>
              <Card title="Bifrost" description="Launch Partner" img="bifrost">
                <S.Rewards>
                  <span>Rewards</span>
                  <ul>
                    <li>
                      <strong>1 EQ</strong> tokens <strong>per DOT</strong>
                    </li>
                    <li>
                      <strong>1 xDOT</strong> per <strong>every DOT</strong>
                    </li>
                  </ul>
                  <PrimaryButton content="Contribute Now!" href="#/" />
                </S.Rewards>
              </Card>
              <Card
                title="Equilibrium"
                description="Launch Partner"
                img="equilibrium"
              >
                <S.Rewards>
                  <span>Rewards</span>
                  <ul>
                    <li>
                      <strong>0.04 BNC tokens per DOT</strong>
                    </li>
                    <li>
                      <strong>1 vsDOT</strong> per <strong>every DOT</strong>
                    </li>
                  </ul>
                  <PrimaryButton content="Contribute Now!" href="#/" />
                </S.Rewards>
              </Card>
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
          <h4>Exchanges</h4>
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
              title="Subvis"
              description="Explorer"
              img="subvis"
            />
            <HorizontalCard
              title="PolkaProject"
              description="Explorer"
              img="polkaProject"
            />
            <HorizontalCard
              title="Parachains.info"
              description="Explorer"
              img="parachains"
            />
          </S.RowFlatWrapper>
        </S.RowFlat>
      </S.Content>
    </S.Wrapper>
  );
};

const Card = ({ title, description, img, children = null }) => (
  <S.ColumnCard isFlip={!!children}>
    <S.FlipCardInner>
      <S.FlipFront>
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
      </S.FlipFront>
      {children && <S.FlipBack>{children}</S.FlipBack>}
    </S.FlipCardInner>
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
