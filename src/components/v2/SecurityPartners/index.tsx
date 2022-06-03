import { ImgHTMLAttributes } from 'react';

import * as S from './styles';

export const SecurityPartners = () => {
  return (
    <S.Wrapper>
      <h2>Security Partners</h2>
      <S.Content>
        <S.Container>
          <Card
            src="/img/securityList/equilibrium.png"
            alt="equilibrium logo"
          />
          <Card src="/img/securityList/certik.png" alt="certik logo" />
          <Card src="/img/securityList/hacken.png" alt="hacken logo" />
          <Card src="/img/securityList/halborn.png" alt="halborn logo" />
          <Card src="/img/securityList/immunefi.png" alt="immunefi logo" />
          <Card src="/img/securityList/srl.png" alt="srl logo" />
          <Card src="/img/securityList/trailbits.png" alt="trailbits logo" />

          <Card
            src="/img/securityList/equilibrium.png"
            alt="equilibrium logo"
          />
          <Card src="/img/securityList/certik.png" alt="certik logo" />
          <Card src="/img/securityList/hacken.png" alt="hacken logo" />
          <Card src="/img/securityList/halborn.png" alt="halborn logo" />
          <Card src="/img/securityList/immunefi.png" alt="immunefi logo" />
          <Card src="/img/securityList/srl.png" alt="srl logo" />
          <Card src="/img/securityList/trailbits.png" alt="trailbits logo" />

          <Card
            src="/img/securityList/equilibrium.png"
            alt="equilibrium logo"
          />
          <Card src="/img/securityList/certik.png" alt="certik logo" />
          <Card src="/img/securityList/hacken.png" alt="hacken logo" />
          <Card src="/img/securityList/halborn.png" alt="halborn logo" />
          <Card src="/img/securityList/immunefi.png" alt="immunefi logo" />
          <Card src="/img/securityList/srl.png" alt="srl logo" />
          <Card src="/img/securityList/trailbits.png" alt="trailbits logo" />
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
