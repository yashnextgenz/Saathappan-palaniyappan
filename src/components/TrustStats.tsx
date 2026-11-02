import React from 'react';
import { FaAward, FaHandshake, FaShieldAlt } from 'react-icons/fa';
import { HOME_CONTENT } from '@/data/content';

const ICONS: Record<string, React.ReactNode> = {
  medal: <FaAward className="w-9 h-9" />,
  handshake: <FaHandshake className="w-9 h-9" />,
  shield: <FaShieldAlt className="w-9 h-9" />,
};

export const TrustStats: React.FC = () => {
  return (
    <section className="w-full bg-white py-3 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 divide-x divide-slate-300">
          {HOME_CONTENT.trustStats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center gap-1 sm:gap-2 py-1 px-1.5 sm:px-4">
              <div className="text-[#0A3C61] scale-75 sm:scale-100">{ICONS[stat.icon]}</div>
              <div className="text-base sm:text-xl font-bold text-[#12355A] leading-tight">{stat.badge}</div>
              <div className="text-[11px] sm:text-sm text-slate-700 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
