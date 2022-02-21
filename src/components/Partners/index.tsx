import PartnerCard from 'components/PartnerCard';
import Title from 'components/Title';
import { IHomeTranslations } from 'translations';

import * as S from './styles';

type Props = Pick<IHomeTranslations, 'partners'>;

const Partners = ({
  tag,
  title,
  highlight,
  description,
}: Props['partners']) => (
  <S.Wrapper>
    <S.TitleContainer>
      <Title
        tag={tag}
        title={title}
        highlight={highlight}
        description={description}
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
            <PartnerCard name="Kilt" />
            <PartnerCard name="Fractal" />
            <PartnerCard name="Kucoin" />
            <PartnerCard name="MarketSquare" />
            <PartnerCard name="CoinmarketCap" />
            <PartnerCard name="Gateio" />
          </S.Row>
          <S.Row>
            <PartnerCard name="CoinGecko" />
          </S.Row>
        </S.Card>
      </S.Box>
    </S.Container>
  </S.Wrapper>
);

export default Partners;
