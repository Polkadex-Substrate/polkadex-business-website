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
            <span>8th - 11th</span>
            <p>Parachain batch 2 slot target</p>
          </S.InformationCard>
          <S.InformationCard>
            <span>96 weeks</span>
            <p>Lease Duration</p>
          </S.InformationCard>
          <S.InformationCard>
            <span>8M DOT</span>
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
              <p>1.5M PDEX</p>
            </S.AllocationCardHeader>
            <S.AllocationCardContent>
              <span>0.1875+ PDEX per 1 DOT</span>
              <p>Base reward for all contributors to the Polkadex Crowdloan.</p>
            </S.AllocationCardContent>
          </S.AllocationCard>
          <S.AllocationCard>
            <S.AllocationCardHeader>
              <span>Bonus reward</span>
              <p>0.5M PDEX</p>
            </S.AllocationCardHeader>
            <S.AllocationCardBoxWrapper>
              <S.AllocationBox>
                <div>
                  <span>15%</span>
                  <p>
                    Early bird contributions within 72hrs of Polkadex crowdloan
                    announcement receive a 15% bonus on the base reward.
                  </p>
                </div>
              </S.AllocationBox>
              <S.AllocationBox>
                <div>
                  <span>5%</span>
                  <p>
                    Bonus on contributions after the first 72 hours and before
                    the 9th day.
                  </p>
                </div>
              </S.AllocationBox>
              <S.AllocationBox>
                <div>
                  <span>5%</span>
                  <p>Referee</p>
                </div>
              </S.AllocationBox>
              <S.AllocationBox>
                <div>
                  <span>5%</span>
                  <p>Referred</p>
                </div>
              </S.AllocationBox>
            </S.AllocationCardBoxWrapper>
          </S.AllocationCard>
          <S.AllocationCard>
            <S.AllocationCardHeader>
              <div />
              <p>Limited</p>
            </S.AllocationCardHeader>
            <S.AllocationCardContent>
              <span>Exclusive NFT</span>
              <p>
                The top 1000 Crowdloan contributors will receive a
                limited-edition NFT.
              </p>
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
            <p>Linear unlock over 96 weeks</p>
          </S.VestingInfo>
        </S.VestingBar>
      </S.Vesting>
    </S.Wrapper>
  );
};
