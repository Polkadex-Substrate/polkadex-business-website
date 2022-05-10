import { Icon, PrimaryButton } from 'components';
import { CrowdloanHero } from 'components/Icons';

import * as S from './styles';

export const Hero = () => {
  return (
    <S.Wrapper id="hero">
      <S.Container>
        <div>
          <h1>Polkadex has won a Polkadot Parachain slot! </h1>
          <p>
            Polkadex secured a parachain slot on Polkadot with 973k DOT ($13.8M)
            contributed to the Polkadex Crowdloan! Thank you to all who have
            contributed!
          </p>
          <S.Flex>
            <PrimaryButton
              content="Learn more"
              href="https://polkadex.medium.com/the-polkadex-crowdloan-returns-for-batch-3-of-the-polkadot-parachain-auctions-edc4f38665f8"
            />
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
