import { ImgHTMLAttributes } from 'react';

import * as S from './styles';

export const StrategicInvestors = () => {
  return (
    <S.Wrapper>
      <h2>Strategic Investors</h2>
      <S.Content>
        <S.Container>
          <Card
            src="/img/investorsList/au21capital.png"
            alt="au21capital logo"
          />
          <Card src="/img/investorsList/blocksync.png" alt="blocksync logo" />
          <Card src="/img/investorsList/btxcapital.png" alt="btxcapital logo" />
          <Card src="/img/investorsList/cluster.png" alt="cluster logo" />
          <Card src="/img/investorsList/cms.png" alt="cms logo" />
          <Card
            src="/img/investorsList/existentialcapital.png"
            alt="existentialcapital logo"
          />
          <Card src="/img/investorsList/gbv.png" alt="gbv logo" />
          <Card
            src="/img/investorsList/genblockcapital.png"
            alt="genblockcapital logo"
          />
          <Card src="/img/investorsList/jrr.png" alt="jrr logo" />
          <Card src="/img/investorsList/kenetic.png" alt="kenetic logo" />
          <Card src="/img/investorsList/ld.png" alt="ld logo" />
          <Card
            src="/img/investorsList/masterventures.png"
            alt="masterventures logo"
          />
          <Card
            src="/img/investorsList/ngcventures.png"
            alt="ngcventures logo"
          />
          <Card src="/img/investorsList/qcpcapital.png" alt="qcpcapital logo" />
          <Card
            src="/img/investorsList/ybbfoundation.png"
            alt="ybbfoundation logo"
          />

          <Card
            src="/img/investorsList/au21capital.png"
            alt="au21capital logo"
          />
          <Card src="/img/investorsList/blocksync.png" alt="blocksync logo" />
          <Card src="/img/investorsList/btxcapital.png" alt="btxcapital logo" />
          <Card src="/img/investorsList/cluster.png" alt="cluster logo" />
          <Card src="/img/investorsList/cms.png" alt="cms logo" />
          <Card
            src="/img/investorsList/existentialcapital.png"
            alt="existentialcapital logo"
          />
          <Card src="/img/investorsList/gbv.png" alt="gbv logo" />
          <Card
            src="/img/investorsList/genblockcapital.png"
            alt="genblockcapital logo"
          />
          <Card src="/img/investorsList/jrr.png" alt="jrr logo" />
          <Card src="/img/investorsList/kenetic.png" alt="kenetic logo" />
          <Card src="/img/investorsList/ld.png" alt="ld logo" />
          <Card
            src="/img/investorsList/masterventures.png"
            alt="masterventures logo"
          />
          <Card
            src="/img/investorsList/ngcventures.png"
            alt="ngcventures logo"
          />
          <Card src="/img/investorsList/qcpcapital.png" alt="qcpcapital logo" />
          <Card
            src="/img/investorsList/ybbfoundation.png"
            alt="ybbfoundation logo"
          />

          <Card
            src="/img/investorsList/au21capital.png"
            alt="au21capital logo"
          />
          <Card src="/img/investorsList/blocksync.png" alt="blocksync logo" />
          <Card src="/img/investorsList/btxcapital.png" alt="btxcapital logo" />
          <Card src="/img/investorsList/cluster.png" alt="cluster logo" />
          <Card src="/img/investorsList/cms.png" alt="cms logo" />
          <Card
            src="/img/investorsList/existentialcapital.png"
            alt="existentialcapital logo"
          />
          <Card src="/img/investorsList/gbv.png" alt="gbv logo" />
          <Card
            src="/img/investorsList/genblockcapital.png"
            alt="genblockcapital logo"
          />
          <Card src="/img/investorsList/jrr.png" alt="jrr logo" />
          <Card src="/img/investorsList/kenetic.png" alt="kenetic logo" />
          <Card src="/img/investorsList/ld.png" alt="ld logo" />
          <Card
            src="/img/investorsList/masterventures.png"
            alt="masterventures logo"
          />
          <Card
            src="/img/investorsList/ngcventures.png"
            alt="ngcventures logo"
          />
          <Card src="/img/investorsList/qcpcapital.png" alt="qcpcapital logo" />
          <Card
            src="/img/investorsList/ybbfoundation.png"
            alt="ybbfoundation logo"
          />
        </S.Container>
      </S.Content>
    </S.Wrapper>
  );
};

type Props = ImgHTMLAttributes<HTMLImageElement>;
const Card = ({ ...props }: Props) => (
  <S.Card>
    <img {...props} alt={props.alt} />
  </S.Card>
);
