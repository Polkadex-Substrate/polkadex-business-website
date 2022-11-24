import * as Icons from 'components/Icons';
import { ImgHTMLAttributes } from 'react';

import * as S from './styles';

export const Partners = () => {
  return (
    <S.Wrapper>
      <h2>Partners</h2>
      <S.Content>
        <S.ContentFlex>
          <Card src="/img/partnersList/acala.png" alt="acala logo" />
          <Card icon="Parallel" />
          <Card src="/img/partners/parity.png" alt="parity logo" />
          <Card src="/img/partners/simplex.png" alt="parity logo" />
          <Card icon="Equilibrium" />
          <Card icon="Bifrost" />
        </S.ContentFlex>
        <S.ContentFlex>
          <Card icon="Onfinality" />
          <Card src="/img/partners/subscan.png" alt="subscan logo" />
          <Card icon="Cere" />
          <Card icon="Subsquare" />
          <Card icon="Polkastarter" />
          <Card icon="PolkadotLogo" />
        </S.ContentFlex>
        <S.ContentFlex>
          <Card icon="Hummingbot" />
          <Card icon="Immunefi" />
        </S.ContentFlex>
      </S.Content>
    </S.Wrapper>
  );
};

type Props = { icon?: string } & ImgHTMLAttributes<HTMLImageElement>;
const Card = ({ icon = null, ...props }: Props) => {
  const IconComponent = Icons[icon];
  return (
    <S.Card>
      {icon?.length ? <IconComponent /> : <img {...props} alt={props.alt} />}
    </S.Card>
  );
};
