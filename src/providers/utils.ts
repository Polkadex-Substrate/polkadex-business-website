export const parseRewardsRpcResult = (
  input: string,
): {
  claimed: number;
  unclaimed: number;
  claimable: number;
} | null => {
  const val = JSON.parse(input);
  if (!val?.Ok) {
    return null;
  }
  return { ...val.Ok };
};
