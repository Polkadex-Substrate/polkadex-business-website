import RoadmapCard from 'components/RoadmapCard';
import Title from 'components/Title';
import { IHomeTranslations } from 'translations';

import * as S from './styles';

type Props = {
  roadmap: IHomeTranslations['roadmap'];
  releases: IHomeTranslations['releases'];
};

const Roadmap = ({ roadmap, releases }: Props) => {
  const { tag, title, description, highlight, cards } = roadmap;
  return (
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
      <S.Phase>
        {releases.map((value, i) => (
          <S.PhaseCard key={i}>
            <S.PhaseCardAsideLeft>
              <span>{value.phase}</span>
            </S.PhaseCardAsideLeft>
            <S.PhaseCardAsideRight active={!!value?.active}>
              <div>{value.emoji}</div>
              <div>
                <h3>{value.title}</h3>
                <p>
                  <ol>
                    {value.items.map((v, ind) => (
                      <li key={ind}>{v}</li>
                    ))}
                  </ol>
                </p>
              </div>
            </S.PhaseCardAsideRight>
            {value.active && <small>In progress</small>}
          </S.PhaseCard>
        ))}
      </S.Phase>
      <S.RoadContainer>
        {cards.map((item, index) => (
          <RoadmapCard
            key={index}
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
};

export default Roadmap;
