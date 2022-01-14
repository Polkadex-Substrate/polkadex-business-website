import { Icon } from 'components/Icon';

import * as S from './styles';

export const TokenEconomics = () => {
  return (
    <S.Wrapper id="tokenEconomics">
      <S.Title>
        <div>
          <h2>Token Economics & Coin Specifications</h2>
        </div>
        <div>
          <p>
            Polkadex is the first project featuring an orderbook based exchange
            in the Polkadot ecosystem.
          </p>
        </div>
      </S.Title>
      <S.TokenEconomics>
        <TokenEconomicCard
          title="9% - Founders and team"
          description="1,800,000 PDEX"
          top={4}
          right={42}
        />
        <TokenEconomicCard
          title="7% - Seed round"
          description="1,400,000 PDEX"
          top={12}
          right={42}
        />
        <TokenEconomicCard
          title="8% - Strategic round"
          description="1,600,000 PDEX"
          top={20}
          right={42}
        />
        <TokenEconomicCard
          title="10.193% - Private round"
          description="2,038,600 PDEX"
          top={27}
          right={42}
        />
        <TokenEconomicCard
          title="41% - Treasury"
          description="8,200,000 PDEX"
          top={35}
          right={42}
        />
        <TokenEconomicCard
          title="10% - Parachain auction"
          description="2,000,000 PDEX"
          top={43}
          right={42}
        />
        <TokenEconomicCard
          title="6.807% - Marketing, Ecosystem and Partnerships"
          description="1,361,400 PDEX"
          top={52}
          right={42}
        />
        <TokenEconomicCard
          title="2% - Community Round"
          description="400,000 PDEX"
          top={60}
          right={42}
        />
        <div />
        <img src="img/tokenEconomics.svg" alt="building" />
      </S.TokenEconomics>
      <S.Community>
        <S.Card>
          <span>Explore articles</span>
          <p>
            Learn more about the next-generation blockchain for Decentralized
            Exchanges.
          </p>
          <a
            target="_blank"
            href="https://polkadex.medium.com/"
            rel="noreferrer"
          >
            Explore blog
          </a>
        </S.Card>
        <S.Card>
          <span>Stay in touch</span>
          <p>Follow Polkadex and join the community!</p>
          <S.Social>
            <Icon name="Telegram" link="https://t.me/Polkadex" />
            <Icon
              hoverable
              name="Twitter"
              link="https://twitter.com/polkadex"
            />
            <Icon hoverable name="Medium" link="https://polkadex.medium.com/" />
            <Icon
              hoverable
              name="Youtube"
              link="https://www.youtube.com/channel/UC6fXRDT4lLKlXG3gP0PP06Q"
            />
            <Icon
              hoverable
              name="LinkedIn"
              link="https://www.linkedin.com/company/69690544"
            />
            <Icon name="Reddit" link="https://www.reddit.com/r/polkadex" />
            <Icon name="Discord" link="https://discord.com/invite/Uvua83QAzk" />
          </S.Social>
        </S.Card>
      </S.Community>
    </S.Wrapper>
  );
};

const TokenEconomicCard = ({
  title,
  description,
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
}) => (
  <S.TokenEconomicCard top={top} bottom={bottom} left={left} right={right}>
    <div>
      <span>{title}</span>
      <p>{description}</p>
    </div>
  </S.TokenEconomicCard>
);
