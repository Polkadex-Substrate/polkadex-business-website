import * as S from './styles';

export const Rewards = () => {
  return (
    <S.Wrapper id="rewards">
      <S.Container>
        <S.Title>
          <h2>Crowdloan reward distribution</h2>
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
              <strong>
                The Polkadex hero NFT is awarded to the top 1k contributors to
                the Polkadex Crowdloan.
              </strong>
              The ultimate emblem for proud early supporters of Polkadex, the
              NFT will grant holders a 20% to 50% discount* on Polkadex
              Orderbook trading fees.
            </p>
            <small>
              *The discount structure may be subject to change at the time of
              the launch. While the NFTs will be distributed soon after Polkadex
              secures a parachain spot, their utility is subject to changes and
              will not be applied until 2023.
            </small>
          </div>
        </S.Card>
      </S.Container>
    </S.Wrapper>
  );
};
