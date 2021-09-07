import getWeb3 from './getWeb3';

export const ercWallet = async (contractAddress: string, abi: Array<any>) => {
    try {
        const web3 = await getWeb3();
        const accounts = await web3['eth'].getAccounts();
        const instance = new web3['eth'].Contract(
          abi,
          contractAddress,
        );

        return { web3, accounts, instance }

    } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
            `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
    }
}

export const getWeb3WalletBalance = async (web3, account: string) => {
    const balanceInWei = await web3['eth'].getBalance(account)
    return web3['utils'].fromWei(balanceInWei);
}