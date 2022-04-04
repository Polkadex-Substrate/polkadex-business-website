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
          title="What are the benefits of participating in the Polkadex Crowdloan"
          description="It’s simple: Loan your DOT and receive PDEX rewards for supporting your favorite project! You’re guaranteed a minimum of 2 PDEX for every DOT you loan plus partner referral bonuses on top of that. The top 1,000 Crowdloan contributors will each receive a limited-edition NFT."
        />
        <Card
          title="What do I need to participate in the Crowdloan?"
          description="All you need is DOT tokens! Your DOT should be unbonded, or transferable. In other words, if your DOT is currently being staked, you need to unbond it to participate in the Crowdloan."
        />
        <Card title="How many PDEX tokens will I get for each DOT token that I contribute?">
          <p>The base DOT to PDEX reward ratio is 1 DOT to 2 PDEX.</p>
        </Card>
        <Card
          title="What is the minimum amount of DOT needed to participate?"
          description="If you are contributing your DOT directly on-chain through the Polkadot.js interface, contributions are subject to a minimum of 5 DOT. This is the same for our partner platforms as well. So we recommend a minimum contribution of 5 DOTs."
        />
        <Card
          title="How long will the DOT tokens be locked in the Crowdloan?"
          description="Your DOT will be locked throughout the Parachain auction and, if Polkadex wins a slot, they will continue to be locked for the 96-week duration of the Parachain lease."
        />
        <Card
          title="When will I receive my PDEX reward tokens?"
          description="25% of the PDEX will be vested to your account immediately after the Polkadex network becomes a Parachain, while the remaining 75% will be linearly unlocked through the 96-week duration of the lease."
        />
        <Card
          title="When will the Polkadex Crowdloan go live on Polkadot?"
          description="April 5th 2022"
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
        <Card title="How can I receive my NFTs if I am one of the winners?">
          <>
            <p>
              The 1,000 top contributors will receive their exclusive NFTs at
              around the same time they receive their PDEX rewards.
            </p>
            <p>
              <i>
                Disclaimer: The NFTs are minted on Kusama. If there are no
                bridges to move tokens from Kusama to Polkadex at the time of
                the NFT and the implementation of its utility, the Polkadex team
                will announce a buy-back in order to reissue them on the
                Polkadex network.
              </i>
            </p>
          </>
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
