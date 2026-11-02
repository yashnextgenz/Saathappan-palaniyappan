import React from 'react';
import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { COMPANY_INFO } from '@/data/content';

export const metadata: Metadata = {
  title: 'Privacy Policy | DUCO Traders',
  description: 'How DUCO Traders collects, uses and protects personal data shared through this website.',
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="29 October 2026">
      <p>
        This policy explains how {COMPANY_INFO.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles personal data
        collected through this website. It is published in line with the Digital Personal Data Protection Act, 2023 and
        the Information Technology Act, 2000 and rules made under it.
      </p>

      <div>
        <h2>1. Data we collect</h2>
        <p>Only what you choose to give us through our enquiry and quote forms:</p>
        <ul>
          <li>Name and company name</li>
          <li>Phone number and email address</li>
          <li>The service you are interested in and your message</li>
        </ul>
        <p className="mt-2">
          We do not use advertising or tracking cookies. Our hosting provider may keep standard server logs (such as IP
          address and browser type) for security.
        </p>
      </div>

      <div>
        <h2>2. Why we use it</h2>
        <p>
          Solely to reply to your enquiry, prepare quotes, and provide the services you request. We rely on the consent
          you give when you tick the consent box before submitting a form.
        </p>
      </div>

      <div>
        <h2>3. Sharing</h2>
        <p>
          We do not sell or rent your data. We share it only with service providers who help us run our business (for
          example, email hosting), or where required by law.
        </p>
      </div>

      <div>
        <h2>4. How long we keep it</h2>
        <p>
          We keep enquiry data for as long as needed to respond and to maintain any business relationship that follows,
          and then delete it unless the law requires us to keep it longer.
        </p>
      </div>

      <div>
        <h2>5. Your rights</h2>
        <p>You may at any time:</p>
        <ul>
          <li>ask what personal data we hold about you</li>
          <li>ask us to correct, complete, update or erase it</li>
          <li>withdraw your consent (this does not affect anything done before withdrawal)</li>
          <li>nominate another person to exercise these rights on your behalf</li>
          <li>raise a grievance with us, and if unresolved, with the Data Protection Board of India</li>
        </ul>
      </div>

      <div>
        <h2>6. Security</h2>
        <p>
          We use reasonable security practices to protect your data. This website is served over HTTPS. No method of
          transmission over the internet is completely secure.
        </p>
      </div>

      <div>
        <h2>7. Grievance Officer &amp; contact</h2>
        <p>
          For any request or complaint about your personal data, contact our Grievance Officer:
          <br />
          {COMPANY_INFO.legalName}, {COMPANY_INFO.address}
          <br />
          Email: <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a> &middot; Phone: {COMPANY_INFO.phone}
          <br />
          We will acknowledge your request promptly and resolve it within 30 days.
        </p>
      </div>

      <div>
        <h2>8. Changes</h2>
        <p>We may update this policy. The date at the top shows the latest version.</p>
      </div>
    </LegalPage>
  );
}
