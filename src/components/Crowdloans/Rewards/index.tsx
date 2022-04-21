import * as S from './styles';

export const Rewards = () => {
  return (
    <S.Wrapper id="rewards">
      <S.Title>
        <div>
          <h2>Crowdloan reward distribution</h2>
        </div>
        <div>
          <p>
            Everyone who is eligible can apply for one or all bonus levels.{' '}
            <strong>
              In total there is 2M PDEX (10% of the total supply) reserved for
              crowdloans.
            </strong>
          </p>
          <a href="#tokenEconomics" rel="noreferrer">
            Polkadex Token Economics
          </a>
        </div>
      </S.Title>
      <S.Information>
        <h3>General Information</h3>
        <div>
          <S.InformationCard>
            <span>8-15</span>
            <p>Lease Period</p>
          </S.InformationCard>
          <S.InformationCard>
            <span>96 weeks</span>
            <p>Lease Duration</p>
          </S.InformationCard>
          <S.InformationCard>
            <span>1M DOT</span>
            <p>Auction cap</p>
          </S.InformationCard>
        </div>
      </S.Information>
      <S.Allocation>
        <h3>Crowdloan Reward Allocation</h3>
        <S.AllocationContent>
          <S.AllocationCard>
            <S.AllocationCardHeader>
              <span>Base reward</span>
              <p>2M PDEX</p>
            </S.AllocationCardHeader>
            <S.AllocationCardContent>
              <span>2+ PDEX per 1 DOT</span>
              <p>Base reward for all contributors to the Polkadex Crowdloan.</p>
              <br />
            </S.AllocationCardContent>
          </S.AllocationCard>
          <S.AllocationCard>
            <S.AllocationCardHeader>
              <div />
              <p>Limited</p>
            </S.AllocationCardHeader>
            <S.AllocationCardContent>
              <img src="/img/nftCard.png" alt="Polkadex NFT" />
              <div>
                <span>Exclusive NFT</span>
                <p>
                  <strong>
                    The Polkadex hero NFT is awarded to the top 1k contributors
                    to the Polkadex Crowdloan.
                  </strong>
                  The ultimate emblem for proud early supporters of Polkadex,
                  the NFT will grant holders a 20% to 50% discount* on Polkadex
                  Orderbook trading fees.
                </p>
                <small>
                  *The discount structure may be subject to change at the time
                  of the launch. While the NFTs will be distributed soon after
                  Polkadex secures a parachain spot, their utility is subject to
                  changes and will not be applied until 2023.
                </small>
              </div>
            </S.AllocationCardContent>
          </S.AllocationCard>
        </S.AllocationContent>
      </S.Allocation>
      <S.Vesting>
        <S.VestingTitle>
          <h3>Vesting Terms</h3>
          <span>
            Vesting is the process of locking and releasing tokens after a given
            time.
          </span>
        </S.VestingTitle>
        <S.VestingBar>
          <S.VestingInfo>
            <div>25%</div>
            <p>Immediate</p>
          </S.VestingInfo>
          <S.VestingInfo>
            <div>75%</div>
            <p>Linear unlock (per block)</p>
          </S.VestingInfo>
        </S.VestingBar>
      </S.Vesting>
    </S.Wrapper>
  );
};
