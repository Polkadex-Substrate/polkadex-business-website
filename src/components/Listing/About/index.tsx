import * as Icons from 'components/Icons';
import Link from 'next/link';

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
          <h3>Join Polkadex</h3>
          <S.Description>
            Joining Polkadex means you get to join a unified ecosystem bringing
            together legacy and future blockchain trading communities. It means
            taking an organic, community-driven approach to liquidity provision
            and price discovery. It also means you get to empower your community
            with non-custodial, high-performance trading at 0% trading fees.
          </S.Description>
          <S.Content>
            <Card icon="ListingEasy">Easy and transparent listing process</Card>
            <Card icon="People">
              Engage your community with Polkadex ecosystem dApps
            </Card>
            <Card icon="Help">
              Receive continuous support from the Polkadex team
            </Card>
            <Card icon="Growth">
              Broaden your outreach & increase adoption with partners from
              across the Polkadex ecosystem
            </Card>
          </S.Content>
          <S.Actions>
            <Link href="/orderbook">
              <a>
                Learm more about Orderbook{' '}
                <div>
                  <Icons.ArrowRight />
                </div>{' '}
              </a>
            </Link>
            <a
              href="https://orderbook.polkadex.trade"
              target="_blank"
              rel="noreferrer"
            >
              Start trading
            </a>
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
