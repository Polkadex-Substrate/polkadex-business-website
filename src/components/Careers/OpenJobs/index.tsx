/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import * as Icons from 'components/Icons';
import Link from 'next/link';

import * as S from './styles';

export const OpenJobs = ({ jobs, error }) => {
  return (
    <S.Wrapper id="openJobs">
      <S.Title>
        <h2>Open Jobs</h2>
        <p>Browse and apply for open positions at Polkadex.</p>
      </S.Title>
      <S.Container>
        {error?.length ? (
          <p>{error}</p>
        ) : (
          <S.Jobs>
            <S.JobsContainer>
              {jobs?.map((job) => (
                <Card
                  key={job?.shortcode}
                  id={job?.shortcode}
                  title={job?.title}
                  category={job?.departament}
                  // type="Hybrid"
                  place={`${job?.location?.country} - ${job?.location?.region}`}
                />
              ))}
            </S.JobsContainer>
          </S.Jobs>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

const Card = ({ id, title = '', category = '', type = '', place }) => (
  <Link href={`/v2/careers/${id}`}>
    <a>
      <S.Card>
        <S.CardAside>
          <p>{title}</p>
          <S.CardInfo>
            {!!category?.length && <S.Category>{category}</S.Category>}
            <span>{place}</span>
            {!!type?.length && <span>{type}</span>}
          </S.CardInfo>
        </S.CardAside>
        <S.Button>
          More details
          <Icons.ArrowRight />
        </S.Button>
      </S.Card>
    </a>
  </Link>
);
