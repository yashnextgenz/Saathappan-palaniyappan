import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="w-full bg-white py-24 text-center">
      <div className="max-w-xl mx-auto px-4">
        <p className="text-sm font-bold uppercase tracking-widest text-[#248482]">Error 404</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12355A] mt-2">Page Not Found</h1>
        <p className="text-slate-600 mt-4">The page you are looking for does not exist or has moved.</p>
        <Link
          href="/"
          className="inline-flex mt-8 px-6 py-3 text-sm font-semibold text-white bg-[#0A3C61] hover:bg-[#002B4D] rounded-pill shadow-md"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
