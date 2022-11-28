import * as Icons from 'components/Icons';
import useAnimation from 'hooks/useAnimation';
import { ImgHTMLAttributes } from 'react';

import { data } from './data';
import * as S from './styles';

export const Partners = () => {
  return (
    <S.Wrapper>
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

type Props = { icon?: string; i: number } & ImgHTMLAttributes<HTMLImageElement>;

const Card = ({ icon = null, i, ...props }: Props) => {
  const animationProps = useAnimation({ duration: 0.2 * i });

  const IconComponent = Icons[icon];
  return (
    <S.Card {...animationProps}>
      {icon?.length ? <IconComponent /> : <img {...props} alt={props.alt} />}
    </S.Card>
  );
};
