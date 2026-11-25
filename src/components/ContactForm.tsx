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
  FiArrowRight,
  FiChevronDown,
} from 'react-icons/fi';
import { CONTACT_CONTENT, COMPANY_INFO } from '@/data/content';
import { ConsentCheckbox } from './ConsentCheckbox';
import { sendEnquiry } from './enquiry';

const INPUT_CLASS =
  'w-full pl-10 pr-4 py-2.5 text-sm text-slate-900 rounded-xl border border-slate-300 bg-slate-50/40 focus:bg-white focus:outline-none focus:border-[#0A3C61] focus:ring-2 focus:ring-[#0A3C61]/15 placeholder-slate-400 transition-colors';
const LABEL_CLASS =
  'block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5';

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

  if (status === 'success') {
    return (
      <div className="py-10 text-center space-y-4" role="status">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
          <FiCheckCircle className="w-8 h-8" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-extrabold text-[#12355A]">Enquiry Received</h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. We have received your enquiry and will respond to{' '}
          <span className="font-semibold text-slate-800">{formData.email}</span> or call you shortly.
        </p>
        <button
          type="button"
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
          className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0A3C61] hover:bg-[#002B4D] rounded-full shadow-md transition-colors"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${formId}-name`} className={LABEL_CLASS}>
            Full Name <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <FiUser className="absolute left-3.5 top-3 text-slate-400 w-4 h-4" aria-hidden="true" />
            <input
              id={`${formId}-name`}
              type="text"
              required
              placeholder="Your full name"
              autoComplete="name"
              maxLength={100}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={INPUT_CLASS}
            />
          </div>
        </div>

        <div>
          <label htmlFor={`${formId}-company`} className={LABEL_CLASS}>
            Company / Organisation
          </label>
          <div className="relative">
            <FiBriefcase className="absolute left-3.5 top-3 text-slate-400 w-4 h-4" aria-hidden="true" />
            <input
              id={`${formId}-company`}
              type="text"
              placeholder="Company name (optional)"
              autoComplete="organization"
              maxLength={120}
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className={INPUT_CLASS}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${formId}-phone`} className={LABEL_CLASS}>
            Phone Number <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <FiPhone className="absolute left-3.5 top-3 text-slate-400 w-4 h-4" aria-hidden="true" />
            <input
              id={`${formId}-phone`}
              type="tel"
              required
              placeholder="+91 98765 43210"
              autoComplete="tel"
              inputMode="tel"
              pattern="[+0-9 ()\-]{7,20}"
              title="Enter a valid phone number, e.g. +91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={INPUT_CLASS}
            />
          </div>
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className={LABEL_CLASS}>
            Email Address <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <FiMail className="absolute left-3.5 top-3 text-slate-400 w-4 h-4" aria-hidden="true" />
            <input
              id={`${formId}-email`}
              type="email"
              required
              placeholder="name@company.com"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={INPUT_CLASS}
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-service`} className={LABEL_CLASS}>
          Required Service <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <FiLayers className="absolute left-3.5 top-3 text-slate-400 w-4 h-4 pointer-events-none" aria-hidden="true" />
          <select
            id={`${formId}-service`}
            required
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className={`${INPUT_CLASS} pr-10 cursor-pointer appearance-none ${formData.service ? 'text-slate-900' : 'text-slate-400'}`}
          >
            <option value="" disabled>
              Select a service or enquiry type
            </option>
            {CONTACT_CONTENT.servicesOptions.map((opt) => (
              <option key={opt} value={opt} className="text-slate-900">
                {opt}
              </option>
            ))}
          </select>
          <FiChevronDown className="absolute right-3.5 top-3 text-slate-400 w-4 h-4 pointer-events-none" aria-hidden="true" />
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className={LABEL_CLASS}>
          Requirement Details
        </label>
        <div className="relative">
          <FiMessageSquare className="absolute left-3.5 top-3 text-slate-400 w-4 h-4" aria-hidden="true" />
          <textarea
            id={`${formId}-message`}
            rows={4}
            placeholder="Share your crystal salt volume, delivery schedule, salt-field development scope, or investment enquiry..."
            maxLength={2000}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={INPUT_CLASS}
          />
        </div>
      </div>

      <ConsentCheckbox id={`${formId}-consent`} checked={consent} onChange={setConsent} />

      {error && (
        <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}{' '}
          <span>
            You can also email us at{' '}
            <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold underline">
              {COMPANY_INFO.email}
            </a>
            .
          </span>
        </div>
      )}

      <div className="pt-1">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0A3C61] py-3.5 px-6 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-[#002B4D] hover:shadow-lg active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? (
            'Sending Enquiry...'
          ) : (
            <>
              Submit Enquiry <FiArrowRight className="w-4 h-4" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
