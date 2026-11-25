import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { COMPANY_INFO, CONTACT_CONTENT } from '@/data/content';

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

function getEnv(key: string): string | undefined {
  if (process.env[key]) return process.env[key];
  try {
    const candidates = [
      path.join(process.cwd(), '.env.local'),
      path.join(process.cwd(), '.env'),
    ];
    for (const p of candidates) {
      if (!fs.existsSync(p)) continue;
      const lines = fs.readFileSync(p, 'utf-8').split(/\r?\n/);
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const idx = trimmed.indexOf('=');
        if (idx === -1) continue;
        const k = trimmed.slice(0, idx).trim();
        let v = trimmed.slice(idx + 1).trim();
        if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
          v = v.slice(1, -1);
        }
        if (k === key && v) return v;
      }
    }
  } catch {
    // Fallback when filesystem env lookup is unavailable
  }
  return undefined;
}

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const clean = (value: unknown, maxLength: number) =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : '';

const fail = (error: string, status: number) =>
  NextResponse.json({ ok: false, success: false, error }, { status });

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return fail('The enquiry could not be read. Please try again.', 400);
    }

    // Hidden honeypot field that only bots fill in: report success and send nothing.
    if (clean(body.website, 200)) {
      return NextResponse.json({ ok: true, success: true });
    }

    const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
    if (isRateLimited(ip)) {
      return fail('Too many enquiries sent. Please try again in a few minutes.', 429);
    }

    const kind = body.kind === 'quote' ? 'Quote Request' : 'Website Enquiry';
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

    const apiKey = getEnv('RESEND_API_KEY');
    if (!apiKey || apiKey === 're_your_api_key_here') {
      console.error('RESEND_API_KEY is not configured in environment variables or .env file.');
      return fail('Resend API key is not configured. Please set RESEND_API_KEY in .env or .env.local.', 500);
    }

    const fromEmail = getEnv('RESEND_FROM_EMAIL') || getEnv('ENQUIRY_FROM_EMAIL') || 'onboarding@resend.dev';
    const toEmailRaw = getEnv('RESEND_TO_EMAIL') || getEnv('ENQUIRY_TO_EMAIL') || COMPANY_INFO.email;
    const toEmails = toEmailRaw.split(',').map((address) => address.trim()).filter(Boolean);

    const emailSubject = `${kind}: ${service} from ${name}`.replace(/[\r\n]+/g, ' ');

    const rows: [string, string][] = [
      ['Name', name],
      ['Phone', phone],
      ['Email', email],
      ...(company ? [['Company', company] as [string, string]] : []),
      ['Service', service],
    ];

    const textBody = [
      ...rows.map(([label, value]) => `${label}: ${value}`),
      ...(message ? [`Message: ${message}`] : []),
    ].join('\n');

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #0A3C61; border-bottom: 2px solid #248482; padding-bottom: 10px; margin-top: 0;">${escapeHtml(kind)} — ${escapeHtml(COMPANY_INFO.legalName)}</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          ${rows
            .map(
              ([label, value]) => `
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 120px; vertical-align: top;"><b>${escapeHtml(label)}:</b></td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${escapeHtml(value)}</td>
            </tr>`
            )
            .join('')}
        </table>
        ${
          message
            ? `
          <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; margin: 0 0 6px 0;"><b>Message:</b></p>
            <div style="background-color: #f8fafc; padding: 12px 16px; border-radius: 6px; color: #1e293b; white-space: pre-wrap; font-size: 14px; line-height: 1.5;">${escapeHtml(message)}</div>
          </div>`
            : ''
        }
      </div>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmails,
        reply_to: email,
        subject: emailSubject,
        text: textBody,
        html: htmlBody,
      }),
      signal: AbortSignal.timeout(10000),
    }).catch((err) => {
      console.error('Could not reach Resend:', err);
      return null;
    });

    if (!response) {
      return fail('Could not reach the email service. Please try again.', 502);
    }

    const resData = await response.json().catch(() => null);
    if (!response.ok) {
      console.error('Resend API error:', response.status, resData);
      return fail(
        resData?.message || 'Resend error: Check your domain verification or email settings.',
        response.status >= 400 && response.status < 500 ? 400 : 502
      );
    }

    return NextResponse.json({ ok: true, success: true, data: resData });
  } catch (error) {
    console.error('Failed to process contact submission:', error);
    return fail('Internal server error occurred.', 500);
  }
}
