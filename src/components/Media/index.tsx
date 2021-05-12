import axios from 'axios';
import { PrimaryButton } from 'components/Button';
import MediaCard from 'components/MediaCard';
import Title from 'components/Title';
import { useEffect, useState } from 'react';

import * as S from './styles';
import Props from './types';

const Media = () => {
  const [state, setState] = useState<Props[]>([]);
  const [error, setError] = useState({ status: false, message: '' });

  const handleGetArticles = async () => {
    try {
      const {
        data: { data },
      } = await axios.get('https://medium-articles.herokuapp.com/getArticles');
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
          tag="Media"
          title="Polkadex"
          highlight="News"
          description="The latest and greatest news from the Polkadex team"
        />
        <S.Col>
          <PrimaryButton
            icon="doubleArrowRight"
            content="Polkadex News"
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
