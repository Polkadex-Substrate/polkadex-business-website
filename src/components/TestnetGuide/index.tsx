import * as S from './styles';

const sepoliaTokens = [
  {
    token: 'WETH',
    address: '0xdeFB8141353e8f190a5dA3813290A6d71cC89be5',
    decimals: 18,
  },
  {
    token: 'USDC',
    address: '0x640D825B10CE1527f09474D88322c25Fef74cb66',
    decimals: 6,
  },
  {
    token: 'USDT',
    address: '0x2f89c6D23514d50DE6B9759f283b0797380B13cc',
    decimals: 6,
  },
  {
    token: 'WBTC',
    address: '0x77037D488Bd4b20cB5BD86D4Bf7741887cd2Cf31',
    decimals: 8,
  },
  {
    token: 'LINK',
    address: '0xc5b50D42df0fB4CEC7c539417C310D586Fb9d254',
    decimals: 18,
  },
  {
    token: 'UNI',
    address: '0x1628b0746d94f8392c3e78CfBea0a9EF288ABc4C',
    decimals: 18,
  },
  {
    token: 'AAVE',
    address: '0xb41c54efBEB52679B81f120321f71b4E226e8BfA',
    decimals: 18,
  },
  {
    token: 'wstETH',
    address: '0x84bA5D441C10614B38e8B2032Ffe3B026a7ADB4d',
    decimals: 18,
  },
];

export const TestnetGuide = () => {
  const exchangeUrl = process.env.ORDERBOOK_LINK;
  return (
    <S.Wrapper>
      <h1>Polkadex Orderbook Testnet is Live</h1>
      <S.Lead>
        A live, non-custodial, cross-chain orderbook you can trade on today.
        This is a public testnet — no rewards, real product. Help us harden it
        before mainnet.
      </S.Lead>
      <S.Cta href={exchangeUrl} target="_blank" rel="noreferrer">
        Open the Testnet Exchange
      </S.Cta>

      <S.Pitch>
        <S.PitchCard>
          <h4>What this is</h4>
          <p>
            A public testnet of the Polkadex Orderbook — non-custodial, with
            live cross-chain transfers via Hyperbridge between Polkadex and
            Sepolia.
          </p>
        </S.PitchCard>
        <S.PitchCard>
          <h4>Why test</h4>
          <p>
            Help harden the product before mainnet relaunch. No points, no
            farming, no rewards — just early access to the real thing.
          </p>
        </S.PitchCard>
        <S.PitchCard>
          <h4>What to expect</h4>
          <p>
            It&apos;s a testnet, so things break. Bridged assets ride on
            Sepolia, and cross-chain transfers take about 20 minutes to
            settle.
          </p>
        </S.PitchCard>
      </S.Pitch>

      <S.FeedbackBlock>
        <div>
          <h3>Found a bug? Tell us.</h3>
          <p>
            The testnet lives or dies on your feedback. Drop bug reports and
            observations in the <strong>#testnet-feedback</strong> channel on
            our Discord — we read every one.
          </p>
        </div>
        <a
          href="https://discord.com/invite/Uvua83QAzk"
          target="_blank"
          rel="noreferrer"
        >
          Report on Discord
        </a>
      </S.FeedbackBlock>

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
              <th>Decimals</th>
            </tr>
          </thead>
          <tbody>
            {sepoliaTokens.map((row) => (
              <tr key={row.token}>
                <td>{row.token}</td>
                <td>
                  <code>{row.address}</code>
                </td>
                <td>{row.decimals}</td>
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

      <S.FeedbackBlock>
        <div>
          <h3>Hit something odd? Let us know.</h3>
          <p>
            Every report helps. If a transfer stalls, a UI feels off, or you
            just want to share what worked — ping{' '}
            <strong>#testnet-feedback</strong> on our Discord.
          </p>
        </div>
        <a
          href="https://discord.com/invite/Uvua83QAzk"
          target="_blank"
          rel="noreferrer"
        >
          Open Discord
        </a>
      </S.FeedbackBlock>
    </S.Wrapper>
  );
};
