import { useContext } from 'react';

import { RewardsContext } from '../providers';

export const useRewards = () => useContext(RewardsContext);
