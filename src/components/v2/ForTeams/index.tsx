import * as S from './styles';

export const ForTeams = () => {
  return (
    <S.Wrapper id="forteams">
      <S.Container>
        <video
          key="https://cdn.sketch.com/assets/pages/collaborate/real-time-collab-visual.mp4"
          poster="https://sketch-cdn.imgix.net/assets/pages/collaborate/real-time-collab-visual@2x.png?ixlib=rb-4.0.1&amp;q=95&amp;fm=png&amp;auto=format&amp;s=345ffba50881bab34acc2e05c1f6c265"
          data-autoplay-in-viewport="true"
          loop
          muted
          autoPlay
          data-controller="entrance"
          data-hs-allowed="true"
          data-entrance-is-intersecting-value="true"
        >
          <source src="https://cdn.sketch.com/assets/pages/collaborate/real-time-collab-visual.mp4" />
        </video>
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
