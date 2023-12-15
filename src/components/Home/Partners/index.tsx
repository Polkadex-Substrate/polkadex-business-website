import * as Icons from 'components/Icons';

import { data } from './data';
import * as S from './styles';

export const Partners = () => {
  return (
    <S.Wrapper id="partners">
      <h2>Partners</h2>
      <S.Content>
        <S.ContentFlex>
          {data[0].map((value, i) => (
            <Card key={i} {...value} i={i + 1} />
          ))}
        </S.ContentFlex>
        <S.ContentFlex>
          {data[1].map((value, i) => (
            <Card key={i} {...value} i={i + 1} />
          ))}
        </S.ContentFlex>
        <S.ContentFlex>
          {data[2].map((value, i) => (
            <Card key={i} {...value} i={i + 1} />
          ))}
        </S.ContentFlex>
      </S.Content>
    </S.Wrapper>
  );
};

type Props = { icon?: string; i: number; alt?: string; img?: string };

const Card = ({ icon = null, i, alt, img = null }: Props) => {
  const IconComponent = Icons[icon];
  return (
    <S.Card>
      {icon?.length ? (
        <IconComponent />
      ) : (
        <img src={`/img/partners/${img}.png`} alt={alt} />
      )}
    </S.Card>
  );
};
