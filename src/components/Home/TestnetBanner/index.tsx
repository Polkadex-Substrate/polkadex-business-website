import Link from 'next/link';

import * as S from './styles';

export const TestnetBanner = () => {
  return (
    <S.Wrapper>
      <S.Banner>
        <S.Text>
          <span>Orderbook Testnet</span>
          <p>
            Getting ready for the Orderbook testnet launch? Learn how to claim
            testnet tokens and move them cross-chain.
          </p>
        </S.Text>
        <Link href="/testnet-guide" passHref legacyBehavior>
          <S.Action>Read the guide</S.Action>
        </Link>
      </S.Banner>
    </S.Wrapper>
  );
};
