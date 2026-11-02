import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HOME_CONTENT } from '@/data/content';
import { TrustStats } from './TrustStats';


/** Approved layout: copy on the left over white, salt-pan photo on the right, trust stats underneath. */
export const HomeHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white flex flex-col min-h-[calc(100svh-72px)]">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
        <Image src="/images/hd/salt-pans-worker.jpg" alt="Salt worker raking salt" fill quality={88} sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover object-[40%_55%]" priority />
        {/* Desktop: solid white under the copy, fading out before the worker */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-white from-0% via-white/70 via-20% to-transparent to-50%" />
        {/* Phone / tablet: copy covers the photo, so wash it out evenly */}
        <div className="absolute inset-0 lg:hidden bg-white/90" />
      </div>

      <div className="relative w-full flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 md:py-16">
        <div className="max-w-[480px] space-y-4 sm:space-y-5">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#1d6b69]">{HOME_CONTENT.eyebrow}</p>

          <h1 className="text-[30px] sm:text-[46px] font-extrabold tracking-tight leading-[1.08] text-[#12355A]">
            {HOME_CONTENT.headline}
          </h1>

          <p className="text-[15px] sm:text-[17px] text-slate-700 leading-relaxed">{HOME_CONTENT.subheading}</p>

          <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0A3C61] hover:bg-[#002B4D] rounded-pill shadow-md transition-colors group"
            >
              {HOME_CONTENT.primaryCta}
              <span className="inline-block group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
            <Link
              href="/services#property-mgmt"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#0A3C61] bg-white border-2 border-[#0A3C61] hover:bg-[#0A3C61] hover:text-white rounded-pill transition-colors"
            >
              {HOME_CONTENT.secondaryCta}
            </Link>
          </div>
        </div>
      </div>

      <div className="relative">
        <TrustStats />
      </div>
    </section>
  );
};
