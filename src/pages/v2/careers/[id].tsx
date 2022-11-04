import axios from 'axios';
import { Preview as PreviewComponent } from 'components/Careers';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const Preview = ({ data, error }) => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  });
  return <div />;
  // return <PreviewComponent data={data} error={error} />;
};

export default Preview;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { data }: any = await axios.get(
      `${process.env.WORKABLE_URL}/spi/v3/jobs/${ctx.query.id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.WORKABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return { props: { data } };
  } catch (error) {
    return { props: { error: error?.message } };
  }
};
