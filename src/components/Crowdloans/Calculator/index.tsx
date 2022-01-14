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
              Use this calculator to see the minimum PDEX base reward amount you
              will receive based on your DOT contribution.
            </p>
          </div>
        </S.Title>
        <S.CalculatorWrapper>
          <S.Calculator>
            <S.Amount>
              <div>
                <S.Heading>Contribution amount</S.Heading>
                <S.AmountFlex>
                  <input
                    type="text"
                    value={state}
                    placeholder="Enter an amount"
                    onChange={(e) => setState(e.currentTarget.value)}
                  />
                  <S.AmountToken>
                    <Icon name="Dot" />
                    <span>DOT</span>
                  </S.AmountToken>
                </S.AmountFlex>
              </div>
            </S.Amount>
            <S.Reward>
              <span>Reward amount</span>
              <p>
                {rewardAmount || 0}
                {rewardAmount ? '+' : ''} <small>PDEX</small>
              </p>
            </S.Reward>
          </S.Calculator>
          <S.Message>
            The reward amount shown in this calculator is based on the total
            number of contributed DOT reaching the 8 million DOT cap and shows
            the minimum guaranteed PDEX reward in that scenario. Your final PDEX
            reward amount will most likely be higher than what this calculator
            shows since PDEX rewards are paid as a % of your contribution to the
            pool.
          </S.Message>
        </S.CalculatorWrapper>

        <S.Actions>
          <div>Polkadex Crowdloans</div>
          <Icon size="small" name="ArrowBottom" link="#video" />
        </S.Actions>
        <S.Presentation id="video">
          <h2>Polkadex Crowdloans</h2>
          <p>
            Watch the video to learn about the Solochain to Parachain migration
            and Crowdloan process.
          </p>
          <iframe
            width="800"
            height="530"
            src="https://www.youtube.com/embed/A8NR4hKdD4o"
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