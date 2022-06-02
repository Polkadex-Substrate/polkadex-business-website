/* eslint-disable jsx-a11y/anchor-is-valid */
import * as Icons from 'components/Icons';
import Link from 'next/link';
import { useState } from 'react';

import * as S from './styles';

export const Polkaido = () => {
  const [state, setState] = useState(1);

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
        <img src="/img/testPolkaido.png" alt="" />
        <S.Content>
          <S.Text>
            An efficient one-stop-shop solution for all IDO activities:
          </S.Text>
          <Card
            isActive={state === 1}
            onChange={() => setState(1)}
            title="Create a round"
            description="PolkaIDO helps everyone to create their own tokens and token sales
              in few seconds. A suite of tools for the world of decentralized
              finance."
          />
          <Card
            isActive={state === 2}
            onChange={() => setState(2)}
            title="Distribute tokens"
            description="PolkaIDO helps everyone to create their own tokens and token sales
              in few seconds. A suite of tools for the world of decentralized
              finance."
          />
          <Card
            isActive={state === 3}
            onChange={() => setState(3)}
            title="List on Orderbook"
            description="PolkaIDO helps everyone to create their own tokens and token sales
              in few seconds. A suite of tools for the world of decentralized
              finance."
          />
          <Card
            isActive={state === 4}
            onChange={() => setState(4)}
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
