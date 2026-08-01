import type { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

// ApexCharts touches `window`, so it must never render during the static
// export build. Loaded client-side only.
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

/**
 * Tokenomics charts, inspired by CoinGecko's token pages:
 *  1. Unlock progress donut (locked vs unlocked supply).
 *  2. Total supply over time.
 *
 * The honest Polkadex story both charts tell: every vesting tranche
 * completed long ago (donut is 100% green, unlike almost any other token),
 * and total issuance grows only through per-era staking rewards, from the
 * 20,000,000 PDEX genesis supply to today's live figure.
 *
 * Live data: GET https://explorer.polkadex.ee/api/network-info
 * (totalIssuance). Same endpoint, fallback and CORS caveats as
 * src/hooks/useStakingStats.ts.
 */

const ENDPOINT = 'https://explorer.polkadex.ee/api/network-info';

// Manually synced with explorer.polkadex.ee on 2026-07-31. Refresh when it
// drifts; the live fetch replaces it whenever CORS allows.
const FALLBACK_ISSUANCE = 23_170_000;

// Mainnet genesis: 29 Sep 2021, 20,000,000 PDEX.
const GENESIS_TS = Date.UTC(2021, 8, 29);
const GENESIS_SUPPLY = 20_000_000;

const useTotalIssuance = () => {
  const [state, setState] = useState({
    issuance: FALLBACK_ISSUANCE,
    usingFallback: true,
  });

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        const res = await fetch(ENDPOINT);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const issuance = json?.networkInfo?.totalIssuance;
        if (
          typeof issuance !== 'number' ||
          Number.isNaN(issuance) ||
          issuance < GENESIS_SUPPLY
        ) {
          throw new Error('unexpected payload');
        }
        if (!cancelled) setState({ issuance, usingFallback: false });
      } catch {
        /* keep the dated fallback */
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
};

const formatM = (v: number) => `${(v / 1_000_000).toFixed(2)}M`;

export const TokenomicsCharts = () => {
  const { issuance, usingFallback } = useTotalIssuance();

  const donutOptions: ApexOptions = {
    chart: { type: 'donut', background: 'transparent' },
    labels: ['Unlocked', 'Locked'],
    colors: ['#0CA564', '#2E303C'],
    stroke: { show: false },
    dataLabels: { enabled: false },
    legend: { show: false },
    tooltip: {
      y: { formatter: (v: number) => `${v.toFixed(0)}%` },
      theme: 'dark',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '76%',
          labels: {
            show: true,
            name: { show: true, color: '#A8ADB7', fontSize: '13px' },
            value: {
              show: true,
              color: '#FFFFFF',
              fontSize: '26px',
              fontWeight: 600,
              formatter: () => '100%',
            },
            total: {
              show: true,
              label: 'Unlocked',
              color: '#A8ADB7',
              formatter: () => '100%',
            },
          },
        },
      },
    },
  };

  const areaOptions: ApexOptions = {
    chart: {
      type: 'area',
      background: 'transparent',
      foreColor: '#A8ADB7',
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ['#E6007A'],
    stroke: { curve: 'straight', width: 2.5 },
    dataLabels: { enabled: false },
    fill: {
      type: 'gradient',
      gradient: { opacityFrom: 0.35, opacityTo: 0.02 },
    },
    grid: { borderColor: 'rgba(255, 255, 255, 0.06)' },
    xaxis: {
      type: 'datetime',
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      min: GENESIS_SUPPLY * 0.98,
      labels: { formatter: formatM },
    },
    tooltip: {
      theme: 'dark',
      x: { format: 'MMM yyyy' },
      y: { formatter: (v: number) => `${formatM(v)} PDEX` },
    },
    markers: { size: 4, strokeWidth: 0 },
  };

  const areaSeries = [
    {
      name: 'Total issuance',
      data: [
        [GENESIS_TS, GENESIS_SUPPLY],
        [Date.now(), issuance],
      ],
    },
  ];

  return (
    <Wrapper>
      <Card>
        <h3>Unlock progress</h3>
        <ReactApexChart
          options={donutOptions}
          series={[100, 0]}
          type="donut"
          height={240}
        />
        <Legend>
          <li>
            <i data-color="unlocked" />
            <span>Unlocked</span>
            <strong>{formatM(issuance)} PDEX · 100%</strong>
          </li>
          <li>
            <i data-color="locked" />
            <span>Locked</span>
            <strong>0 PDEX · 0%</strong>
          </li>
        </Legend>
        <Caption>
          Every vesting tranche completed long ago. There is no unlock
          schedule left to chart.
        </Caption>
      </Card>
      <Card>
        <h3>Total supply over time</h3>
        <ReactApexChart
          options={areaOptions}
          series={areaSeries}
          type="area"
          height={280}
        />
        <Caption>
          From the 20,000,000 PDEX genesis supply to {formatM(issuance)} today.
          The only new PDEX comes from per-era staking rewards paid to the
          validators and nominators securing the network; there are no other
          emissions, and no cliffs on this curve.
          {usingFallback
            ? ' Figures as of 31 Jul 2026, from explorer.polkadex.ee.'
            : ' Live from explorer.polkadex.ee.'}
        </Caption>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  margin: 4rem 0 5rem;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackgroundOpacity};
    border-radius: 1.5rem;
    padding: 2.4rem;
    h3 {
      font-size: ${theme.font.sizes.large};
      font-weight: 600;
      margin-bottom: 1.6rem;
    }
  `}
`;

const Legend = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    margin: 1.2rem 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    li {
      display: flex;
      align-items: center;
      gap: 0.9rem;
      font-size: ${theme.font.sizes.small};
      span {
        color: ${theme.colors.secondaryText};
      }
      strong {
        margin-left: auto;
        font-weight: 600;
      }
      i {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        &[data-color='unlocked'] {
          background: #0ca564;
        }
        &[data-color='locked'] {
          background: #2e303c;
        }
      }
    }
  `}
`;

const Caption = styled.p`
  ${({ theme }) => css`
    margin-top: 1.6rem;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.secondaryText};
    line-height: 1.6;
  `}
`;

export default TokenomicsCharts;
