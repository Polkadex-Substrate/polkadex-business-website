import PartnerCard from 'components/PartnerCard';
import Title from 'components/Title';

import * as S from './styles';

const Partners = () => (
  <S.Wrapper>
    <S.TitleContainer>
      <Title
        tag="Growing with"
        title="Ecosystem"
        highlight="Partners"
        description="Our official collaborators who help us create the ultimate trading products and spread the word about Polkadex"
      />
    </S.TitleContainer>
    <S.Container>
      <S.Box>
        <S.Card>
          <S.CustomCard>
            <img
              src="/img/partners/polkadotDefiAlliance.png"
              alt="Polkadot DEFI Alliance"
            />
          </S.CustomCard>
          <S.CustomCardEmpty />
          <S.CustomCardEmpty />
        </S.Card>
        <S.Card>
          <S.Row>
            <PartnerCard width="auto" opacity={0.3} />
            <PartnerCard name="kilt" />
            <PartnerCard name="fractal" />
            <PartnerCard name="kucoin" />
            <PartnerCard name="openware" />
            <PartnerCard width="auto" opacity={0.5} />
            <PartnerCard width="auto" opacity={0.2} />
          </S.Row>
          <S.Row>
            <PartnerCard width="auto" opacity={0.6} />
            <PartnerCard width="auto" opacity={0.2} />
            <PartnerCard name="coinmarketcap" />
            <PartnerCard name="gateio" />
            <PartnerCard name="coingecko" />
            <PartnerCard width="auto" opacity={0.2} />
          </S.Row>
        </S.Card>
      </S.Box>
    </S.Container>
  </S.Wrapper>
);

export default Partners;
