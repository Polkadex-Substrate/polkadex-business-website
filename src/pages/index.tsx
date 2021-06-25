import {
  Announcement,
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

import * as S from '../styles/home';

export default function Home() {
  return (
    <S.Wrapper>
      <Announcement
        content={
          <ContractAnnouncement
            contract="0xF59ae934f6fe444afC309586cC60a84a0F89Aaea"
            href="https://etherscan.io/token/0xF59ae934f6fe444afC309586cC60a84a0F89Aaea"
          />
        }
      />
      <Header />
      <main>
        <Hero />
        <OrderbookProduct />
        {/* <Partners /> */}
        <OthersProducts />
        <Features />
        <Investors />
        <Team />
        <Roadmap />
        <TokenEconomics />
        <Media />
        <Newsletter />
      </main>
      <Footer />
    </S.Wrapper>
  );
}
