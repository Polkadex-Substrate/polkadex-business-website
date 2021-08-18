import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import * as S from '../styles/404';

const Custom404 = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 4000);
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.TitleContainer>
          <h1>404</h1>
          <h2>There is no light down here.</h2>
          <p>
            Just because your path is different doesn’t mean you are lost. The
            page you are looking for is not available right now.
          </p>
        </S.TitleContainer>
        <S.ImageContainer>
          <img src="/img/error404.svg" alt="Error illustration" />
        </S.ImageContainer>
      </S.Container>
    </S.Wrapper>
  );
};
export default Custom404;
