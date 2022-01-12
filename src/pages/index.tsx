import {
  ContractAnnouncement,
  Features,
  Footer,
  Header,
  Hero,
  Investors,
  Media,
  Newsletter,
  OrderbookProduct,
  OthersProducts,
  Partners,
  Roadmap,
  Team,
  TokenEconomics,
} from 'components';
import { Announcement } from 'components/v1/Announcement';
import Head from 'next/head';
import * as S from 'styles/home';
import { HomeTranslations, IHomeTranslations } from 'translations';

export default function Home() {
  const {
    header,
    announcement,
    hero,
    orderbook,
    partners,
    otherProducts,
    features,
    investors,
    team,
    roadmap,
    tokenEconomics,
    media,
    newsletter,
    footer,
  }: IHomeTranslations = HomeTranslations['en-US'];

  return (
    <S.Wrapper>
      <Head>
        <title>Polkadex - The trading engine for Web3 and DeFi</title>
      </Head>
      <Announcement
        content={
          <ContractAnnouncement
            contract="0xF59ae934f6fe444afC309586cC60a84a0F89Aaea"
            href="https://etherscan.io/token/0xF59ae934f6fe444afC309586cC60a84a0F89Aaea"
            {...announcement}
          />
        }
      />
      <Header {...header} />
      <main>
        <Hero {...hero} />
        <OrderbookProduct {...orderbook} />
        <Partners {...partners} />
        <OthersProducts otherProducts={otherProducts} />
        <Features {...features} />
        <Investors {...investors} />
        <Team {...team} />
        <Roadmap {...roadmap} />
        <TokenEconomics {...tokenEconomics} />
        <Media {...media} />
        <Newsletter {...newsletter} />
      </main>
      <Footer {...footer} />
    </S.Wrapper>
  );
}
