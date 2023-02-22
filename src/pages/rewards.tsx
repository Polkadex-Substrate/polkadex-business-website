import { Template } from 'components/Rewards';

import { RewardsProvider } from '../providers';

export const Rewards = () => (
  <RewardsProvider>
    <Template />
  </RewardsProvider>
);

export default Rewards;
