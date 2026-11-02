import React from 'react';
import Link from 'next/link';

export const ConsentCheckbox: React.FC<{ id: string; checked: boolean; onChange: (v: boolean) => void }> = ({
  id,
  checked,
  onChange,
}) => (
  <div className="flex items-start gap-2.5">
    <input
      id={id}
      type="checkbox"
      required
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="mt-0.5 w-4 h-4 accent-[#0A3C61] shrink-0"
    />
    <label htmlFor={id} className="text-xs text-slate-600 leading-relaxed">
      I agree that DUCO Traders may use these details to respond to my enquiry, as described in the{' '}
      <Link href="/privacy" target="_blank" className="underline text-[#0A3C61]">
        Privacy Policy
      </Link>
      .
    </label>
  </div>
);
