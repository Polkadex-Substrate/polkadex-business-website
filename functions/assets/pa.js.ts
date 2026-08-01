/**
 * Cloudflare Pages Function: first-party proxy for the Plausible script.
 * Serving analytics from our own domain (/assets/pa.js) instead of
 * plausible.io makes it near-invisible to blocker filter lists — important
 * for a crypto audience with heavy adblock usage.
 *
 * script.outbound-links auto-tracks clicks on external links (buypdex.com,
 * Discord, the testnet app) as "Outbound Link: Click" events — no manual
 * wiring needed for those.
 */
export const onRequestGet: PagesFunction = async () => {
  const upstream = await fetch(
    'https://plausible.io/js/script.outbound-links.js',
  );
  const body = await upstream.text();
  return new Response(body, {
    headers: {
      'content-type': 'application/javascript; charset=utf-8',
      'cache-control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  });
};
