import { PrimaryButton } from 'components/Button';
import Title from 'components/Title';

import * as S from './styles';

const Products = () => (
  <S.Wrapper>
    <S.TitleContainer>
      <Title
        tag="Products"
        title="Polkadex"
        highlight="Orderbook"
        description="Polkadex Orderbook is a non-custodial Layer 2 based exchange on the Polkadex Network."
      />
      <S.Col>
        <PrimaryButton
          icon="doubleArrowRight"
          content="Polkadex Orderbook"
          href="https://docs.polkadex.trade/orderbookIntroduction"
          withOpacity
        />
      </S.Col>
    </S.TitleContainer>
    <S.BenefitsContainer>
      <S.Col>
        <img
          src="/img/icons/multipleWallets.svg"
          alt="Table, Smartphone and Desktop Icon, simulating multiple devices"
        />
        <h3>Register multiple hot wallets</h3>
        <p>
          Connect hot wallets based on browser extensions, mobile phones or
          iPads and add on-chain trading bots to automate trading with your
          funds.
        </p>
      </S.Col>
      <S.Col>
        <img
          src="/img/icons/thirdParty.svg"
          alt="Cloud with points Icon simulating third party"
        />
        <h3>Delegate your assets to third parties</h3>
        <p>
          Manage your assets with Polkadex Orderbook and delegate them to third
          parties. Make profits through algorithmic trading while still keeping
          control of your crypto assets.
        </p>
      </S.Col>
      <S.Col>
        <img
          src="/img/icons/secureAssets.svg"
          alt="Coins and secure icon, simulating assets security"
        />
        <h3>Keep your assets safe and secure</h3>
        <p>
          Leave your assets on the exchange without worrying about hacks and
          save on transaction fees for moving your funds in and out every time
          you want to trade.
        </p>
      </S.Col>
    </S.BenefitsContainer>
    <S.TechnologiesContainer>
      <h4>Technologies</h4>
      <img
        src="/img/technologiesHero.svg"
        alt="Isometric Illustration with Polkadex, Kilt, IFPS, Polkadot.js and SGX Logos"
      />
    </S.TechnologiesContainer>
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

export default Products;
