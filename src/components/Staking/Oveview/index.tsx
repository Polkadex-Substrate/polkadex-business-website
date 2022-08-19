import * as S from './styles';

export const Overview = () => {
  return (
    <S.Wrapper id="overview">
      <S.Card>
        <h2>
          <strong>Secure the network,</strong> earn PDEX returns.
        </h2>
        <p>
          One of the main purposes of the PDEX token is to ensure the security
          of the Polkadex network. Staking makes this possible by incentivizing
          PDEX holders to behave in honest ways. The staking mechanism rewards
          &quot;good&quot; actors while it warns and even punishes
          &quot;bad&quot; actors.
        </p>
      </S.Card>
      <S.Card>
        <h2>
          Become an integral part of the <strong>Polkadex community</strong>.
        </h2>
        <p>
          You can stake your PDEX on the Polkadex mainnet and earn rewards while
          directly contributing to the security and decentralization of the
          network.
        </p>
      </S.Card>
    </S.Wrapper>
  );
};
