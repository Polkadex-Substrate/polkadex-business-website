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
                <PrimaryButton
                  content="Contribute Now!"
                  href="https://parallel.fi"
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
                    <strong>0.02 BNC per DOT referral bonus</strong>
                  </li>
                  <li>
                    <strong>1 vsDOT</strong> per <strong>every DOT</strong>
                  </li>
                </ul>
                <PrimaryButton
                  content="Contribute Now!"
                  href="https://bifrost.app/vCrowdloan"
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
                    <strong>1 EQ</strong> tokens <strong>per DOT</strong>
                  </li>
                  <li>
                    <strong>10.5 EQ per DOT referral bonus</strong>
                  </li>
                  <li>
                    <strong>1 xDOT</strong> per <strong>every DOT</strong>
                  </li>
                </ul>
                <PrimaryButton
                  content="Contribute Now!"
                  href="https://equilibrium.io"
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
              link="https://polkadot.js.org/extension/"
            />
            <HorizontalCard
              title="Nova Wallet"
              description="Wallet"
              img="novaWallet"
              isActive={false}
              // link="https://novawallet.io"
            />
            <HorizontalCard
              title="Fearless Wallet"
              description="Wallet"
              img="fearlessWallet"
              isActive={false}
              // link="https://fearlesswallet.io"
            />
            <HorizontalCard
              title="Math Wallet"
              description="Wallet"
              img="mathWallet"
              isActive={false}
              // link="https://mathwallet.org"
            />
            <HorizontalCard
              title="Talisman"
              description="Wallet"
              img="talisman"
              isActive={false}
              // link="https://app.talisman.xyz/portfolio"
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
              isActive={false}
              // link="https://www.kucoin.com"
            />
            <HorizontalCard
              title="AscendEX"
              description="Exchange"
              img="ascendEX"
              isActive={false}
              // link="https://ascendex.com"
            />
            <HorizontalCard
              title="Kraken"
              description="Exchange"
              img="kraken"
              isActive={false}
              // link="https://www.kraken.com"
            />
            <HorizontalCard
              title="Huobi"
              description="Exchange"
              img="huobi"
              isActive={false}
              // link="https://www.huobi.com"
            />
            <HorizontalCard
              title="Gate.io"
              description="Exchange"
              img="gateio"
              isActive={false}
              // link="https://www.gate.io"
            />
            <HorizontalCard
              title="Okex"
              description="Exchange"
              img="okex"
              isActive={false}
              // link="https://www.okex.com"
            />
            <HorizontalCard
              title="MXC"
              description="Exchange"
              img="mxc"
              isActive={false}
              // link="https://www.mexc.com"
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
              isActive={false}
              // link="https://www.subscan.io"
            />
            <HorizontalCard
              title="Subvis"
              description="Explorer"
              img="subvis"
              isActive={false}
              // link="https://subvis.io"
            />
            <HorizontalCard
              title="PolkaProject"
              description="Explorer"
              img="polkaProject"
              isActive={false}
              // link="http://polkaproject.com"
            />
            <HorizontalCard
              title="Parachains.info"
              description="Explorer"
              img="parachains"
              isActive={false}
              // link="https://parachains.info"
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
}) => (
  <S.HorizontalCard
    isActive={isActive}
    href={link}
    target={isActive ? '_blank' : '_self'}
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