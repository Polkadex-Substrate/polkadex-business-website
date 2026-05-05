import Link from 'next/link';

import * as S from './styles';

export const InitialBanner = () => (
  <S.Wrapper>
    <Link
      href="https://github.com/Polkadex-Substrate/Docs/blob/master/Polkadex_Excluded_Jurisdictions.pdf"
      rel="noreferrer"
      target="_blank"
    >
      Polkadex Orderbook Excluded Jurisdictions
    </Link>
  </S.Wrapper>
);
