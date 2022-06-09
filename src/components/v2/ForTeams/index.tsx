import * as S from './styles';

export const ForTeams = () => {
  return (
    <S.Wrapper id="forteams">
      <S.Container>
        <img src="/img/polkaidoPreview.png" alt="Polkaido preview" />
        <S.Content>
          <S.Title>
            <h2>For teams</h2>
            <p>
              Raise money, distribute tokens, bridge them to other networks, and
              list them on Polkadex Orderbook. All in a few clicks.
            </p>
          </S.Title>

          <S.ContentCard>
            <p>
              How to raise funds on PolkaIDO? Use your PDEX to register your
              account and;
            </p>
            <ul>
              <li>1. Mint tokens</li>
              <li>2. Create investment rounds</li>
              <li>3. Send your raised funds across chains</li>
              <li>4. List on Polkadex Orderbook</li>
            </ul>
            <a href="/">Create round now!</a>
          </S.ContentCard>
        </S.Content>
      </S.Container>
      <S.Benefits>
        <Card title="Fully on-chain" />
        <Card title="No expensive smart contract set-up" />
        <Card title="Mint and burn ERC-20 or parachain compatible tokens" />
        <Card title="Launchpad: List your token on Polkadex Orderbook after your IDO. Nowithout prohibitive fees. " />
      </S.Benefits>
    </S.Wrapper>
  );
};

const Card = ({ title }) => (
  <S.Card>
    <div>
      <img src="/img/checked.png" alt="Checked icon" />
    </div>
    <p>{title}</p>
  </S.Card>
);
