import RoadmapCard from 'components/RoadmapCard';
import Title from 'components/Title';

import * as S from './styles';

const Roadmap = () => (
  <S.Wrapper id="roadmap">
    <S.TitleContainer>
      <Title
        tag="Roadmap"
        description="We started our journey with the idea of bringing the best DeFi experience to users and keep moving closer to our goal with each step"
        title="Polkadex"
        highlight="Journey"
        position="center"
      />
    </S.TitleContainer>
    <S.RoadContainer>
      <RoadmapCard
        title="Q3 2020"
        alignRight
        position={{
          horizontal: {
            side: 'left',
            distance: 10,
          },
          vertical: {
            side: 'top',
            distance: -9.5,
          },
        }}
        content={[
          { title: 'Web3 Milestone #1', status: true },
          { title: 'Refactoring Polkadex Engine', status: true },
          { title: 'Code Documentation', status: true },
        ]}
      />
      <RoadmapCard
        title="Q4 2020"
        position={{
          horizontal: {
            side: 'right',
            distance: 20,
          },
          vertical: {
            side: 'top',
            distance: 5,
          },
        }}
        content={[
          { title: 'Website Launch', status: true },
          { title: 'Whitepaper Release', status: true },
          { title: 'Testnet V1.0 Launch', status: true },
          { title: 'SAFT based Token PreSale', status: true },
        ]}
      />
      <RoadmapCard
        title="Q1-Q2 2021"
        alignRight
        position={{
          horizontal: {
            side: 'left',
            distance: 3,
          },
          vertical: {
            side: 'top',
            distance: 28,
          },
        }}
        content={[
          { title: 'Public Sale', timeline: 'April 2021', status: true },
          {
            title: 'Testnet V2.0 Launch',
            timeline: 'February 2021',
            status: true,
          },
          { title: 'Testnet V3.0 Launch', timeline: 'June 2021' },
          { title: 'Security Audit', timeline: 'July 2021' },
        ]}
      />
      <RoadmapCard
        title="Q3-Q4 2021"
        position={{
          horizontal: {
            side: 'right',
            distance: 3,
          },
          vertical: {
            side: 'bottom',
            distance: 44,
          },
        }}
        content={[
          { title: 'Parachain Development', status: false },
          { title: 'Polkadot Crowdfunding', status: false },
          { title: 'Parachain Auction', status: false },
          { title: 'Mainnet Launch', timeline: 'September 2021' },
        ]}
      />
      <RoadmapCard
        title="Q1-Q3 2022"
        invert
        alignRight
        position={{
          horizontal: {
            side: 'left',
            distance: 20,
          },
          vertical: {
            side: 'bottom',
            distance: 12,
          },
        }}
        content={[
          { title: 'Margin/Lending', status: false },
          { title: 'Futures/Options', status: false },
          { title: 'Pebble Consensus Upgrade', status: false },
        ]}
      />
    </S.RoadContainer>
  </S.Wrapper>
);

export default Roadmap;
