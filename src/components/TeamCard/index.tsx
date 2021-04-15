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
        socialMedia.map((item) => (
          <a key={item.name} href={item.link}>
            <img src={`/img/icons/${item.name}.svg`} alt={`${name} icon`} />
          </a>
        ))}
    </div>
  </S.Wrapper>
);

export default TeamCard;
