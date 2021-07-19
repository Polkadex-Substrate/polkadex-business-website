import { PrimaryButton } from 'components/Button';
import Title from 'components/Title';
import { IHomeTranslations } from 'translations';

import * as S from './styles';

type Props = Pick<IHomeTranslations, 'orderbook'>;

const OrderbookProduct = ({
  tag,
  title,
  highlight,
  description,
  ctaButton,
  cards,
  technologiesTitle,
}: Props['orderbook']) => (
  <S.Wrapper>
    <S.TitleContainer>
      <Title
        tag={tag}
        title={title}
        highlight={highlight}
        description={description}
      />
      <S.Col>
        <PrimaryButton
          content={ctaButton}
          href="https://docs.polkadex.trade/orderbookIntroduction"
          withOpacity
        />
      </S.Col>
    </S.TitleContainer>
    <S.BenefitsContainer>
      {cards.map((item) => (
        <S.Col>
          <img src={`/img/icons/${item.icon}.svg`} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}.</p>
        </S.Col>
      ))}
    </S.BenefitsContainer>
    <S.TechnologiesContainer>
      <h4>{technologiesTitle}</h4>
      <img
        src="/img/technologiesHero.svg"
        alt="Isometric Illustration with Polkadex, Kilt, IFPS, Polkadot.js and SGX Logos"
      />
    </S.TechnologiesContainer>
  </S.Wrapper>
);

export default OrderbookProduct;
