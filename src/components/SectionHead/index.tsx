import * as S from './styles';

type Props = {
  /** Small uppercase pill above the headline, e.g. "Tokenomics" / "Roadmap". */
  eyebrow: string;
  /** The main title — an optional accent segment can be wrapped in <strong>. */
  title?: React.ReactNode;
  /** Sub-headline paragraph beneath the title. Keep to one sentence. */
  description?: React.ReactNode;
  /** Center-align (default) or left-align. */
  align?: 'center' | 'left';
  /** Heading level for the title. Use "h1" on the page's lead section. */
  titleAs?: 'h1' | 'h2' | 'h3';
};

/**
 * Shared section header — eyebrow pill + big headline + short description.
 * Matches the visual pattern established by `Tokenomics`, `HowToBuy`, and
 * `RoadmapTeaser`. Drop this at the top of any homepage section for instant
 * visual consistency without rewriting the body.
 */
export const SectionHead = ({
  eyebrow,
  title,
  description,
  align = 'center',
  titleAs = 'h2',
}: Props) => (
  <S.Wrapper align={align}>
    <S.Eyebrow>{eyebrow}</S.Eyebrow>
    {title ? <S.Title as={titleAs}>{title}</S.Title> : null}
    {description ? <S.Description>{description}</S.Description> : null}
  </S.Wrapper>
);
