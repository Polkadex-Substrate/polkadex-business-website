/* eslint-disable jsx-a11y/media-has-caption */
import { Icon } from 'components';
import { useMemo, useState } from 'react';

import * as S from './styles';

export const Calculator = () => {
  const [state, setState] = useState('1');

  // Calculate Total Reward Amount
  const rewardAmount = useMemo(() => {
    const result = (Number(state) * 20000000) / 9733230.6135;
    return Number.isInteger(result) ? result?.toFixed(2) : result?.toFixed(6);
  }, [state]);

  return (
    <S.Wrapper id="calculator">
      <S.Container>
        <S.Title>
          <div>
            <h2>Reward calculator</h2>
          </div>
          <div>
            <p>
              Use this calculator to see the minimum PDEX base reward you will
              receive based on your DOT contribution.
            </p>
          </div>
        </S.Title>
        <S.CalculatorWrapper>
          <S.Calculator>
            <S.CalculatorContainer>
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
                  {rewardAmount || '0'}
                  {rewardAmount ? '+' : ''}
                  <small> PDEX</small>
                </p>
              </S.Reward>
            </S.CalculatorContainer>
          </S.Calculator>
          <S.Message>
            The reward amount shown in this calculator is based on the total
            number of contributed DOT reaching the 973,323.6135 million DOT cap.
          </S.Message>
        </S.CalculatorWrapper>

        <S.Actions>
          <div>Polkadex Crowdloans</div>
          <Icon size="small" name="ArrowBottom" link="#video" />
        </S.Actions>
      </S.Container>
    </S.Wrapper>
  );
};
