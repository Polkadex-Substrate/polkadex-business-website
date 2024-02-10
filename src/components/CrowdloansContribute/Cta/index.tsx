import { PrimaryButton } from 'components/Button';

import * as S from './styles';

export const Cta = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Aside>
          <h2>Support Polkadex!</h2>
          <p>Help Polkadex renew its lease and earn PDEX rewards!</p>
          <PrimaryButton content="Contribute now" href="#contribute" />
        </S.Aside>
        <div />
      </S.Container>
    </S.Wrapper>
  );
};
