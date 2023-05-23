import keyring from '@polkadot/ui-keyring';

export const formatAmount = (amount: string) => {
  // amount could be 1998.99999
  const [first, second] = amount.split('.');
  if (second) {
    return `${first}.${second.slice(0, 3)}`;
  }
  return amount;
};

export const formatAddressToDefault = (addr: string): string => {
  return keyring.encodeAddress(addr, 42);
};

export const formatAddressToPolkadex = (addr: string): string => {
  return keyring.encodeAddress(addr, 88);
};
