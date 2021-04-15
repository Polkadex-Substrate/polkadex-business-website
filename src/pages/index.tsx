import Announcement from 'components/Announcement';
import ContractAnnouncement from 'components/ContractAnnouncement';
import Features from 'components/Features';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';
import Investors from 'components/Investors';
import Media from 'components/Media';
import Newsletter from 'components/Newsletter';
import Products from 'components/Products';
import Roadmap from 'components/Roadmap';
import Team from 'components/Team';
import TokenEconomics from 'components/TokenEconomics';

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
        <Products />
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
