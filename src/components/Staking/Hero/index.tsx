import { PrimaryButton } from 'components/Button';

import * as S from './styles';

export const Hero = ({ apy }) => {
  return (
    <S.Wrapper>
      <S.Hero>
        <S.Container>
          <S.Aside>
            <h1>
              Stake your PDEX
              <strong>
                and earn <span>{apy} APY</span>
              </strong>
            </h1>
            <p>
              Make your PDEX work for you and enjoy passive income. Stake your
              PDEX to secure the Polkadex network and earn daily rewards!
            </p>
            <PrimaryButton content="Stake now" href="#howtostake" />
          </S.Aside>
        </S.Container>
      </S.Hero>
      <S.Banner>
        <S.BannerContent>
          <img src="/img/wine.svg" alt="" />
          <div>
            <h2>We are a part of the Polkadot ecosystem!</h2>
            <p>
              Polkadex has won the 16th Polkadot parachain auction! Thank you
              for your support!
            </p>
          </div>
        </S.BannerContent>
        <S.BannerContent>
          <PrimaryButton
            content="Read more"
            href="https://polkadex.trade/crowdloans"
          />
        </S.BannerContent>
      </S.Banner>
    </S.Wrapper>
  );
};
