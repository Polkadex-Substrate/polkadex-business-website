/* eslint-disable jsx-a11y/media-has-caption */
import { Icon } from 'components';
import { useMemo, useState } from 'react';

import * as S from './styles';

export const Calculator = () => {
  const [state, setState] = useState('1');

  const rewardAmount = useMemo(
    () => (Number(state) * 1500000) / 8000000,
    [state],
  );
  return (
    <S.Wrapper id="calculator">
      <S.Container>
        <S.Title>
          <div>
            <h2>Reward calculator</h2>
          </div>
          <div>
            <p>
              Use this calculator to estimate how many PDEX tokens you would
              receive if the crowdloan theoretically closed right now.
            </p>
          </div>
        </S.Title>
        <S.Calculator>
          <S.Amount>
            <div>
              <span>Reward amount</span>
              <S.AmountFlex>
                <input
                  type="text"
                  value={state}
                  placeholder="Enter an amount"
                  onChange={(e) => setState(e.currentTarget.value)}
                />
                <S.AmountToken>
                  <Icon name="Dot" />
                  DOT
                </S.AmountToken>
              </S.AmountFlex>
            </div>
          </S.Amount>
          <S.Reward>
            <div>
              <span>Reward amount</span>
              <p>
                {rewardAmount || 0} <small>PDEX</small>
              </p>
            </div>
          </S.Reward>
        </S.Calculator>
        <S.Message>
          The Reward amount result shown in this calculator is based on the
          current number of total contributed DOT, and is not a guaranteed
          amount. Polkadex rewards are paid as a % of your contribution to the
          pool (Your DOT Contribution * 1.5 Million DOT&lsquo;s / Total DOT
          Contributions )
        </S.Message>
        <S.Actions>
          <div>Polkadex Clowdloans</div>
          <Icon size="small" name="ArrowBottom" />
        </S.Actions>
        <S.Presentation>
          <h2>Polkadex Clowdloans</h2>
          <p>
            Watch the video to learn about the Solochain to Parachain migration
            and Crowdloans processes.
          </p>
          <iframe
            width="800"
            height="530"
            src="https://www.youtube.com/embed/PYi5JPZQvjc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </S.Presentation>
      </S.Container>
    </S.Wrapper>
  );
};
