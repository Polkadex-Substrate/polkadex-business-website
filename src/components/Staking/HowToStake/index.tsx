/* eslint-disable jsx-a11y/media-has-caption */
import * as S from './styles';

export const HowToStake = () => {
  return (
    <S.Wrapper id="howtostake">
      <div>
        <h2>How to Stake PDEX</h2>
        <p>
          Watch the video to learn about the Solochain to Parachain migration
          and Crowdloan process.
        </p>
      </div>
      <video width="400" controls poster="/img/stakingCover.jpg">
        <source src="/videos/stakingVideo.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </S.Wrapper>
  );
};
