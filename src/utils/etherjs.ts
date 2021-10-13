import { Contract, ContractInterface, ethers } from "ethers";

let provider: ethers.providers.Web3Provider;
let signer: ethers.providers.JsonRpcSigner;

export const connectWeb3 = async () => {
    if (window.ethereum) {
        try {
            await window.ethereum.enable();
            // A Web3Provider wraps a standard Web3 provider, which is
            // what Metamask injects as window.ethereum into each page
            provider = new ethers.providers.Web3Provider(window.ethereum)

            // The Metamask plugin also allows signing transactions to
            // send ether and pay to change state within the blockchain.
            // For this, you need the account signer...
            signer = provider.getSigner();
        } catch (error) {
            throw new Error(error);
        }
    }

    return {
        provider,
        signer
    }
}

export const createContractInstance = (contractAddress: string, abi: ContractInterface, _provider: ethers.providers.Web3Provider | ethers.Signer): Contract => {
    return new ethers.Contract(contractAddress, abi, _provider);
}

export const tokenContractAllowance = async (tokenContract: Contract, ownerAddress: string, spenderAddress: string): Promise<number> => {
    const allowance = await tokenContract.allowance(ownerAddress, spenderAddress);
    return parseFloat(ethers.utils.formatEther(allowance));
}

export const approveToken = async (tokenContractInstance: Contract, contractAddress: string, amount: number) => {
    return await tokenContractInstance.approve(contractAddress, amount);
}

export const authorizeOperator = async (contractInstance: Contract, contractAddress: string) => {
    return await contractInstance.authorizeOperator(contractAddress)
}

export const lockContract = async (ERC20AppContractInstance: Contract, tokenAddress: string, polkadotHexPublicAddress: string, amount: number, chainId: number = 0) => {
    return await ERC20AppContractInstance.lock(
        tokenAddress,
        polkadotHexPublicAddress,
        amount,
        chainId
    );
}