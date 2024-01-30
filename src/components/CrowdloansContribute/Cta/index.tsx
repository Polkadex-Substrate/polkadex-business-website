import { PrimaryButton } from 'components/Button';

import * as S from './styles';

export const Cta = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Aside>
          <h2>Support Polkadex!</h2>
          <p>Help Polkadex renew its lease and earn PDEX rewards!</p>
          <PrimaryButton
            content="Contribute now"
            target="_blank"
            href="https://polkadex.medium.com/the-polkadex-crowdloan-returns-for-batch-3-of-the-polkadot-parachain-auctions-edc4f38665f8"
          />
        </S.Aside>
        <div />
      </S.Container>
    </S.Wrapper>
  );
};
