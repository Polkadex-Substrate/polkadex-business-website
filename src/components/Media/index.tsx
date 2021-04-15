import MediaCard from 'components/MediaCard';
import Title from 'components/Title';

import * as S from './styles';

const Media = () => (
  <S.Wrapper>
    <S.TitleContainer>
      <Title
        tag="Media"
        title="Polkadex"
        highlight="News"
        description="Libero adipisci error voluptatem sint quia libero"
      />
    </S.TitleContainer>
    <S.ContentContainer>
      <MediaCard
        title="Polkadex IDO on Polkastarter and IEO on KuCoin on the 16th of April"
        description="Whitelist for Polkadex IDO on Polkastarter was closed yesterday evening.
We received way more Whitelist requests than we expected. Big thank you from everyone in Polkadex team for your support and interest in our project!"
        source="Medium"
        image="IDOWhitelist"
        link="https://polkadex.medium.com/save-the-date-polkadex-ido-on-polkastarter-and-ieo-on-kucoin-on-the-16th-of-april-640b92b4e2d5"
        avatar="Polkadex"
        date="Apr 14"
      />
      <MediaCard
        title="Polkadex IDO on Polkastarter: Whitelist Now Open!"
        description="We’ve been extremely overwhelmed by our community's support and excitement around our upcoming IDO since we announced the launch. Now it’s time to share all the details with you."
        image="IDOAnnouncementMedia"
        source="Medium"
        link="https://polkadex.medium.com/polkadex-ido-on-polkastarter-whitelist-now-open-35bf1b97811"
        avatar="Polkadex"
        date="Apr 2"
      />
      <MediaCard
        title="Polkadex smart contracts are audited by two independent firms"
        description="Ahead of its upcoming ERC20 Token Generation (TGE) event in Ethereum, Polkadex, a decentralized cryptocurrency exchange built on Substrate, will use two independent audit firms for auditing its smart contract built on Ethereum."
        image="AuditedMedia"
        source="Medium"
        link="https://polkadex.medium.com/polkadex-smart-contracts-are-audited-by-two-independent-firms-147ee821eaaf"
        avatar="Polkadex"
        date="Mar 26"
      />
    </S.ContentContainer>
  </S.Wrapper>
);

export default Media;
