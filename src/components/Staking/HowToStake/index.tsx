/* eslint-disable jsx-a11y/media-has-caption */
import { PrimaryButton } from 'components/Button';
import { useRef } from 'react';

import * as Icons from '../../Icons';
import * as S from './styles';

const data = [
  {
    title: 'Create Polkadex accounts',
    description:
      'Create two Polkadex accounts (a Stash and a Controller account) using the Polkadot.js Browser Extension or the Polkadot.js Apps interface. Save you mnemonic seed phrase for each account securely.',
    cardTitle: 'Download Polkadot.js and create two accounts',
    image: 'step1',
    hasLink: true,
    hasVideo: true,
  },
  {
    title: 'Get some native PDEX through an exchange',
    description:
      'Get some native PDEX from Gate.io or AscendEX and send it to your Stash Account. If you have ERC-20 PDEX, you will need to migrate it to native PDEX in order to stake it.',
    cardTitle: 'Get some native PDEX from: Kucoin, AscendEX or Gate.io',
    image: 'step2',
  },
  {
    title: 'Get some native PDEX through an exchange',
    description:
      'Get some native PDEX from Gate.io or AscendEX and send it to your Stash Account. If you have ERC-20 PDEX, you will need to migrate it to native PDEX in order to stake it.',
    cardTitle: 'Get some native PDEX from: Kucoin, AscendEX or Gate.io',
    image: 'step2',
  },
];
export const HowToStake = () => {
  const carouselRef = useRef(null);

  const handleNext = () => {
    const isChildTotalSize =
      carouselRef.current.clientWidth + carouselRef.current.scrollLeft <
      carouselRef.current.childNodes[1].clientWidth * data.length;

    carouselRef?.current?.scrollTo({
      behavior: 'smooth',
      top: 0,
      left: isChildTotalSize
        ? carouselRef.current.scrollLeft + carouselRef.current.clientWidth * 0.4
        : 0,
    });
  };

  return (
    <S.Wrapper id="howtostake">
      <S.Title>
        <h2>How to Stake PDEX</h2>
        <button type="button" onClick={handleNext}>
          Next
          <Icons.ArrowRight />
        </button>
      </S.Title>
      <S.Content ref={carouselRef}>
        {data.map((value, i) => (
          <Card
            key={i}
            title={value.title}
            description={value.description}
            cardTitle={value.cardTitle}
            image={value.image}
            hasLink={value?.hasLink}
            hasVideo={value?.hasVideo}
            page={i + 1}
          />
        ))}
      </S.Content>
      <S.Actions>
        <PrimaryButton
          content="Stake via Nova Wallet"
          href="https://novawallet.io/"
          target="_blank"
          background="white"
          color="black"
        />
        <PrimaryButton
          content="Get started"
          href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fmainnet.polkadex.trade#/explorer"
          target="_blank"
        />
      </S.Actions>
    </S.Wrapper>
  );
};

const Card = ({
  title,
  description,
  image,
  cardTitle,
  hasLink = false,
  hasVideo = false,
  page,
}) => (
  <S.ContentBox>
    <S.ContentBanner>
      <S.ContentBannerOverflow>
        <div>
          <strong>{cardTitle}</strong>
          {hasLink && (
            <p>
              Available at:{' '}
              <a href="https://polkadot.js.org">https://polkadot.js.org</a>
            </p>
          )}
        </div>
        <img src={`/img/${image}.png`} alt="Polkadot.js extension software" />
      </S.ContentBannerOverflow>
    </S.ContentBanner>
    <S.ContentCard>
      <S.ContentCardSteps>
        <S.ContentCardNumber>
          <span>0{page}</span>
          <hr />
          <span>0{data.length}</span>
        </S.ContentCardNumber>
        <h3>{title}</h3>
        <p>{description}</p>
        {hasVideo && (
          <S.ContentCardVideo>
            <div>
              <span>Video Tutorial</span>
              <p>Step by step how to Stake Polkadex (PDEX)</p>
            </div>
            <Icons.YoutubeOriginal />
          </S.ContentCardVideo>
        )}
      </S.ContentCardSteps>
    </S.ContentCard>
  </S.ContentBox>
);
