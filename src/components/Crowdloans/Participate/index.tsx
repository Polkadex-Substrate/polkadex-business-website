import { PrimaryButton } from 'components';

import * as S from './styles';

export const Participate = () => {
  return (
    <S.Wrapper id="participate">
      <S.Title>
        <div>
          <h2>Polkadex Crowdloan Partners</h2>
          <p>Thank you to Polkadex Crowdloan partners.</p>
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
                  content="Find out more"
                  href="https://crowdloan.parallel.fi/#/auction/contribute/polkadot/2040"
                  target="_blank"
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
                  content="Find out more"
                  href="https://bifrost.app/vcrowdloan"
                  target="_blank"
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
                  content="Find out more"
                  href="https://xdot.equilibrium.io/en/contribute?p=Polkadex"
                  target="_blank"
                />
              </S.Rewards>
            </Card>
          </S.ColumnBox>
          <small>
            <strong>Disclaimer:</strong>Polkadex Crowdloan Launch Partners are
            responsible for distributing partners rewards. Polkadex is not
            liable for additional partner rewards.
          </small>
        </S.Row>
        <S.RowFlat>
          <h4>Wallets</h4>
          <S.RowFlatWrapper>
            <HorizontalCard
              title="Polkadot{.js}"
              description="Wallet"
              img="polkadotjs"
              link="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/parachains/crowdloan"
            />
            <HorizontalCard
              title="Nova Wallet"
              description="Wallet"
              img="novaWallet"
              link="https://novawallet.io"
            />
            <HorizontalCard
              title="Fearless Wallet"
              description="Wallet"
              img="fearlessWallet"
              link="https://fearlesswallet.io"
            />
            <HorizontalCard
              title="Talisman"
              description="Wallet"
              img="talisman"
              link="https://app.talisman.xyz/portfolio"
            />
            <HorizontalCard
              title="SubWallet"
              description="Wallet"
              img="subWallet"
              link="https://subwallet.app"
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
              link="https://www.kucoin.com/earn/dot-slot-auction/staking?id=2161&rule_path=/en-kucoin-supports-dot-slot-machine-auction"
            />
            <HorizontalCard
              title="Kraken"
              description="Exchange"
              img="kraken"
              link="https://www.kraken.com/u/earn/parachains"
            />
            <HorizontalCard
              title="MXC"
              description="Exchange"
              img="mxc"
              link="https://www.mexc.com/slot/polkadot"
            />
            <HorizontalCard
              title="Gate.io"
              description="Exchange"
              img="gateio"
              link="https://www.gate.io/tw/slot_auction"
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
              link="https://polkadot.subscan.io/crowdloan/2040-0?tab=contribute"
            />
            <HorizontalCard
              title="Subvis"
              description="Explorer"
              img="subvis"
              link="https://subvis.io/crowdloan"
            />
            <HorizontalCard
              title="PolkaProject"
              description="Explorer"
              img="polkaProject"
              link="http://polkaproject.com"
            />
            <HorizontalCard
              title="Parachains.info"
              description="Explorer"
              img="parachains"
              link="https://parachains.info/auctions"
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
  link = '#',
  onClick = undefined,
}) => (
  <S.HorizontalCard
    isActive={isActive}
    href={link}
    target={isActive ? '_blank' : '_self'}
    onClick={onClick}
  >
    <S.HorizontalCardContent>
      <img src={`img/partnerLaunch/${img}.svg`} alt="polkadotjs" />
      <div>
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </S.HorizontalCardContent>
    <S.HorizontalCardVideo />
  </S.HorizontalCard>
);
