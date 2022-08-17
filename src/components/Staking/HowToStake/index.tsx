/* eslint-disable jsx-a11y/media-has-caption */
import { PrimaryButton } from 'components/Button';
import { useRef, useState } from 'react';

import * as Icons from '../../Icons';
import * as S from './styles';

const data = [
  {
    id: 0,
    title: 'Create Polkadex accounts',
    description: `<p>Create two Polkadex accounts (a Stash and a Controller account) using the <a href="https://polkadot.js.org/extension/" target="_blank" rel="noreferrer"> Polkadot.js Browser Extension </a>  or <a href="https://youtu.be/lTUrKHADKDE" target="_blank" rel="noreferrer"> the Polkadot.js Apps interface </a>Save you mnemonic seed phrase for each account securely. </p>`,
    image: 'step1',
    hasVideo: true,
  },
  {
    id: 1,
    title: 'Get some native PDEX through an exchange',
    description:
      '<p>Get some native PDEX from Gate.io or AscendEX and send it to your Stash Account. If you have ERC-20 PDEX, you will need to <a href="https://polkadex.medium.com/pdex-migration-two-ways-about-it-6bd49724509c" target="_blank" rel="noreferrer"> migrate it </a> to native PDEX in order to stake it.</p>',
    image: 'step2',
  },
  {
    id: 2,
    title: 'Connect to the Polkadex network on the Polkadot.js Apps interface',
    description:
      '<p>If you’re already on Polkadot.js Apps but are not connected to <a href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fmainnet.polkadex.trade%2F#/accounts" target="_blank" rel="noreferrer">Polkadex, you can switch to Polkadex by clicking the network symbol in the top left corner of your screen.</p>',
    image: 'step3',
  },
  {
    id: 3,
    title: 'Choose the Stash & Controller accounts',
    description:
      '<p>Your Stash will have most of your PDEX and all the PDEX you will be staking. It should be an offline account. Your Controller will allow you to manage your Stash, set your nominees, and start/stop staking on your Stash account without being able to make changes to your Stash’s balance.</p>',
    image: 'step4',
  },
  {
    id: 4,
    title: 'Choose the amount',
    description:
      '<p>Choose the amount of PDEX you want to stake in “value bonded”. Make sure to leave at least 1 transferrable PDEX in each account (Stash and Controller) to cover network fees.</p>',
    image: 'step5',
  },
  {
    id: 5,
    title: 'Choose the destination for your rewards',
    description:
      '<p>Under «payment destination». If you want to automatically compound your returns, select “Stash account (increase the amount at stake)”.</p>',
    image: 'step6',
  },
  {
    id: 6,
    title: 'Nominate your validator',
    description:
      '<p>Select up to 16 validators to nominate with your stake. While there are many criteria to selecting validators, it’s important to trust your nominees. <a href="https://discord.com/invite/Uvua83QAzk" target="_blank" rel="noreferrer"> Get to know Polkadex validators in the #validator channel on the Polkadex Discord server. </a></p>',
    image: 'step7',
  },
  {
    id: 7,
    title: 'Congrats! You’re all set to earn daily rewards',
    description:
      '<p>You can track your rewards on <a href="http://polkadex.subscan.io" target="_blank" rel="noreferrer"> Subscan</a>. Make sure your validators are triggering payouts on a regular basis!</p>',
    image: 'step8',
    hasLink: true,
  },
];

export const HowToStake = () => {
  const [state, setState] = useState({ current: 0 });

  const handlePreviousClick = () => {
    const previous = state.current - 1;
    setState({
      current: previous < 0 ? data.length - 1 : previous,
    });
  };

  const handleNextClick = () => {
    const next = state.current + 1;
    setState({
      current: next === data.length ? 0 : next,
    });
  };

  const handleSlideClick = (index) =>
    state.current !== index &&
    setState({
      current: index,
    });

  return (
    <S.Wrapper id="howtostake">
      <S.Title>
        <h2>How to Stake PDEX via Polkadot.js </h2>
        <button type="button" onClick={handleNextClick}>
          Next
          <Icons.ArrowRight />
        </button>
      </S.Title>

      <S.Content>
        {data.map((value, i) => (
          <Card
            current={i}
            key={i}
            title={value.title}
            description={value.description}
            image={value.image}
            hasLink={value?.hasLink}
            hasVideo={value?.hasVideo}
            page={i}
          />
        ))}
      </S.Content>
      <S.OthersWays>
        <h2>Other ways to Stake PDEX and generate passive income</h2>
        <S.OthersWaysContent>
          <S.OthersWaysCard
            href="https://novawallet.io"
            target="_blank"
            rel="noreferrer"
          >
            <img src="img/partnerLaunch/novaWallet.svg" alt="" />
            <span>Nova Wallet</span>
            <p>
              Stake and grow your PDEX directly from your mobile device with the
              Nova Wallet app.
            </p>
          </S.OthersWaysCard>
          <S.OthersWaysCard
            href="https://subwallet.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="img/partnerLaunch/subWallet.svg" alt="" />
            <span>Subwallet</span>
            <p>
              Subwallet’s browser extension wallet and its intuitive user
              interface make staking easy
            </p>
          </S.OthersWaysCard>
          <S.OthersWaysCard
            href="https://ascendex.com/en/cashtrade-spottrading/usdt/pdex"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <Icons.AscendEX />
            </div>
            <span>AscendEx</span>
            <p>
              Buy PDEX and stake it without ever having to leave your exchange.
            </p>
          </S.OthersWaysCard>
        </S.OthersWaysContent>
      </S.OthersWays>
    </S.Wrapper>
  );
};

const Card = ({
  title,
  description,
  image,
  hasLink = false,
  hasVideo = false,
  page,
  current,
}) => {
  let classNames = 'slide';
  const wrapperTransform = {
    transform: `translateX(-${current * (410 / data.length)}%)`,
  };

  if (current === page) classNames += ' slide--current';
  else if (current - 1 === page) classNames += ' slide--previous';
  else if (current + 1 === page) classNames += ' slide--next';
  return (
    <S.ContentBox className={classNames}>
      <S.ContentBanner>
        <S.ContentBannerOverflow>
          <img src={`/img/${image}.png`} alt="Polkadot.js extension software" />
        </S.ContentBannerOverflow>
        <S.ContentOverflow />
      </S.ContentBanner>
      <S.ContentCard>
        <S.ContentCardSteps>
          <S.ContentCardNumber>
            <span>0{page + 1}</span>
            <hr />
            <span>0{data.length + 1}</span>
          </S.ContentCardNumber>
          <h3>{title}</h3>
          <S.ContentWrapper dangerouslySetInnerHTML={{ __html: description }} />
          {hasVideo && (
            <S.ContentCardVideo
              href="https://www.youtube.com/watch?v=Oya2_Tg7Ojc"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <span>Video Tutorial</span>
                <p>Step by step how to Stake Polkadex (PDEX)</p>
              </div>
              <Icons.YoutubeOriginal />
            </S.ContentCardVideo>
          )}
          {hasLink && (
            <PrimaryButton
              content="Get started"
              href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fmainnet.polkadex.trade#/explorer"
              target="_blank"
            />
          )}
        </S.ContentCardSteps>
      </S.ContentCard>
    </S.ContentBox>
  );
};
