// TODO: Check apiConnected loop...
import { signAndSubmitPromiseWrapper } from '@polkadex/blockchain-api';
import Utils from '@polkadex/utils';
import React, { createContext, useCallback, useEffect, useMemo } from 'react';
import { toast } from 'utils/toast';

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
  fetchRewards: (address: string) => void;
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

  const isClaimDisabled = useMemo(
    () => claimLoading || !rewards || Number(rewards?.claimable || 0) <= 1,
    [claimLoading, rewards],
  );

  /**
   * Retrieves rewards for a given address using the provided api object and current block number.
   * @param {string} address - The address to retrieve rewards for.
   * @returns {Promise<Rewards | null>} - A Promise that resolves to an object containing information on the rewards for the provided address, or null if no data was retrieved.
   * */
  const fetchRewards = useCallback(
    async (address: string) => {
      try {
        setLoading(true);
        const res = await api.query.rewards.distributor(1, address);
        const data = res.toJSON() as unknown as RewardsQueryResult | null;

        if (!data) {
          toast(messages.NO_REWARDS, 'error');
          setRewards(null);
          return;
        }
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

        setRewards({
          total: Number(Utils.formatUnits(total, 12)).toFixed(3),
          claimable: Number(Utils.formatUnits(claimable, 12)).toFixed(3),
          claimed: Number(Utils.formatUnits(data.claimAmount, 12)).toFixed(3),
        });
      } catch (error) {
        console.log(error);
        toast(messages.FAILURE_FETCH, 'error');
      } finally {
        setLoading(false);
        setIsInitialized(false);
      }
    },
    [api, currentBlock],
  );

  const claimRewards = useCallback(async () => {
    if (!apiConnected) {
      toast(messages.NOT_CONNECTED, 'error');
      return;
    }
    if (!account) {
      toast(messages.NO_ACCOUNT, 'error');
      return;
    }
    if (!isClaimDisabled) {
      toast(messages.NO_REWARDS, 'error');
      return;
    }
    try {
      setClaimLoading(true);
      const tx = api.tx.rewards.claim(1);
      const signer = await getSinger(account.address);
      await signAndSubmitPromiseWrapper({
        tx,
        address: account.address,
        signer,
        criteria: 'IS_FINALIZED',
      });
      toast(messages.SUCCESS_CLAIM, 'success');
    } catch (error) {
      toast(`${messages.FAILURE_CLAIM}: ${error?.message ?? error}`, 'error');
    } finally {
      setClaimLoading(false);
    }
  }, [apiConnected, account, getSinger, api, isClaimDisabled]);

  const initiateClaim = useCallback(async () => {
    if (!apiConnected) {
      toast(messages.NOT_CONNECTED, 'error');
      return;
    }
    if (!account) {
      toast(messages.NO_ACCOUNT, 'error');
      return;
    }
    try {
      const tx = api.tx.rewards.initializeClaimRewards(1);
      const signer = await getSinger(account.address);
      await signAndSubmitPromiseWrapper({
        tx,
        address: account.address,
        signer,
        criteria: 'IS_FINALIZED',
      });
      toast(messages.SUCCESS_INITIATE, 'success');
    } catch (error) {
      toast(
        `${messages.FAILURE_INITIATE}: ${error?.message ?? error}`,
        'error',
      );
    }
  }, [apiConnected, account, getSinger, api]);

  useEffect(() => {
    if (apiConnected && account) fetchRewards(account.address);
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

const messages = {
  NOT_CONNECTED: 'Please connect to the API to claim rewards.',
  NO_ACCOUNT: 'Please select an account to claim rewards.',
  NO_REWARDS: 'You do not have any rewards to claim.',
  SUCCESS_CLAIM: 'Rewards claimed successfully!',
  SUCCESS_INITIATE: 'Initiated claim rewards successfully!',
  FAILURE_CLAIM: 'Failed to claim rewards. Please try again later',
  FAILURE_FETCH: 'Failed to fetch rewards. Please try again later',
  FAILURE_INITIATE: 'Failed to initiate claim rewards. Please try again later',
};
