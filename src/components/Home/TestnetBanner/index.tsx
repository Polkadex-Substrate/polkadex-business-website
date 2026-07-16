import Link from 'next/link';

import * as S from './styles';

export const TestnetBanner = () => {
  return (
    <S.Wrapper>
      <S.Banner>
        <S.Text>
          <span>Orderbook Testnet</span>
          <p>
            <strong>It&apos;s live.</strong> Claim free testnet tokens, place
            orders, and move assets cross-chain via Hyperbridge.
          </p>
        </S.Text>
        <S.Actions>
          <S.PrimaryAction
            href="https://orderbook-app-test.polkadex.ee/"
            target="_blank"
            rel="noreferrer"
          >
            Try the testnet
          </S.PrimaryAction>
          <Link href="/testnet-guide" passHref legacyBehavior>
            <S.SecondaryAction>Read the guide</S.SecondaryAction>
          </Link>
        </S.Actions>
      </S.Banner>
    </S.Wrapper>
  );
};
