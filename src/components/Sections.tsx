import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSeedling, FaIndustry, FaBuilding, FaWater, FaTools, FaLayerGroup, FaWrench } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { SERVICES_CONTENT } from '@/data/content';

/*
 * Extra sections, each used on exactly one page and each with its own layout,
 * so pages don't repeat the same block or the same card grid.
 */

const SectionHeading: React.FC<{ eyebrow?: string; title: string; text?: string; center?: boolean; light?: boolean }> = ({
  eyebrow,
  title,
  text,
  center = true,
  light = false,
}) => (
  <div className={`max-w-2xl mb-6 sm:mb-10 ${center ? 'mx-auto text-center' : ''}`}>
    {eyebrow && (
      <p className={`text-xs font-bold uppercase tracking-widest ${light ? 'text-teal-200' : 'text-[#1d6b69]'}`}>{eyebrow}</p>
    )}
    <h2 className={`text-[22px] sm:text-[34px] font-extrabold leading-tight mt-2 ${light ? 'text-white' : 'text-[#12355A]'}`}>
      {title}
    </h2>
    {text && <p className={`text-sm sm:text-[15px] leading-relaxed mt-4 ${light ? 'text-white/85' : 'text-slate-600'}`}>{text}</p>}
  </div>
);

const TextLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link
    href={href}
    className="inline-flex items-center gap-2 text-sm font-bold text-[#0A3C61] hover:text-[#248482] border-b-2 border-current pb-0.5"
  >
    {children} <FiArrowRight aria-hidden="true" />
  </Link>
);

/* ===================== HOME ===================== */

/** Three salt photos left, summary right. */
export const AboutSnapshot: React.FC = () => (
  <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <ol className="hidden sm:grid grid-cols-3 gap-3 lg:gap-4" aria-label="Industrial salt, from manufacture to bulk supply">
        {[
          { src: '/images/hd/salt-harvest.jpg', alt: 'Workers heaping salt', label: 'Manufacture' },
          { src: '/images/hd/salt-facility.jpg', alt: 'Salt stockpiles and conveyors', label: 'Bulk stock' },
          { src: '/images/hd/bulk-lorry.jpg', alt: 'Loaded lorry', label: 'Bulk supply' },
        ].map((step, i) => (
          <li key={step.label}>
            <div className={`relative overflow-hidden aspect-[3/4] rounded-lg`}>
              <Image src={step.src} alt={step.alt} fill quality={85} sizes="(min-width: 1024px) 16vw, 30vw" className="object-cover" />
            </div>
            <p className="mt-3 text-xs font-bold uppercase tracking-widest text-[#12355A]">
              <span className="text-[#248482] mr-1.5">{String(i + 1).padStart(2, '0')}</span>
              {step.label}
            </p>
          </li>
        ))}
      </ol>
      <div>
        <SectionHeading
          center={false}
          eyebrow="About DUCO Traders"
          title="From wholesale trading to manufacturing"
          text="Our business began with salt wholesaling during the COVID-19 pandemic and expanded into crystal salt manufacturing on leased land in 2022. Today we combine entrepreneurial drive with 15 years of salt-field management expertise."
        />
        <TextLink href="/about">About us</TextLink>
      </div>
    </div>
  </section>
);

const BUYERS = [
  {
    src: '/images/hd/salt-strip.jpg',
    alt: 'Close-up of a large heap of industrial salt',
    title: 'Chemical manufacturers',
    text: 'Bulk crystal salt for recurring industrial requirements.',
  },
  {
    src: '/images/hd/salt-stockpile-conveyor.jpg',
    alt: 'Industrial salt stockpiles and conveyors',
    title: 'Fertiliser manufacturers',
    text: 'Supply agreed around your specifications, volumes and delivery schedules.',
  },
  {
    src: '/images/hd/bulk-lorry.jpg',
    alt: 'Lorry loaded with sacks',
    title: 'Other commercial buyers',
    text: 'Weekly or monthly bulk deliveries planned around your requirements.',
  },
];

/** Heading on the left, summary on the right, then one photo card per type of buyer. */
export const IndustriesServed: React.FC = () => (
  <section className="w-full bg-[#EEF1F5] py-12 sm:py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-16 lg:items-end mb-8 sm:mb-10">
        <h2 className="text-[28px] sm:text-[40px] font-extrabold tracking-tight leading-tight text-[#12355A]">Who we serve</h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          We serve commercial buyers, mainly chemical and fertiliser manufacturers, through long-term supply relationships.
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {BUYERS.map((b) => (
          <li key={b.title} className="grid grid-cols-[112px_1fr] md:grid-cols-1 overflow-hidden rounded-lg bg-white border border-slate-200">
            <div className="relative md:aspect-[3/2]">
              <Image src={b.src} alt={b.alt} fill quality={85} sizes="(min-width: 768px) 32vw, 112px" className="object-cover" />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#12355A] leading-snug">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{b.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

/** Navy copy block beside a full-colour photo running to the screen edge. */
export const CtaBand: React.FC = () => (
  <section className="w-full bg-[#0A3C61] text-white grid grid-cols-1 lg:grid-cols-2">
    <div className="flex lg:justify-end order-2 lg:order-1">
      <div className="w-full lg:max-w-[640px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 lg:pr-16 flex flex-col justify-center">
        <h2 className="text-[32px] sm:text-[52px] font-extrabold tracking-tight leading-[1.05]">Need salt in bulk?</h2>
        <p className="mt-4 text-[15px] sm:text-lg text-white/90 leading-relaxed max-w-md">
          Send us your requirement and we will get back to you with a quote.
        </p>
        <h3 className="mt-7 sm:mt-8 text-sm font-bold text-teal-200">What to include in your enquiry</h3>
        <ul className="mt-2 max-w-md border-t border-white/25">
          {['Your specifications and volumes', 'Your company and industry', 'Your preferred delivery schedule'].map((item) => (
            <li key={item} className="py-3 border-b border-white/25 text-sm sm:text-[15px] font-medium">{item}</li>
          ))}
        </ul>
        <div className="mt-7 sm:mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-[#0A3C61] bg-white hover:bg-teal-50 rounded-pill shadow-md transition-colors"
          >
            Request a bulk quote <FiArrowRight aria-hidden="true" />
          </Link>
          <Link
            href="/services#industrial-salt"
            className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white border-2 border-white/70 hover:bg-white/10 rounded-pill transition-colors"
          >
            View salt supply
          </Link>
        </div>
      </div>
    </div>
    <div className="relative order-1 lg:order-2 min-h-[220px] sm:min-h-[320px] lg:min-h-[420px]">
      <Image src="/images/hd/salt-harvest.jpg" alt="Workers heaping salt" fill quality={85} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[70%_50%]" />
    </div>
  </section>
);

/* ===================== ABOUT ===================== */

/** Salt manufacturing: wide photo with a white panel overlapping its edge. */
export const PrimaryBusiness: React.FC = () => (
  <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 items-center">
      <div className="relative lg:col-start-1 lg:col-span-8 lg:row-start-1 aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-lg">
        <Image src="/images/hd/salt-stockpile-conveyor.jpg" alt="Industrial salt stockpiles and conveyors" fill quality={85} sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
      </div>
      <div className="relative lg:col-start-7 lg:col-span-6 lg:row-start-1 bg-white pt-6 lg:p-12 lg:rounded-lg lg:shadow-xl">
        <p className="text-sm font-bold text-[#1d6b69]">Our core business</p>
        <h2 className="mt-2 text-[24px] sm:text-[34px] font-extrabold leading-tight text-[#12355A]">Industrial salt, made and supplied in bulk</h2>
        <p className="mt-4 text-sm sm:text-[15px] text-slate-600 leading-relaxed">{SERVICES_CONTENT.primaryService.description}</p>
        <h3 className="mt-6 text-sm font-bold text-[#12355A]">Who we serve</h3>
        <ul className="mt-2 divide-y divide-slate-200 border-y border-slate-200">
          {['Chemical manufacturers', 'Fertiliser manufacturers', 'Other commercial buyers'].map((item) => (
            <li key={item} className="py-2.5 text-sm font-medium text-slate-800">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

/** Field services: quieter, services as a two-column list beside a smaller photo. */
export const SecondaryBusiness: React.FC = () => (
  <section className="w-full bg-[#EEF1F5] py-12 sm:py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[7fr_4fr] gap-8 lg:gap-16 items-center">
      <div>
        <p className="text-sm font-bold text-[#1d6b69]">Our salt-field services</p>
        <h2 className="mt-2 text-[22px] sm:text-[30px] font-extrabold leading-tight text-[#12355A]">Salt pan and water flow development</h2>
        <p className="mt-4 text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-2xl">{SERVICES_CONTENT.secondaryService.description}</p>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10 border-t border-slate-300">
          {SERVICES_CONTENT.secondaryService.checklist.map((item) => (
            <li key={item} className="py-3 border-b border-slate-300 text-sm font-medium text-slate-800">{item}</li>
          ))}
        </ul>
      </div>
      <div className="relative aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded-lg">
        <Image src="/images/hd/saltworks-landscape.jpg" alt="Salt fields and salt pans" fill quality={85} sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
      </div>
    </div>
  </section>
);

const TEAM = [
  {
    name: 'Saathappan Palaniyappan',
    role: 'Founder',
    bio: 'Saathappan is an IT hardware engineer with a background in cloud and networking. He began salt wholesaling as a hobby during the COVID-19 pandemic before leaving his role at a US-based company to pursue the business full time. In 2022, he expanded into industrial salt manufacturing on leased land.',
  },
  {
    name: 'Kasiviswanathan',
    role: 'Salt-field management',
    bio: 'Kasiviswanathan brings 15 years of managerial experience in salt fields, including work with producers supplying companies such as Tata Salt. His practical expertise supports field preparation, production planning and daily operations.',
  },
];

/** The people behind the business, as two ruled columns. */
export const TeamSection: React.FC = () => (
  <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading center={false} eyebrow="Our team" title="Technical knowledge and field experience" />
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        {TEAM.map((p) => (
          <li key={p.name} className="border-t-4 border-[#0A3C61] pt-5">
            <h3 className="text-lg sm:text-xl font-bold text-[#12355A]">{p.name}</h3>
            <p className="mt-1 text-sm font-semibold text-[#1d6b69]">{p.role}</p>
            <p className="mt-3 text-sm sm:text-[15px] text-slate-600 leading-relaxed">{p.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const FUND_USE = [
  { share: 40, label: 'Salt-field acquisition & land development' },
  { share: 25, label: 'Borewells & brine infrastructure' },
  { share: 15, label: 'Working capital' },
  { share: 10, label: 'Production & handling equipment' },
  { share: 10, label: 'Storage & dispatch infrastructure' },
];

/** Investment case: copy on the left, use of funds on the right. */
export const InvestSection: React.FC = () => (
  <section id="invest" className="scroll-mt-24 w-full bg-[#EEF1F5] py-12 sm:py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      <div>
        <SectionHeading
          center={false}
          eyebrow="Partner with us"
          title="A proposed ₹3 crore investment for expansion"
          text="We aim to acquire or develop owned salt fields, strengthen production infrastructure and support working capital. We welcome investors who share our vision of building a scalable enterprise through long-term supply relationships."
        />
        <TextLink href="/contact">Speak with us</TextLink>
      </div>
      <div>
        <h3 className="text-sm font-bold text-[#12355A]">Proposed use of funds</h3>
        <ul className="mt-3 space-y-4">
          {FUND_USE.map((f) => (
            <li key={f.label}>
              <div className="flex items-baseline justify-between gap-4 text-sm">
                <span className="font-medium text-slate-800">{f.label}</span>
                <span className="font-bold text-[#12355A] tabular-nums">{f.share}%</span>
              </div>
              <div className="mt-1.5 h-2 rounded-full bg-white">
                <div className="h-full rounded-full bg-[#0A3C61]" style={{ width: `${f.share}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const AT_A_GLANCE = [
  { name: 'Industrial salt', who: 'Chemical and fertiliser manufacturers and other commercial buyers', model: 'Bulk sales', href: '/services#industrial-salt' },
  { name: 'Salt pan development', who: 'Salt-field owners creating or modifying salt pans', model: 'Service commission', href: '/services#field-services' },
  { name: 'Water flow development', who: 'Salt-field owners improving access to higher-salinity water', model: 'Service commission', href: '/services#field-services' },
];

/** Closing summary: each row compares an offering and links to its services. */
export const AboutCta: React.FC = () => (
  <section className="w-full bg-[#0A3C61] py-12 sm:py-16 lg:py-20 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-[22px] sm:text-[34px] font-extrabold leading-tight">See what we offer</h2>
      <ul className="mt-6 sm:mt-8 border-t border-white/30">
        {AT_A_GLANCE.map((b) => (
          <li key={b.name} className="border-b border-white/30">
            <Link href={b.href} className="group grid grid-cols-1 md:grid-cols-[3fr_5fr_2fr_auto] gap-1 md:gap-8 md:items-center py-5 sm:py-6 hover:bg-white/5 transition-colors">
              <span className="text-lg sm:text-xl font-bold">{b.name}</span>
              <span className="text-sm text-white/85 leading-relaxed">{b.who}</span>
              <span className="text-sm font-semibold text-teal-200">{b.model}</span>
              <FiArrowRight className="hidden md:block w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

/* ===================== SERVICES ===================== */

const SALT_BUYERS = [
  { icon: <FaIndustry />, title: 'Chemical manufacturers', text: 'Bulk crystal salt for recurring industrial requirements.' },
  { icon: <FaSeedling />, title: 'Fertiliser manufacturers', text: 'Supply contracts with agreed specifications, volumes and delivery schedules.' },
  { icon: <FaBuilding />, title: 'Other commercial buyers', text: 'Samples and trial orders, leading to recurring supply.' },
];

/** Navy band listing the salt customers. */
export const SaltBuyers: React.FC = () => (
  <section className="relative w-full overflow-hidden bg-[#0A3C61] py-12 sm:py-16 lg:py-20">
    <Image src="/images/hd/salt-harvest.jpg" alt="" fill sizes="100vw" className="object-cover opacity-15" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading light eyebrow="Industrial salt" title="Who we serve in bulk" />
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-white/20 text-white">
        {SALT_BUYERS.map((b) => (
          <li key={b.title} className="text-center md:px-6">
            <span className="inline-block text-3xl sm:text-4xl text-teal-200" aria-hidden="true">{b.icon}</span>
            <h3 className="mt-3 font-bold text-base sm:text-lg">{b.title}</h3>
            <p className="mt-2 text-sm text-white/85 leading-relaxed">{b.text}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const FIELD_OFFERINGS = [
  { icon: <FaLayerGroup />, title: 'Salt pan creation' },
  { icon: <FaTools />, title: 'Salt pan modification' },
  { icon: <FaWater />, title: 'Water flow development' },
  { icon: <FaWrench />, title: 'Borewell development' },
];

/** Four field services as an icon row. */
export const FieldOfferings: React.FC = () => (
  <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Salt-field development" title="What our field services cover" />
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {FIELD_OFFERINGS.map((o) => (
          <li key={o.title} className="flex flex-col items-center text-center gap-3 rounded-lg bg-[#EEF1F5] p-5">
            <span className="text-3xl text-[#248482]" aria-hidden="true">{o.icon}</span>
            <h3 className="text-sm font-semibold text-[#12355A] leading-snug">{o.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

/** Closing band for the Services page. */
export const ServicesCta: React.FC = () => (
  <section className="w-full bg-[#0A3C61] py-12 sm:py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-white">
      <h2 className="text-[22px] sm:text-[34px] font-extrabold leading-tight max-w-2xl">Tell us what you need</h2>
      <Link
        href="/contact"
        className="self-start md:self-auto inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-[#0A3C61] bg-white hover:bg-teal-50 rounded-pill shadow-md transition-all"
      >
        Contact us <FiArrowRight aria-hidden="true" />
      </Link>
    </div>
  </section>
);

const APPROACH = [
  { who: 'Higher-salinity brine preparation', how: 'We blend higher-salinity borewell water with seawater to increase brine concentration, aiming to shorten the evaporation stage before salt crystallisation.', model: 'PRODUCTION' },
  { who: 'Direct industrial supply', how: 'We manufacture crystal salt for industrial applications and seek recurring supply agreements, with deliveries planned around buyer requirements.', model: 'SUPPLY' },
  { who: 'Salt-field development & expansion', how: 'We offer salt pan creation, modification and borewell development. Our expansion plan includes acquiring or developing owned salt fields to increase capacity.', model: 'GROWTH' },
];

/** Our production approach, as large numbered columns. */
export const ProductionApproach: React.FC = () => (
  <section className="w-full bg-[#EEF1F5] py-12 sm:py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading center={false} eyebrow="Our approach" title="Efficient production, direct supply and scalable capacity" />
      <ol className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-slate-200 border-t border-slate-200">
        {APPROACH.map((c, i) => (
          <li key={c.who} className="py-5 sm:py-8 md:px-8 first:md:pl-0">
            <div className="flex items-baseline justify-between">
              <span className="text-5xl sm:text-6xl font-extrabold text-[#248482]/25 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-xs font-bold tracking-widest text-[#1d6b69]">{c.model}</span>
            </div>
            <h3 className="mt-2 text-lg sm:text-xl font-bold text-[#12355A]">{c.who}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.how}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const FAQS = [
  {
    q: 'What do you manufacture?',
    a: 'We manufacture crystal salt for industrial applications and supply it in bulk.',
  },
  {
    q: 'Who do you serve?',
    a: 'Commercial buyers, mainly chemical and fertiliser manufacturers, and salt-field owners who need development services.',
  },
  {
    q: 'How do you start working with a new buyer?',
    a: 'We provide samples and quotations and take trial orders, then agree on specifications, volumes and weekly or monthly delivery schedules for recurring supply.',
  },
  {
    q: 'Is salt available all year?',
    a: 'Our production plan covers a six-month season, so we plan production, storage and delivery carefully to serve commercial buyers.',
  },
  {
    q: 'What salt-field services do you provide?',
    a: 'Salt pan creation and modification, water flow development and borewell development. We limit these projects and schedule them around our own production.',
  },
];

/** Heading left, expandable questions right. */
export const FaqSection: React.FC = () => (
  <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-5 sm:gap-8 lg:gap-16">
      <div>
        <h2 className="text-[26px] sm:text-[40px] font-extrabold leading-tight text-[#12355A]">Questions we get asked</h2>
        <p className="text-slate-600 mt-4">
          Something else?{' '}
          <Link href="/contact" className="font-semibold text-[#0A3C61] underline">
            Ask us directly
          </Link>
          .
        </p>
      </div>
      <div className="divide-y divide-slate-300 border-y border-slate-300">
        {FAQS.map((f) => (
          <details key={f.q} className="group py-3.5 sm:py-5">
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-sm sm:text-base font-semibold text-[#12355A]">
              {f.q}
              <span className="text-2xl leading-none text-[#248482] transition-transform group-open:rotate-45" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="text-sm text-slate-600 leading-relaxed mt-3 pr-8">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
