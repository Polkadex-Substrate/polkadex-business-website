import { signAndSubmitPromiseWrapper } from '@polkadex/blockchain-api';
import Utils from '@polkadex/utils';
import React, { createContext, useCallback, useEffect } from 'react';

import { useApi } from '../hooks';
import { useWallet } from '../hooks/useWallet';

interface RewardsQueryResult {
  claimAmount: string | number;
  totalRewardAmount: string | number;
  factor: string | number;
  initialRewardsClaimable: string | number;
  isInitialRewardsClaimed: boolean;
  isInitialized: boolean;
  lastBlockRewardsClaim: string | number;
}

interface Rewards {
  total: string;
  claimable: string;
  claimed: string;
}

export interface RewardsCtx extends Rewards {
  loading: boolean;
  isClaimDisabled: boolean;
  isInitialized: boolean;
  fetchRewards: (address: string) => Promise<Rewards>;
  claimRewards: () => Promise<void>;
  initiateClaim: () => Promise<void>;
  doesAccountHaveRewards: boolean;
}

export const RewardsContext = createContext<RewardsCtx>({} as RewardsCtx);

export const RewardsProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const { api, success: apiConnected, currentBlock } = useApi();
  const { getSinger } = useWallet();
  const [rewards, setRewards] = React.useState<Rewards | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [claimLoading, setClaimLoading] = React.useState<boolean>(false);
  const [isInitialized, setIsInitialized] = React.useState<boolean>(false);
  const { account } = useWallet();
  const isClaimDisabled =
    claimLoading || !rewards || Number(rewards?.claimable || 0) <= 1;
  /**
   * Retrieves rewards for a given address using the provided api object and current block number.
   * @param {string} address - The address to retrieve rewards for.
   * @returns {Promise<Rewards | null>} - A Promise that resolves to an object containing information on the rewards for the provided address, or null if no data was retrieved.
   * */
  const fetchRewards = useCallback(
    async (address: string): Promise<Rewards | null> => {
      setLoading(true);
      const res = await api.query.rewards.distributor(1, address);
      const data = res.toJSON() as unknown as RewardsQueryResult | null;
      if (data) {
        setIsInitialized(data.isInitialized);
        const total =
          BigInt(data.totalRewardAmount) + BigInt(data.initialRewardsClaimable);
        const blocksTillNow = currentBlock - Number(data.lastBlockRewardsClaim);
        const amountTillNow =
          BigInt(data.factor) * BigInt(blocksTillNow) +
          BigInt(data.initialRewardsClaimable);
        const claimable = data.isInitialRewardsClaimed
          ? amountTillNow - BigInt(data.initialRewardsClaimable)
          : amountTillNow;
        return {
          total: Number(Utils.formatUnits(total, 12)).toFixed(3),
          claimable: Number(Utils.formatUnits(claimable, 12)).toFixed(3),
          claimed: Number(Utils.formatUnits(data.claimAmount, 12)).toFixed(3),
        };
      }
      setIsInitialized(false);
      return null;
    },
    [api, currentBlock],
  );
  const claimRewards = useCallback(async () => {
    if (apiConnected && account && !isClaimDisabled) {
      setClaimLoading(true);
      const tx = api.tx.rewards.claim(1);
      const signer = await getSinger(account.address);
      await signAndSubmitPromiseWrapper({
        tx,
        address: account.address,
        signer,
        criteria: 'IS_FINALIZED',
      });
    }
    setClaimLoading(false);
  }, [apiConnected, account, getSinger, api, isClaimDisabled]);

  const initiateClaim = useCallback(async () => {
    if (apiConnected && account) {
      const tx = api.tx.rewards.initializeClaimRewards(1);
      const signer = await getSinger(account.address);
      await signAndSubmitPromiseWrapper({
        tx,
        address: account.address,
        signer,
        criteria: 'IS_FINALIZED',
      });
    }
  }, [apiConnected, account, getSinger, api]);

  useEffect(() => {
    if (apiConnected && account) {
      fetchRewards(account.address).then((data) => {
        if (!data) {
          setRewards(null);
          return;
        }
        setRewards(data);
        setLoading(false);
      });
    }
  }, [apiConnected, fetchRewards, account]);

  const value = {
    ...rewards,
    fetchRewards,
    loading,
    doesAccountHaveRewards: rewards !== null, // account should be present in csv
    isInitialized,
    claimRewards,
    initiateClaim,
    isClaimDisabled,
  };
  return (
    <RewardsContext.Provider value={value}>{children}</RewardsContext.Provider>
  );
};
