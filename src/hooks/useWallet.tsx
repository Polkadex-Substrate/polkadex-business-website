import { useContext } from 'react';

import { WalletContext } from '../providers';

export const useWallet = () => useContext(WalletContext);
