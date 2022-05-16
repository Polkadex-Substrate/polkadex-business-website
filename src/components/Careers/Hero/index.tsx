import { PrimaryButton } from 'components/Button';

import * as S from './styles';

export const Hero = () => {
  return (
    <S.Wrapper id="overview">
      <S.Container>
        <S.Aside>
          <h1>Your career have more power in Polkadex!</h1>
          <p>
            Be part of one of the most innovative projects in the Polkadot
            ecosystem
          </p>
          <PrimaryButton content="Open Jobs" href="#openJobs" />
          <S.Flex />
        </S.Aside>
      </S.Container>
    </S.Wrapper>
  );
};
