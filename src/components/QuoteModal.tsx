'use client';

import React, { useId, useState } from 'react';
import { FiX, FiCheckCircle, FiUser, FiMail, FiPhone, FiLayers } from 'react-icons/fi';
import { CONTACT_CONTENT, COMPANY_INFO } from '@/data/content';
import { ConsentCheckbox } from './ConsentCheckbox';
import { sendEnquiry } from './enquiry';
import { useDialog } from './useDialog';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const INPUT =
  'w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540]';
const LABEL = 'block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1';

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  const id = useId();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService || CONTACT_CONTENT.servicesOptions[0],
    message: '',
  });
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [website, setWebsite] = useState('');

  const handleClose = React.useCallback(() => {
    setSubmitted(false);
    setError('');
    onClose();
  }, [onClose]);

  useDialog(isOpen, handleClose);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      await sendEnquiry({ kind: 'quote', ...formData, website });
      setSubmitted(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${id}-title`}
        className="relative w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200"
      >
        {/* Header */}
        <div className="bg-[#0A2540] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <h2 id={`${id}-title`} className="text-xl font-bold">Request a Quote</h2>
            <p className="text-xs text-cyan-200 mt-0.5">
              DUCO Traders &bull; Industrial Salt &amp; Salt-Field Development
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <FiX className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-3" role="status">
              <FiCheckCircle className="w-14 h-14 text-emerald-500 mx-auto" aria-hidden="true" />
              <h3 className="text-xl font-bold text-slate-800">Quote Request Sent</h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                We have received your request and will contact you at <strong>{formData.email}</strong> or by phone.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#0A2540] rounded-pill"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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

              <div>
                <label htmlFor={`${id}-name`} className={LABEL}>
                  Full Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3.5 top-3.5 text-slate-400 w-4 h-4" aria-hidden="true" />
                  <input
                    id={`${id}-name`}
                    type="text"
                    required
                    autoFocus
                    autoComplete="name"
                    maxLength={100}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={INPUT}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={`${id}-email`} className={LABEL}>
                    Email Address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3.5 top-3.5 text-slate-400 w-4 h-4" aria-hidden="true" />
                    <input
                      id={`${id}-email`}
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={INPUT}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={`${id}-phone`} className={LABEL}>
                    Phone Number
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-3.5 top-3.5 text-slate-400 w-4 h-4" aria-hidden="true" />
                    <input
                      id={`${id}-phone`}
                      type="tel"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[+0-9 ()\-]{7,20}"
                      title="Enter a valid phone number, e.g. +91 98765 43210"
                      placeholder="+91 98765..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={INPUT}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor={`${id}-service`} className={LABEL}>
                  Required Service
                </label>
                <div className="relative">
                  <FiLayers className="absolute left-3.5 top-3.5 text-slate-400 w-4 h-4" aria-hidden="true" />
                  <select
                    id={`${id}-service`}
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={`${INPUT} bg-white appearance-none`}
                  >
                    {CONTACT_CONTENT.servicesOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor={`${id}-message`} className={LABEL}>
                  Project / Order Requirements
                </label>
                <textarea
                  id={`${id}-message`}
                  rows={3}
                  maxLength={2000}
                  placeholder="Quantity of industrial salt, or details of your salt-field project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540]"
                />
              </div>

              <ConsentCheckbox id={`${id}-consent`} checked={consent} onChange={setConsent} />

              {error && (
                <p role="alert" className="text-sm text-red-700">
                  {error} You can also email us at{' '}
                  <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold underline">
                    {COMPANY_INFO.email}
                  </a>
                  .
                </p>
              )}

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-800 rounded-pill hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={sending}
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-[#0A2540] hover:bg-[#061829] disabled:opacity-60 disabled:cursor-not-allowed rounded-pill shadow-md hover:shadow-lg transition-all"
                >
                  {sending ? 'Sending...' : <>Submit Quote Request &rarr;</>}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
