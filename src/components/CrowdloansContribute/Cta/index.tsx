import { PrimaryButton } from 'components/Button';

import * as S from './styles';

export const Cta = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Aside>
          <h2>The Polkadex Crowdloan has ended</h2>
          <p>
            Polkadex has won a Polkadot Parachain slot with: Polkadex secured a
            parachain slot on Polkadot with 973k DOT ($13.8M) contributed to the
            Polkadex Crowdloan!
          </p>
          <PrimaryButton
            content="Learn more"
            target="_blank"
            href="https://polkadex.medium.com/the-polkadex-crowdloan-returns-for-batch-3-of-the-polkadot-parachain-auctions-edc4f38665f8"
          />
        </S.Aside>
        <div />
      </S.Container>
    </S.Wrapper>
  );
};
