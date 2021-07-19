import axios from 'axios';
import { PrimaryButton } from 'components/Button';
import MediaCard from 'components/MediaCard';
import Title from 'components/Title';
import { useEffect, useState } from 'react';
import { IHomeTranslations } from 'translations';

import * as S from './styles';
import { MediaProps } from './types';

type Props = Pick<IHomeTranslations, 'media'>;

const Media = ({
  tag,
  title,
  highlight,
  description,
  ctaButton,
}: Props['media']) => {
  const [state, setState] = useState<MediaProps[]>([]);
  const [error, setError] = useState({ status: false, message: '' });

  const handleGetArticles = async () => {
    try {
      const {
        data: { data },
      } = await axios.get('https://medium-articles.vercel.app/api/getArticles');
      setState(data);
    } catch (e) {
      setError({ status: true, message: e.message });
    }
  };
  useEffect(() => {
    handleGetArticles();
  }, []);
  return (
    <S.Wrapper>
      <S.TitleContainer>
        <Title
          tag={tag}
          title={title}
          highlight={highlight}
          description={description}
        />
        <S.Col>
          <PrimaryButton
            content={ctaButton}
            href="https://polkadex.medium.com"
            withOpacity
          />
        </S.Col>
      </S.TitleContainer>
      {state && !error.status && (
        <S.ContentContainer>
          {state.map((item) => (
            <MediaCard
              key={item.link}
              title={item.title}
              description={item.description}
              source="Medium"
              image={item.image}
              link={item.link}
              date={item.date}
            />
          ))}
        </S.ContentContainer>
      )}
    </S.Wrapper>
  );
};
export default Media;
