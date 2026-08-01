/**
 * Thin wrapper around Plausible custom events.
 *
 * Usage:
 *   track('CTA: Try Testnet', { placement: 'header' });
 *
 * Notes:
 * - Outbound link clicks (buypdex.com, Discord, the testnet app, wallets)
 *   are tracked automatically by the script variant we load
 *   (script.outbound-links) as "Outbound Link: Click" — no manual calls
 *   needed for those.
 * - No-ops safely when Plausible is blocked or not yet loaded.
 * - Remember to register new goal names in the Plausible dashboard
 *   (Site settings → Goals) to see them in reports.
 */

type Props = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Props }) => void;
  }
}

export const track = (event: string, props?: Props) => {
  if (typeof window === 'undefined') return;
  window.plausible?.(event, props ? { props } : undefined);
};
