import {
  Bridge,
  Nominator,
  ParaChain,
  Parathread,
  Polkadex,
  RelayChain,
  Validator,
} from 'components/Icons';
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
          <a
            target="_blank"
            href="https://wiki.polkadot.network/docs/glossary#crowdloan"
            rel="noreferrer"
          >
            Crowdloans Wiki
          </a>
        </div>
      </S.Title>

      <S.Content>
        <S.MainCard style={{ marginBottom: 25 }}>
          <S.MainCardTitle>
            <S.LogoWrapper>
              <Polkadex />
            </S.LogoWrapper>
            <h3>What is seedling parachain?</h3>
            <p>
              Seedling parachain is a bare-bones parachain that has the bare
              minimum functionality to do a runtime upgrade.
            </p>
          </S.MainCardTitle>
          <S.MainCardColumn>
            <div>
              <h4>Why we are using it?</h4>
              <p>
                Seedling parachain is a bare-bones parachain that has the bare
                minimum functionality to do a runtime upgrade.
              </p>
            </div>
            <div>
              <h4>What does it mean for the community?</h4>
              <p>
                We will be able to deliver products to the community and kick
                start all the features in the mainnet. The community will be
                able to test with real tokens while the crowdloan and parachain
                slot auctions continue simultaneously. It also allows us to test
                and get valuable feedback from the community as early as
                possible without waiting to become parachain. In this way, we
                can effectively perfect our products.
              </p>
            </div>
          </S.MainCardColumn>
        </S.MainCard>
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
                Parachains are Substrate-based interconnected blockchains, each
                with their own tokens and tailored to specific use cases.
                Polkadex is currently a Substrate-based solo-chain run by PDEX
                and it is aiming to be a parachain optimized for decentralized
                trading.
              </p>
              <a
                target="_blank"
                href="https://wiki.polkadot.network/docs/learn-parachains"
                rel="noreferrer"
              >
                Parachains Wiki
              </a>
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
              <a
                target="_blank"
                href="https://wiki.polkadot.network/docs/learn-architecture#relay-chain"
                rel="noreferrer"
              >
                Relay Chain Wiki
              </a>
            </S.Card>
          </SwiperSlide>
          <SwiperSlide>
            <S.Card>
              <Parathread />
              <h3>Parathreads</h3>
              <p>
                Parathreads are similar to parachains but with a pay-as-you-go
                model. More economical for blockchains that don’t need
                continuous connectivity to the network.
              </p>
              <a href="https://wiki.polkadot.network/docs/learn-parathreads">
                Parathreads Wiki
              </a>
            </S.Card>
          </SwiperSlide>
          <SwiperSlide>
            <S.Card>
              <Bridge />
              <h3>Bridges</h3>
              <p>
                Bridges allow parachains to communicate with external
                networks—it&apos;s what enables Efinity to support NFTs from any
                blockchain.
              </p>
              <a href="https://wiki.polkadot.network/docs/learn-bridges">
                Bridges Wiki
              </a>
            </S.Card>
          </SwiperSlide>
          <SwiperSlide>
            <S.Card>
              <Nominator />
              <h3>Nominators</h3>
              <p>
                Secure the Relay Chain by selecting trustworty validators and
                staking DOT. In return, nominators are generally rewarded with a
                portion of the staking rewards from validators.
              </p>
              <a href="https://wiki.polkadot.network/docs/learn-nominator">
                Nominators Wiki
              </a>
            </S.Card>
          </SwiperSlide>
          <SwiperSlide>
            <S.Card>
              <Validator />
              <h3>Validators</h3>
              <p>
                Validators secure the Relay Chain by staking dots, validating
                proofs from collators, and participating in consensus with other
                validators.
              </p>
              <a href="https://wiki.polkadot.network/docs/learn-validator">
                Validators Wiki
              </a>
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
