import TeamCard from 'components/TeamCard';
import Title from 'components/Title';
import { IHomeTranslations } from 'translations';

import * as S from './styles';

type Props = Pick<IHomeTranslations, 'team'>;

const Team = ({ tag, title, highlight, cards }: Props['team']) => (
  <S.Wrapper id="team">
    <S.TitleContainer>
      <S.TitleWrapper>
        <Title tag={tag} title={title} highlight={highlight} position="right" />
      </S.TitleWrapper>
    </S.TitleContainer>
    <S.Row id="team__cards">
      {cards.map((item) => (
        <TeamCard
          position={item.title}
          image={item.image}
          name={item.name}
          socialMedia={item.socialMedia}
        />
      ))}
    </S.Row>
  </S.Wrapper>
);

export default Team;
