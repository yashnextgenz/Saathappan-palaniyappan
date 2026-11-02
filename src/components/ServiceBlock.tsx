'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { QuoteModal } from './QuoteModal';

interface ServiceBlockProps {
  id?: string;
  pill: string;
  title: string;
  description: string;
  checklist: string[];
  cta: string;
  accent: string;
  mainImage: { src: string; alt: string };
  /** Captioned photos along the bottom. */
  thumbs: { src: string; alt: string; label: string }[];
  defaultService: string;
}

export const ServiceBlock: React.FC<ServiceBlockProps> = ({
  id,
  pill,
  title,
  description,
  checklist,
  cta,
  accent,
  mainImage,
  thumbs,
  defaultService,
}) => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  // pill is "01 OUR PRIMARY BUSINESS": number badge + eyebrow label
  const [num, ...rest] = pill.split(' ');

  return (
    <>
      <article id={id} className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded text-white text-sm font-bold" style={{ backgroundColor: accent }}>
              {num}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: accent }}>
              {rest.join(' ')}
            </span>
          </div>
          <h2 className="text-[22px] sm:text-[34px] font-extrabold text-[#12355A] leading-tight">{title}</h2>
          <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">{description}</p>

          <ul className="space-y-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-800">
                <FaCheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: accent }} />
                {item}
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => setQuoteOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0A3C61] hover:bg-[#002B4D] rounded-pill shadow-md transition-all active:scale-95"
            >
              {cta}
              <FiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <Image src={mainImage.src} alt={mainImage.alt} fill quality={85} sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <ul className="grid grid-cols-3 gap-3">
            {thumbs.map((t) => (
              <li key={t.src}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image src={t.src} alt={t.alt} fill quality={85} sizes="(min-width: 1024px) 15vw, 33vw" className="object-cover" />
                </div>
                <p className="mt-2 text-[11px] sm:text-xs font-semibold text-[#12355A] leading-tight">{t.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} defaultService={defaultService} />
    </>
  );
};
