import { useEffect, useState } from 'react';

/**
 * Live staking stats for the /staking page and homepage staking callout.
 *
 * Fetches from Polkadex Explorer / Subscan on mount and falls back to the
 * hard-coded defaults if the request fails. Values stay fresh across
 * deploys — no rebuild required when APY moves.
 *
 * ─── TO WIRE THE LIVE ENDPOINT ─────────────────────────────────────────
 * The exact endpoint depends on which service the Explorer exposes.
 * Two common options for Substrate/Polkadex chains:
 *
 *   • Subscan-style JSON:
 *       POST https://polkadex.api.subscan.io/api/scan/staking/stats
 *   • Polkadex RPC (via websocket, requires @polkadot/api):
 *       wss://mainnet.polkadex.trade
 *
 * Fill in `ENDPOINT` and the response-parsing block below and this hook
 * will start returning live data. If you'd rather I use a different
 * service (Explorer's own REST, Dune, custom API), point me at it and
 * I'll swap the fetch out.
 * ────────────────────────────────────────────────────────────────────────
 */

const ENDPOINT = ''; // e.g. 'https://polkadex.api.subscan.io/api/scan/staking/stats'

export type StakingStats = {
  /** Trailing realized APY for nominators, e.g. "14.2%" */
  apy: string;
  /** Trailing realized APY for validators, e.g. "15.6%" */
  apyValidator: string;
  /** Total number of nominators, formatted, e.g. "5,460" */
  nominators: string;
  /** Total PDEX staked, formatted, e.g. "7.15 million" */
  pdexStaked: string;
  /** Number of active validators, e.g. "200" */
  activeValidators: string;
  /** true while the hook is fetching; false after fallback OR success */
  loading: boolean;
  /** true if the fetch failed and we're rendering fallback values */
  usingFallback: boolean;
};

// Conservative fallback values — used if ENDPOINT is empty or fetch fails.
// Kept in sync with the on-chain snapshot referenced elsewhere on the site.
// Update these whenever you do a manual refresh.
const FALLBACK: Omit<StakingStats, 'loading' | 'usingFallback'> = {
  apy: '14.2%',
  apyValidator: '15.6%',
  nominators: '5,460',
  pdexStaked: '7.15 million',
  activeValidators: '200',
};

export const useStakingStats = (): StakingStats => {
  const [state, setState] = useState<StakingStats>({
    ...FALLBACK,
    loading: !!ENDPOINT,
    usingFallback: true,
  });

  useEffect(() => {
    if (!ENDPOINT) return;

    let cancelled = false;

    const run = async () => {
      try {
        const res = await fetch(ENDPOINT, { method: 'GET' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        // ─── Response parsing ─────────────────────────────────────────
        // Adjust these paths to match your endpoint's response shape.
        // Example for a Subscan-style response:
        //   data.data.staking_apy        → number (0.142 = 14.2%)
        //   data.data.validator_apy      → number
        //   data.data.nominator_count    → number
        //   data.data.staking_total      → planck string
        //   data.data.validator_count    → number
        const stats: Omit<StakingStats, 'loading' | 'usingFallback'> = {
          apy: formatPercent(data?.data?.staking_apy) ?? FALLBACK.apy,
          apyValidator:
            formatPercent(data?.data?.validator_apy) ?? FALLBACK.apyValidator,
          nominators:
            formatCount(data?.data?.nominator_count) ?? FALLBACK.nominators,
          pdexStaked:
            formatPdex(data?.data?.staking_total) ?? FALLBACK.pdexStaked,
          activeValidators:
            String(data?.data?.validator_count ?? FALLBACK.activeValidators),
        };

        if (!cancelled) {
          setState({ ...stats, loading: false, usingFallback: false });
        }
      } catch {
        if (!cancelled) {
          setState({ ...FALLBACK, loading: false, usingFallback: true });
        }
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
};

// ── formatters ────────────────────────────────────────────────────────────
function formatPercent(v: unknown): string | null {
  if (typeof v !== 'number' || Number.isNaN(v)) return null;
  return `${(v * 100).toFixed(1)}%`;
}

function formatCount(v: unknown): string | null {
  if (typeof v !== 'number' || Number.isNaN(v)) return null;
  return v.toLocaleString('en-US');
}

// PDEX has 12 decimals on-chain (planck). Convert to human-readable.
function formatPdex(planck: unknown): string | null {
  const n = typeof planck === 'string' ? Number(planck) : (planck as number);
  if (typeof n !== 'number' || Number.isNaN(n)) return null;
  const pdex = n / 1e12;
  if (pdex >= 1_000_000) return `${(pdex / 1_000_000).toFixed(2)} million`;
  if (pdex >= 1_000) return `${(pdex / 1_000).toFixed(1)}K`;
  return pdex.toFixed(0);
}
