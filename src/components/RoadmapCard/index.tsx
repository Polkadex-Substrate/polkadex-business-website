import * as S from './styles';
import Props from './types';

const RoadmapCard = ({
  time,
  title = 'Example',
  content,
  position,
  invert = false,
  alignRight = false,
}: Props) => (
  <S.Wrapper position={position} invert={invert} alignRight={alignRight}>
    <S.Line>
      <div />
    </S.Line>
    <div>
      <S.Title>
        <span>{time}</span>
        <p>{title}</p>
      </S.Title>
      <S.Content>
        {content &&
          content.map((item) => (
            <div key={item.title}>
              {item.timeline ? (
                <span> {item.timeline}</span>
              ) : (
                <img
                  src={`/img/icons/${item.status ? 'selected' : 'waiting'}.svg`}
                  alt="selected icon"
                />
              )}
              <p>{item.title}</p>
            </div>
          ))}
      </S.Content>
    </div>
  </S.Wrapper>
);

export default RoadmapCard;
