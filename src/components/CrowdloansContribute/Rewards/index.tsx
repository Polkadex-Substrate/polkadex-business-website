import { PrimaryButton } from 'components/Button';

import * as S from './styles';

export const Rewards = () => {
  return (
    <S.Wrapper id="rewards">
      <S.Container>
        <S.Title>
          <h3>Earn Rewards</h3>
          <p>
            Loan your DOTs for the duration of our parachain and
            <strong> earn generous rewards!</strong>
          </p>
          <PrimaryButton content="Contribute Now" href="#contribute" />
        </S.Title>
        <S.Card>
          <div>
            <h4>3 PDEX per 1 DOT</h4>
            <p>
              <strong>For each DOT contributed</strong> to the Polkadex
              Crowdloan, <strong>you get 2+ PDEX.</strong>
            </p>
          </div>
          <img src="/img/pdexHand.png" alt="Reward" />
        </S.Card>
      </S.Container>
    </S.Wrapper>
  );
};
