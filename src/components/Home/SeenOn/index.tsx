import { SectionHead } from 'components';
import * as Icons from 'components/Icons';

import { data } from './data';
import * as S from './styles';

type LogoEntry = { icon?: string; img?: string; alt?: string };

const Card = ({ icon, img, alt }: LogoEntry) => {
  const IconComponent = icon ? (Icons as Record<string, React.FC>)[icon] : null;
  return (
    <S.Card>
      {IconComponent ? (
        <IconComponent />
      ) : (
        <img src={`/img/partners/${img}.png`} alt={alt} />
      )}
    </S.Card>
  );
};

export const SeenOn = () => (
  <S.Wrapper id="seenOn">
    <SectionHead
      eyebrow="As seen on"
      title={
        <>
          Coverage across <strong>global crypto media</strong>
        </>
      }
      description="Polkadex has been featured by leading publications and data providers in the crypto ecosystem."
    />

    <S.Content>
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
