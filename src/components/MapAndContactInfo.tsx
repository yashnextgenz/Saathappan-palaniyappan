import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { COMPANY_INFO } from '@/data/content';

const MAP_URL = `https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`;

/** Drawn locator (no third-party map image): Chennai on the Bay of Bengal coast. Crisp at any size. */
const LocatorGraphic: React.FC = () => (
  <svg viewBox="0 0 600 260" preserveAspectRatio="xMidYMid slice" className="w-full h-full" role="img" aria-label={`DUCO Traders is located in ${COMPANY_INFO.city}, ${COMPANY_INFO.state}`}>
    <rect width="600" height="260" fill="#EEF1F5" />
    {/* Bay of Bengal */}
    <path d="M430 0 C400 60 420 110 395 160 C380 200 395 230 385 260 L600 260 L600 0 Z" fill="#CFE3EE" />
    <text x="510" y="140" textAnchor="middle" fontSize="13" fill="#4A7A93" fontStyle="italic">Bay of Bengal</text>
    {/* Roads */}
    <g stroke="#FFFFFF" strokeWidth="6" fill="none" strokeLinecap="round">
      <path d="M0 70 C120 80 220 110 330 120 L398 128" />
      <path d="M60 260 C140 190 220 150 330 120" />
      <path d="M230 0 C240 70 250 110 330 120 C360 160 370 210 375 260" />
    </g>
    <g stroke="#D7DEE6" strokeWidth="2" fill="none">
      <path d="M0 180 C100 170 200 190 300 210" />
      <path d="M120 0 C140 80 120 150 150 260" />
    </g>
    {/* Pin */}
    <g transform="translate(330 120)">
      <circle r="26" fill="#248482" opacity="0.18" />
      <path d="M0 -34 C-12 -34 -20 -25 -20 -14 C-20 0 0 18 0 18 C0 18 20 0 20 -14 C20 -25 12 -34 0 -34 Z" fill="#0A3C61" />
      <circle cy="-14" r="7" fill="#FFFFFF" />
    </g>
    <text x="330" y="168" textAnchor="middle" fontSize="16" fontWeight="700" fill="#12355A">{COMPANY_INFO.city}</text>
    <text x="330" y="186" textAnchor="middle" fontSize="12" fill="#5B6B7C">{COMPANY_INFO.state}</text>
  </svg>
);

const CONTACTS = [
  { icon: <FaPhoneAlt />, label: 'Call us', value: COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}` },
  { icon: <FaEnvelope />, label: 'Email us', value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
  { icon: <FaMapMarkerAlt />, label: 'Visit us', value: COMPANY_INFO.address, href: MAP_URL },
];

/** Phone, email and address as a row of three cards. */
export const ContactCards: React.FC = () => (
  <section className="w-full bg-[#EEF1F5] py-12 sm:py-16">
    <ul className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
      {CONTACTS.map((c) => (
        <li key={c.label}>
          <a href={c.href} className="flex h-full items-start gap-4 rounded-lg bg-white p-5 sm:p-6 shadow-soft hover:shadow-card transition-shadow">
            <span className="flex w-11 h-11 shrink-0 items-center justify-center rounded-full bg-[#0A3C61] text-white" aria-hidden="true">
              {c.icon}
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold uppercase tracking-widest text-[#1d6b69]">{c.label}</span>
              <span className="mt-1 block text-sm sm:text-[15px] font-semibold text-[#12355A] break-words">{c.value}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  </section>
);

/** Full-width map strip closing the page. */
export const LocationMap: React.FC = () => (
  <section className="relative w-full h-64 sm:h-80">
    <a href={MAP_URL} target="_blank" rel="noopener noreferrer" aria-label="Open DUCO Traders location in Google Maps" className="block w-full h-full">
      <LocatorGraphic />
    </a>
    <a
      href={MAP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-pill bg-white px-4 py-2 text-xs font-semibold text-[#0A3C61] shadow-soft hover:text-[#248482] transition-colors"
    >
      Open in Google Maps
      <FiArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
    </a>
  </section>
);
