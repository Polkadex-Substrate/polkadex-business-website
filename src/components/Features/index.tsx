import { PrimaryButton } from 'components/Button';
import Title from 'components/Title';

import * as S from './styles';

const Features = () => (
  <S.Wrapper id="features">
    <S.TitleContainer>
      <Title
        title="The Future of"
        highlight="Decentralized Trading"
        tag="Features"
        description="Polkadex is the first project featuring an orderbook based exchange in the Polkadot ecosystem."
        position="center"
      />
    </S.TitleContainer>
    <S.BridgeContainer>
      <S.Box>
        <S.BridgeWrapper>
          <h4>
            Trustless <br />
            Cross-Chain Transfers
          </h4>
          <S.FeaturedParagraph>
            Trustless cross-chain bridges help to bring any blockchain token to
            Polkadex in a non-custodial and trustless manner. It functions
            through Parachain with Polkadot network and Snowfork with Ethereum
            network. Polkadex is built for the future making it possible to
            integrate with other liquidity providers using forkless upgrades. We
            do not have access to user funds or smart contract keys.
          </S.FeaturedParagraph>
          <PrimaryButton
            icon="doubleArrowRight"
            content="Learn More"
            href="https://docs.polkadex.trade/polkadexNetworkEcosystemParachain"
            background="none"
          />
          <S.BridgePlanned>
            <h6>Planned Bridges</h6>
            <S.BridgePlannedWrapper>
              <div>
                <img src="/img/icons/polkadot.svg" alt="Polkadot Logo icon" />
              </div>
              <div>
                <span>Polkadot</span>
                <p>
                  Once Polkadex becomes a parachain, it will be able to connect
                  to any other parachain and Polkadot network itself to share
                  assets in a trustless way. Polkadex will also get the ability
                  to bring assets from Ethereum to Polkadex.
                </p>
              </div>
            </S.BridgePlannedWrapper>
          </S.BridgePlanned>
        </S.BridgeWrapper>
      </S.Box>
      <S.BridgeImage>
        <img
          src="/img/bridgeHero.svg"
          alt="Bridge with Ethereum and Tether coins that represent cars and in the middle Polkadex System that represents the transformation of Ethereum into Tether currency"
        />
      </S.BridgeImage>
    </S.BridgeContainer>
    <S.BotsContainer>
      <S.BotsImage>
        <img
          src="/img/botsHero.svg"
          alt="3 Robots trading with Polkadex Api, represented by components"
        />
      </S.BotsImage>
      <S.Box>
        <div />
        <S.BotsWrapper>
          <h4>On-Chain Trading Bots</h4>
          <S.FeaturedParagraph>
            Trading bots on Polkadex bring High-Frequency Trading (HFT) to both
            retail and institutional investors. Zero cancellation fees allow
            traders to enter and exit the markets in a dynamic fashion based on
            the market situation and incentivize API endpoints for both trading
            bot companies and liquidity providers. Moreover the unique
            architecture of Polkadex eliminates such bottlenecks of traditional
            decentralized exchanges as front-running of orders by paying higher
            gas fees. decentralized exchanges.
          </S.FeaturedParagraph>
          <PrimaryButton
            icon="doubleArrowRight"
            content="Learn More"
            href="https://docs.polkadex.trade/orderbookBenefits"
            background="none"
          />
        </S.BotsWrapper>
      </S.Box>
    </S.BotsContainer>
    <S.FluidContainer>
      <S.Box>
        <div>
          <h2>
            Offchain <br />
            State Commits <span> V2 </span>
          </h2>
          <p>
            Polkadex Orderbook implements a Layer 2 Trusted Execution
            Environment (TEE) on top of Polkadex that allows an operator to
            maintain the Orderbook. The results produced by the TEE contain
            cryptographic proof. In the event of tampering the blockchain can
            invalidate the proof thereby not accepting the tampered state
            submitted by the Operator. The users&apos; funds always stay in the
            native blockchain and are controlled by the user. In this way
            Polkadex ensures that only the trader&apos;s private key can
            initiate a balance transfer.
          </p>
        </div>
        <div>
          <img
            src="/img/fluidHero.svg"
            alt="A man sitting in front of a computer has two options, one to connect his wallet, which uses the IFPS system, the second is to carry out transactions with TEE, TEE and IFPS communicate with each other, TEE communicates with Orderboo engine, thus forming the workflow by Fluid Switch Protocol V2"
          />
        </div>
      </S.Box>
    </S.FluidContainer>
    <S.MoreFeaturesContainer>
      <S.MoreFeaturesTitle>
        <S.MoreFeaturesInfo>
          <h4>Unmatched performance</h4>
          <S.FeaturedParagraph>
            Polkadex scales to 500K transactions per second and sub-millisecond
            latency. The latest leaps in technological development enable
            Polkadex to keep the advantages of centralized exchanges and at the
            same time support High-Frequency Trading maintaining the highest
            level of security of user funds.
          </S.FeaturedParagraph>
          <PrimaryButton
            icon="doubleArrowRight"
            content="Learn More"
            href="https://docs.polkadex.trade/orderbookIntroduction"
            background="none"
          />
        </S.MoreFeaturesInfo>
        <div>
          <img
            src="/img/moreFeaturesHero.svg"
            alt="Chart comparing Polkadex TPS(Transactions Per Seconds), BTC: ~ 7 TPS,  Paypal: ~20 TPS,  Paypal: ~193 TPS,  Polkadex: ~300 TPS, ,  Polkadex Goal: ~20000 TPS and  Visa: ~24000 TPS "
          />
        </div>
      </S.MoreFeaturesTitle>
      <S.MoreFeaturesWrapper>
        <h6>More Features</h6>
        <S.MoreFeaturesCard>
          <div>
            <img src="/img/icons/speed.svg" alt="Block speed icon" />
            <span> High-Frequency Trading </span>
            <p>
              Polkadex can connect to all the favourite trading bots of the
              community seamlessly enabling users to implement multiple trading
              strategies.
            </p>
          </div>
          <div>
            <img src="/img/icons/IDO.svg" alt="Block speed icon" />
            <span> Polkadex IDO pallet </span>
            <p>
              Polkadex IDO pallet allows token projects to create ERC-20 like
              tokens with built-in support for parachain transfers and one-click
              listing in the Polkadex Orderbook. It also helps teams to raise
              funds through IDOs in a decentralized manner.
            </p>
          </div>
          <div>
            <img src="/img/icons/fiat.svg" alt="Block speed icon" />
            <span> Polkadex Fiat </span>
            <p>
              Polkadex supports fiat currencies in the Polkadex Orderbook.
              Traders can easily use a credit card to buy crypto.
            </p>
          </div>
          <div>
            <img src="/img/icons/kyc.svg" alt="Block speed icon" />
            <span> Decentralized KYC Option </span>
            <p>
              At Polkadex we believe that traders deserve privacy. Hence we have
              decentralized the KYC process for our users offering to store
              their data on wallets instead of our platform.
            </p>
          </div>
          <div>
            <img src="/img/icons/nft.svg" alt="Block speed icon" />
            <span> Polkadex NFTs </span>
            <p>
              Polkadex NFTs will gamify our trading ecosystem and make it more
              fun for users. We aim to provide this functionality shortly after
              the Mainnet launch.
            </p>
          </div>
          <div>
            <img src="/img/icons/token.svg" alt="Block speed icon" />
            <span> New Token Generation </span>
            <p>
              Tokens generated in Polkadex have native support for cross-chain
              transfers to other parachains and networks connected to our
              ecosystem. Thus we eliminate the need to conduct expensive audits
              and delays in new token releases for the project teams.
            </p>
          </div>
          <div>
            <img src="/img/icons/liquidity.svg" alt="Block speed icon" />
            <span> High liquidity </span>
            <p>
              Polkadex enables institutional liquidity on the platform with the
              help of a decentralized KYC system.
            </p>
          </div>
          <div>
            <img src="/img/icons/upgrade.svg" alt="Block speed icon" />
            <span> Forkless Upgrade </span>
            <p>
              Polkadex upgrades for new features bridges to new blockchains bug
              fixes and performance improvements do not require hard forks.
            </p>
          </div>
        </S.MoreFeaturesCard>
      </S.MoreFeaturesWrapper>
    </S.MoreFeaturesContainer>
  </S.Wrapper>
);

export default Features;
