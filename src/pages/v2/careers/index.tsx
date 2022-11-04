import axios from 'axios';
import { Template } from 'components/Careers';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const Careers = ({ jobs = [], error = '' }) => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  });
  return <div />;

  // return <Template jobs={jobs} error={error} />;
};

export default Careers;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   try {
//     const { data }: any = await axios.get(
//       `${process.env.WORKABLE_URL}/spi/v3/jobs`,
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.WORKABLE_TOKEN}`,
//           'Content-Type': 'application/json',
//         },
//       },
//     );
//     return { props: { jobs: data?.jobs } };
//   } catch (error) {
//     return { props: { error: error?.message } };
//   }
// };
