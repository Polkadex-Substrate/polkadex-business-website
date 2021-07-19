import RoadmapCard from 'components/RoadmapCard';
import Title from 'components/Title';
import { IHomeTranslations } from 'translations';

import * as S from './styles';

type Props = Pick<IHomeTranslations, 'roadmap'>;

const Roadmap = ({
  tag,
  title,
  description,
  highlight,
  cards,
}: Props['roadmap']) => (
  <S.Wrapper id="roadmap">
    <S.TitleContainer>
      <Title
        tag={tag}
        description={description}
        title={title}
        highlight={highlight}
        position="center"
      />
    </S.TitleContainer>
    <S.RoadContainer>
      {cards.map((item) => (
        <RoadmapCard
          title={item.title}
          alignRight={item.alignRight}
          invert={item.invert}
          position={item.position}
          content={item.items}
        />
      ))}
    </S.RoadContainer>
  </S.Wrapper>
);

export default Roadmap;
