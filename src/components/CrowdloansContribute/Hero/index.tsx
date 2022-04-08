import { PrimaryButton } from 'components/Button';

import * as S from './styles';

export const Hero = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Aside>
          <h1>
            Contribute to the Polkadex Crowdloan
            <small>
              & Grab your share of<strong> 2M PDEX rewards </strong> pool
            </small>
          </h1>
          <p>
            Support Polkadex, invest in the next generation of Web3 Exchanges,
            and be a part of the future of Defi and earn your PDEX rewards!
          </p>
          <S.Flex>
            <PrimaryButton content="Contribute Now" href="#contribute" />
            <S.Button href="#rewards">Rewards Calculator</S.Button>
          </S.Flex>
        </S.Aside>
      </S.Container>
    </S.Wrapper>
  );
};
