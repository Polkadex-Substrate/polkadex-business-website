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
export const Thea = () => {
  const [state, setState] = useState({ ...initialState[1] });
  return (
    <S.Wrapper>
      <S.Title>
        <S.TitleContainer>
          <h2>
            THEA <strong>Bridge</strong>
          </h2>
          <div>
            <Icons.ArrowDetailOne />
            <span>Bye bye, high fees!</span>
          </div>
        </S.TitleContainer>
        <p>
          Polkadex’s interoperability layer | A decentralized connection to
          other blockchains and assets
          <br />
          <br />
          The underlying decentralized technology that makes ‘deposits’ and
          ‘withdrawals’ to and from Polkadex look and feel like they do in a
          CEX. A unique combination of Threshold Signature Scheme (TSS) and
          light client technologies at an unprecedented scale, THEA will first
          connect Polkadex and Ethereum and will continue to add support for
          more blockchains in the future.
        </p>
        <a href="/">Check out the THEA Whitepaper</a>
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
            description="Thea transactions should happen in just one operation. No more approve & transfer."
          />
          <Card
            isActive={state.id === 1}
            onChange={() => setState({ ...initialState[1] })}
            title="Decentralized Bridge"
            description="PolkaIDO helps everyone to create their own tokens and token sales
              in few seconds. A suite of tools for the world of decentralized
              finance."
          />
          <Card
            isActive={state.id === 2}
            onChange={() => setState({ ...initialState[2] })}
            title="Token Manager"
            description="PolkaIDO helps everyone to create their own tokens and token sales
              in few seconds. A suite of tools for the world of decentralized
              finance."
          />
          <Card
            isActive={state.id === 3}
            onChange={() => setState({ ...initialState[3] })}
            title="Low Fees"
            description="PolkaIDO helps everyone to create their own tokens and token sales
              in few seconds. A suite of tools for the world of decentralized
              finance."
          />
          <S.Text>
            Bring your assets from Ethereum to Polkadex via THEA bridge !
          </S.Text>
          <S.Actions>
            <a href="/">Go to THEA</a>
            <Link href="/">
              <a>Read Whitepaper</a>
            </Link>
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
