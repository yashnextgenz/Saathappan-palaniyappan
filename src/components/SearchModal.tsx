'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiX, FiArrowRight } from 'react-icons/fi';
import { useDialog } from './useDialog';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SEARCHABLE_ITEMS = [
  {
    title: 'Industrial Salt Supply',
    category: 'Services',
    url: '/services#industrial-salt',
    snippet: 'Industrial salt manufactured and supplied in bulk to chemical fertilizer companies and other businesses.',
  },
  {
    title: 'Apartment & Property Management',
    category: 'Services',
    url: '/services#property-mgmt',
    snippet: 'Plumbing, furniture services, maintenance and facility management for apartment complexes and societies.',
  },
  {
    title: 'Frequently Asked Questions',
    category: 'Services',
    url: '/services',
    snippet: 'Our salt supply, customers and property services.',
  },
  {
    title: 'About DUCO Traders',
    category: 'Company',
    url: '/about',
    snippet: 'Our two businesses.',
  },
  {
    title: 'Contact Us & Location',
    category: 'Contact',
    url: '/contact',
    snippet: 'Send an enquiry or find our office.',
  },
]

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  useDialog(isOpen, onClose);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? SEARCHABLE_ITEMS.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.snippet.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : SEARCHABLE_ITEMS;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div role="dialog" aria-modal="true" aria-label="Search the site" className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 gap-3">
          <FiSearch className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="search"
            autoFocus
            aria-label="Search the site"
            placeholder="Search the site..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base bg-transparent border-none outline-none text-slate-800 placeholder-slate-400"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-3 max-h-96 overflow-y-auto space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-500">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                onClick={onClose}
                className="group flex items-start justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800">
                      {item.category}
                    </span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-[#0A2540]">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                    {item.snippet}
                  </p>
                </div>
                <FiArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0A2540] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
