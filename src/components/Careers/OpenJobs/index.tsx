/* eslint-disable jsx-a11y/anchor-is-valid */
import * as Icons from 'components/Icons';
import Link from 'next/link';

import * as S from './styles';

export const OpenJobs = () => {
  return (
    <S.Wrapper id="openJobs">
      <S.Title>
        <h2>Open Jobs</h2>
        <p>Browse and apply for open positions at Polkadex.</p>
      </S.Title>
      <S.Container>
        <S.Jobs>
          <h3>Engineer</h3>
          <S.JobsContainer>
            <Card
              title="Rust Blockchain Developer"
              category="Junior"
              type="Hybrid"
              place="India"
            />
            <Card
              title="Full Stack Engineer "
              category="Junior"
              type="Senior"
              place="India"
            />
            <Card
              title="Solidity Developer"
              category="Senior"
              type="Hybrid"
              place="India"
            />
          </S.JobsContainer>
        </S.Jobs>
        <S.Jobs>
          <h3>Product Manager</h3>
          <S.JobsContainer>
            <Card
              title="Product Lead "
              category="Junior"
              type="Hybrid"
              place="India"
            />
            <Card
              title="Product Manager"
              category="Junior"
              type="Senior"
              place="India"
            />
          </S.JobsContainer>
        </S.Jobs>
      </S.Container>
    </S.Wrapper>
  );
};

const Card = ({ title = '', category = '', type, place }) => (
  <Link href="/careers/test">
    <S.Card>
      <S.CardAside>
        <p>{title}</p>
        <S.CardInfo>
          {!!category.length && <S.Category>{category}</S.Category>}
          <span>{place}</span>
          <span>{type}</span>
        </S.CardInfo>
      </S.CardAside>
      <a>
        More details
        <Icons.ArrowRight />
      </a>
    </S.Card>
  </Link>
);
