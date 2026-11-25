'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { NAV_LINKS } from '@/data/content';
import { QuoteModal } from './QuoteModal';
import { SearchModal } from './SearchModal';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <>
      <nav aria-label="Main" className="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-sm transition-all backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Left: Brand Logo */}
            <div className="flex items-center">
              <Link href="/" aria-label="DUCO Traders home">
                <Image src="/L1.jpeg" alt="DUCO Traders" width={1536} height={1024} priority className="h-14 sm:h-16 w-auto" />
              </Link>
            </div>

            {/* Center: Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative px-3 lg:px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[#1E6FB8]'
                        : 'text-slate-800 hover:text-[#1E6FB8]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right: Search + Action Button */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2.5 rounded-full text-slate-600 hover:text-[#0A2540] hover:bg-slate-100 transition-colors"
                aria-label="Search"
                title="Search"
              >
                <FiSearch className="w-5 h-5" />
              </button>

              <button
                onClick={() => setQuoteModalOpen(true)}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-[#0A3C61] hover:bg-[#002B4D] rounded-pill shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu & Search Trigger */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2 text-slate-600 hover:text-slate-900 rounded-lg"
                aria-label="Search"
              >
                <FiSearch className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#0A2540] rounded-lg"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 text-base font-semibold rounded-lg ${
                    isActive
                      ? 'text-[#0A2540] bg-slate-100'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setQuoteModalOpen(true);
                }}
                className="w-full py-3 text-center text-sm font-bold text-white bg-[#0A3C61] rounded-pill shadow-md"
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Global Modals */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
    </>
  );
};
