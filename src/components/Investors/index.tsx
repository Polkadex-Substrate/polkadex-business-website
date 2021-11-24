import InvestorCard from 'components/InvestorCard';
import Title from 'components/Title';
import { IHomeTranslations } from 'translations';

import * as S from './styles';

type Props = Pick<IHomeTranslations, 'investors'>;

const Investors = ({
  tag,
  title,
  highlight,
  description,
}: Props['investors']) => (
  <S.Wrapper>
    <S.TitleContainer>
      <Title
        title={title}
        highlight={highlight}
        description={description}
        tag={tag}
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
        <InvestorCard name="GenblockCapital" link="https://genblock.capital/" />
        <InvestorCard name="JRR" link="http://www.jrr.group/" />
        <InvestorCard name="Kenetic" link="https://kenetic.capital/" />
        <InvestorCard name="LDCapital" link="https://ldcap.com/" />
        <InvestorCard name="M6" link="http://waterdrip.io/" />
        <InvestorCard name="QSN" link="https://qsnholdings.com/?lang=en" />
        <InvestorCard name="YBBFoundation" link="http://www.ybb.io/" />
        <InvestorCard name="GBIC" link="http://gbic.io/" />
        <InvestorCard name="GD10Ventures" link="https://www.gd10.ventures" />
      </S.Row>
    </S.Container>
  </S.Wrapper>
);

export default Investors;
