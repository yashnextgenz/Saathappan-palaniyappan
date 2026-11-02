import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { COMPANY_INFO, NAV_LINKS } from '@/data/content';

const SERVICE_LINKS = [
  { label: 'Industrial Salt & Bulk Supply', href: '/services#industrial-salt' },
  { label: 'Salt Pan & Water Flow Development', href: '/services#field-services' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Photo Credits', href: '/credits' },
];

const HEADING = 'text-sm font-bold uppercase tracking-widest text-teal-200';
const LINK = 'text-sm text-white hover:text-teal-200 transition-colors';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#002B4D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1.1fr_1.2fr] gap-8 lg:gap-12">
        <div>
          {/* The navy logo is rendered white so it shows on the dark background */}
          <Image src="/duco.png" alt="DUCO Traders" width={419} height={160} className="h-16 w-auto brightness-0 invert" />
          <p className="mt-4 text-sm leading-relaxed text-white/90">
            Industrial salt manufacturing and bulk supply, plus salt pan and water flow development. Rooted in experience. Focused on growth.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className={HEADING}>Quick Links</h2>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={LINK}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={HEADING}>Our Services</h2>
          <ul className="mt-4 space-y-2.5">
            {SERVICE_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={LINK}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={HEADING}>Contact Us</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="w-4 h-4 shrink-0 mt-0.5 text-teal-200" aria-hidden="true" />
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className={LINK}>{COMPANY_INFO.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="w-4 h-4 shrink-0 mt-0.5 text-teal-200" aria-hidden="true" />
              <a href={`mailto:${COMPANY_INFO.email}`} className={`${LINK} break-all`}>{COMPANY_INFO.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#001F38]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px] text-white/90">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. All Rights Reserved.</p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-teal-200 transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
