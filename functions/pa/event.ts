/**
 * Cloudflare Pages Function: first-party proxy for Plausible's event
 * ingestion API. The script (served via /assets/pa.js with
 * data-api="/pa/event") posts pageviews and custom events here; we relay
 * them to plausible.io, forwarding the visitor's IP and UA so geo/device
 * stats stay accurate.
 */
export const onRequestPost: PagesFunction = async ({ request }) => {
  const body = await request.text();
  const upstream = await fetch('https://plausible.io/api/event', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'user-agent': request.headers.get('user-agent') ?? '',
      'x-forwarded-for':
        request.headers.get('cf-connecting-ip') ??
        request.headers.get('x-forwarded-for') ??
        '',
    },
    body,
  });
  return new Response(null, { status: upstream.status });
};
