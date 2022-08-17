import { useState } from 'react';

import * as S from './styles';

export const StakingFaq = () => {
  return (
    <S.Wrapper id="faq">
      <S.Title>
        <div>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div>
          <strong>Have another question? </strong>
          <p>
            <strong>
              <a
                target="_blank"
                href="https://discord.com/invite/Uvua83QAzk"
                rel="noreferrer"
              >
                Join the Polkadex Discord server
              </a>
            </strong>
            to submit a ticket.
          </p>
        </div>
      </S.Title>
      <S.Content>
        <Card title="What's the difference between a Stash and Controller account?">
          <>
            <p>
              When staking PDEX, it is recommended to make two accounts: a
              controller account and a stash account. The stash account should
              have the large majority of your funds and its seed phrase should
              be stored offline (e.g. on a piece of paper kept somewhere safe
              and away from others) as a cold wallet. The controller account
              will allow you to stake/unstake your stash’s PDEX but won’t let
              you transfer PDEX away from your stash. With this setup, the most
              an attacker will be able to do is to unstake your PDEX, but they
              will not be able to transfer or steal any PDEX from your stash.
              You can keep the controller account online in your browser
              extension as a hot wallet, however, you should still keep the seed
              phrase as secure as possible.
            </p>
            <p>
              Using controller and stash accounts when staking makes your PDEX
              at stake infinitely more secure.
            </p>
          </>
        </Card>
        <Card title="What is the difference between APR and APY?">
          <p>
            APR or annual percentage rate is the rate at which your PDEX is
            expected to grow for a year, while APY or annual percentage yield is
            the rate at which your PDEX is expected to grow for a year with
            compounding returns. If you select ‘Increase the amount at stake’
            for the destination of your staking rewards, you will essentially
            compound your staking returns and earn PDEX at a higher rate.
          </p>
        </Card>
        <Card title="What affects the APR and APY value?">
          <>
            <p>
              There are a handful of forces that affect the overall annual rates
              of staking rewards.
            </p>
            <p>
              Designed to maintain a total supply of around 20 million (with
              fluctuations in the 18 to 22 million range), PDEX is an
              inflationary asset with burn mechanisms to limit total supply.
              Inflation flows into the network through staking. Nominators
              select which validators they want to stake with and split each
              validator’s staking rewards. While validators all split similar
              amounts of PDEX per day as a reward for securing the network, not
              all validators have the same PDEX in backing or the same number of
              backers. The lower the number of total stake per active validator,
              the higher its APR will be.
            </p>
            <p>
              Validator commissions also play a part as some validators may
              charge a higher commission than others, therefore reducing the
              overall return that nominators may receive from different
              validators depending on their total commission. Also, since
              validators are able to charge a commission, they tend to also
              benefit from higher return rates than nominators do.
            </p>
            <p>
              Since inflation is correlated with staking, the overall amount of
              PDEX being staked also affects APR. In this chart (where the x
              axis represents the total staked amount and the y axis a
              percentage, the blue line represents inflation rate while the
              green is staking APR) you can see how the rate of inflation grows
              until &gt;50% of PDEX are at stake. 50% PDEX at stake from the
              total PDEX supply is the ‘ideal’ staked amount. While the total
              amount of PDEX staked will fluctuate, the chart below illustrates
              the impact that the total staked amount and the inflation rate
              will have on the APR.
            </p>
            <img
              src="/img/faqStakingGraph.png"
              alt=""
              style={{ marginTop: 20 }}
            />
          </>
        </Card>
        <Card title="What is the difference between APR and APY?">
          <p>
            Interested in becoming a validator? Check out the ‘how to run a
            validator on Polkadex’ guide on Github (or in the Polkadex Docs)
          </p>
        </Card>
        <Card title="How to choose a validator?">
          <p>
            When you stake PDEX as a nominator, there are many criteria to
            evaluate your nominated validators by. It is important that you
            trust your validators and that you have clear channels of
            communications with them. Validators set their own commission rate,
            which may be higher or lower depending on your chosen validators. A
            validator’s commission will impact your total returns. Many
            validators will generate different expected annual returns based on
            a number of factors (see question #3). Validators are also generally
            expected to trigger reward payouts for their nominators (nominators
            can do so too) and they are expected to do so on a regular basis.
            Based on your preferences, you may choose a validator who triggers
            payouts every day at a certain time, or you may choose a validator
            with a more irregular payout schedule if regular payments aren’t
            high on your list of concerns. The Polkadot.js/apps interface,
            staking provider partners, and other community-built tools allow for
            filtering and sorting of validators based on certain parameters or
            criteria. However, the final decision of which validators – as well
            as how many – to nominate comes down to your preferences as a
            nominator in the process.
          </p>
        </Card>
        <Card title="Is there a specific timeline in which rewards are distributed?">
          <p>
            Rewards are made available daily but reward payouts have to be
            triggered by a small on-chain transaction each time they are
            distributed.
          </p>
        </Card>
        <Card title="What’s the staking reward distribution process?">
          <p>
            The short answer is it depends on the validator. It is customary for
            validators to trigger daily payouts on behalf of their nominators.
            However, you may find that, as a nominator, you can also trigger
            reward payouts from your nominated validators to your staking
            accounts.
          </p>
        </Card>
        <Card title="What is the unstaking process, timeline, etc?">
          <p>
            Stakers are free to unbond their PDEX and stop staking whenever. It
            is important to note that 2there is a 28 day unbonding period in
            which the unbonding PDEX is locked without earning daily staking
            rewards before it becomes transferable.
          </p>
        </Card>
      </S.Content>
    </S.Wrapper>
  );
};

const Card = ({ title = '', description = '', children = null }) => {
  const [state, setState] = useState(false);

  return (
    <S.Card isActive={state} onClick={() => setState(!state)}>
      <span>{title}</span>
      {state && (children || <p>{description}</p>)}
    </S.Card>
  );
};
