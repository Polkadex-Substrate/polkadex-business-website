import { PrimaryButton } from 'components/Button';

import * as S from './styles';
import Props from './types';

const ContractAnnouncement = ({ contract, href, title, ctaButton }: Props) => (
  <S.Wrapper>
    <p>
      {title}: <strong>{contract}</strong>
    </p>
    <PrimaryButton href={href} content={ctaButton} background="secondary" />
  </S.Wrapper>
);

export default ContractAnnouncement;
