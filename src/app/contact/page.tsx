import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ContactForm } from '@/components/ContactForm';
import { ContactCards, LocationMap } from '@/components/MapAndContactInfo';
import { CONTACT_CONTENT } from '@/data/content';
import { Screen } from '@/components/Screen';

export const metadata: Metadata = {
  title: 'Contact Us | DUCO Traders',
  description:
    'Contact DUCO Traders for bulk industrial salt supply or apartment and property management.',
};

export default function ContactPage() {
  return (
    <div className="w-full bg-white">
      {/* Intro with apartment-complex photo fading in from the right */}
      <Screen>
      <section className="relative overflow-hidden bg-[#0A3C61]">
        <div className="absolute inset-0">
          <Image src="/images/hd/residential-society.jpg" alt="Gated residential apartment complex with landscaped grounds" fill quality={85} sizes="100vw" className="object-cover object-center" priority />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#06243d]/95 via-[#06243d]/70 to-[#06243d]/20" />
          <div className="absolute inset-0 bg-[#06243d]/80 md:hidden" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="max-w-xl space-y-4">
            <h1 className="text-[32px] sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Get in Touch
              <br />
              with DUCO Traders
            </h1>
            <p className="text-[15px] text-white/90 leading-relaxed">{CONTACT_CONTENT.subtitle}</p>
          </div>
        </div>
      </section>
      </Screen>

      <Screen><ContactCards /></Screen>

      <Screen>
      <section className="w-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#1d6b69]">How we can help</p>
            <h2 className="text-[22px] sm:text-[34px] font-extrabold leading-tight mt-2 text-[#12355A]">Tell us what you need</h2>
            <dl className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              <div className="py-4">
                <dt className="font-bold text-[#12355A]">Industrial salt</dt>
                <dd className="text-sm text-slate-600 leading-relaxed mt-1">Bulk supply for chemical fertilizer companies and other businesses.</dd>
              </div>
              <div className="py-4">
                <dt className="font-bold text-[#12355A]">Apartment &amp; property management</dt>
                <dd className="text-sm text-slate-600 leading-relaxed mt-1">Management and maintenance for apartment complexes and residential societies.</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 sm:p-8 shadow-soft">
            <ContactForm />
          </div>
        </div>
      </section>
      </Screen>

      <Screen><LocationMap /></Screen>

    </div>
  );
}
