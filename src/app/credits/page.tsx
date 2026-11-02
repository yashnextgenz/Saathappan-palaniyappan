import React from 'react';
import type { Metadata } from 'next';
import { PHOTO_CREDITS } from '@/data/photoCredits';

export const metadata: Metadata = {
  title: 'Photo Credits | DUCO Traders',
  description: 'Attribution for photographs used on the DUCO Traders website.',
};

export default function CreditsPage() {
  return (
    <section className="w-full bg-white py-14 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12355A]">Photo Credits</h1>
        <span className="block w-12 h-1 bg-[#0A3C61] rounded-full mt-3 mb-6" />
        <p className="text-sm text-slate-600 mb-8">
          Photographs are from Wikimedia Commons and have been cropped and resized for this site.
        </p>
        <ul className="divide-y divide-slate-200 border-y border-slate-200">
          {PHOTO_CREDITS.map((c) => (
            <li key={c.source} className="py-4 text-sm">
              <a href={c.source} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#12355A] hover:text-[#248482]">
                {c.title}
              </a>
              <p className="text-slate-600 mt-0.5">
                by {c.author} &middot;{' '}
                {c.licenseUrl ? (
                  <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#248482]">
                    {c.license}
                  </a>
                ) : (
                  c.license
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
