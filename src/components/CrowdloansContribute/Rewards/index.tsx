import { PrimaryButton } from 'components/Button';

import * as S from './styles';

export const Rewards = () => {
  return (
    <S.Wrapper id="rewards">
      <S.Container>
        <S.Title>
          <h2>Earn Rewards</h2>
          <p>
            Loan your DOTs for the duration of our parachain and
            <strong> earn generous rewards!</strong>
          </p>
          <PrimaryButton content="Contribute Now!" href="#contribute" />
        </S.Title>
        <S.Card>
          <div>
            <span>2+ PDEX per 1 DOT</span>
            <p>
              <strong>For each DOT contributed</strong> to the Polkadex
              Crowdloan, <strong>you get 2+ PDEX.</strong>
            </p>
          </div>

          <img src="/img/pdexHand.png" alt="Reward" />
        </S.Card>
        <S.Card>
          <img src="/img/nftCards.jpg" alt="Polkadex NFTs" />

          <div>
            <span>Exclusive NFT</span>
            <p>
              <strong>The top 1000</strong> Crowdloan contributors
              <strong> will receive a limited-edition NFT.</strong>
            </p>
          </div>
        </S.Card>
      </S.Container>
    </S.Wrapper>
  );
};
