/* eslint-disable react/no-danger */
import { Hero, OpenJobs, Vision } from 'components/Careers';
import { Footer, Header, Newsletter } from 'components/v2';
import Head from 'next/head';

import * as S from './styles';

export const Template = ({ jobs, error }) => {
  return (
    <>
      <S.Wrapper>
        <Head>
          <title>Polkadex Careers</title>
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
          <Hero />
          <Vision />
          <OpenJobs jobs={jobs} error={error} />
          <Newsletter />
        </main>
        <Footer isDark />;
      </S.Wrapper>
    </>
  );
};
