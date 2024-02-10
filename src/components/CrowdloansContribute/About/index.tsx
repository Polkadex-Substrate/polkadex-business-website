import { PrimaryButton } from 'components/Button';

import * as S from './styles';

export const About = () => {
  return (
    <S.Wrapper id="about">
      <S.Container>
        <img
          src="/img/orderbookPreview.webp"
          alt="Polkadex Orderbook Preview"
        />
        <S.Aside>
          <div>
            <h2>
              About <strong> Polkadex</strong>
            </h2>
            <p>
              Polkadex is the first project featuring an
              <strong> orderbook based exchange </strong>
              in the Polkadot ecosystem. Thanks to Polkadex’s innovative
              interoperability layer,
              <strong>
                {' '}
                THEA, Polkadex is becoming the first Cross-Chain orderbook based
                DEX.{' '}
              </strong>
            </p>
          </div>

          <PrimaryButton content="Contribute Now" href="#contribute" />
        </S.Aside>
      </S.Container>
      <S.Chain>
        <S.ChainTitle>
          <h2>Two-chain model</h2>
        </S.ChainTitle>
        <S.ChainContainer>
          <S.ChainCard>
            <p>
              The Polkadex Main Network contains all Polkadex products,
              including Polkadex Orderbook. It also runs THEA, which means
              Polkadex will soon be connected to Ethereum (and other blockchains
              as determined by governance in the future).
            </p>
          </S.ChainCard>
          <S.ChainCard>
            <p>
              The Polkadex Main Network and the Polkadex parachain are two
              different networks.
            </p>
          </S.ChainCard>
          <S.ChainCard>
            <p>
              The Polkadex parachain currently connects Polkadex to Polkadot and
              12 of its parachains.
            </p>
          </S.ChainCard>
          <S.ChainCard>
            <p>
              The two networks will be joined by Thea Connector in the backend.
            </p>
          </S.ChainCard>
          <S.ChainCard>
            <p>
              Over 1,050 deposits and withdrawals between Polkadex and 6
              different parachains have been processed by the Polkadex parachain
              via XCM.
            </p>
          </S.ChainCard>
          <S.ChainCard>
            <p>
              The two networks are abstracted away in an easy-to-use interface
              which allows for the seamless transfer of tokens from connected
              parachains to Polkadex Orderbook and viceversa.
            </p>
          </S.ChainCard>
        </S.ChainContainer>
      </S.Chain>
    </S.Wrapper>
  );
};
