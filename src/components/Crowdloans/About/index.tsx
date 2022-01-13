import { ParaChain, RelayChain } from 'components/Icons';
import { useWindowSize } from 'hooks';
import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import * as S from './styles';

SwiperCore.use([Pagination]);

export const About = () => {
  const { width } = useWindowSize();
  return (
    <S.Wrapper id="overview">
      <S.Title>
        <div>
          <h2>About the Polkadex Crowdloan</h2>
        </div>
        <div>
          <p>
            A crowdloan is a way for new projects to garner the support they
            need to connect to the Polkadot network as a parachain.
          </p>
          <a href="#/">Learn More</a>
        </div>
      </S.Title>

      <S.Content>
        <Swiper
          slidesPerView={width > 800 ? 2 : 1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <S.Card>
              <ParaChain />
              <h3>hmm.. what are Parachains?</h3>
              <p>
                Parachains are sovereign blockchains, with their own tokens and
                specific use cases. Polkadex is a parachai n optimized for
                Exchange, and features it&apos;s own PDEX token.
              </p>
              <a href="#/">Learn More</a>
            </S.Card>
          </SwiperSlide>
          <SwiperSlide>
            <S.Card>
              <RelayChain />
              <h3>and... what&apos;s the Relay Chain</h3>
              <p>
                The Relay Chain is the central chain that is used by the
                Polkadot network—its main task is to coordinate the overall
                system and its connected parachains.
              </p>
              <a href="#/">Learn More</a>
            </S.Card>
          </SwiperSlide>
          <SwiperSlide>
            <S.Card>
              <RelayChain />
              <h3>and... what&apos;s the Relay Chain</h3>
              <p>
                The Relay Chain is the central chain that is used by the
                Polkadot network—its main task is to coordinate the overall
                system and its connected parachains.
              </p>
              <a href="#/">Learn More</a>
            </S.Card>
          </SwiperSlide>
        </Swiper>
      </S.Content>
      {/* <S.Actions>
        <div>
          <Icon size="xsmall" background="none" name="ArrowLeft" />
          <span>Bridge</span>
        </div>
        <div>
          <span>Parathread</span>
          <Icon size="xsmall" background="none" name="ArrowRight" />
        </div>
      </S.Actions> */}
    </S.Wrapper>
  );
};
