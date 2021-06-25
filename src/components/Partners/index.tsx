import PartnerCard from 'components/PartnerCard';
import Title from 'components/Title';

import * as S from './styles';

const Partners = () => (
  <S.Wrapper>
    <S.TitleContainer>
      <Title tag="Polkadex" title="Ecosystem" highlight="Partners" />
    </S.TitleContainer>
    <S.Container>
      <S.Row>
        <PartnerCard width="auto" opacity={0.2} />
        <PartnerCard name="kilt" />
        <PartnerCard name="fractal" />
        <PartnerCard name="kucoin" />
        <PartnerCard name="openware" />
        <PartnerCard width="auto" opacity={0.5} />
        <PartnerCard width="auto" opacity={0.4} />
      </S.Row>
      <S.Row>
        <PartnerCard width="auto" opacity={0.2} />
        <PartnerCard width="auto" opacity={0.1} />

        <PartnerCard name="coinmarketcap" />
        <PartnerCard name="gateio" />
        <PartnerCard name="coingecko" />
        <PartnerCard width="auto" opacity={0.6} />
        <PartnerCard name="polkadotdefialliance" width="8rem" />
      </S.Row>
    </S.Container>
  </S.Wrapper>
);

export default Partners;
