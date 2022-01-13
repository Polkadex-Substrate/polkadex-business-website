import { Icon, PrimaryButton } from 'components';

import * as S from './styles';

export const Hero = () => {
  return (
    <S.Wrapper id="hero">
      <div>
        <h1>Contribute to the Polkadex Crowdloan</h1>
        <p>
          Support Polkadex, invest in the next generation of Web3 Exchanges, and
          be a part of the future of the Defi.
        </p>
        <S.Flex>
          <PrimaryButton content="Contribute" href="#participate" />
          <PrimaryButton
            icon="Calculator"
            content="Rewards Calculator"
            href="#calculator"
            background="none"
          />
        </S.Flex>
        <S.ScrollDown>
          <span>About Crowdloans</span>
          <Icon background="transparent" name="ArrowBottom" link="#overview" />
        </S.ScrollDown>
      </div>
      <div>
        <img src="img/crowdloanHero.svg" alt="parallel finance" />
      </div>
    </S.Wrapper>
  );
};
