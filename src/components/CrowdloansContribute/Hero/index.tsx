import { PrimaryButton } from 'components/Button';

import * as S from './styles';

export const Hero = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Aside>
          <h1>
            Contribute to the Polkadex Crowdloan
            <span>
              and <strong> earn 3 PDEX </strong>for every DOT you loan!
            </span>
          </h1>
          <p>
            Help Polkadex renew its parachain lease and continue the mission of
            revolutionizing DeFi with the CEXier DEX. You can earn some extra
            PDEX while doing so!
          </p>
          <PrimaryButton
            content="Contribute Now"
            target="_blank"
            href="https://polkadex.medium.com/the-polkadex-crowdloan-returns-for-batch-3-of-the-polkadot-parachain-auctions-edc4f38665f8"
          />
          <S.Flex />
        </S.Aside>
      </S.Container>
    </S.Wrapper>
  );
};
