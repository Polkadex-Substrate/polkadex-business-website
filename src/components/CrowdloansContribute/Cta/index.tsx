import { PrimaryButton } from 'components/Button';

import * as S from './styles';

export const Cta = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Aside>
          <h2>Support Polkadex Crowdloan!</h2>
          <p>Contribute Today & Earn $PDEX Rewards + Polkadex Utility NFT!</p>
          <PrimaryButton content="Contribute Now" href="#contribute" />
        </S.Aside>
        <div />
      </S.Container>
    </S.Wrapper>
  );
};
