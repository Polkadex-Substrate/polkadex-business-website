import { Seo } from 'components';
import Link from 'next/link';
import React from 'react';

import * as S from '../styles/404';

// Note: the old 4-second auto-redirect was removed — yanking users away
// without control is worse UX than letting them choose where to go.
const Custom404 = () => {
  return (
    <>
      <S.Wrapper>
        <Seo title="Polkadex - 404 Error" path="/404" noindex />
        <S.Container>
          <S.TitleContainer>
            <h1>404</h1>
            <h2>There is no light down here.</h2>
            <p>
              Just because your path is different doesn&apos;t mean you are
              lost. The page you are looking for is not available right now.
            </p>
            <S.Actions>
              <Link href="/" className="primary">
                Back to home
              </Link>
              <Link href="/testnet-guide" className="secondary">
                Try the Testnet →
              </Link>
            </S.Actions>
          </S.TitleContainer>
          <S.ImageContainer>
            <img src="/img/error404.svg" alt="Error illustration" />
          </S.ImageContainer>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
export default Custom404;
