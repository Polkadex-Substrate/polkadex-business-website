import dynamic from 'next/dynamic';

import { RewardsProvider } from '../providers';

const Template = dynamic(
  () => import('components/Rewards').then((mod) => mod.Template),
  {
    ssr: false,
  },
);
export const Rewards = () => (
  <RewardsProvider>
    <Template />
  </RewardsProvider>
);

export default Rewards;
