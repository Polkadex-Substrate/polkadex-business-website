import * as Icons from 'components/Icons';
import { ImgHTMLAttributes } from 'react';

import * as S from './styles';

export const Ecosystem = () => {
  return (
    <S.Wrapper>
      <h2>Ecosystem</h2>
      <S.Content>
        <S.ContentFlex>
          <Card icon="Substrate" />
          <Card icon="Hacken" />
          <Card icon="Halborn" />
          <Card icon="Trailbits" />
          <Card icon="Equilibrium" />
          <Card icon="SecurityResearchLabs" />
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
