import axios from 'axios';
import { Template } from 'components/Careers';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const Careers = ({ jobs = [], error = '' }) => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  });
  return <div />;

  return <Template jobs={jobs} error={error} />;
};

export default Careers;

Careers.getInitialProps = async () => {
  try {
    const { data }: any = await axios.get(
      `${process.env.WORKABLE_URL}/spi/v3/jobs`,
      {
        headers: {
          Authorization: `Bearer ${process.env.WORKABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return { jobs: data.jobs };
  } catch (error) {
    return { error: error?.message };
  }
};
