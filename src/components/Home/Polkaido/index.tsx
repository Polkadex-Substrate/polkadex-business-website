import * as Icons from 'components/Icons';

import { data } from './data';
import * as S from './styles';

export const Polkaido = () => {
  return (
    <S.Wrapper>
      <S.Hero>
        <AsideLeft />
        <AsideRight />
      </S.Hero>
      <S.Features>
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

const AsideLeft = () => {
  return (
    <S.AsideLeft>
      <img src="/img/polkaidoPreview1.png" alt="Polkaido platform mockup" />
    </S.AsideLeft>
  );
};

const AsideRight = () => {
  return (
    <S.AsideRight>
      <S.AsideRightIcon>
        <Icons.InitialOfferCircle />
      </S.AsideRightIcon>
      <h2>
        <Icons.PolkaidoLogo /> Platform
      </h2>
      <p>
        Currently, IDOs are exclusive, expensive (for project teams and
        investors alike), and over-reliant on manual processes.
        <br />
        <br />
        PolkaIDO is a truly decentralized IDO platform which makes IDOs fair,
        inclusive, and affordable.
      </p>
      <S.Actions>
        <a
          href="https://medium.com/polkadex/polkaido-launchpad-overview-728bd40effd6"
          target="_blank"
          rel="noreferrer"
        >
          Learn more <Icons.ArrowSingleRight />
        </a>
      </S.Actions>
    </S.AsideRight>
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
