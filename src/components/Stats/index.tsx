import * as S from './styles';

export const Stats = ({ children }) => {
  return (
    <S.Wrapper id="stats">
      <S.Container>{children}</S.Container>
    </S.Wrapper>
  );
};

export const StatsCard = ({ title = '', description = '' }) => (
  <S.Card>
    <span>{title}</span>
    <p>{description}</p>
  </S.Card>
);
