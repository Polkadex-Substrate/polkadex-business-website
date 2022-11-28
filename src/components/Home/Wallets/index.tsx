import * as Icons from 'components/Icons';
import { Variants } from 'framer-motion';
import useAnimation from 'hooks/useAnimation';

import * as S from './styles';

export const Wallets = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <h2>Wallets</h2>
        <S.Container>
          <Card title="Ledger" icon="LedgerWallet" isNew href="/" i={0.3} />
          <Card title="Nova Wallet" img="nova" href="/" i={0.7} />
          <Card title="Talisman" icon="TalismanWallet" href="/" i={1.1} />
          <Card title="Fearless" img="fearless" href="/" i={1.5} />
          <Card title="SubWallet" img="subwallet" href="/" i={1.9} />
          <Card title="PolkadotJs" icon="PolkadotJsWallet" href="/" i={2.3} />
          <Card title="Subvisio" icon="SubVisJsWallet" href="/" i={2.7} />
        </S.Container>
      </S.Content>
    </S.Wrapper>
  );
};

const variants: Variants = {
  initial: { opacity: 0, translateY: '8rem' },
  final: { opacity: 1, translateY: 0 },
};

const Card = ({
  title,
  img = null,
  icon = '',
  i = 1,
  isNew = false,
  ...props
}) => {
  const animationProps = useAnimation({ variants, duration: 0.5 * i });
  const IconComponent = Icons[icon];
  return (
    <S.Card {...animationProps} target="_blank" {...props}>
      {img ? (
        <img src={`/img/wallets/${img}.png`} alt={`${title} Logo`} />
      ) : (
        <IconComponent />
      )}
      <p>{title}</p>
      {isNew && <S.Badge>New</S.Badge>}
    </S.Card>
  );
};
