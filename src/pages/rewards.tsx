import { Intro } from 'components';
import dynamic from 'next/dynamic';
import { ToastContainer } from 'react-toastify';

import { RewardsProvider } from '../providers';

const Template = dynamic(
  () => import('components/Rewards').then((mod) => mod.Template),
  {
    ssr: false,
  },
);
export const Rewards = () => (
  <>
    <ToastContainer />
    <RewardsProvider>
      <Intro>
        <Template apy={24.5} />
      </Intro>
    </RewardsProvider>
  </>
);

export default Rewards;
