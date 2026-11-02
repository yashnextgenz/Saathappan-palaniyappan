import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { HOME_CONTENT } from '@/data/content';


const IMAGES: Record<string, { src: string; alt: string }> = {
  'industrial-salt': { src: '/images/hd/salt-stockpile-conveyor.jpg', alt: 'Industrial salt stockpiles and conveyors at a saltworks' },
  'field-services': { src: '/images/hd/saltworks-landscape.jpg', alt: 'Salt fields and salt pans' },
};

/** The two offerings as full-bleed photo panels, edge to edge, primary first. */
export const FeaturedCards: React.FC = () => {
  return (
    <section className="w-full bg-[#0A3C61]">
      <h2 className="sr-only">Our products and services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
        {HOME_CONTENT.services.map((card) => (
          <Link key={card.id} href={card.link} className="group relative block overflow-hidden min-h-[40svh] md:min-h-0">
            <Image
              src={IMAGES[card.id].src}
              alt={IMAGES[card.id].alt}
              fill
              quality={85}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06243d]/90 via-[#06243d]/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 text-white">
              <div className="flex items-end justify-between gap-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight max-w-[80%]">{card.title}</h3>
                <span className="inline-flex items-center gap-2 text-sm font-bold border-b-2 border-white/80 pb-0.5 shrink-0 transition-colors duration-300 group-hover:border-teal-300 group-hover:text-teal-200">
                  Explore <FiArrowRight aria-hidden="true" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
