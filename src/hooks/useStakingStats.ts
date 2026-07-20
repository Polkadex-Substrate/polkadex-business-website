import { useEffect, useState } from 'react';

/**
 * Live staking stats for the /staking page and homepage staking callout.
 *
 * Source of truth: explorer.polkadex.ee (the Foundation's own indexer).
 * NOTE: Subscan is NOT an option — they removed Polkadex mainnet indexing
 * (confirmed July 2026), so any polkadex.api.subscan.io data is stale.
 *
 * Endpoint:  GET https://explorer.polkadex.ee/api/network-info
 * Docs:      https://explorer.polkadex.ee/developers
 *            https://explorer.polkadex.ee/llms.txt  (machine-readable)
 *
 * Response shape (per the explorer's published schema, July 2026):
 *   {
 *     networkInfo: {
 *       activeEra, avgValidatorCommission,
 *       avgApy,                       // headline AVG APY %, commission-adjusted
 *       validators: { active, total },
 *       nominators: { active, total },
 *       totalBonding,                 // total PDEX bonded ("In Stake")
 *       totalIssuance, minStake, averageStake, ...
 *     },
 *     lastSync, status: "Synced" | "Stale" | "Initializing" | "Error",
 *     chainHead: { ... }
 *   }
 *
 * Access: the API is open to non-browser clients. Browser calls from
 * polkadex.ee work once the explorer operator adds https://polkadex.ee and
 * https://www.polkadex.ee to its ALLOWED_ORIGINS allowlist (origin-based
 * CORS — not IP-based). Until then the fetch fails silently in browsers
 * and the FALLBACK below is shown, so the site keeps working either way.
 *
 * Client etiquette (per the API docs): the endpoint is cached with
 * max-age=30. We fetch once per page view and never poll, well within it.
 */

const ENDPOINT = 'https://explorer.polkadex.ee/api/network-info';

export type StakingStats = {
  /** Network average APY, e.g. "7.95%" */
  apy: string;
  /** Validator average APY (network average until API exposes it) */
  apyValidator: string;
  /** Total number of nominators, formatted, e.g. "2,442" */
  nominators: string;
  /** Total PDEX staked, formatted, e.g. "7.18 million" */
  pdexStaked: string;
  /** Number of active validators, e.g. "200" */
  activeValidators: string;
  /** true while the hook is fetching; false after fallback OR success */
  loading: boolean;
  /** true if the fetch failed and we're rendering fallback values */
  usingFallback: boolean;
};

// Fallback values — used while the browser can't reach the explorer API
// (ALLOWED_ORIGINS not yet updated) or if the fetch fails. Manually synced
// with explorer.polkadex.ee on 2026-07-19:
//   AVG APY 7.95% · In Stake 7,177,107 PDEX · Validators 200 active / 237
//   registered · Nominators 1,728 active / 2,442 total.
// Refresh these from the explorer whenever they drift. apyValidator is the
// network average — the API doesn't expose a separate validator figure.
const FALLBACK: Omit<StakingStats, 'loading' | 'usingFallback'> = {
  apy: '7.95%',
  apyValidator: '7.95%',
  nominators: '2,442',
  pdexStaked: '7.18 million',
  activeValidators: '200',
};

/** Subset of GET /api/network-info we consume. */
type NetworkInfoResponse = {
  networkInfo?: {
    avgApy?: number;
    validators?: { active?: number; total?: number };
    nominators?: { active?: number; total?: number };
    totalBonding?: number;
  };
  status?: string;
};

export const useStakingStats = (): StakingStats => {
  const [state, setState] = useState<StakingStats>({
    ...FALLBACK,
    loading: !!ENDPOINT,
    usingFallback: true,
  });

  useEffect(() => {
    if (!ENDPOINT) return undefined;

    let cancelled = false;

    const run = async () => {
      try {
        const res = await fetch(ENDPOINT, { method: 'GET' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as NetworkInfoResponse;

        // "Initializing"/"Error" mean the indexer can't vouch for the
        // numbers — our dated fallback is more trustworthy than a
        // half-computed payload. "Stale" is accepted: slightly old
        // on-chain data still beats the static snapshot.
        if (json.status === 'Initializing' || json.status === 'Error') {
          throw new Error(`indexer status: ${json.status}`);
        }

        const info = json.networkInfo;
        if (!info || !isNum(info.avgApy)) {
          throw new Error('unexpected payload shape');
        }

        const apy = `${info.avgApy.toFixed(2)}%`;
        const stats: Omit<StakingStats, 'loading' | 'usingFallback'> = {
          apy,
          apyValidator: apy,
          nominators: isNum(info.nominators?.total)
            ? info.nominators!.total!.toLocaleString('en-US')
            : FALLBACK.nominators,
          pdexStaked: isNum(info.totalBonding)
            ? formatPdex(info.totalBonding!)
            : FALLBACK.pdexStaked,
          activeValidators: isNum(info.validators?.active)
            ? String(info.validators!.active)
            : FALLBACK.activeValidators,
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
function isNum(v: unknown): v is number {
  return typeof v === 'number' && !Number.isNaN(v);
}

/** Values from /api/network-info are already in PDEX (not planck). */
function formatPdex(pdex: number): string {
  if (pdex >= 1_000_000) return `${(pdex / 1_000_000).toFixed(2)} million`;
  if (pdex >= 1_000) return `${(pdex / 1_000).toFixed(1)}K`;
  return pdex.toFixed(0);
}
