import { useContext } from 'react';

import { WalletContext, WalletCtx } from '../providers';

export const useWallet = () =>
  useContext(WalletContext) as Exclude<WalletCtx, null>;
