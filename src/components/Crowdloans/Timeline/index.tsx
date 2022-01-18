import * as S from './styles';

export const Timeline = () => {
  return (
    <S.Wrapper id="timeline">
      <S.Title>
        <div>
          <h2>Crowdloan Timeline and Rules</h2>
        </div>
        <div />
      </S.Title>
      <S.Content>
        <S.Timeline>
          {/* <S.TimelineControls>
            <div>
              <Icon name="ArrowLeft" />
            </div>
            <div>
              <Icon name="ArrowRight" />
            </div>
          </S.TimelineControls> */}
          <S.TimelineContent>
            <TimelineCard
              date="Jan 2022"
              title="Contributions open"
              description="Join the Polkadex Crowdloan by contributing DOT via partners, exchanges and wallets."
              isActive
            />
            <TimelineCard
              date="Jan 2022"
              title="Auction starts"
              description="Each auction takes place over the course of seven days and assigns a total slot duration of 96 weeks."
            />
            <TimelineCard
              date="March 10th, 2022"
              title="Crowdloan ends"
              description="We're aiming to win an auction slot in the second batch of the auctions. Your contribution will be returned if Polkadex doesn't win a slot."
            />
          </S.TimelineContent>
        </S.Timeline>
        <S.Rules>
          <S.RulesContent>
            <h3>Things to Keep in Mind</h3>
            <S.RulesWrapper>
              <RuleCard
                title="Rule 1"
                description="You need unbonded or transferable DOT to contribute to the Crowdloan (Unbonding takes 28 days if you’re staking your DOT on-chain)."
              />
              <RuleCard
                title="Rule 2"
                description="You can contribute through partner projects and wallets, supporting exchanges, or directly on-chain."
              />
              <RuleCard
                title="Rule 3"
                description="If contributing on-chain, the minimum contribution is 5 DOT. If contributing through a partner, minimum contributions may vary but will generally be lower than 5 DOT. Referral bonuses are not applicable to on-chain, or non-partner, contributions."
              />
              <RuleCard
                title="Rule 4"
                description="Participating in the auction means your DOT is locked temporarily until the end of the auction."
              />
              <RuleCard
                title="Rule 5"
                description="If Polkadex wins an auction and gets a Parachain slot, the DOT raised for the auction is locked on-chain for the duration of the lease: 96 weeks."
              />
              <RuleCard
                title="Rule 6"
                description="While bonded for a lease, the DOT cannot be used for other activities like staking or transfers."
              />
              <RuleCard
                title="Rule 7"
                description="If Polkadex does not win a slot by the end of batch 2 auctions, the total amount of contributed DOT is once again unlocked. We will need to initiate a new campaign if we wish to continue participating in future auctions."
              />
              <RuleCard title="Rule 8">
                <p>
                  If you<strong> have 1 PDEX</strong> in your Polkadot.js
                  account, you can contribute as much or as little DOT as you
                  want without worrying about the existential deposit.
                </p>
                <br />
                <p>
                  If you<strong> do not currently have any PDEX</strong> in your
                  Polkadot.js account and wish to contribute less than 22 DOT,
                  please buy at least 1 PDEX, so the account has existential
                  deposit requirement and is in active state to receive the
                  reward.
                </p>
              </RuleCard>
            </S.RulesWrapper>
          </S.RulesContent>
        </S.Rules>
      </S.Content>
    </S.Wrapper>
  );
};

const RuleCard = ({ title, description = '', children = null }) => (
  <S.RuleCard>
    <span>{title}</span>
    {children || <p>{description}</p>}
  </S.RuleCard>
);

const TimelineCard = ({ date, title, description, isActive = false }) => (
  <S.TimelineCard isActive={isActive}>
    <span>{date}</span>
    <strong>{title}</strong>
    <p>{description}</p>
  </S.TimelineCard>
);
