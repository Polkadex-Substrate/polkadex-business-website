import Title from 'components/Title';
import TokenEconomicsCard from 'components/TokenEconomicsCard';

import * as S from './styles';

const TokenEconomics = () => (
  <S.Wrapper id="tokenEconomics">
    <S.TitleContainer>
      <Title
        tag="Token Economics"
        title="Distribution of"
        highlight="Tokens"
        description=""
      />
    </S.TitleContainer>
    <S.ContentContainer>
      <S.Box>
        <TokenEconomicsCard
          title="Founders and team"
          percent="9"
          position={{
            horizontal: {
              side: 'left',
              distance: 20,
            },
            vertical: {
              side: 'top',
              distance: 4,
            },
          }}
          tokens="1,800,000"
          description="20% initial unlocked after 12 months of mainnet launch, and remaining vested quarterly"
        />
        <TokenEconomicsCard
          title="Seed round"
          percent="7"
          position={{
            horizontal: {
              side: 'left',
              distance: 38,
            },
            vertical: {
              side: 'top',
              distance: 20,
            },
          }}
          tokens="1,400,000"
          description="20% initial , and remaining vested quarterly"
        />
        <TokenEconomicsCard
          title="Strategic round"
          percent="8"
          position={{
            horizontal: {
              side: 'left',
              distance: 46,
            },
            vertical: {
              side: 'top',
              distance: 34,
            },
          }}
          tokens="1,600,000"
          description="25% initial , and remaining vested quarterly"
        />
        <TokenEconomicsCard
          title="Private round"
          percent="10.193"
          position={{
            horizontal: {
              side: 'left',
              distance: 50.5,
            },
            vertical: {
              side: 'top',
              distance: 49,
            },
          }}
          tokens="2,038,600"
          description="30% initial , and remaining vested quarterly"
        />
        <TokenEconomicsCard
          title="Treasury"
          percent="41"
          position={{
            horizontal: {
              side: 'left',
              distance: 52,
            },
            vertical: {
              side: 'top',
              distance: 63,
            },
          }}
          tokens="8,200,000"
          description="Exchange Listing, Governance (locked in Treasury)"
        />
        <TokenEconomicsCard
          title="Liquidity Mining"
          percent="10"
          position={{
            horizontal: {
              side: 'left',
              distance: 50.5,
            },
            vertical: {
              side: 'top',
              distance: 78,
            },
          }}
          tokens="2,000,000"
          description="For one year"
        />
        <TokenEconomicsCard
          title="Advisors"
          percent="6"
          position={{
            horizontal: {
              side: 'left',
              distance: 47.5,
            },
            vertical: {
              side: 'top',
              distance: 90,
            },
          }}
          tokens="1,200,000"
          description="10% initial release after 6 months of mainet launch , and remaining vested quaterly"
        />
        <TokenEconomicsCard
          title="Marketing, Ecosystem and Partnerships"
          percent="6.807"
          position={{
            horizontal: {
              side: 'left',
              distance: 39,
            },
            vertical: {
              side: 'top',
              distance: 108,
            },
          }}
          tokens="1,361,400"
          description="20% initial , and remaining vested quaterly"
        />
        <TokenEconomicsCard
          title="Community Round"
          percent="2"
          position={{
            horizontal: {
              side: 'left',
              distance: 25,
            },
            vertical: {
              side: 'bottom',
              distance: 1,
            },
          }}
          tokens="400,000"
          description="No vesting"
        />
      </S.Box>

      <S.InfoContainer>
        <img
          src="/img/polkadexMobileIcon.svg"
          alt="Polkadex Icon Description"
        />
        <div>
          <span>Total Supply</span>
          <p>20,000,000 PDEX</p>
        </div>
        <div>
          <span>Initial Circulating Supply</span>
          <p>1,963,860 PDEX </p>
          <span>(9.8193% of total supply)</span>
        </div>
      </S.InfoContainer>
    </S.ContentContainer>
  </S.Wrapper>
);

export default TokenEconomics;
