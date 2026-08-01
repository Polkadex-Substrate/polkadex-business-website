import { Icon } from 'components';
import * as Icons from 'components/Icons';
import { BrandAssetsHero as BrandAssetsHeroIllustration } from 'components/Icons';

import * as S from './styles';

// Palette source of truth: src/styles/theme.ts + BrandGuidelines.md.
// (The explorer has its own variant palette — that one lives at
// explorer.polkadex.ee/brand and must not be shown here as "the brand".)
type BrandColor = { name: string; value: string; label?: string };

const colorGroups: { title: string; colors: BrandColor[] }[] = [
  {
    title: 'Brand',
    colors: [
      { name: 'Primary', value: '#E6007A' },
      { name: 'Violet', value: '#6745D2' },
      {
        name: 'Brand Gradient',
        value: 'linear-gradient(47.94deg, #E6007A 0%, #6745D2 98.88%)',
        label: '#E6007A → #6745D2',
      },
      { name: 'Green', value: '#00E676', label: '#00E676 · positive metrics' },
    ],
  },
  {
    title: 'Surfaces — dark theme',
    colors: [
      { name: 'Primary Background', value: '#0D0D10' },
      { name: 'Secondary Background', value: '#2F3340' },
      { name: 'Tertiary Background', value: '#2E303C' },
      { name: 'Text', value: '#FFFFFF' },
      { name: 'Secondary Text', value: '#A8ADB7' },
    ],
  },
  {
    title: 'Semantic',
    colors: [
      { name: 'Success', value: '#0CA564' },
      { name: 'Info', value: '#148FE8' },
      { name: 'Warning', value: '#FFA500' },
      { name: 'Disabled', value: '#77777D' },
    ],
  },
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
      {colorGroups.map((group) => (
        <div key={group.title}>
          <S.SwatchGroupTitle>{group.title}</S.SwatchGroupTitle>
          <S.Swatches>
            {group.colors.map((color) => (
              <S.Swatch key={color.name} color={color.value}>
                <div />
                <span>{color.name}</span>
                <small>{color.label ?? color.value}</small>
              </S.Swatch>
            ))}
          </S.Swatches>
        </div>
      ))}
      <S.Typography>
        <p>
          <strong>Usage.</strong> Primary is reserved for the most important
          call to action — one per view. Greens mark positive states, never
          primary actions. Extend the palette by adjusting alpha on existing
          tokens rather than adding new colors, and never recolor the logo.
        </p>
      </S.Typography>
      <S.Title>
        <h2>Typography</h2>
      </S.Title>
      <S.Typography>
        <p>
          <strong>Work Sans</strong> — primary typeface for headings and body
          text (weights 300 / 400 / 600).
        </p>
        <p>
          <strong>Suisse Intl</strong> — editorial and secondary face (weights
          200–700).
        </p>
        <p>
          <strong>Caveat</strong> — handwritten accent, used sparingly.
        </p>
        <p>
          <strong>Courier New</strong> — monospace, used for addresses, hashes
          and storage keys.
        </p>
        <p>
          Full color tokens, type scale, spacing and usage rules are included
          in the media kit as <strong>BrandGuidelines.md</strong>. The Mainnet
          Explorer uses its own variant (Inter,{' '}
          <a
            href="https://explorer.polkadex.ee/brand"
            target="_blank"
            rel="noreferrer noopener"
          >
            interactive explorer kit
          </a>
          ).
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
