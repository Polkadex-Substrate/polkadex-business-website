import * as Icons from 'components/Icons';
import { Variants } from 'framer-motion';
import useAnimation from 'hooks/useAnimation';

import * as S from './styles';

export const Exchanges = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <h2>Exchanges</h2>
        <S.Container>
          <Card title="KuCoin" icon="KucoinExchange" href="/" i={0.3} />
          <Card title="Gateio" img="gateio" href="/" i={0.7} />
          <Card title="AscendEX" icon="AscendEX" href="/" i={1.1} />
          <Card title="MEXC" icon="MexcExchange" href="/" i={1.5} />
        </S.Container>
      </S.Content>
    </S.Wrapper>
  );
};

const variants: Variants = {
  initial: { opacity: 0, translateY: '8rem' },
  final: { opacity: 1, translateY: 0 },
};
const Card = ({ title, img = null, icon = '', i, ...props }) => {
  const animationProps = useAnimation({ variants, duration: 0.5 * i });

  const IconComponent = Icons[icon];
  return (
    <S.Card {...animationProps} target="_blank" {...props}>
      {img ? (
        <img src={`/img/${img}.png`} alt={`${title} Logo`} />
      ) : (
        <IconComponent />
      )}
      <p>{title}</p>
    </S.Card>
  );
};
