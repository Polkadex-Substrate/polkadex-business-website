import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

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
  return (
    <S.Wrapper id="howtostake">
      <S.Title>
        <h2>
          <strong>How to Stake PDEX </strong>via Polkadot.js{' '}
        </h2>
      </S.Title>
      <S.Content>
        <S.ContentVideo>
          <S.ContentVideoWrapper>
            <S.ContentVideoBox
              href="https://www.youtube.com/watch?v=dEoJz7jOMg0&t=6s"
              target="_blank"
            >
              <h4>Play Video</h4>
              <p>
                Watch our video tutorial to see{' '}
                <strong>how to stake PDEX on Polkadex mainnet</strong>.
              </p>
              <div>
                <img src="/img/youtubeTumb.png" alt="" />
                <Icons.YoutubeOriginal />
              </div>
            </S.ContentVideoBox>
          </S.ContentVideoWrapper>
          <S.Round />
        </S.ContentVideo>
        <S.ContentFlex>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
          >
            {data.map((value, i) => (
              <SwiperSlide key={i}>
                <Card
                  title={value.title}
                  description={value.description}
                  image={value.image}
                  page={i}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </S.ContentFlex>
      </S.Content>
      <S.OthersWays id="othersWays">
        <h2>
          <strong>Other ways to Stake PDEX </strong> and generate passive income
        </h2>
        <S.OthersWaysContent>
          <S.OthersWaysCard>
            <S.OthersWaysCardWrapper>
              <img src="img/partnerLaunch/novaWallet.svg" alt="" />
              <span>Nova Wallet</span>
              <p>
                Stake and grow your PDEX directly from your mobile device with
                the Nova Wallet app.
              </p>
            </S.OthersWaysCardWrapper>

            <a href="https://novawallet.io" target="_blank" rel="noreferrer">
              Stake PDEX with Nova
            </a>
          </S.OthersWaysCard>
          <S.OthersWaysCard>
            <S.OthersWaysCardWrapper>
              <img src="img/partnerLaunch/subWallet.svg" alt="" />
              <span>Subwallet</span>
              <p>
                Subwallet’s browser extension wallet and its intuitive user
                interface make staking easy
              </p>
            </S.OthersWaysCardWrapper>

            <a href="https://subwallet.app/" target="_blank" rel="noreferrer">
              Stake PDEX with SubWallet
            </a>
          </S.OthersWaysCard>
          <S.OthersWaysCard>
            <S.OthersWaysCardWrapper>
              <div>
                <Icons.AscendEX />
              </div>
              <span>AscendEx</span>
              <p>
                Buy PDEX and stake it without ever having to leave your
                exchange.
              </p>
            </S.OthersWaysCardWrapper>

            <a
              href="https://ascendex.com/en/cashtrade-spottrading/usdt/pdex"
              target="_blank"
              rel="noreferrer"
            >
              Stake PDEX with AscendEX
            </a>
          </S.OthersWaysCard>
        </S.OthersWaysContent>
      </S.OthersWays>
    </S.Wrapper>
  );
};

const Card = ({ title, description, image, page }) => {
  const swiper = useSwiper();
  return (
    <S.SwipperCard>
      <S.SwipperCardWrapper>
        <h3>
          0{page + 1} {title}
        </h3>
        <S.ContentWrapper dangerouslySetInnerHTML={{ __html: description }} />
        <S.SwipperCardActions>
          {page >= 1 && (
            <S.PrevButton onClick={() => swiper.slidePrev()} type="button">
              <Icons.ArrowLeft />
              Previous
            </S.PrevButton>
          )}
          {page + 2 <= data.length && (
            <S.NextButton onClick={() => swiper.slideNext()} type="button">
              Next <Icons.ArrowRight />
            </S.NextButton>
          )}
        </S.SwipperCardActions>
      </S.SwipperCardWrapper>
      <img src={`/img/${image}.png`} alt="" />
    </S.SwipperCard>
  );
};
