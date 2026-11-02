import React from 'react';
import Image from 'next/image';
import { ABOUT_CONTENT } from '@/data/content';

/** Highlights the "property management" phrase in blue, as in the approved layout. */
const highlight = (text: string) => {
  const match = text.match(/(property management)/i);
  if (!match || match.index === undefined) return text;
  return (
    <>
      {text.slice(0, match.index)}
      <span className="text-teal-200 font-semibold">{match[0]}</span>
      {text.slice(match.index + match[0].length)}
    </>
  );
};

/* Intro with salt-crystal photo fading in from the right */
export const AboutIntro: React.FC = () => (
      <section className="relative overflow-hidden bg-[#0A3C61]">
        <div className="absolute inset-0">
          <Image src="/images/hd/salt-facility.jpg" alt="Salt stockpiles and conveyors" fill quality={88} sizes="100vw" className="object-cover object-center" priority />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#06243d]/95 via-[#06243d]/80 to-[#06243d]/30" />
          <div className="absolute inset-0 bg-[#06243d]/85 md:hidden" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="max-w-2xl space-y-3 sm:space-y-5">
            <h1 className="text-[32px] sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              About
              <br />
              DUCO Traders
            </h1>
            <p className="text-lg font-bold text-teal-200">{ABOUT_CONTENT.subtitle}</p>
            <p className="text-[15px] text-white/90 leading-relaxed">{ABOUT_CONTENT.paragraph1}</p>
            <p className="text-[15px] text-white/90 leading-relaxed">{highlight(ABOUT_CONTENT.paragraph2)}</p>
          </div>
        </div>
      </section>
);
