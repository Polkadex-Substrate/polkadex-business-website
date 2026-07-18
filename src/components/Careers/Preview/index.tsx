/* eslint-disable react/no-danger */
import { PreviewHero } from 'components/Careers';
import { Footer, Header, Newsletter } from 'components/v2';
import Head from 'next/head';

import * as S from './styles';

export const Preview = ({ data, error }) => {
  return (
    <>
      <S.Wrapper>
        <Head>
          <title>Polkadex Careers - {data?.title}</title>
        </Head>
        <Header
          logo="Careers"
          links={[
            {
              title: 'Overview',
              href: '/v2/careers/#overview',
            },
            {
              title: 'Vision',
              href: '/v2/careers/#vision',
            },
          ]}
          cta={{
            title: 'Open Jobs',
            href: 'https://beta.tokenmanager.polkadex.ee/ido',
          }}
        />
        <main>
          <PreviewHero data={data} error={error} />
          <Newsletter />
        </main>
        <Footer isDark />
      </S.Wrapper>
    </>
  );
};
