import { ImgHTMLAttributes, useRef } from 'react';

import * as S from './styles';

export const Partners = () => {
  const contentRef = useRef(null);

  return (
    <S.Wrapper>
      <h2>Partners</h2>
      <S.Content>
        <S.Container ref={contentRef}>
          <Card
            src="/img/partnersList/equilibrium.png"
            alt="equilibrium logo"
          />
          <Card src="/img/partnersList/bifrost.png" alt="bifrost logo" />
          <Card src="/img/partnersList/acala.png" alt="acala logo" />
          <Card src="/img/partnersList/onfinality.png" alt="onfinality logo" />
          <Card src="/img/partnersList/subscan.png" alt="subscan logo" />
          <Card src="/img/partnersList/cere.png" alt="cere logo" />
          <Card src="/img/partnersList/subsquare.png" alt="subsquare logo" />
          <Card
            src="/img/partnersList/polkastarter.png"
            alt="polkastarter logo"
          />
          <Card src="/img/partnersList/parallel.png" alt="parallel logo" />
          <Card src="/img/partnersList/parity.png" alt="parity logo" />
          <Card src="/img/partnersList/simplex.png" alt="simplex logo" />
        </S.Container>
      </S.Content>
    </S.Wrapper>
  );
};

type Props = ImgHTMLAttributes<HTMLImageElement>;
const Card = ({ ...props }: Props) => (
  <S.Card>
    <img {...props} alt={props.alt} />
  </S.Card>
);
