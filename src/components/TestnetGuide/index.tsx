import * as S from './styles';

const sepoliaTokens = [
  { token: 'USDC', address: '0xb177b85d589B806E9e82C02e5b92180a4B4d90bb' },
  { token: 'USDT', address: '0x086d2f4CCD29D6CbD921EF0aa09EC20F67f7d69D' },
  { token: 'WBTC', address: '0xf32CCA1B10C65553690F9F72Afe8df13CC33A406' },
  { token: 'LINK', address: '0xEfa898bCb94Cc119F4687F47dc77E68f5F097197' },
  { token: 'UNI', address: '0x491497cf6ec0D498A0586Af9679F0F5dA94e4e24' },
  { token: 'AAVE', address: '0x8D7392d6e955a87B41383037826157011700B2c8' },
  { token: 'wstETH', address: '0xcF47f5C69aE7bEee74C12d37fe5842dA64e4f9aa' },
];

export const TestnetGuide = () => {
  const exchangeUrl = process.env.ORDERBOOK_LINK;
  return (
    <S.Wrapper>
      <h1>Cross-Chain Transfer Guide — Polkadex Testnet</h1>
      <S.Lead>
        This guide explains how to get testnet tokens and transfer them between{' '}
        <strong>Polkadex</strong> and{' '}
        <strong>Sepolia (Ethereum testnet)</strong>.
      </S.Lead>
      <S.Cta href={exchangeUrl} target="_blank" rel="noreferrer">
        Open the Testnet Exchange
      </S.Cta>

      <h2>What you can do</h2>
      <ul>
        <li>
          Get free testnet tokens directly from the{' '}
          <strong>Polkadex Exchange UI</strong>
        </li>
        <li>
          Transfer tokens <strong>from Sepolia to Polkadex</strong>
        </li>
        <li>
          Transfer tokens <strong>from Polkadex back to Sepolia</strong>
        </li>
      </ul>
      <p>
        The same set of tokens is available on both chains:{' '}
        <strong>PDEX, WETH, WBTC, USDC, USDT, LINK, UNI, AAVE, wstETH</strong>.
      </p>

      <h2>Recommended wallet — Enkrypt</h2>
      <p>
        We recommend using{' '}
        <a href="https://www.enkrypt.com/" target="_blank" rel="noreferrer">
          Enkrypt
        </a>{' '}
        as your wallet for testing. Enkrypt is a multi-chain browser extension
        that supports both <strong>Ethereum (Sepolia)</strong> and{' '}
        <strong>Polkadex</strong> in a single extension — so you don&apos;t need
        to juggle two separate wallets.
      </p>
      <p>
        <strong>Setup:</strong>
      </p>
      <ol>
        <li>
          Install the{' '}
          <a href="https://www.enkrypt.com/" target="_blank" rel="noreferrer">
            Enkrypt extension
          </a>{' '}
          for your browser
        </li>
        <li>Create a new wallet or import an existing one</li>
        <li>
          Switch to the <strong>Sepolia</strong> network for your Ethereum
          address
        </li>
        <li>
          Switch to the <strong>Polkadex</strong> network for your Polkadex
          address
        </li>
      </ol>
      <S.Note>
        <p>
          MetaMask (Ethereum only) and the Polkadot.js extension (Polkadex only)
          also work if you prefer to use them separately.
        </p>
      </S.Note>

      <h2>Step 1 — Get testnet tokens from the faucet</h2>
      <p>
        Open the <strong>Polkadex Exchange UI</strong> and navigate to the
        Faucet section. You can request tokens for both chains from there:
      </p>
      <ul>
        <li>
          <strong>Polkadex tokens</strong> — enter your Polkadex wallet address
          to receive PDEX and other assets directly on-chain
        </li>
        <li>
          <strong>Sepolia tokens</strong> — enter your Ethereum wallet address
          to receive ERC-20 tokens on Sepolia
        </li>
      </ul>
      <S.Note>
        <p>
          Each token has a <strong>daily limit of 1 drip per address</strong>.
          Wait 24 hours before requesting again.
        </p>
      </S.Note>

      <h2>Step 2 — Cross-chain transfers</h2>
      <p>
        Once you have tokens, you can bridge them in either direction through the
        Exchange UI.
      </p>

      <h3>Sepolia → Polkadex</h3>
      <ol>
        <li>
          Connect your Ethereum wallet (MetaMask or Enkrypt) to the Exchange UI
        </li>
        <li>Select the token and amount you want to transfer</li>
        <li>Enter your Polkadex wallet address as the destination</li>
        <li>
          Confirm the transactions in your wallet —{' '}
          <strong>your wallet will prompt you twice</strong> (once to approve the
          token, once to send)
        </li>
        <li>Wait a few minutes for the transfer to arrive on Polkadex</li>
      </ol>
      <S.Note>
        <p>
          <strong>Note:</strong> Transfers from Sepolia require a small amount of{' '}
          <strong>Sepolia ETH for gas fees</strong>. Get free Sepolia ETH from
          the{' '}
          <a
            href="https://cloud.google.com/application/web3/faucet/ethereum/sepolia"
            target="_blank"
            rel="noreferrer"
          >
            Google Sepolia faucet
          </a>
          .
        </p>
      </S.Note>

      <h3>Polkadex → Sepolia</h3>
      <ol>
        <li>
          Connect your Polkadex wallet (Enkrypt or Polkadot.js extension) to the
          Exchange UI
        </li>
        <li>Select the token and amount</li>
        <li>Enter your Ethereum wallet address as the destination</li>
        <li>Sign the transaction</li>
        <li>Wait a few minutes for the transfer to arrive on Sepolia</li>
      </ol>
      <S.Note>
        <p>
          Transfers from Polkadex <strong>do not require ETH</strong> — only a
          small amount of PDEX for the Polkadex network fee.
        </p>
      </S.Note>

      <h2>Sepolia token contracts</h2>
      <p>
        To see your Sepolia token balances in MetaMask or Enkrypt, import the
        following contract addresses:
      </p>
      <S.TableWrapper>
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Contract address</th>
            </tr>
          </thead>
          <tbody>
            {sepoliaTokens.map((row) => (
              <tr key={row.token}>
                <td>{row.token}</td>
                <td>
                  <code>{row.address}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.TableWrapper>
      <p>
        <strong>How to import a token in MetaMask / Enkrypt:</strong>
      </p>
      <ol>
        <li>
          Open the wallet extension and switch to the <strong>Sepolia</strong>{' '}
          network
        </li>
        <li>
          Scroll down and click <strong>Import tokens</strong>
        </li>
        <li>
          Paste the contract address — the token symbol and decimals will fill
          in automatically
        </li>
        <li>
          Click <strong>Add custom token</strong>
        </li>
      </ol>

      <h2>Transfer times</h2>
      <p>
        Transfers typically complete around <strong>20 minutes</strong> after
        the transaction is confirmed. Timing depends on the Ethereum Sepolia
        chain and the cross-chain testnet.
      </p>
    </S.Wrapper>
  );
};
