import * as Icons from 'components/Icons';

import * as S from './styles';

export const ForInvestors = () => {
  return (
    <S.Wrapper id="forinvestors">
      <S.Header>
        <S.HeaderCard>
          <img src="/img/protocol.svg" alt="protocol icon" />
          <p>Protocol</p>
        </S.HeaderCard>
        <S.HeaderCard>
          <img src="/img/gaming.svg" alt="gaming icon" />
          <p>Gaming</p>
        </S.HeaderCard>
        <S.HeaderCard>
          <img src="/img/social.svg" alt="social icon" />
          <p>Social Network</p>
        </S.HeaderCard>
        <S.HeaderCard>
          <img src="/img/vr.svg" alt="vr icon" />
          <p>VR</p>
        </S.HeaderCard>
        <S.HeaderCard>
          <img src="/img/platform.svg" alt="platform icon" />
          <p>Platform</p>
        </S.HeaderCard>
        <S.HeaderCard>
          <img src="/img/marketplace.svg" alt="marketplace icon" />
          <p>Marketplace</p>
        </S.HeaderCard>
        <S.HeaderCard>
          <img src="/img/defi.svg" alt="defi icon" />
          <p>Defi</p>
        </S.HeaderCard>
      </S.Header>
      <S.Title>
        <h2>For Investors</h2>
        <p>
          Highly-vetted ideas and teams you can trust. Supported by
          industry-leading creators and funds.
        </p>
        <a href="/">
          Learn more about how PolkaIDO works <Icons.ArrowRight />{' '}
        </a>
      </S.Title>
      <S.Container>
        <Card
          img="/img/inclusive.png"
          title="Inclusive"
          description="Barriers to entry = torn down. Hold above a predetermined (and community voted-on)  amount of PDEX to register for PolkaIDO and participate in rounds."
        />
        <Card
          img="/img/affortable.png"
          title="Affordable"
          description="No gas wars or crazy gas fees when claiming your tokens."
        />
        <Card
          img="/img/fair.png"
          title="Fair"
          description="First come first served selection criteria means all investors get an equal shot. Zero special treatment for wealthier participants."
        />
        <Card
          img="/img/possibiities.png"
          title="Endless possibilities"
          description="PolkaIDO supports parachain tokens andERC-20 tokens, plus more blockchains down the line. That’s a lot of potential IDOs."
          linkText="Explore upcoming projects"
          href="#"
        />
      </S.Container>
    </S.Wrapper>
  );
};

const Card = ({ img, title, description, href = '', linkText = '' }) => (
  <S.Card>
    <img src={img} alt="features icon" />
    <span>{title}</span>
    <p>{description}</p>
    {linkText.length > 0 && <a href={href}>{linkText}</a>}
  </S.Card>
);
