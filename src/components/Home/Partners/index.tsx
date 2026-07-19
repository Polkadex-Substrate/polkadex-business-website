import { SectionHead, staggerChildProps, staggerGroupProps } from 'components';
import * as Icons from 'components/Icons';
import { motion } from 'framer-motion';

import { data } from './data';
import * as S from './styles';

type LogoEntry = {
  icon?: string;
  img?: string;
  alt?: string;
  /** Renders the logo on a light chip — for marks invisible on dark bg. */
  lightBg?: boolean;
};

const Card = ({ icon, img, alt, lightBg }: LogoEntry) => {
  const IconComponent = icon ? (Icons as Record<string, React.FC>)[icon] : null;
  const logo = IconComponent ? (
    <IconComponent />
  ) : (
    <img src={`/img/partners/${img}.png`} alt={alt} />
  );
  return (
    <S.Card as={motion.div} {...staggerChildProps}>
      {lightBg ? <S.LightChip>{logo}</S.LightChip> : logo}
    </S.Card>
  );
};

export const Partners = () => (
  <S.Wrapper id="partners">
    <SectionHead
      eyebrow="Partners"
      title={
        <>
          Building with the <strong>best in Web3</strong>
        </>
      }
      description="Parachains, exchanges, market makers, security firms, and infrastructure providers working alongside Polkadex."
    />

    {/* Logos cascade in one-by-one; variants propagate through the plain
        S.Row elements to each motion Card (see components/ScrollReveal). */}
    <S.Content as={motion.div} {...staggerGroupProps}>
      {data.map((row, ri) => (
        <S.Row key={ri}>
          {row.map((entry, i) => (
            <Card key={i} {...entry} />
          ))}
        </S.Row>
      ))}
    </S.Content>
  </S.Wrapper>
);
