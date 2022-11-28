import * as Icons from 'components/Icons';
import useAnimation from 'hooks/useAnimation';

import { data } from './data';
import * as S from './styles';

export const TheaBridge = () => {
  const animationProps = useAnimation({ duration: 0.5 });

  return (
    <S.Wrapper>
      <S.Hero {...animationProps}>
        <S.HeroWrapper>
          <S.HeroIcon>
            <Icons.SwapCircle />
          </S.HeroIcon>
          <h2>
            <Icons.TheaLogo /> Bridge
          </h2>
          <p>
            Polkadex’s interoperability layer | A decentralized connection to
            other blockchains and assets.
          </p>
        </S.HeroWrapper>
        <S.HeroVideo>
          <S.HeroVideoPreview>
            <Icons.TheaPreview />
          </S.HeroVideoPreview>
          <S.HeroVideoFloat>
            <span>Coming soon!</span>
            <Icons.TheaArrow />
          </S.HeroVideoFloat>
        </S.HeroVideo>
      </S.Hero>
      <S.Features>
        <S.FeaturesHero>
          <p>
            The underlying decentralized technology that makes ‘deposits’ and
            ‘withdrawals’ to and from Polkadex look and feel like they do in a
            CEX. A unique combination of Threshold Signature Scheme (TSS) and
            light client technologies at an unprecedented scale, THEA will first
            connect Polkadex and Ethereum and will continue to add support for
            more blockchains in the future.
          </p>
          <a href="/">Read more</a>
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
  const animationProps = useAnimation({ duration: 0.5 * i });

  const IconComponent = Icons[icon];
  return (
    <S.FeaturesCard {...animationProps}>
      <IconComponent />
      <h3>{title}</h3>
      <p>{description}</p>
    </S.FeaturesCard>
  );
};
