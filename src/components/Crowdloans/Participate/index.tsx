import { PrimaryButton } from 'components';

import * as S from './styles';

export const Participate = ({ hasAccepted }) => {
  return (
    <S.Wrapper id="participate">
      <S.Title>
        <div>
          <h2>Participate in Polkadex Crowdloans</h2>
        </div>
        <div>
          <p>
            Be a part of blockchain history by helping kick start your favorite
            parachains.
          </p>
        </div>
      </S.Title>
      <S.Content>
        <S.Row>
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
                </ul>
                <PrimaryButton
                  content="Contribute Now!"
                  href={
                    hasAccepted
                      ? ' https://crowdloan.parallel.fi/#/auction/contribute/polkadot/2040'
                      : '#participate'
                  }
                  target="_blank"
                  disabled={!hasAccepted}
                />
              </S.Rewards>
            </Card>
            <Card title="Bifrost" description="Launch Partner" img="bifrost">
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
                <PrimaryButton
                  content="Contribute Now!"
                  href={
                    hasAccepted
                      ? 'https://bifrost.app/vcrowdloan?paraId=2036'
                      : '#participate'
                  }
                  target="_blank"
                  disabled={!hasAccepted}
                />
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
                    <strong>10 EQ</strong> tokens <strong>per DOT</strong>
                  </li>
                  <li>
                    <strong>1 xDOT</strong> per <strong>every DOT</strong>
                  </li>
                </ul>
                <PrimaryButton
                  content="Contribute Now!"
                  href={
                    hasAccepted
                      ? 'https://xdot.equilibrium.io/en/contribute?p=Polkadex'
                      : '#participate'
                  }
                  target="_blank"
                  disabled={!hasAccepted}
                />
              </S.Rewards>
            </Card>
          </S.ColumnBox>
        </S.Row>
        <S.RowFlat>
          <h4>Wallets</h4>
          <S.RowFlatWrapper>
            <HorizontalCard
              title="Polkadot{.js}"
              description="Wallet"
              img="polkadotjs"
              link="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/parachains"
              hasAccepted={hasAccepted}
            />
            <HorizontalCard
              title="Nova Wallet"
              description="Wallet"
              img="novaWallet"
              link="https://novawallet.io"
              hasAccepted={hasAccepted}
            />
            <HorizontalCard
              title="Fearless Wallet"
              description="Wallet"
              img="fearlessWallet"
              link="https://fearlesswallet.io"
              hasAccepted={hasAccepted}
            />
            <HorizontalCard
              title="Talisman"
              description="Wallet"
              img="talisman"
              link="https://app.talisman.xyz/portfolio"
              hasAccepted={hasAccepted}
            />
            <HorizontalCard
              title="SubWallet"
              description="Wallet"
              img="subWallet"
              link="https://subwallet.app"
              hasAccepted={hasAccepted}
            />
            <HorizontalCard
              title="Math Wallet"
              description="Wallet"
              img="mathWallet"
              isActive={false}
              // link="https://mathwallet.org"
            />
          </S.RowFlatWrapper>
        </S.RowFlat>
        <S.RowFlat>
          <h4>Exchanges</h4>
          <S.RowFlatWrapper>
            <HorizontalCard
              title="Kucoin"
              description="Exchange"
              img="kucoin"
              link="https://www.kucoin.com/trade/PDEX-USDT"
              hasAccepted={hasAccepted}
            />
            <HorizontalCard
              title="Kraken"
              description="Exchange"
              img="kraken"
              link="https://www.kraken.com"
              // hasAccepted={hasAccepted}
              isActive={false}
            />
            <HorizontalCard
              title="MXC"
              description="Exchange"
              img="mxc"
              link="https://www.mexc.com"
              // hasAccepted={hasAccepted}
              isActive={false}
            />
          </S.RowFlatWrapper>
        </S.RowFlat>
        <S.RowFlat>
          <h4>Explorer</h4>
          <S.RowFlatWrapper>
            <HorizontalCard
              title="Subscan"
              description="Explorer"
              img="subscan"
              link="https://www.subscan.io"
              hasAccepted={hasAccepted}
            />
            <HorizontalCard
              title="Subvis"
              description="Explorer"
              img="subvis"
              link="https://subvis.io"
              hasAccepted={hasAccepted}
            />
            <HorizontalCard
              title="PolkaProject"
              description="Explorer"
              img="polkaProject"
              link="http://polkaproject.com"
              hasAccepted={hasAccepted}
            />
            <HorizontalCard
              title="Parachains.info"
              description="Explorer"
              img="parachains"
              link="https://parachains.info"
              hasAccepted={hasAccepted}
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
            {/* <Icon background="none" name="Video" />
            <span>Watch Tutorial</span> */}
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

const HorizontalCard = ({
  title,
  description,
  img,
  isActive = true,
  hasAccepted = false,
  link = '#',
}) => (
  <S.HorizontalCard
    isActive={isActive}
    href={!hasAccepted ? '#participate' : link}
    target={isActive && hasAccepted ? '_blank' : '_self'}
    hasAccepted={hasAccepted}
  >
    <S.HorizontalCardContent>
      <img src={`img/partnerLaunch/${img}.svg`} alt="polkadotjs" />
      <div>
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </S.HorizontalCardContent>
    <S.HorizontalCardVideo>
      {/* <Icon background="none" name="Video" />
      <span>Watch Tutorial</span> */}
    </S.HorizontalCardVideo>
  </S.HorizontalCard>
);
