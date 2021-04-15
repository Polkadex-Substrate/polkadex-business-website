import * as S from './styles';
import Props from './types';

const MediaCard = ({
  title,
  description,
  image,
  source,
  link,
  avatar,
  date,
}: Props) => (
  <S.Wrapper href={link}>
    <S.Col>
      <img src={`/img/media/avatar/${image}.png `} alt="News Cover" />
    </S.Col>

    <S.Col>
      <S.Tag>{source}</S.Tag>
      <h6>{title}</h6>
      <p>{description}</p>
      <div>
        <div />
        <span>{date}</span>
      </div>
    </S.Col>
  </S.Wrapper>
);

export default MediaCard;
