import { Icon } from 'components';
import * as Icons from 'components/Icons';
import { BrandAssetsHero as BrandAssetsHeroIllustration } from 'components/Icons';

import * as S from './styles';

export const BrandAssetsHero = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Box>
          <h1>Brand Assets</h1>
          <p>
            Writing about Polkadex? Download logos and product shot for use in
            web and print media.
          </p>
          <a href="#mediaKit">
            Press Kit{' '}
            <Icon name="ArrowBottom" background="none" size="xsmall" />
          </a>
        </S.Box>
        <S.Box>
          <BrandAssetsHeroIllustration />
        </S.Box>
      </S.Container>
    </S.Wrapper>
  );
};

export const BrandAssetsCards = () => {
  return (
    <S.BrandAssetsCards>
      <S.Title>
        <h2>Available Brand</h2>
        <Icon name="ArrowBottom" background="none" />
      </S.Title>
      <S.BrandAssetsCardsWrapper>
        <AssetsCard
          title="Logo and Guidelines"
          iconName="LogoAndGuidelines"
          size="454kb"
          fileName="ZIP"
          filesUrl="/brandAssets/PolkadexLogo.zip"
        />
        {/* <AssetsCard
          title="Screenshots"
          iconName="Screenshots"
          size="160kb"
          fileName="ZIP"
          filesUrl="#"
        />

        <AssetsCard
          title="Icons and Illustrations"
          iconName="IconsAndIllustrations"
          size="230kb"
          fileName="ZIP"
          filesUrl="#"
        /> */}
      </S.BrandAssetsCardsWrapper>
    </S.BrandAssetsCards>
  );
};

export const AssetsCard = ({ iconName, fileName, size, filesUrl, title }) => {
  const IconComponent = Icons[iconName];
  return (
    <S.Card>
      <S.CardAside>
        <S.CardAsideTitle>
          <span>
            {fileName}, {size}
          </span>
          <h4>{title}</h4>
        </S.CardAsideTitle>
        <a
          type="button"
          target="_blank"
          rel="noopener noreferrer"
          href={filesUrl}
        >
          Download
          <S.IconWrapper>
            <Icons.ArrowBottom />
          </S.IconWrapper>
        </a>
      </S.CardAside>
      <S.CardAside>
        <IconComponent />
      </S.CardAside>
    </S.Card>
  );
};
