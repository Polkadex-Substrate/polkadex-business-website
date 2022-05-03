import { PrimaryButton } from 'components';
import * as Icons from 'components/Icons';

import * as S from './styles';

export const Participate = ({ onAccept, hasAccepted }) => {
  return (
    <S.Wrapper id="contribute">
      <S.Title>
        <div>
          <h2> How to contribute? </h2>
          <p>
            You can contribute directly through Polkadexjs wallet or through one
            of Polkadex official crowd loan parters below.
          </p>
        </div>
        <div>
          <p>
            To contribute simply choose and click on one of Polkadex crowdloan
            partners below
          </p>
          <Icons.ArrowBottom />
        </div>
      </S.Title>
      <S.Content>
        <S.Row>
          <h4>Launch Partners</h4>
          <S.ColumnBox>
            <Card title="Parallel Finance" img="parallelFinance">
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
                      ? 'https://crowdloan.parallel.fi/#/auction/contribute/polkadot/2040'
                      : '#participate'
                  }
                  target="_blank"
                  disabled={!hasAccepted}
                  onClick={() =>
                    onAccept(
                      'https://crowdloan.parallel.fi/#/auction/contribute/polkadot/2040',
                      'ParallelFinance',
                    )
                  }
                />
              </S.Rewards>
            </Card>
            <Card title="Bifrost" img="bifrost">
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
                      ? 'https://bifrost.app/vcrowdloan'
                      : '#participate'
                  }
                  target="_blank"
                  disabled={!hasAccepted}
                  onClick={() =>
                    onAccept('https://bifrost.app/vcrowdloan', 'Bifrost')
                  }
                />
              </S.Rewards>
            </Card>
            <Card title="Equilibrium" img="equilibrium">
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
                  onClick={() =>
                    onAccept(
                      'https://xdot.equilibrium.io/en/contribute?p=Polkadex',
                      'Equilibrium',
                    )
                  }
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
              img="polkadotjs"
              link="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/parachains/crowdloan"
              hasAccepted={hasAccepted}
              onClick={() =>
                onAccept(
                  'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/parachains/crowdloan',
                  'Polkadotjs',
                )
              }
            />
            <HorizontalCard
              title="Nova Wallet"
              img="novaWallet"
              link="https://novawallet.io"
              hasAccepted={hasAccepted}
              onClick={() => onAccept('https://novawallet.io', 'NovaWallet')}
            />
            <HorizontalCard
              title="Fearless Wallet"
              img="fearlessWallet"
              link="https://fearlesswallet.io"
              hasAccepted={hasAccepted}
              onClick={() =>
                onAccept('https://fearlesswallet.io', 'FearlessWallet')
              }
            />
            <HorizontalCard
              title="Talisman"
              img="talisman"
              link="https://app.talisman.xyz/portfolio"
              hasAccepted={hasAccepted}
              onClick={() =>
                onAccept('https://app.talisman.xyz/portfolio', 'Talisman')
              }
            />
            <HorizontalCard
              title="SubWallet"
              img="subWallet"
              link="https://subwallet.app"
              hasAccepted={hasAccepted}
              onClick={() => onAccept('https://subwallet.app', 'SubWallet')}
            />
            <HorizontalCard
              title="Math Wallet"
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
              img="kucoin"
              link="https://www.kucoin.com/earn/dot-slot-auction/staking?id=2161&rule_path=/en-kucoin-supports-dot-slot-machine-auction"
              hasAccepted={hasAccepted}
              onClick={() =>
                onAccept(
                  'https://www.kucoin.com/earn/dot-slot-auction/staking?id=2161&rule_path=/en-kucoin-supports-dot-slot-machine-auction',
                  'Kucoin',
                )
              }
            />
            <HorizontalCard
              title="Kraken"
              img="kraken"
              link="https://www.kraken.com/u/earn/parachains"
              hasAccepted={hasAccepted}
              onClick={() =>
                onAccept('https://www.kraken.com/u/earn/parachains', 'Kraken')
              }
            />
            <HorizontalCard
              title="MXC"
              img="mxc"
              link="https://www.mexc.com/slot/polkadot"
              hasAccepted={hasAccepted}
              onClick={() =>
                onAccept('https://www.mexc.com/slot/polkadot', 'MXC')
              }
            />
            <HorizontalCard
              title="Gate.io"
              img="gateio"
              link="https://www.gate.io/tw/slot_auction"
              hasAccepted={hasAccepted}
              onClick={() =>
                onAccept('https://www.gate.io/tw/slot_auction', 'Gateio')
              }
            />
          </S.RowFlatWrapper>
        </S.RowFlat>
        <S.RowFlat>
          <h4>Explorer</h4>
          <S.RowFlatWrapper>
            <HorizontalCard
              title="Subscan"
              img="subscan"
              link="https://polkadot.subscan.io/crowdloan/2040-0?tab=contribute"
              hasAccepted={hasAccepted}
              onClick={() =>
                onAccept(
                  'https://polkadot.subscan.io/crowdloan/2040-0?tab=contribute',
                  'Subscan',
                )
              }
            />
            <HorizontalCard
              title="Subvis"
              img="subvis"
              link="https://subvis.io/crowdloan"
              hasAccepted={hasAccepted}
              onClick={() => onAccept('https://subvis.io/crowdloan', 'Subvis')}
            />
            <HorizontalCard
              title="PolkaProject"
              img="polkaProject"
              link="http://polkaproject.com"
              hasAccepted={hasAccepted}
              onClick={() =>
                onAccept('http://polkaproject.com', 'PolkaProject')
              }
            />
            <HorizontalCard
              title="Parachains.info"
              img="parachains"
              link="https://parachains.info/auctions"
              hasAccepted={hasAccepted}
              onClick={() =>
                onAccept('https://parachains.info/auctions', 'Parachainsinfo')
              }
            />
          </S.RowFlatWrapper>
        </S.RowFlat>
      </S.Content>
    </S.Wrapper>
  );
};

const Card = ({ title, img, children = null }) => (
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
        </S.ColumnFooter>
      </S.FlipFront>
      {children && <S.FlipBack>{children}</S.FlipBack>}
    </S.FlipCardInner>
  </S.ColumnCard>
);

const HorizontalCard = ({
  title,
  img,
  isActive = true,
  hasAccepted = false,
  link = '#',
  onClick = undefined,
}) => (
  <S.HorizontalCard
    isActive={isActive}
    href={!hasAccepted ? '#participate' : link}
    target={isActive && hasAccepted ? '_blank' : '_self'}
    hasAccepted={hasAccepted}
    onClick={onClick}
  >
    <S.HorizontalCardContent>
      <img src={`img/partnerLaunch/${img}.svg`} alt="polkadotjs" />
      <div>
        <span>{title}</span>
      </div>
    </S.HorizontalCardContent>
    <S.HorizontalCardVideo />
  </S.HorizontalCard>
);
