import { PrimaryButton } from 'components/Button';
import * as Icons from 'components/Icons';

import * as S from './styles';

export const About = () => {
  return (
    <S.Wrapper id="about">
      <S.Container>
        <img src="/img/orderbookPreview.png" alt="Polkadex Orderbook Preview" />
        <S.Aside>
          <h2>
            About <strong> Polkadex</strong>
          </h2>
          <p>
            Polkadex is the first project featuring an
            <strong> orderbook based exchange</strong>
            in the Polkadot ecosystem. Thanks to Polkadex’s innovative
            interoperability layer, <strong>the THEA bridge</strong>, Polkadex
            is becoming
            <strong> the first Cross-Chain orderbook based DEX</strong>.
          </p>
          <S.Flex>
            <S.Button href="https://polkadex.trade" target="_blank">
              Learn more <Icons.ArrowRight />
            </S.Button>
          </S.Flex>
        </S.Aside>
      </S.Container>
      <S.Chain>
        <S.ChainTitle>
          <h2>Two-chain model</h2>
          <S.Button
            href="https://github.com/Polkadex-Substrate/polkadex-docs/blob/master/docs/doc3-theaBridge.md"
            target="_blank"
          >
            THEA Whitepaper <Icons.ArrowRight />
          </S.Button>
        </S.ChainTitle>
        <S.ChainContainer>
          <S.ChainCard>
            <p>
              <strong>
                The Polkadex network will have all Polkadex products on top of
                it
              </strong>
              ,as well as THEA, which means it will be connected to Ethereum
              (and other blockchains further down the line)
            </p>
          </S.ChainCard>
          <S.ChainCard>
            <p>
              <strong>
                Polkadex network and Polkadex parachain will be two different
                networks
              </strong>
              due to the fact that THEA cannot be deployed onto the parachain
              for at least another year.
            </p>
          </S.ChainCard>
          <S.ChainCard>
            <p>
              <strong>
                The Polkadex parachain will connect Polkadex to the Polkadot
                network and all its parachains and their respective assets.
              </strong>
            </p>
          </S.ChainCard>
          <S.ChainCard>
            <p>
              <strong>
                The two networks will be joined by a Substrate to Substrate
                bridge
              </strong>
              (Parity technology) in the backend.
            </p>
          </S.ChainCard>
          <S.ChainCard>
            <p>
              <strong>The frontend user will not see any friction</strong>
              and the two networks will work as one seamless system.
            </p>
          </S.ChainCard>
          <S.ChainCard>
            <p>
              <strong>
                The networks will have the same tokenomics and will share the
                PDEX token as the native token for both networks.
              </strong>
            </p>
          </S.ChainCard>
        </S.ChainContainer>
      </S.Chain>
    </S.Wrapper>
  );
};
