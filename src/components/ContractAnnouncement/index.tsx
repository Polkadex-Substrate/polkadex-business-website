import { PrimaryButton } from 'components/Button';

import * as S from './styles';
import Props from './types';

const ContractAnnouncement = ({ contract, href }: Props) => (
  <S.Wrapper>
    <p>
      Polkadex Contract:
      <strong>{contract}</strong>
    </p>
    <PrimaryButton
      href={href}
      content="See at Etherscan"
      background="secondary"
    />
  </S.Wrapper>
);

export default ContractAnnouncement;
