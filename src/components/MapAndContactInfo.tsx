import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { COMPANY_INFO } from '@/data/content';

const CONTACTS = [
  { icon: <FaPhoneAlt />, label: 'Call us', value: COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}` },
  { icon: <FaEnvelope />, label: 'Email us', value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
];

/** Phone and email as a row of two cards. */
export const ContactCards: React.FC = () => (
  <section className="w-full bg-[#EEF1F5] py-12 sm:py-16">
    <ul className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
