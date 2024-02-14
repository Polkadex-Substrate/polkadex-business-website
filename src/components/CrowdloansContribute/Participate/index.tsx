import { Popover } from 'components/v2';
import { useState } from 'react';

import * as S from './styles';

export const Participate = () => {
  return (
    <S.Wrapper id="contribute">
      <S.Title>
        <div>
          <h2>How to contribute?</h2>
          <p>
            You can contribute directly via Polkadot.js as well as using your
            favorite wallet provider.
          </p>
        </div>
      </S.Title>
      <S.Content>
        <S.RowFlat>
          <h4>Wallets</h4>
          <S.RowFlatWrapper>
            <Card
              title="Polkadot{.js}"
              img="polkadotjs"
              link="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/parachains/crowdloan"
            />
            <Card
              title="Talisman"
              img="talisman"
              link="https://app.talisman.xyz/crowdloans/polkadex-polkadot"
            />
            <Card
              title="Nova Wallet"
              img="novaWallet"
              link="https://novawallet.io"
            />
          </S.RowFlatWrapper>
        </S.RowFlat>

        <S.RowFlat>
          <h4>Explorer</h4>
          <S.RowExplorerWrapper>
            <HorizontalCard
              title="Subscan"
              img="subscan"
              link="https://polkadot.subscan.io/crowdloan/2040-0?tab=contribute"
            />

            <HorizontalCard
              title="PolkaProject"
              img="polkaProject"
              link="http://polkaproject.com"
            />
            <HorizontalCard
              title="Parachains.info"
              img="parachains"
              link="https://parachains.info/auctions"
            />
          </S.RowExplorerWrapper>
        </S.RowFlat>
      </S.Content>
    </S.Wrapper>
  );
};

const Card = ({ title, img, link, disabled = false }) => {
  const [state, setState] = useState(false);
  return (
    <Popover isOpen={state && !disabled} onOpenChange={setState}>
      <Popover.Trigger>
        <S.ColumnCard>
          <S.FlipFront disabled={disabled}>
            <img src={`img/partnerLaunch/${img}.svg`} alt="parallel finance" />
            <span>{title}</span>
          </S.FlipFront>
        </S.ColumnCard>
      </Popover.Trigger>
      <Popover.Content>
        <S.Terms>
          <S.TermsTitle>
            <div>
              <h3>Read and confirm</h3>
              <p>
                By proceeding, you confirm that you have read and accept the
                terms & conditions for participating in the Polkadex Crowdloan.
              </p>
            </div>

            <ul>
              <li>
                <a
                  href="https://github.com/Polkadex-Substrate/Docs/blob/master/Polkadex_Parachain_Auction_Terms_and_Conditions_2.06.2024.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Terms and conditions
                </a>
              </li>
            </ul>
          </S.TermsTitle>
          <S.TermsActions>
            <button
              type="button"
              onClick={() => {
                setState(false);
              }}
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => {
                setState(false);
                window.open(link);
              }}
            >
              Accept
            </button>
          </S.TermsActions>
        </S.Terms>
      </Popover.Content>
    </Popover>
  );
};

const HorizontalCard = ({ title, img, isActive = true, link = '#' }) => (
  <S.HorizontalCard isActive={isActive} href={link} target="_blank">
    <S.HorizontalCardContent>
      <img src={`img/partnerLaunch/${img}.svg`} alt="polkadotjs" />
      <div>
        <span>{title}</span>
      </div>
    </S.HorizontalCardContent>
    <S.HorizontalCardVideo />
  </S.HorizontalCard>
);
