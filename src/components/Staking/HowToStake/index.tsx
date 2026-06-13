import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import * as Icons from '../../Icons';
import * as S from './styles';

const data = [
  {
    id: 0,
    title: 'Install a wallet extension',
    description:
      '<p>On desktop, install <a href="https://polkadot.js.org/extension/" target="_blank" rel="noreferrer">Polkadot.js</a>, Talisman, SubWallet, or PolkaGate from your browser’s extension store. On mobile, use Nova Wallet or SubWallet and open the explorer from the wallet’s built-in browser.</p>',
    image: 'step1',
    hasVideo: true,
  },
  {
    id: 1,
    title: 'Create or import an account',
    description:
      '<p>Inside your wallet extension, create a new account or import an existing seed phrase. Write the seed phrase down and store it offline. Never paste a seed phrase into the explorer — it signs through your wallet only and will never ask for your private key.</p>',
    image: 'step2',
  },
  {
    id: 2,
    title: 'Get some native PDEX through an exchange',
    description:
      '<p>Get some native PDEX from Gate.io or AscendEX and send it to your account. If you have ERC-20 PDEX, you will need to <a href="https://polkadex.medium.com/pdex-migration-two-ways-about-it-6bd49724509c" target="_blank" rel="noreferrer"> migrate it </a> to native PDEX in order to stake it.</p>',
    image: 'step3',
  },
  {
    id: 3,
    title: 'Connect your wallet to the Polkadex Explorer',
    description:
      '<p>Go to <a href="https://explorer.polkadex.ee" target="_blank" rel="noreferrer">explorer.polkadex.ee</a> and click <strong>My Account</strong> in the sidebar. The explorer detects your wallet extension and lists your accounts — pick the one you want to stake from and you’ll land on your Wallet Dashboard.</p>',
    image: 'step4',
  },
  {
    id: 4,
    title: 'Pick your validators',
    description:
      '<p>Browse the <a href="https://explorer.polkadex.ee/validators" target="_blank" rel="noreferrer">Validators page</a> and check each validator’s commission, total stake, slash count, and real 30-day APY. You can nominate up to 16 validators. Avoid anything flagged HIGH RISK (commission above 50%).</p>',
    image: 'step5',
  },
  {
    id: 5,
    title: 'Stake your PDEX',
    description:
      '<p>On your Wallet Dashboard, click <strong>Stake more</strong>. Select your validators, enter the amount of PDEX to nominate, and sign with your wallet. Rewards start from the next era — roughly 24 hours later.</p>',
    image: 'step6',
  },
  {
    id: 6,
    title: 'Claim your rewards',
    description:
      '<p>Click <strong>Pay out rewards</strong> on the dashboard to see your unclaimed rewards. <strong>Claim all</strong> bundles up to 30 payouts into a single transaction — sign once, get everything. Don’t wait too long: unclaimed rewards expire after ~84 eras.</p>',
    image: 'step7',
  },
  {
    id: 7,
    title: 'Congrats! You’re all set to earn daily rewards',
    description:
      '<p>Track your full reward history on the <a href="https://explorer.polkadex.ee/staking-rewards" target="_blank" rel="noreferrer">Staking Rewards page</a> — realized APR, per-validator charts, and CSV/JSON/tax exports. To unstake, click Unstake on your dashboard; unbonding takes 28 days.</p>',
    image: 'step8',
    hasLink: true,
  },
];

export const HowToStake = () => {
  return (
    <S.Wrapper id="howtostake">
      <S.Title>
        <h2>
          <strong>How to Stake PDEX </strong>via the Polkadex Explorer{' '}
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
            modules={[Pagination]}
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
