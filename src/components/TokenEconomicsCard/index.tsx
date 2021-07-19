import * as S from './styles';
import Props from './types';

const TokenEconomicsCard = ({
  percent,
  title,
  tokens,
  description,
  position,
}: Props) => (
  <S.Wrapper position={position}>
    <S.Line />
    <S.ContentContainer>
      <div>
        <span>{percent}</span>
      </div>
      <div>
        <h6>{title}</h6>
        {description && <p>{description}</p>}
        <span>{tokens} tokens</span>
      </div>
    </S.ContentContainer>
  </S.Wrapper>
);

export default TokenEconomicsCard;
