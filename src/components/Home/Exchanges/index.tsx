import * as Icons from 'components/Icons';
import { useAnimation } from 'hooks';

import { data } from './data';
import * as S from './styles';

export const Exchanges = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <h2>Exchanges</h2>
        <S.Container>
          {data.map((value, i) => (
            <Card key={i} {...value} i={(i + 1) * 0.4} />
          ))}
        </S.Container>
      </S.Content>
    </S.Wrapper>
  );
};

const Card = ({ title = '', img = null, icon = '', i, ...props }) => {
  const animationProps = useAnimation({ duration: 0.5 * i });

  const IconComponent = Icons[icon];
  return (
    <S.Card {...animationProps} target="_blank" rel="noreferrer" {...props}>
      {img ? (
        <img src={`/img/${img}.png`} alt={`${title} Logo`} />
      ) : (
        <IconComponent />
      )}
      <p>{title}</p>
    </S.Card>
  );
};