import Title from 'components/Title';
import TokenEconomicsCard from 'components/TokenEconomicsCard';
import { IHomeTranslations } from 'translations';

import * as S from './styles';

type Props = Pick<IHomeTranslations, 'tokenEconomics'>;

const TokenEconomics = ({
  tag,
  title,
  highlight,
  totalSupply,
  circulationSupply,
  cards,
}: Props['tokenEconomics']) => (
  <S.Wrapper id="tokenEconomics">
    <S.TitleContainer>
      <Title tag={tag} title={title} highlight={highlight} />
    </S.TitleContainer>
    <S.ContentContainer>
      <S.Box>
        {cards.map((item) => (
          <TokenEconomicsCard
            title={item.title}
            percent={item.percent}
            position={item.position}
            tokens={item.tokens}
            description={item.description}
          />
        ))}
      </S.Box>

      <S.InfoContainer>
        <img
          src="/img/polkadexMobileIcon.svg"
          alt="Polkadex Icon Description"
        />
        <div>
          <span>{totalSupply.title}</span>
          <p>{totalSupply.subTitle}</p>
        </div>
        <div>
          <span>{circulationSupply.title}</span>
          <p>{circulationSupply.subTitle}</p>
          <span>({circulationSupply.smallText})</span>
        </div>
      </S.InfoContainer>
    </S.ContentContainer>
  </S.Wrapper>
);

export default TokenEconomics;
