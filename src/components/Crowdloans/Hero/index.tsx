import { CountDown, Icon, PrimaryButton } from 'components';
import { CrowdloanHero, CrowdloanHeroBg } from 'components/Icons';

import * as S from './styles';

export const Hero = () => {
  return (
    <S.Wrapper id="hero">
      <S.Container>
        <div>
          <h1>Contribute to the Polkadex Crowdloan</h1>
          <p>
            Support Polkadex, invest in the next generation of Web3 Exchanges,
            and be a part of the future of Defi.
          </p>
          <S.Flex>
            <PrimaryButton content="Contribute" href="#participate" />
            <PrimaryButton
              icon="Calculator"
              content="Rewards Calculator"
              href="#calculator"
              background="none"
            />
            {/* <CountDown /> */}
          </S.Flex>
          <S.ScrollDown>
            <span>About Crowdloans</span>
            <Icon
              background="transparent"
              name="ArrowBottom"
              link="#overview"
            />
          </S.ScrollDown>
        </div>
        <div />
      </S.Container>
      <S.Illustration>
        <div />
        <div />
        <CrowdloanHero />
      </S.Illustration>
    </S.Wrapper>
  );
};
