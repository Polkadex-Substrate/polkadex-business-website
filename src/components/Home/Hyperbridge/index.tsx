import * as Icons from 'components/Icons';

import { data } from './data';
import * as S from './styles';

export const Hyperbridge = () => {
  return (
    <S.Wrapper>
      <S.Hero>
        <S.HeroWrapper>
          <S.HeroIcon>
            <Icons.SwapCircle />
          </S.HeroIcon>
          <h2>Hyperbridge</h2>
          <p>
            Cross-chain transfers powered by Hyperbridge | A trust-minimized
            connection to other blockchains and assets.
          </p>
        </S.HeroWrapper>
        <S.HeroVideo>
          <S.HeroVideoPreview>
            <Icons.HyperbridgePreview />
            <div />
          </S.HeroVideoPreview>
          <div />
        </S.HeroVideo>
      </S.Hero>
      <S.Features>
        <S.FeaturesHero>
          <p>
            Deposits and withdrawals to and from Polkadex are powered by
            Hyperbridge, a trust-minimized interoperability protocol. Instead of
            trusted relayers or multisigs, Hyperbridge verifies every transfer
            with cryptographic consensus and state proofs, connecting Polkadex
            to Ethereum and other chains with security equivalent to the chains
            themselves.
          </p>
          <a
            href="https://hyperbridge.network"
            target="_blank"
            rel="noreferrer"
          >
            Read more
            <Icons.ArrowSingleRight />
          </a>
        </S.FeaturesHero>
        <S.FeaturesCards>
          {data.map((value, i) => (
            <Card
              key={i}
              title={value.title}
              description={value.description}
              icon={value.icon}
              i={0.3 * (i + 1)}
            />
          ))}
        </S.FeaturesCards>
      </S.Features>
    </S.Wrapper>
  );
};

const Card = ({ title, description, icon, i }) => {
  const IconComponent = Icons[icon];
  return (
    <S.FeaturesCard>
      <IconComponent />
      <h3>{title}</h3>
      <p>{description}</p>
    </S.FeaturesCard>
  );
};
