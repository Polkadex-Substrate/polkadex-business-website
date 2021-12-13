import * as Icon from 'components/Icons';

import * as S from './styles';
import Props from './types';

const TeamCard = ({ name, image, position, socialMedia }: Props) => (
  <S.Wrapper>
    <figure>
      <img src={`/img/team/${image}.jpg`} alt="photography description" />
    </figure>
    <span>{position}</span>
    <p>{name}</p>
    <div>
      {socialMedia &&
        socialMedia.map((item) => {
          const IconComponent = item.name && Icon[item.name];
          return (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <IconComponent />
            </a>
          );
        })}
    </div>
  </S.Wrapper>
);

export default TeamCard;
