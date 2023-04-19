import axios from 'axios';
import dynamic from 'next/dynamic';
import { ToastContainer } from 'react-toastify';

import { RewardsProvider } from '../providers';

const Template = dynamic(
  () => import('components/Rewards').then((mod) => mod.Template),
  {
    ssr: false,
  },
);
export const Rewards = ({ data }) => (
  <>
    <ToastContainer />
    <RewardsProvider>
      <Template apy={data?.apy ?? 24.5} />
    </RewardsProvider>
  </>
);

export default Rewards;

Rewards.getInitialProps = async () => {
  try {
    const apy: any = await axios.get(
      `${process.env.STAKING_SCRAP}/api/infos/1`,
      {
        headers: { Authorization: `Bearer ${process.env.STAKING_SCRAP_TOKEN}` },
      },
    );
    const result = apy?.data?.data?.attributes?.value?.replace(/%/g, '');
    return {
      data: {
        apy: Number(result),
      },
    };
  } catch (error) {
    return { error: error.message };
  }
};
