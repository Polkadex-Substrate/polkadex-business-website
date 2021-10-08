import * as Icons from 'components/Icons';

import * as S from './styles';
import Props from './types';

const RoadmapCard = ({
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
        <p>{title}</p>
      </S.Title>
      <S.Content>
        {content &&
          content.map((item, index) => {
            const IconComponent = item.status ? Icons.Selected : Icons.Waiting;
            return (
              <div key={index}>
                {item.timeline && (
                  <span className={item.status ? 'checked' : ''}>
                    {item.timeline}
                  </span>
                )}
                {item.status && <IconComponent />}
                <p>{item.title}</p>
              </div>
            );
          })}
      </S.Content>
    </div>
  </S.Wrapper>
);

export default RoadmapCard;
