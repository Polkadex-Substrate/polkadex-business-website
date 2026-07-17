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
        {/* headingAs="h1": this is the /roadmap page's lead heading. */}
        <Title
          tag={tag}
          description={description}
          title={title}
          highlight={highlight}
          position="center"
          headingAs="h1"
        />
      </S.TitleContainer>
      <S.Phase>
        {releases.map((value, i) => {
          const variant: 'completed' | 'active' | 'upcoming' = value.completed
            ? 'completed'
            : value.active
            ? 'active'
            : 'upcoming';
          return (
            <S.PhaseCard key={i} active={!!value?.active}>
              <S.PhaseLabel>
                <span className="emoji">{value.emoji}</span>
                <span>{value.phase}</span>
              </S.PhaseLabel>
              <S.PhaseBody data-upcoming={variant === 'upcoming'}>
                <h3>{value.title}</h3>
                <ul>
                  {value.items.map((v, ind) => (
                    <li key={ind}>{v}</li>
                  ))}
                </ul>
              </S.PhaseBody>
              <S.PhaseStatus variant={variant}>
                {variant === 'completed'
                  ? 'Completed'
                  : variant === 'active'
                  ? 'In progress'
                  : 'Upcoming'}
              </S.PhaseStatus>
            </S.PhaseCard>
          );
        })}
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
