import * as S from './styles';

export const UpcomingProjects = () => {
  return (
    <S.Wrapper id="upcomingprojects">
      <S.Title>
        <h2>Upcoming Projects</h2>
        <a href="/">Explore Projects</a>
      </S.Title>
      <S.Container>
        <S.Projects>
          <Card
            logo="/img/polkadexLogo.png"
            cover="/img/polkadexOrderbookCover.png"
            status="Allow List Close"
            title="Polkadex Ordebook"
            ticker="PDO"
            description="Polkadex Orderbook is a non-custodial Layer 2 based exchange on the Polkadex Network.."
            voteAmount="721,001"
            voteNumber="#1"
            category="Exchange"
            chain="/img/polkadexLogo.png"
            salePrice="0.97"
            totalTokens="210,000"
            chainName="PDEX"
          />

          <Card
            logo="/img/theaLogo.png"
            cover="/img/theaBridgeCover.png"
            status="Allow List Close"
            title="Thea bridge"
            ticker="TBE"
            description="Thea, Polkadex’s revolutionary interoperability layer, is almost here. Get ready for an easier...  "
            voteAmount="718,542"
            voteNumber="#2"
            category="Protocol"
            chain="/img/polkadexLogo.png"
            salePrice="1"
            totalTokens="1,820,000"
            chainName="PDEX"
          />
          <Card
            logo="/img/polkapoolLogo.png"
            cover="/img/polkapoolCover.png"
            status="Allow List Close"
            title="Polkapool"
            ticker="PPO"
            description="Token swap platform akin to current decentralized exchanges (DEX) with built-in..."
            voteAmount="721,001"
            voteNumber="#3"
            category="Platform"
            chain="/img/polkadexLogo.png"
            salePrice="3"
            totalTokens="1,545,000"
            chainName="PDEX"
          />
        </S.Projects>
        <button type="button" onClick={() => console.log('testing')}>
          Load More
        </button>
      </S.Container>
    </S.Wrapper>
  );
};

const Card = ({
  logo,
  cover,
  status,
  title,
  ticker,
  description,
  voteAmount,
  voteNumber,
  category,
  chain,
  salePrice,
  totalTokens,
  chainName,
}) => (
  <S.Card>
    <S.CardHeader>
      <img src={cover} alt="project cover" />
      <span>{status}</span>
    </S.CardHeader>
    <S.CardContent>
      <S.CardContentHeader>
        <div>
          <img src={logo} alt="Project logo" />
        </div>
        <div>
          <span>{title}</span>
          <small>{ticker}</small>
        </div>
      </S.CardContentHeader>
      <p>{description}</p>
      <S.CardContentFooter>
        <div>
          <span>Sale Price</span>
          <p>
            1 {ticker} = {salePrice} {chainName}
          </p>
        </div>
        <div>
          <span>Total Tokens</span>
          <p>{totalTokens}</p>
        </div>
      </S.CardContentFooter>
    </S.CardContent>
    <S.CardFooter>
      <S.CardVotes>
        <div>
          <span>{voteNumber}</span>
        </div>
        <div>
          <small>Votes</small>
          <p>{voteAmount}</p>
        </div>
      </S.CardVotes>
      <S.CardInfo>
        <span>{category}</span>
        <div>
          <img src={chain} alt="Chain logo" />
        </div>
      </S.CardInfo>
    </S.CardFooter>
  </S.Card>
);
