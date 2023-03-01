import { useAnimation } from 'hooks';
import * as S from './styles';
import { fakeData } from './fakeData';
export const Table = () => {
  const animationProps = useAnimation({ duration: 0.5 });

  return (
    <S.Wrapper {...animationProps}>
      {' '}
      <S.Table id="customers">
        <S.Heading>
          <S.Row>AccountID</S.Row>
          <S.Row>ParaID</S.Row>
          <S.Row>Amount</S.Row>
          <S.Row>Block num</S.Row>
        </S.Heading>
        {fakeData.map((item, index) => {
          return (
            <tr key={index}>
              <S.Row>{item.AccountID}</S.Row>

              <S.Row>{item.ParaID}</S.Row>

              <S.Row>{item.Amount}</S.Row>

              <S.Row>{item.Blocknum}</S.Row>
            </tr>
          );
        })}
      </S.Table>
    </S.Wrapper>
  );
};
