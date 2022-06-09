/* eslint-disable jsx-a11y/anchor-is-valid */
import { Icon } from 'components/Icon';
import * as Icons from 'components/Icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from 'react-share';

import * as S from './styles';

export const PreviewHero = ({ data, error }) => {
  const { asPath } = useRouter();
  const url = `https://polkadex.trade${asPath}`;
  return (
    <S.Wrapper>
      <S.GoBack>
        <Link href="/v2/careers">
          <a>
            <Icons.ArrowLeft /> Go Back
          </a>
        </Link>
      </S.GoBack>
      {error.length ? (
        <p>{error}</p>
      ) : (
        <>
          <S.Title>
            <S.Container>
              {!!data.experience && <S.Category>{data.experience}</S.Category>}
              {!!data.industry && <span>{data.industry}</span>}
              <span>{`${data.location.country}, ${data.location.region}`}</span>
              {!!data.employment_type && <span>{data.employment_type}</span>}
            </S.Container>
            <h1>{data.title}</h1>
            <S.Share>
              <span>Share this job</span>
              <S.Social>
                <FacebookShareButton
                  url={url}
                  hashtag="#polkadexCareers"
                  quote={`Polkadex is hiring ${data?.title}`}
                >
                  <Icon name="Facebook" />
                </FacebookShareButton>
                <TwitterShareButton
                  url={url}
                  hashtags={['polkadexCareers']}
                  title={`Polkadex is hiring ${data?.title}`}
                >
                  <Icon name="Twitter" />
                </TwitterShareButton>
                <LinkedinShareButton
                  url={url}
                  title={`Polkadex is hiring ${data?.title}`}
                >
                  <Icon name="LinkedIn" />
                </LinkedinShareButton>
                <TelegramShareButton
                  url={url}
                  title={`Polkadex is hiring ${data?.title}`}
                >
                  <Icon name="Telegram" />
                </TelegramShareButton>
              </S.Social>
            </S.Share>
          </S.Title>
          <S.Overview>
            <S.OverviewContainer>
              <h2>About Polkadex</h2>
              <p>
                Global DEX market volume is growing at more than 1000% year on
                year since 2019 to 2021/22. With more easy to use features,
                incentives and trading opportunities, more customers are moving
                to DEX. To cater to this growing demand, Polkadex created a
                decentralized peer-to-peer orderbook-based cryptocurrency
                exchange for the DeFi ecosystem built on Substrate. Our vision
                is to interoperate with all blockchain ecosystems to bring
                assets to trade, not just Bitcoin and Ethereum, and create the
                next generation of regulated decentralised exchange without
                compromising user experience. The matured version of Polkadex
                will look like NYSE with crypto for trading.
              </p>
            </S.OverviewContainer>
            {!!data.description.length && (
              <S.OverviewContainer>
                <h2>Description</h2>
                <div dangerouslySetInnerHTML={{ __html: data.description }} />
              </S.OverviewContainer>
            )}
            {!!data.requirements.length && (
              <S.OverviewContainer>
                <h2>Requirements</h2>
                <div dangerouslySetInnerHTML={{ __html: data.requirements }} />
              </S.OverviewContainer>
            )}
            {!!data.benefits.length && (
              <S.OverviewContainer>
                <h2>Benefits</h2>
                <div dangerouslySetInnerHTML={{ __html: data.benefits }} />
              </S.OverviewContainer>
            )}

            <a href={data.application_url} target="_blank" rel="noreferrer">
              Apply for this job
            </a>
          </S.Overview>
        </>
      )}
    </S.Wrapper>
  );
};
