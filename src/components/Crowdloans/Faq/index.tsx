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
          description="It’s simple: Loan your DOT and receive PDEX rewards for supporting your favorite project!  You’re guaranteed a minimum of 0.1875 PDEX for every DOT you loan plus bonuses and referrals on top of that. The top 1,000 Crowdloan contributors will each receive a limited-edition NFT."
        />
        <Card
          title="What do I need to participate in the Crowdloan?"
          description="All you need is DOT tokens! Your DOT should be unbonded, or transferable. In other words, if your DOT is currently being staked, you need to unbond it to participate in the Crowdloan."
        />
        <Card title="How many PDEX tokens will I get for each DOT token that I contribute?">
          <p>
            The base DOT to PDEX reward ratio is 1 DOT to 0.1875 PDEX. It can
            bump to over 0.215 PDEX + referral bonus.{' '}
            <i>
              If Polkadex reaches its 8 million DOT auction cap, this is the
              minimum rewards ratio.
            </i>
          </p>
        </Card>
        <Card title="What is the minimum amount of DOT needed to participate?">
          <p>
            If you are contributing your DOT directly on-chain through the
            Polkadot.js interface, contributions are subject to a minimum of 5
            DOT. If contributing through a partner, minimum contributions may
            vary but will generally be lower than 5 DOT.
          </p>
          <p>
            Please note, if you<strong> have 1 PDEX </strong>in your Polkadot.js
            account, you can contribute as much or as little DOT as you want
            without worrying about the existential deposit.
          </p>
          <p>
            If you<strong> do not currently have any PDEX </strong> in your
            Polkadot.js account and wish to contribute less than 22 DOT, please
            buy at least 1 PDEX, so the account has existential deposit
            requirement and is in active state to receive the reward.
          </p>
          <p>
            <a href="https://wiki.polkadot.network/docs/build-protocol-info#existential-deposit">
              Learn more about the concept of existential deposits here
            </a>
          </p>
        </Card>
        <Card
          title="How long will the DOT tokens be locked in the Crowdloan?"
          description="Your DOT will be locked throughout the Parachain auction and, if Polkadex wins a slot, they will continue to be locked for the 96-week duration of the Parachain lease."
        />
        <Card
          title="When will I receive my PDEX reward tokens?"
          description="25% of the PDEX will be vested to your account immediately after the Polkadex network becomes a Parachain, while the remaining 75% will be linearly unlocked throughout the 96-week duration of the lease."
        />
        <Card
          title="When will the Polkadex Crowdloan go live on Polkadot?"
          description="January 17th 2022"
        />
        <Card
          title="What is the relationship between PDEX and DOT?"
          description="DOT is the native token of Polkadot, the blockchain of blockchains. DOT is necessary in order to participate in Parachain auctions and Crowdloans. In return for a loan of DOT, Crowdloan participants receive PDEX rewards. PDEX is the native token of the Polkadex network."
        />
        <Card title="What wallets can I use to participate? Can I use Ledger?">
          <p>
            You can use the{' '}
            <a
              target="_blank"
              href="https://polkadot.js.org/extension/"
              rel="noreferrer"
            >
              Polkadot.js browser extension wallet
            </a>{' '}
            to participate through the{' '}
            <a
              target="_blank"
              href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/parachains/crowdloan"
              rel="noreferrer"
            >
              Polkadot.js parachain interface
            </a>
            . Other wallets supporting the Polkadex Crowdloan include{' '}
            <a target="_blank" href="https://mathwallet.org" rel="noreferrer">
              MathWallet
            </a>
            ,{' '}
            <a
              target="_blank"
              href="https://app.talisman.xyz/portfolio"
              rel="noreferrer"
            >
              Talisman
            </a>{' '}
            ,
            <a
              target="_blank"
              href="https://fearlesswallet.io"
              rel="noreferrer"
            >
              Fearless
            </a>{' '}
            and{' '}
            <a target="_blank" href="https://novawallet.io" rel="noreferrer">
              Nova
            </a>
            . At this time, Ledger is not supported.
          </p>
        </Card>
        <Card
          title="How can I receive my NFTs if I am one of the winners?"
          description="The 1,000 top contributors will receive their exclusive NFTs at around the same time they receive their PDEX rewards."
        />
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
