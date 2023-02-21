import React, { createContext, useCallback, useEffect } from 'react';

import { useApi } from '../hooks';

interface Rewards {
  claimable: string;
  claimed: string;
  total: string;
}

const initialRewardsState: Rewards = {
  claimable: '0',
  claimed: '0',
  total: '0',
};

export interface RewardsCtx extends Rewards {
  loading: boolean;
  fetchRewards: () => void;
}

export const RewardsContext = createContext<RewardsCtx>({} as RewardsCtx);

export const RewardsProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const { api, success } = useApi();
  const [rewards, setRewards] = React.useState<Rewards>(initialRewardsState);
  const [loading, setLoading] = React.useState<boolean>(false);

  const fetchRewards = useCallback(async (): Promise<Rewards> => {
    setLoading(true);
    const res = await api.query.rewards.distributor(1, 'account.address');
    return res.toJSON() as unknown as Rewards;
  }, [api]);

  useEffect(() => {
    if (success)
      fetchRewards().then((data) => {
        setRewards(data);
        setLoading(false);
      });
  }, [success, api, fetchRewards]);

  const value = { ...rewards, fetchRewards, loading };
  return (
    <RewardsContext.Provider value={value}>{children}</RewardsContext.Provider>
  );
};
