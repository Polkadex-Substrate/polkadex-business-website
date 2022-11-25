import * as Icons from 'components/Icons';

import * as S from './styles';

export const Wallets = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <h2>Wallets</h2>
        <S.Container>
          <S.Card href="/" target="_blank">
            <Icons.LedgerWallet />
            <p>Ledger</p>
            <S.Badge>New</S.Badge>
          </S.Card>
          <S.Card href="/" target="_blank">
            <img src="/img/wallets/nova.png" alt="Nova Wallet Logo" />
            <p>Nova</p>
          </S.Card>
          <S.Card href="/" target="_blank">
            <Icons.TalismanWallet />
            <p>Talisman</p>
          </S.Card>
          <S.Card href="/" target="_blank">
            <img src="/img/wallets/talisman.png" alt="Talisman Wallet Logo" />
            <p>Talisman</p>
          </S.Card>
          <S.Card href="/" target="_blank">
            <img src="/img/wallets/fearless.png" alt="Fearless Wallet Logo" />
            <p>Fearless</p>
          </S.Card>
          <S.Card href="/" target="_blank">
            <img src="/img/wallets/subwallet.png" alt="SubWallet Logo" />
            <p>SubWallet</p>
          </S.Card>
          <S.Card href="/" target="_blank">
            <Icons.PolkadotJsWallet />
            <p>PolkadotJs</p>
          </S.Card>
          <S.Card href="/" target="_blank">
            <Icons.SubVisJsWallet />
            <p>Subvisio</p>
          </S.Card>
        </S.Container>
      </S.Content>
    </S.Wrapper>
  );
};
