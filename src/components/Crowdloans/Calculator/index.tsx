/* eslint-disable jsx-a11y/media-has-caption */
import { Dropdown, Icon } from 'components';
import { Input } from 'components/Input';
import { useMemo, useState } from 'react';

import * as S from './styles';

const earlyOptions = {
  none: 1,
  early72h: 1.15,
  early9th: 1.05,
};
export const Calculator = () => {
  const [state, setState] = useState('1');

  const [options, setOptions] = useState({
    early: 'none',
    referral: false,
  });

  // Calculate Total Reward Amount
  const rewardAmount = useMemo(() => {
    return (
      ((Number(state) * 1500000) / 8000000) *
      earlyOptions[options.early] *
      (options.referral ? 1.05 : 1)
    );
  }, [state, options]);

  // Calculate Early Percent Aount
  const earlyPercentAmount = useMemo(() => {
    return ((earlyOptions[options.early] - 1) * 100).toFixed();
  }, [options]);

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
            <S.CalculatorActions>
              <S.CalculatorActionsContainer>
                <h4>Early Bird Options</h4>
                <S.CalculatorActionsWrapper>
                  <Input
                    type="radio"
                    name="early72"
                    label="Early bird 72h"
                    value={options.early}
                    checked={options.early === 'early72h'}
                    onChange={() =>
                      setOptions({ ...options, early: 'early72h' })
                    }
                  />
                  <Input
                    type="radio"
                    name="early9th"
                    label="From the 3rd to the 9th day"
                    value={options.early}
                    checked={options.early === 'early9th'}
                    onChange={() =>
                      setOptions({ ...options, early: 'early9th' })
                    }
                  />
                  <Input
                    type="radio"
                    name="earlynone"
                    label="None"
                    value={options.early}
                    checked={options.early === 'none'}
                    onChange={() => setOptions({ ...options, early: 'none' })}
                  />
                </S.CalculatorActionsWrapper>
              </S.CalculatorActionsContainer>
              <S.CalculatorActionsContainer>
                <h4>Referral Options</h4>
                <S.CalculatorActionsWrapper>
                  <Input
                    type="checkbox"
                    name="Referee"
                    label="Referee or Referred"
                    checked={options.referral}
                    onChange={() =>
                      setOptions({ ...options, referral: !options.referral })
                    }
                  />
                </S.CalculatorActionsWrapper>
              </S.CalculatorActionsContainer>
            </S.CalculatorActions>
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
                    <S.Percent>
                      {options.early !== 'none' && (
                        <span>+{earlyPercentAmount}%</span>
                      )}
                      {options.referral && <span>+5%</span>}
                    </S.Percent>

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
                  {rewardAmount ? rewardAmount.toFixed(6) : '0'}
                  {rewardAmount ? '+' : ''} <small>PDEX</small>
                </p>
              </S.Reward>
            </S.CalculatorContainer>
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
