import {PrimaryButton} from 'components/Button';
import {Container} from 'components/Container';
import * as Icon from 'components/Icons';
import Title from 'components/Title';
import {useInView} from 'react-intersection-observer';
import {IHomeTranslations} from 'translations';

import * as S from './styles';

type Props = Pick<IHomeTranslations, 'orderbook'>;

const OrderbookProduct = ({
  tag,
  title,
  highlight,
  description,
  fullDescription,
  ctaButton,
  cards,
  technologiesTitle,
  button,
}: Props['orderbook']) => {
  const {ref, inView} = useInView({triggerOnce: true});

  return (
    <S.Wrapper>
      <Container>
        <div ref={ref} />
        <S.Items>
          <S.Item>
            <S.Subtitle isViewed={inView}>{title}</S.Subtitle>
            <S.Text isViewed={inView} size={1.6}>
              {description}
            </S.Text>
          </S.Item>
          <S.Item>
            <S.Text isViewed={inView} size={1.4}>
              {fullDescription}
            </S.Text>
          </S.Item>
        </S.Items>
        <S.TechnologiesContainer>
          <img
            src="/img/technologiesHero.svg"
            alt="Isometric Illustration with Polkadex, Kilt, IFPS, Polkadot.js and SGX Logos"
          />
        </S.TechnologiesContainer>
        <S.Button isViewed={inView}>
          <PrimaryButton
            href="http://orderbook.polkadex.trade"
            content={button}
          />
        </S.Button>
      </Container>
    </S.Wrapper>
  );
};

export default OrderbookProduct;
