import dynamic from 'next/dynamic';
import { useState } from 'react';

import * as S from './styles';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export const Rewards = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: 'basic-bar',
        foreColor: '#969696',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: ['0.25M', '0.4M', '0.75M', '1M'],
        title: {
          text: 'DOT Cap',
        },
      },
      yaxis: {
        title: {
          text: 'PDEX',
        },
        min: 0.1,
        max: 0.5,
      },
      colors: ['#E6007A'],
      dataLabels: {
        enabled: true,
        position: 'left',
      },

      grid: {
        borderColor: '#e0e0e0',
        row: {
          colors: ['#f3f3f366', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
    },
    series: [
      {
        name: 'PDEX',
        data: [0.5, 0.375, 0.3, 0.25, 0.21, 2],
      },
    ],
  });

  return (
    <S.Wrapper id="rewards">
      <S.Title>
        <div>
          <h2>Crowdloan reward distribution</h2>
        </div>
        <div>
          <p>
            Everyone who is eligible can apply for one or all bonus levels.{' '}
            <strong>
              In total there is 2M PDEX (10% of the total supply) reserved for
              crowdloans.
            </strong>
          </p>
          <a href="#tokenEconomics" rel="noreferrer">
            Polkadex Token Economics
          </a>
        </div>
      </S.Title>
      <S.Information>
        <h3>General Information</h3>
        <div>
          <S.InformationCard>
            <span>8th - 11th</span>
            <p>Parachain batch 2 slot target</p>
          </S.InformationCard>
          <S.InformationCard>
            <span>8-15</span>
            <p>Lease Period</p>
          </S.InformationCard>
          <S.InformationCard>
            <span>96 weeks</span>
            <p>Lease Duration</p>
          </S.InformationCard>
          <S.InformationCard>
            <span>1M DOT</span>
            <p>Auction cap</p>
          </S.InformationCard>
        </div>
      </S.Information>
      <S.Allocation>
        <h3>Crowdloan Reward Allocation</h3>
        <S.AllocationContent>
          <S.AllocationCard>
            <S.AllocationCardHeader>
              <span>Base reward</span>
              <p>2M PDEX</p>
            </S.AllocationCardHeader>
            <S.AllocationCardContent>
              <span>2 PDEX per 1 DOT</span>
              <p>Base reward for all contributors to the Polkadex Crowdloan.</p>
            </S.AllocationCardContent>
          </S.AllocationCard>
          <S.AllocationCard>
            <S.AllocationCardHeader>
              <div />
              <p>Limited</p>
            </S.AllocationCardHeader>
            <S.AllocationCardContent>
              <span>Exclusive NFT</span>
              <p>
                The top 1000 Crowdloan contributors will receive a
                limited-edition NFT.
              </p>
            </S.AllocationCardContent>
          </S.AllocationCard>
        </S.AllocationContent>
      </S.Allocation>
      <S.Vesting>
        <S.VestingTitle>
          <h3>Vesting Terms</h3>
          <span>
            Vesting is the process of locking and releasing tokens after a given
            time.
          </span>
        </S.VestingTitle>
        <S.VestingBar>
          <S.VestingInfo>
            <div>25%</div>
            <p>Immediate</p>
          </S.VestingInfo>
          <S.VestingInfo>
            <div>75%</div>
            <p>Linear unlock (per block)</p>
          </S.VestingInfo>
        </S.VestingBar>
      </S.Vesting>
      <S.Graph>
        <h3>Estimated Base Reward PDEX per DOT</h3>
        <div>
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            height={250}
          />
        </div>
      </S.Graph>
    </S.Wrapper>
  );
};
