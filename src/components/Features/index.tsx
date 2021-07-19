import { PrimaryButton } from 'components/Button';
import Title from 'components/Title';
import { IHomeTranslations } from 'translations';

import * as S from './styles';

type Props = Pick<IHomeTranslations, 'features'>;

const Features = ({
  tag,
  title,
  highlight,
  description,
  cards,
}: Props['features']) => (
  <S.Wrapper id="features">
    <S.TitleContainer>
      <Title
        title={title}
        highlight={highlight}
        tag={tag}
        description={description}
        position="center"
      />
    </S.TitleContainer>
    <S.BridgeContainer>
      <S.Box>
        <S.BridgeWrapper>
          <h4>{cards.bridge.title}</h4>
          <S.FeaturedParagraph>{cards.bridge.description}.</S.FeaturedParagraph>
          <PrimaryButton
            content={cards.bridge.ctaButton}
            href="https://docs.polkadex.trade/polkadexNetworkEcosystemParachain"
            background="none"
          />
          <S.BridgePlanned>
            <h6>{cards.bridge.plannedBridgesTitle}</h6>
            <S.BridgePlannedWrapper>
              <div>
                <img src="/img/icons/polkadot.svg" alt="Polkadot Logo icon" />
              </div>
              {cards.bridge.plannedBridgesCards.map((item) => (
                <div>
                  <span>{item.title}</span>
                  <p>{item.description}.</p>
                </div>
              ))}
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
          <h4>{cards.tradingBots.title}</h4>
          <S.FeaturedParagraph>
            {cards.tradingBots.description}.
          </S.FeaturedParagraph>
          <PrimaryButton
            content={cards.tradingBots.ctaButton}
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
            {cards.offchainStateCommits.title}
            <strong>
              {cards.offchainStateCommits.highlight}
              <span>{cards.offchainStateCommits.tag}</span>
            </strong>
          </h2>
          <p>{cards.offchainStateCommits.description}.</p>
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
          <h4>{cards.benefits.title}</h4>
          <S.FeaturedParagraph>
            {cards.benefits.description}.
          </S.FeaturedParagraph>
          <PrimaryButton
            content={cards.benefits.ctaButton}
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
        <h6>{cards.benefits.subtitle}</h6>
        <S.MoreFeaturesCard>
          {cards.benefits.cards.map((item) => (
            <div>
              <img src={`/img/icons/${item.icon}.svg`} alt={item.alt} />
              <span>{item.title}</span>
              <p>{item.description}.</p>
            </div>
          ))}
        </S.MoreFeaturesCard>
      </S.MoreFeaturesWrapper>
    </S.MoreFeaturesContainer>
  </S.Wrapper>
);

export default Features;
