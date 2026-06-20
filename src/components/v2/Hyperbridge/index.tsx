/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as Icons from 'components/Icons';
import Link from 'next/link';
import { useState } from 'react';

import * as S from './styles';

const initialState = [
  {
    id: 0,
    src: 'https://cdn.sketch.com/assets/pages/collaborate/real-time-collab-visual.mp4',
  },
  {
    id: 1,
    src: 'https://cdn.sketch.com/assets/pages/collaborate/handoff-visual-2.mp4',
  },
  {
    id: 2,
    src: 'https://cdn.sketch.com/assets/pages/design/design-system-visual.mp4',
  },
  {
    id: 3,
    src: 'https://cdn.sketch.com/assets/pages/design/collaborate-visual.mp4',
  },
];
export const Hyperbridge = () => {
  const [state, setState] = useState({ ...initialState[1] });
  return (
    <S.Wrapper>
      <S.Title>
        <S.TitleContainer>
          <h2>
            <strong>Hyperbridge</strong>
          </h2>
          <div>
            <Icons.ArrowDetailOne />
            <span>Bye bye, high fees!</span>
          </div>
        </S.TitleContainer>
        <p>
          Cross-chain transfers powered by Hyperbridge | A trust-minimized
          connection to other blockchains and assets
          <br />
          <br />
          Deposits and withdrawals to and from Polkadex are powered by
          Hyperbridge, a trust-minimized interoperability protocol. Rather than
          relying on trusted relayers or multisigs, it verifies every transfer
          with cryptographic consensus and state proofs, connecting Polkadex to
          Ethereum and other chains with security equivalent to the chains
          themselves.
        </p>
        <a
          href="https://docs.hyperbridge.network"
          target="_blank"
          rel="noreferrer"
        >
          Read the Hyperbridge docs
        </a>
      </S.Title>
      <S.Container>
        <S.Video>
          <video
            key={state.src}
            poster="https://sketch-cdn.imgix.net/assets/pages/collaborate/real-time-collab-visual@2x.png?ixlib=rb-4.0.1&amp;q=95&amp;fm=png&amp;auto=format&amp;s=345ffba50881bab34acc2e05c1f6c265"
            data-autoplay-in-viewport="true"
            loop
            muted
            autoPlay
            data-controller="entrance"
            data-hs-allowed="true"
            data-entrance-is-intersecting-value="true"
          >
            <source src={state.src} />
          </video>
        </S.Video>

        <S.Content>
          <Card
            isActive={state.id === 0}
            onChange={() => setState({ ...initialState[0] })}
            title="Interoperability"
            description="Cross-chain transfers happen in a single operation. No more approve & transfer."
          />
          <Card
            isActive={state.id === 1}
            onChange={() => setState({ ...initialState[1] })}
            title="Trust-minimized Bridge"
            description="No trusted relayers or multisigs. Every transfer is verified with cryptographic consensus and state proofs."
          />
          <Card
            isActive={state.id === 2}
            onChange={() => setState({ ...initialState[2] })}
            title="Token Manager"
            description="One simple interface to view your assets, move them cross-chain, and track your transaction history."
          />
          <Card
            isActive={state.id === 3}
            onChange={() => setState({ ...initialState[3] })}
            title="Low Fees"
            description="Proof-based verification keeps cross-chain transfers efficient and costs lower than average."
          />
          <S.Text>
            Bring your assets from Ethereum to Polkadex via Hyperbridge!
          </S.Text>
          <S.Actions>
            <a
              href="https://hyperbridge.network"
              target="_blank"
              rel="noreferrer"
            >
              Go to Hyperbridge
            </a>
            <Link href="https://docs.hyperbridge.network">Read the docs</Link>
          </S.Actions>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};

const Card = ({ title, description, isActive, onChange }) => {
  return (
    <S.Card isActive={isActive} onClick={onChange}>
      <div>
        <span>{title}</span>
        <Icons.SingleArrowBottom />
      </div>
      <p>{description}</p>
    </S.Card>
  );
};
