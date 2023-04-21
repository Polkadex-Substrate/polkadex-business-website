export const typesApi = {
  types: {
    RewardsInfoByAccount: {
      claimed: 'Balance',
      unclaimed: 'Balance',
      claimable: 'Balance',
    },
  },
  rpc: {
    rewards: {
      accountInfo: {
        description: 'get rewards info for an account',
        params: [
          {
            name: 'account_id',
            type: 'AccountId',
          },
          {
            name: 'reward_id',
            type: 'u32',
          },
        ],
        type: 'String',
      },
    },
  },
};
