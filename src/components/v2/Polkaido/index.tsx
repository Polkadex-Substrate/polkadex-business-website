/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as Icons from 'components/Icons';
import Link from 'next/link';
import { useMemo, useState } from 'react';

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
export const Polkaido = () => {
  const [state, setState] = useState({ ...initialState[1] });
  console.log(state);
  return (
    <S.Wrapper>
      <S.Title>
        <S.TitleContainer>
          <h2>
            PolkaIDO <strong>Platform</strong>
          </h2>
          <div>
            <Icons.ArrowDetailOne />
            <span>Bye bye, centralized fundraising!</span>
          </div>
        </S.TitleContainer>
        <p>
          Currently, IDOs are exclusive, expensive (for project teams and
          investors alike), and over-reliant on manual processes.
          <br />
          <br />
          PolkaIDO is a truly decentralized IDO platform which makes IDOs fair,
          inclusive, and affordable.
        </p>
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
          <S.Text>
            An efficient one-stop-shop solution for all IDO activities:
          </S.Text>
          <Card
            isActive={state.id === 0}
            onChange={() => setState({ ...initialState[0] })}
            title="Create a round"
            description="PolkaIDO helps everyone to create their own tokens and token sales
              in few seconds. A suite of tools for the world of decentralized
              finance."
          />
          <Card
            isActive={state.id === 1}
            onChange={() => setState({ ...initialState[1] })}
            title="Distribute tokens"
            description="PolkaIDO helps everyone to create their own tokens and token sales
              in few seconds. A suite of tools for the world of decentralized
              finance."
          />
          <Card
            isActive={state.id === 2}
            onChange={() => setState({ ...initialState[2] })}
            title="List on Orderbook"
            description="PolkaIDO helps everyone to create their own tokens and token sales
              in few seconds. A suite of tools for the world of decentralized
              finance."
          />
          <Card
            isActive={state.id === 3}
            onChange={() => setState({ ...initialState[3] })}
            title="Product Improvements"
            description="PolkaIDO helps everyone to create their own tokens and token sales
              in few seconds. A suite of tools for the world of decentralized
              finance."
          />
          <S.Actions>
            <a href="/">Go to Polkaido</a>
            <Link href="/">
              <a>
                Learn more <Icons.ArrowRight />
              </a>
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
