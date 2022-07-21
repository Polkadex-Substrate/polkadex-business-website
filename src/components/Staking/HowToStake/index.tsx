/* eslint-disable jsx-a11y/media-has-caption */
import { PrimaryButton } from 'components/Button';

import * as S from './styles';

export const HowToStake = () => {
  return (
    <S.Wrapper id="howtostake">
      <S.Title>
        <h2>How to Stake PDEX</h2>
        <p>
          Watch the video to learn about the Solochain to Parachain migration
          and Crowdloan process.
        </p>
      </S.Title>
      <video width="400" controls poster="/img/stakingCover.jpg">
        <source src="/videos/stakingVideo.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>
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
