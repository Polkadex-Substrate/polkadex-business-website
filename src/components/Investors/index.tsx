import InvestorCard from 'components/InvestorCard';
import Title from 'components/Title';

import * as S from './styles';

const Investors = () => (
  <S.Wrapper>
    <S.TitleContainer>
      <Title
        title="Strategic"
        highlight="Investors"
        description="Libero adipisci error voluptatem sint quia libero adipisci error voluptatem sint quia"
        tag="Supported & Funded by"
      />
    </S.TitleContainer>

    <S.Container>
      <S.Row>
        <InvestorCard name="AU21Capital" link="http://au21.capital/" />
        <InvestorCard name="BlockDreamFund" link="https://qcp.capital/" />
        <InvestorCard name="DAG" link="http://www.dagventures.com/" />

        <InvestorCard name="BTXCapital" link="https://btx.capital/" />
        <InvestorCard name="Cluster" link="https://www.cluster.vc/" />
        <InvestorCard name="MasterVentures" link="https://master.ventures/" />
        <InvestorCard name="PNYXVentures" link="https://pnyx.ventures/" />
      </S.Row>
      <S.Row>
        <InvestorCard name="CMSHolding" link="http://cmsholdings.io/" />
        <InvestorCard name="BlockSync" link="https://www.blocksync.com/" />

        <InvestorCard name="ExistentialCapital" link="https://exst.vc/" />
        <InvestorCard name="GBV" link="https://gbv.capital/" />
        <InvestorCard
          name="OutlierVentures"
          link="https://outlierventures.io/"
        />
        <InvestorCard name="NGCVentures" link="https://www.ngc.fund/" />
        <InvestorCard name="Waterdrip" link="http://waterdrip.io/" />
      </S.Row>
      <S.Row>
        <InvestorCard name="GenblockCapital" link="https://genblock.capital/" />
        <InvestorCard name="jRR" link="http://www.jrr.group/" />
        <InvestorCard name="Kenetic" link="https://kenetic.capital/" />
        <InvestorCard name="LDCapital" link="https://ldcap.com/" />
        <InvestorCard name="M6" link="http://waterdrip.io/" />
        <InvestorCard name="QCPCapital" link="https://qcp.capital/" />
        <InvestorCard name="YBBFoundation" link="http://www.ybb.io/" />

        <InvestorCard name="GBIC" link="http://gbic.io/" />
      </S.Row>
    </S.Container>
  </S.Wrapper>
);

export default Investors;
