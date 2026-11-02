import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/LegalPage';
import { COMPANY_INFO } from '@/data/content';

export const metadata: Metadata = {
  title: 'Terms of Use | DUCO Traders',
  description: 'Terms that apply to your use of the DUCO Traders website.',
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="29 October 2026">
      <p>
        By using this website you agree to these terms. If you do not agree, please do not use the site.
      </p>

      <div>
        <h2>1. Information only</h2>
        <p>
          Content on this website describes our services in general terms and is not an offer or contract. Prices,
          grades, quantities and delivery terms are confirmed only in a written quotation or agreement.
        </p>
      </div>

      <div>
        <h2>2. Enquiries</h2>
        <p>
          Submitting an enquiry does not create a contract. You agree to provide accurate details. How we handle the
          data you send is set out in our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </div>




      

      <div>
        <h2>3. Intellectual property</h2>
        <p>
          The DUCO Traders name, logo and website text belong to {COMPANY_INFO.legalName}. Photographs are used under the
          licences listed on our <Link href="/credits">Photo Credits</Link> page.
        </p>
      </div>

      <div>
        <h2>4. External links</h2>
        <p>Links to third-party sites (such as Google Maps) are provided for convenience. We are not responsible for their content.</p>
      </div>
      

      <div>
        <h2>5. Limitation of liability</h2>
        <p>
          We try to keep this website accurate and available but give no warranty that it is error-free. To the extent
          permitted by law, we are not liable for any loss arising from use of the website.
        </p>
      </div>

      <div>
        <h2>6. Governing law</h2>
        <p>
          These terms are governed by the laws of India. Courts in {COMPANY_INFO.city}, {COMPANY_INFO.state} have
          jurisdiction.
        </p>
      </div>

      <div>
        <h2>7. Contact</h2>
        <p>
          Questions about these terms: <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
        </p>
      </div>
    </LegalPage>
  );
}
