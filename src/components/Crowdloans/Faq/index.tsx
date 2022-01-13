import { useState } from 'react';

import * as S from './styles';

export const Faq = () => {
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
        <Card
          title="What are the benefits of participating in the Polkadex Crowdloan?"
          description="It’s simple: Loan your DOT and receive PDEX rewards!  The top 1,000 Crowdloan contributors will each receive a limited-edition NFT."
        />
        <Card
          title="What do I need to participate in the Crowdloan?"
          description="All you need is DOT! Your DOT should be unbonded, or transferable. In other words, if your DOT is currently being staked, you’ll need to unbond it to participate in the Crowdloan."
        />
        <Card
          title="How many PDEX tokens will I get for each DOT token that I contribute?"
          description="The base DOT to PDEX reward ratio is 1 DOT to 0.2 PDEX. Bonus rewards and referrals can bring that ratio up to 1 DOT to ~0.27 PDEX. This is the minimum rewards ratio if Polkadex reaches it’s 7.5 million DOT auction cap. If the total DOT raised is lower, the rewards ratio will be higher as there will be more PDEX to split among less DOT. "
        />
        <Card
          title="What is the minimum amount of DOT needed to participate?"
          description="If you are contributing your DOT directly on-chain through the Polkadot.js interface, contributions are limited to a minimum of 5 DOT. If contributing through a partner, minimum contributions may vary but the minimum will generally be lower than 5 DOT. "
        />
        <Card
          title="How long are the DOT going to be locked in the Crowdloan?"
          description="Your DOT will be locked throughout the Parachain auction and, if Polkadex wins a slot, they will continue to be locked for the 96 week duration of the Parachain lease. "
        />
        <Card
          title="When will I receive my PDEX tokens?"
          description="25% of the PDEX will be vested to your account immediately after the Polkadex network becomes a Parachain, while the remaining 75% will be linearly unlocked throughout the 96 week duration of the lease. "
        />
        <Card
          title="What is the relationship between PDEX and DOT?"
          description="DOT is the native token of Polkadot, the blockchain of blockchains. DOT is necessary in order to participate in Parachain auctions and Crowdloans. In return for a loan of DOT, Crowdloan participants receive PDEX rewards. PDEX is the native token of the Polkadex network."
        />
        <Card
          title="What wallets can I use to participate?"
          description="ou can use the Polkadot.js browser extension wallet to participate through the Polkadot.js parachain interface. Any other wallets?"
        />
        <Card
          title="How can I receive my NFTs if I am one of the winners?"
          description="Top contributors will receive their exclusive NFTs after the Parachain auction ends"
        />
      </S.Content>
    </S.Wrapper>
  );
};

const Card = ({ title = '', description = '' }) => {
  const [state, setState] = useState(false);

  return (
    <S.Card isActive={state} onClick={() => setState(!state)}>
      <span>{title}</span>
      {state && <p>{description}</p>}
    </S.Card>
  );
};
