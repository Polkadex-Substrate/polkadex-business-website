import { IHomeTranslations } from 'translations';

import * as S from './styles';

type Props = Pick<IHomeTranslations, 'otherProducts'>;

const OthersProducts = ({ otherProducts }: Props) => (
  <S.Wrapper>
    <S.ProductsContainer>
      {otherProducts.map((item) => (
        <S.Col>
          <S.ColContainer>
            <S.Tag>{item.releaseTag}</S.Tag>
            <img src={`/img/${item.img}.svg`} alt={item.alt} />
            <S.Card>
              <div>
                <span>{item.releaseDate}</span>
                <h5>{item.title}</h5>
              </div>
              <p>{item.description}.</p>
            </S.Card>
          </S.ColContainer>
        </S.Col>
      ))}
    </S.ProductsContainer>
  </S.Wrapper>
);

export default OthersProducts;
