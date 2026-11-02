import React from 'react';

export const LegalPage: React.FC<{ title: string; updated: string; children: React.ReactNode }> = ({
  title,
  updated,
  children,
}) => (
  <section className="w-full bg-white py-14 sm:py-20">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12355A]">{title}</h1>
      <span className="block w-12 h-1 bg-[#0A3C61] rounded-full mt-3 mb-4" />
      <p className="text-xs text-slate-500 mb-8">Last updated: {updated}</p>
      <div className="space-y-6 text-sm text-slate-700 leading-relaxed [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-[#12355A] [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_a]:underline [&_a]:text-[#0A3C61]">
        {children}
      </div>
    </div>
  </section>
);
