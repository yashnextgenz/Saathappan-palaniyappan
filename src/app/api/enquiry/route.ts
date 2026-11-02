import { NextResponse } from 'next/server';
import { CONTACT_CONTENT } from '@/data/content';

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
// Best effort: per server instance, so it slows down abuse rather than strictly capping it.
const recentRequests = new Map<string, number[]>();

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const recent = (recentRequests.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length === 0) recentRequests.delete(ip);
  if (recent.length >= RATE_LIMIT) {
    recentRequests.set(ip, recent);
    return true;
  }
  recentRequests.set(ip, [...recent, now]);
  return false;
};

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const clean = (value: unknown, maxLength: number) =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : '';

const fail = (error: string, status: number) => NextResponse.json({ error }, { status });

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== 'object') return fail('The enquiry could not be read. Please try again.', 400);

  // Hidden field that only bots fill in: report success and send nothing.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  if (isRateLimited(ip)) return fail('Too many enquiries sent. Please try again in a few minutes.', 429);

  const kind = body.kind === 'quote' ? 'Quote request' : 'Website enquiry';
  const name = clean(body.name, 100);
  const company = clean(body.company, 120);
  const phone = clean(body.phone, 20);
  const email = clean(body.email, 254);
  const service = clean(body.service, 100);
  const message = clean(body.message, 2000);

  if (!name) return fail('Enter your name.', 400);
  if (!/^[+0-9 ()-]{7,20}$/.test(phone)) return fail('Enter a valid phone number.', 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail('Enter a valid email address.', 400);
  if (!CONTACT_CONTENT.servicesOptions.includes(service)) return fail('Select a service.', 400);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error('Enquiry email is not configured: set RESEND_API_KEY, ENQUIRY_TO_EMAIL and ENQUIRY_FROM_EMAIL.');
    return fail('Enquiries cannot be sent right now.', 503);
  }

  const fields: [string, string][] = [
    ['Name', name],
    ['Company', company],
    ['Phone', phone],
    ['Email', email],
    ['Service', service],
    ['Message', message],
  ];
  const filled = fields.filter(([, value]) => value);

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: to.split(',').map((address) => address.trim()),
      reply_to: email,
      subject: `${kind}: ${service} from ${name}`.replace(/[\r\n]+/g, ' '),
      text: filled.map(([label, value]) => `${label}: ${value}`).join('\n'),
      html: filled
        .map(([label, value]) => `<p><strong>${label}:</strong><br>${escapeHtml(value).replace(/\n/g, '<br>')}</p>`)
        .join(''),
    }),
    signal: AbortSignal.timeout(10000),
  }).catch((err) => {
    console.error('Could not reach Resend:', err);
    return null;
  });

  if (!response || !response.ok) {
    if (response) console.error('Resend rejected the email:', response.status, await response.text());
    return fail('Your enquiry could not be sent.', 502);
  }

  return NextResponse.json({ ok: true });
}
