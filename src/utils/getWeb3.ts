import Web3 from 'web3';

const getWeb3 = () => {
  return new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    const initWeb3 = async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.enable();
          // Accounts now exposed
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const { web3 } = window;
        console.log('Injected web3 detected.');
        resolve(web3);
      }
      // Fallback to localhost; use dev console port by default...
      else {
        console.log(
          'No web3 instance injected, Please Install Metamask extension',
        );
        reject(new Error('Install Metamask'));
      }
    };
    initWeb3();
  });
};

export default getWeb3;

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}
