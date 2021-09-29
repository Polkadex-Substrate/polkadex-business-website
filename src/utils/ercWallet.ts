import getWeb3 from './getWeb3';

let web3: any;

export const initiateContract = async (contractAddress: string, abi: Array<any>) => {
    try {
        // instantiate only once
        if (!web3) {
            web3 = await getWeb3();
        }

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

export const tokenAddress = "0x0c7f69f66ab81bb257198baa7f42fd1469e002a6";


export const erc20TokenBalance = async (contract, account: string) => {
    const tokenBalance = await contract.methods.balanceOf(account).call();
    return web3['utils'].fromWei(tokenBalance);
}