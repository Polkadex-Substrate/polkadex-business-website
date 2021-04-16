import * as S from './styles';
import Props from './types';

const TermsCard = ({ title, children }: Props) => (
  <S.Wrapper>
    <h3>{title}</h3>
    <div>{children}</div>
  </S.Wrapper>
);

export default TermsCard;
