import * as Icons from 'components/Icons';
import useAnimation from 'hooks/useAnimation';

import { data } from './data';
import * as S from './styles';

export const Wallets = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <h2>Wallets</h2>
        <S.Container>
          {data.map(({ isNew = false, ...props }, i) => (
            <Card key={i} isNew={isNew} i={0.3} {...props} />
          ))}
        </S.Container>
      </S.Content>
    </S.Wrapper>
  );
};

const Card = ({
  title,
  img = null,
  icon = '',
  i = 1,
  isNew = false,
  ...props
}) => {
  const animationProps = useAnimation({ duration: 0.5 * i });
  const IconComponent = Icons[icon];
  return (
    <S.Card {...animationProps} target="_blank" {...props}>
      {img ? (
        <img src={`/img/wallets/${img}.png`} alt={`${title} Logo`} />
      ) : (
        <IconComponent />
      )}
      <p>{title}</p>
      {isNew && <S.Badge>New</S.Badge>}
    </S.Card>
  );
};
