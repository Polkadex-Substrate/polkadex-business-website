import * as S from './styles';

export const ChainModel = () => {
  return (
    <S.Wrapper id="chainModel">
      <S.Container>
        <S.AsideRight>
          <h2>
            Two-chain
            <br /> model
          </h2>
          <div>
            <img src="/img/chainModel.svg" alt="two chain with pokadex coin" />
          </div>
        </S.AsideRight>
        <S.AsideLeft>
          <div>
            <p>
              <strong>
                The Polkadex network will have all Polkadex products on top of
                it, as well as Thea, which means it will be connected to
                Ethereum
              </strong>
              (and other blockchains further down the line)
            </p>
          </div>
          <div>
            <p>
              <strong>
                Polkadex network and Polkadex parachain will be two different
                networks
              </strong>
              due to the fact that Thea cannot be deployed onto the parachain
              for at least another year.
            </p>
          </div>
          <div>
            <p>
              <strong>
                The Polkadex parachain will connect Polkadex to the Polkadot
                network and all its parachains and their respective assets.
              </strong>
            </p>
          </div>
          <div>
            <p>
              <strong>
                The two networks will be joined by a Substrate to Substrate
                bridge
              </strong>
              (Parity technology) in the backend.
            </p>
          </div>
          <div>
            <p>
              <strong>The frontend user will not see any friction</strong>
              and the two networks will work as one seamless system.
            </p>
          </div>
          <div>
            <p>
              <strong>
                The networks will have the same tokenomics and will share the
                PDEX token as the native token{' '}
              </strong>
              for both networks.
            </p>
          </div>
        </S.AsideLeft>
      </S.Container>
    </S.Wrapper>
  );
};
