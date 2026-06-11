import { Icon } from 'components';
import * as Icons from 'components/Icons';
import { BrandAssetsHero as BrandAssetsHeroIllustration } from 'components/Icons';

import * as S from './styles';

const brandColors = [
  { name: 'Primary', hex: '#E6007A' },
  { name: 'Secondary', hex: '#00E676' },
  { name: 'Background', hex: '#08080C' },
  { name: 'Surface', hex: '#12121A' },
  { name: 'Text Primary', hex: '#FFFFFF' },
  { name: 'Text Secondary', hex: '#9CA3AF' },
  { name: 'Success', hex: '#14F195' },
  { name: 'Error', hex: '#FF4D4D' },
];

export const BrandAssetsHero = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Box>
          <h1>Media Kit</h1>
          <p>
            Writing about Polkadex? Download logos, icons, product screenshots
            and brand guidelines for use in web and print media.
          </p>
          <a href="#mediaKit">
            Media Kit{' '}
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
    <S.BrandAssetsCards id="mediaKit">
      <S.Title>
        <h2>Download Assets</h2>
        <Icon name="ArrowBottom" background="none" />
      </S.Title>
      <S.BrandAssetsCardsWrapper>
        <AssetsCard
          title="Complete Media Kit"
          iconName="LogoAndGuidelines"
          size="2.4mb"
          fileName="ZIP"
          filesUrl="/mediaKit/PolkadexMediaKit.zip"
        />
        <AssetsCard
          title="Logo and Guidelines"
          iconName="LogoAndGuidelines"
          size="454kb"
          fileName="ZIP"
          filesUrl="/mediaKit/PolkadexLogo.zip"
        />
        <AssetsCard
          title="Icons and Illustrations"
          iconName="IconsAndIllustrations"
          size="68kb"
          fileName="ZIP"
          filesUrl="/mediaKit/PolkadexIcons.zip"
        />
        <AssetsCard
          title="Product Screenshots"
          iconName="Screenshots"
          size="1.9mb"
          fileName="ZIP"
          filesUrl="/mediaKit/PolkadexScreenshots.zip"
        />
        <AssetsCard
          title="Brand Guidelines"
          iconName="LogoAndGuidelines"
          size="7kb"
          fileName="MD"
          filesUrl="/mediaKit/BrandGuidelines.md"
        />
      </S.BrandAssetsCardsWrapper>
      <S.Title>
        <h2>Brand Colors</h2>
      </S.Title>
      <S.Swatches>
        {brandColors.map((color) => (
          <S.Swatch key={color.hex} color={color.hex}>
            <div />
            <span>{color.name}</span>
            <small>{color.hex}</small>
          </S.Swatch>
        ))}
      </S.Swatches>
      <S.Title>
        <h2>Typography</h2>
      </S.Title>
      <S.Typography>
        <p>
          <strong>Inter</strong> — primary typeface for display, headings and
          body text (weights 300–700).
        </p>
        <p>
          <strong>Courier New</strong> — monospace, used for addresses, hashes
          and storage keys.
        </p>
        <p>
          Full color tokens, type scale, spacing and usage rules are included
          in the media kit as <strong>BrandGuidelines.md</strong>, or browse
          the{' '}
          <a
            href="https://explorer.polkadex.ee/brand"
            target="_blank"
            rel="noreferrer noopener"
          >
            interactive brand kit
          </a>
          .
        </p>
      </S.Typography>
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
