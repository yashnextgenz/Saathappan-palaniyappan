import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  FiPhone,
  FiMail,
  FiHeadphones,
  FiArrowRight,
  FiLayers,
  FiTrendingUp,
  FiMessageSquare,
  FiFileText,
  FiTruck,
  FiCheckCircle,
} from 'react-icons/fi';
import { ContactForm } from '@/components/ContactForm';
import { COMPANY_INFO, CONTACT_CONTENT } from '@/data/content';
import { Screen } from '@/components/Screen';

export const metadata: Metadata = {
  title: 'Contact Us | DUCO Traders',
  description:
    'Contact DUCO Traders for bulk industrial salt supply, salt-field development or investment enquiries.',
};

const QUICK_CONSOLE = [
  {
    num: '01',
    title: 'Direct Telephone',
    value: COMPANY_INFO.phone,
    sub: 'Bulk supply & field enquiries',
    icon: FiPhone,
    href: `tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`,
    action: 'Call Directly',
  },
  {
    num: '02',
    title: 'Official Email',
    value: COMPANY_INFO.email,
    sub: 'Commercial quotes & specs',
    icon: FiMail,
    href: `mailto:${COMPANY_INFO.email}`,
    action: 'Send an Email',
  },
  {
    num: '03',
    title: 'Core Operations',
    value: 'Industrial Salt & Fields',
    sub: 'Since 2022 · 15 yrs field expertise',
    icon: FiLayers,
    href: '#enquiry',
    action: 'Request a Quote',
  },
];

const DELIVERY_STEPS = [
  {
    num: '01',
    title: 'Requirement Intake',
    text: 'Share your crystal salt volume, specifications, preferred schedule, or salt-field development scope.',
    icon: FiMessageSquare,
  },
  {
    num: '02',
    title: 'Direct Consultation',
    text: 'Our team contacts you directly by phone or email to review quantities, grades, and field requirements.',
    icon: FiPhone,
  },
  {
    num: '03',
    title: 'Samples & Quotation',
    text: 'Receive a clear commercial quotation, with samples and trial orders arranged for commercial buyers.',
    icon: FiFileText,
  },
  {
    num: '04',
    title: 'Scheduled Delivery',
    text: 'Recurring weekly or monthly bulk salt supply, or field development scheduled around seasonal production.',
    icon: FiTruck,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* 1. Hero — salt-field photo behind crisp white gradient and architectural grid */}
      <Screen>
        <section className="relative isolate overflow-hidden bg-white">
          <Image
            src="/images/hd/saltworks-landscape.jpg"
            alt="Salt fields and salt pans"
            fill
            quality={85}
            sizes="100vw"
            className="-z-20 object-cover object-[60%_50%] sm:object-[70%_50%]"
            priority
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/85 to-white/30 sm:bg-gradient-to-r sm:from-white sm:via-white/80 sm:to-transparent" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-25 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:36px_36px]"
          />
          <p
            aria-hidden="true"
            className="pointer-events-none select-none absolute bottom-2 right-4 sm:bottom-4 sm:right-8 -z-10 text-4xl sm:text-6xl font-black uppercase tracking-[0.2em] text-[#0A3C61]/[0.06]"
          >
            DUCO DESK
          </p>

          <div className="mx-auto flex min-h-[320px] max-w-7xl items-start px-5 pb-24 pt-10 sm:min-h-[400px] sm:items-center sm:px-8 sm:pb-16 sm:pt-8 lg:min-h-[430px]">
            <div className="w-full sm:w-3/5 lg:w-1/2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white/95 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#12355A] shadow-sm backdrop-blur">
                <FiHeadphones className="w-3.5 h-3.5 text-[#248482]" aria-hidden="true" /> Enquiries &bull; DUCO Traders
              </span>
              <h1 className="mt-4 text-[clamp(1.9rem,6vw,2.85rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.025em] text-[#12355A] sm:text-5xl lg:text-[3.25rem]">
                Direct Commercial
                <br />
                <span className="text-[#248482]">Consultation</span>
              </h1>
              <p className="mt-3.5 max-w-md text-sm font-medium leading-relaxed text-slate-700 sm:mt-4 sm:text-base">
                {CONTACT_CONTENT.subtitle}
              </p>
            </div>
          </div>
        </section>
      </Screen>

      {/* 2. Precision Contact Console — 3 columns */}
      <section className="relative z-10 -mt-12 px-4 sm:-mt-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl sm:grid-cols-3 sm:divide-x sm:divide-slate-200">
          {QUICK_CONSOLE.map(({ num, title, value, sub, icon: Icon, href, action }) => (
            <a
              key={title}
              href={href}
              className="group flex flex-col justify-between border-b border-slate-100 p-5 transition-colors hover:bg-slate-50/80 sm:border-b-0 sm:p-6"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-[#0A3C61] transition-colors group-hover:border-[#248482]/40 group-hover:bg-[#248482]/10 group-hover:text-[#248482]">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold text-slate-300">{num}</span>
                </div>
                <p className="mt-3.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                  {title}
                </p>
                <p className="mt-1 text-base font-extrabold tracking-tight text-[#12355A] sm:text-lg break-words">
                  {value}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#248482]">
                <span>{action}</span>
                <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 3. Details + Enquiry Form */}
      <Screen>
        <section className="relative overflow-hidden bg-[#F8FAFC] pb-12 pt-10 sm:pb-16 sm:pt-14">
          <p
            aria-hidden="true"
            className="pointer-events-none select-none absolute -top-2 right-4 sm:top-2 sm:right-8 text-4xl sm:text-6xl font-black uppercase tracking-[0.2em] text-[#0A3C61]/[0.04]"
          >
            ENQUIRY DESK
          </p>
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:gap-8 sm:px-8 lg:grid-cols-12">
            {/* Left: Contact Info Console */}
            <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8 lg:col-span-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#248482]">
                  <span>DUCO Traders</span>
                  <span aria-hidden="true">&bull;</span>
                  <span>How We Can Help</span>
                </div>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#12355A] sm:text-3xl">
                  Commercial Desk
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Reach our team directly for bulk industrial salt supply, salt-field development, or expansion enquiries.
                </p>

                <div className="mt-6 space-y-5 border-t border-slate-100 pt-6">
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-[#0A3C61]">
                      <FiPhone className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Phone Hotline
                      </p>
                      <a
                        href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                        className="text-base font-extrabold text-[#12355A] hover:text-[#248482] transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                      <p className="text-xs text-slate-500">Direct commercial &amp; project calls</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-[#0A3C61]">
                      <FiMail className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Email Address
                      </p>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-sm font-extrabold text-[#12355A] hover:text-[#248482] transition-colors break-all"
                      >
                        {COMPANY_INFO.email}
                      </a>
                      <p className="text-xs text-slate-500">Quotations, trial orders &amp; specifications</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-[#0A3C61]">
                      <FiCheckCircle className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Industrial Salt &amp; Field Services
                      </p>
                      <p className="text-sm font-bold text-[#12355A]">Bulk Supply &amp; Salt-Field Development</p>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Crystal salt for chemical &amp; fertiliser manufacturers, plus salt pan &amp; water flow development.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-[#0A3C61]">
                      <FiTrendingUp className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Growth &amp; Expansion
                      </p>
                      <p className="text-sm font-bold text-[#12355A]">Investment Enquiries</p>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Speak with us about our proposed &#8377;3 crore expansion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-6">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0A3C61] py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-[#002B4D] hover:shadow-lg active:scale-[0.99]"
                >
                  <FiPhone className="w-4 h-4" aria-hidden="true" /> Call Direct Desk Now
                </a>
              </div>
            </div>

            {/* Right: Enquiry Form Card */}
            <div
              id="enquiry"
              className="scroll-mt-24 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#248482]">
                <span>Rapid Estimation</span>
                <span aria-hidden="true">&bull;</span>
                <span>Direct Inquiry Desk</span>
              </div>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#12355A] sm:text-3xl">
                {CONTACT_CONTENT.formTitle}
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Provide your details and requirements for a prompt commercial quotation
              </p>

              <ContactForm />
            </div>
          </div>
        </section>
      </Screen>

      {/* 4. Structured Fulfillment Workflow — 4 phases */}
      <Screen>
        <section className="relative overflow-hidden bg-white py-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-20 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px]"
          />
          <p
            aria-hidden="true"
            className="pointer-events-none select-none absolute -top-2 right-4 sm:top-2 sm:right-8 -z-10 text-4xl sm:text-6xl font-black uppercase tracking-[0.2em] text-[#0A3C61]/[0.04]"
          >
            SUPPLY FLOW
          </p>
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#12355A] sm:px-3.5">
                  <FiTruck className="w-3.5 h-3.5 text-[#248482]" aria-hidden="true" /> Smooth Delivery Path
                </span>
                <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-[#12355A] sm:text-3xl lg:text-4xl">
                  How We Deliver for You
                </h2>
                <p className="mt-1 text-sm text-slate-600 sm:text-base">
                  From initial requirement to scheduled bulk supply or salt-field execution
                </p>
              </div>
              <div className="hidden text-xs font-semibold tracking-wider text-slate-400 sm:block">
                [ 4-PHASE FULFILLMENT ]
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
              {DELIVERY_STEPS.map(({ num, title, text, icon: Icon }) => (
                <div
                  key={title}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#248482]/40 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs font-bold text-[#248482]">PHASE {num}</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-[#0A3C61] transition-colors group-hover:bg-[#248482]/10 group-hover:text-[#248482]">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-[#12355A]">{title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Screen>
    </>
  );
}
