import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
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
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config','${process.env.GOOGLE_ANALYTICS}');
          `,
        }}
      />
      <S.Wrapper>
        <Head>
          <title>Polkadex - 404 Error</title>
        </Head>
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
    </>
  );
};
export default Custom404;
