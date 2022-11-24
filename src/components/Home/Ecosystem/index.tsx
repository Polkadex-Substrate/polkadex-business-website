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
          <Card src="/img/partners/omniscia.png" alt="Omniscia logo" />
          <Card icon="Trailbits" />
          <Card icon="SecurityResearchLabs" />
        </S.ContentFlex>
        <S.ContentFlex>
          <Card icon="Certik" />
          <Card icon="Cryptecon" />
          <Card
            src="/img/partners/polychain.png"
            alt="Polychain Monsters logo"
          />
          <Card icon="Acheron" />
          <Card icon="StakingRewardsLogo" />
          <Card icon="CreativeDestruction" />
        </S.ContentFlex>
        <S.ContentFlex>
          <Card src="/img/partners/zondax.png" alt="Zondax logo" />
          <Card icon="Rmrk" />
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
