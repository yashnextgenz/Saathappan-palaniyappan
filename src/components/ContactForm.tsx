'use client';

import React, { useState } from 'react';
import {
  FiUser,
  FiBriefcase,
  FiPhone,
  FiMail,
  FiLayers,
  FiMessageSquare,
  FiCheckCircle,
} from 'react-icons/fi';
import { CONTACT_CONTENT, COMPANY_INFO } from '@/data/content';
import { ConsentCheckbox } from './ConsentCheckbox';
import { sendEnquiry } from './enquiry';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [error, setError] = useState('');
  const [website, setWebsite] = useState('');
  const [consent, setConsent] = useState(false);
  const formId = React.useId();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      await sendEnquiry({ kind: 'contact', ...formData, website });
      setStatus('success');
    } catch (err) {
      setError((err as Error).message);
      setStatus('idle');
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold text-[#12355A] mb-5">
        {CONTACT_CONTENT.formTitle}
      </h3>

      {status === 'success' ? (
        <div className="py-12 text-center space-y-4" role="status">
          <FiCheckCircle className="w-16 h-16 text-emerald-500 mx-auto" aria-hidden="true" />
          <h4 className="text-2xl font-bold text-slate-800">Enquiry Sent</h4>
          <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
            Thank you, <span className="font-semibold">{formData.name}</span>. We have received your enquiry and will contact you at <span className="font-semibold">{formData.email}</span> or by phone.
          </p>
          <button
            onClick={() => {
              setFormData({
                name: '',
                company: '',
                phone: '',
                email: '',
                service: '',
                message: '',
              });
              setConsent(false);
              setError('');
              setStatus('idle');
            }}
            className="mt-4 px-6 py-2.5 text-xs font-bold text-white bg-[#0A3C61] rounded-pill shadow"
          >
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* Honeypot: hidden from visitors, filled in by bots */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />

          {/* Your Name */}
          <div className="relative">
            <FiUser className="absolute left-1 top-3.5 text-slate-400 w-4 h-4" aria-hidden="true" />
            <input
              type="text"
              required
              placeholder="Your Name"
              aria-label="Your Name"
              autoComplete="name"
              maxLength={100}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-8 pr-2 py-2.5 sm:py-3 text-sm bg-transparent border-0 border-b-2 border-slate-300 focus:outline-none focus:border-[#0A3C61] placeholder-slate-400"
            />
          </div>

          {/* Company Name */}
          <div className="relative">
            <FiBriefcase className="absolute left-1 top-3.5 text-slate-400 w-4 h-4" aria-hidden="true" />
            <input
              type="text"
              placeholder="Company Name"
              aria-label="Company Name"
              autoComplete="organization"
              maxLength={120}
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full pl-8 pr-2 py-2.5 sm:py-3 text-sm bg-transparent border-0 border-b-2 border-slate-300 focus:outline-none focus:border-[#0A3C61] placeholder-slate-400"
            />
          </div>

          {/* Phone Number */}
          <div className="relative">
            <FiPhone className="absolute left-1 top-3.5 text-slate-400 w-4 h-4" aria-hidden="true" />
            <input
              type="tel"
              required
              placeholder="Phone Number"
              aria-label="Phone Number"
              autoComplete="tel"
              inputMode="tel"
              pattern="[+0-9 ()\-]{7,20}"
              title="Enter a valid phone number, e.g. +91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-8 pr-2 py-2.5 sm:py-3 text-sm bg-transparent border-0 border-b-2 border-slate-300 focus:outline-none focus:border-[#0A3C61] placeholder-slate-400"
            />
          </div>

          {/* Email Address */}
          <div className="relative">
            <FiMail className="absolute left-1 top-3.5 text-slate-400 w-4 h-4" aria-hidden="true" />
            <input
              type="email"
              required
              placeholder="Email Address"
              aria-label="Email Address"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-8 pr-2 py-2.5 sm:py-3 text-sm bg-transparent border-0 border-b-2 border-slate-300 focus:outline-none focus:border-[#0A3C61] placeholder-slate-400"
            />
          </div>

          {/* Select a Service */}
          <div className="relative">
            <FiLayers className="absolute left-1 top-3.5 text-slate-400 w-4 h-4 pointer-events-none" aria-hidden="true" />
            <select
              required
              value={formData.service}
              aria-label="Select a Service"
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className={`w-full pl-8 pr-8 py-2.5 sm:py-3 text-sm bg-transparent border-0 border-b-2 border-slate-300 focus:outline-none focus:border-[#0A3C61] cursor-pointer appearance-none ${formData.service ? 'text-slate-800' : 'text-slate-400'}`}
            >
              <option value="" disabled>
                Select a Service
              </option>
              {CONTACT_CONTENT.servicesOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="absolute right-1 top-3.5 text-slate-400 pointer-events-none text-xs">
              &#9660;
            </div>
          </div>

          {/* Your Message */}
          <div className="relative">
            <FiMessageSquare className="absolute left-1 top-3.5 text-slate-400 w-4 h-4" aria-hidden="true" />
            <textarea
              rows={3}
              placeholder="Your Message"
              aria-label="Your Message"
              maxLength={2000}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full pl-8 pr-2 py-2.5 sm:py-3 text-sm bg-transparent border-0 border-b-2 border-slate-300 focus:outline-none focus:border-[#0A3C61] placeholder-slate-400"
            />
          </div>

          <ConsentCheckbox id={`${formId}-consent`} checked={consent} onChange={setConsent} />

          {error && (
            <p role="alert" className="text-sm text-red-700">
              {error} You can also email us at{' '}
              <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold underline">{COMPANY_INFO.email}</a>.
            </p>
          )}

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 text-sm font-semibold text-white bg-[#0A3C61] hover:bg-[#002B4D] disabled:opacity-60 disabled:cursor-not-allowed rounded-pill transition-colors flex items-center justify-center gap-2"
            >
              {status === 'sending' ? 'Sending...' : <>Send Message &rarr;</>}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
