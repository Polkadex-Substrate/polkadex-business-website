import { signAndSubmitPromiseWrapper } from '@polkadex/blockchain-api';
import Utils from '@polkadex/utils';
import { encodeAddress } from '@polkadot/util-crypto';
import { parse } from 'papaparse';
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { toast } from 'utils/toast';

import { useApi } from '../hooks';
import { useWallet } from '../hooks/useWallet';
import { parseRewardsRpcResult } from './utils';

interface Rewards {
  total: string;
  claimable: string;
  claimed: string;
}

interface CrowndloandData {
  account: string;
  totalPdex: string;
  initialClaim: string;
  factor: string;
  dotContributed: string;
}

type CrowndloandRealData = {
  Account: string;
  'Total Pdex rewards': string;
  'Initial Claimable rewards': string;
  Factor: string;
  'DOT Contributed': string;
};

export interface RewardsCtx extends Rewards {
  loading: boolean;
  isClaimDisabled: boolean;
  isTransactionLoading: boolean;
  isUnlocked: boolean;
  fetchRewards: (address: string) => void;
  claimRewards: () => Promise<void>;
  initiateClaim: () => Promise<void>;
  hasRewards?: boolean;
  walletReward?: CrowndloandData;
}

export const RewardsContext = createContext<RewardsCtx>({} as RewardsCtx);

export const RewardsProvider = ({ children }: PropsWithChildren<unknown>) => {
  const { api, success: apiConnected, currentBlock } = useApi();
  const { getSinger } = useWallet();
  const [rewards, setRewards] = useState<Rewards | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [walletReward, setWalletReward] = useState<CrowndloandData | null>(
    null,
  );
  const [isTransactionLoading, setIsTransactionLoading] =
    useState<boolean>(false);
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const { account } = useWallet();

  const isClaimDisabled = useMemo(
    () =>
      isTransactionLoading || !rewards || Number(rewards?.claimable || 0) <= 1,
    [isTransactionLoading, rewards],
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
        // @ts-ignore
        const rpcResult = await api.rpc?.rewards?.accountInfo(address, 1);
        const data = parseRewardsRpcResult(rpcResult.toString());
        if (!data || !walletReward?.totalPdex) {
          setRewards(null);
          setIsUnlocked(false);
          return;
        }
        setRewards({
          total: walletReward.totalPdex,
          claimable: Number(Utils.formatUnits(data.claimable, 12)).toFixed(3),
          claimed: Number(Utils.formatUnits(data.claimed, 12)).toFixed(3),
        });
        setIsUnlocked(true);
      } catch (error) {
        console.log(error);
        toast(messages.FAILURE_FETCH, 'error');
        setIsUnlocked(false);
      } finally {
        setLoading(false);
      }
    },
    [api, currentBlock, walletReward?.totalPdex],
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
    if (!rewards) {
      toast(messages.NO_REWARDS, 'error');
      return;
    }
    if (!isUnlocked) {
      toast(messages.NOT_UNLOCKED, 'error');
      return;
    }
    try {
      toast(messages.INFO_SUBMIT, 'info');
      setIsTransactionLoading(true);
      const tx = api.tx.rewards.claim(1);
      const signer = await getSinger(account.address);
      await signAndSubmitPromiseWrapper({
        tx,
        address: account.address,
        signer,
        criteria: 'IS_IN_BLOCK',
      });
      toast(messages.SUCCESS_CLAIM, 'success');
    } catch (error) {
      toast(`${messages.FAILURE_CLAIM}: ${error?.message ?? error}`, 'error');
    } finally {
      setIsTransactionLoading(false);
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
      toast(messages.INFO_SUBMIT, 'info');
      setIsTransactionLoading(true);
      const tx = api.tx.rewards.initializeClaimRewards(1);
      const signer = await getSinger(account.address);
      await signAndSubmitPromiseWrapper({
        tx,
        address: account.address,
        signer,
        criteria: 'IS_IN_BLOCK',
      });
      toast(messages.SUCCESS_INITIATE, 'success');
    } catch (error) {
      toast(
        `${messages.FAILURE_INITIATE}: ${error?.message ?? error}`,
        'error',
      );
    } finally {
      setIsTransactionLoading(false);
    }
  }, [apiConnected, account, getSinger, api]);

  const fetchHasWalletReward = useCallback(async (address: string) => {
    const file = await fetch('/docs/crowdloan_distribution_rewards.csv');
    const fileData = await file.text();
    parse(fileData, {
      delimiter: ',',
      header: true,
      complete: (d) => {
        const parserData = (d?.data as CrowndloandRealData[])?.find(
          (item) =>
            encodeAddress(item.Account, 88) === encodeAddress(address, 88),
        );
        if (!parserData) {
          setWalletReward(null);
          return;
        }

        const parserResult: CrowndloandData = {
          account: parserData.Account,
          totalPdex: parserData['Total Pdex rewards'],
          initialClaim: parserData['Initial Claimable rewards'],
          dotContributed: parserData['DOT Contributed'],
          factor: parserData.Factor,
        };
        setWalletReward(parserResult);
      },
    });
  }, []);

  useEffect(() => {
    if (apiConnected && account && walletReward) fetchRewards(account.address);
  }, [apiConnected, fetchRewards, account, walletReward]);

  useEffect(() => {
    if (apiConnected && account) fetchHasWalletReward(account.address);
  }, [apiConnected, account, fetchHasWalletReward]);

  const value = {
    ...rewards,
    fetchRewards,
    loading,
    walletReward,
    isUnlocked,
    claimRewards,
    initiateClaim,
    hasRewards: !!walletReward,
    isClaimDisabled,
    isTransactionLoading,
  };
  return (
    <RewardsContext.Provider value={value}>{children}</RewardsContext.Provider>
  );
};

const messages = {
  NOT_CONNECTED: 'Please connect to the API to claim rewards.',
  NO_ACCOUNT: 'Please select an account to claim rewards.',
  NO_REWARDS: 'You do not have any rewards to claim.',
  NOT_UNLOCKED: 'You have not unlocked your rewards',
  SUCCESS_CLAIM: 'Rewards claimed successfully!',
  SUCCESS_INITIATE: 'Unlocked rewards successfully!',
  FAILURE_CLAIM: 'Failed to claim rewards. Please try again later',
  FAILURE_FETCH: 'Failed to fetch rewards. Please try again later',
  FAILURE_INITIATE: 'Failed to initiate claim rewards. Please try again later',
  INFO_SUBMIT: 'Submitting transaction to blockchain...',
};
