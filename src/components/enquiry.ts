export interface Enquiry {
  kind: 'contact' | 'quote';
  name: string;
  company?: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  /** Honeypot: stays empty for real visitors. */
  website: string;
}

/** Sends the enquiry to our API route, which emails it through Resend. Throws with a message to show the visitor. */
export const sendEnquiry = async (enquiry: Enquiry) => {
  const response = await fetch('/api/enquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(enquiry),
  }).catch(() => null);

  if (!response) throw new Error('Check your internet connection and try again.');
  if (!response.ok) {
    const data = await response.json().catch(() => null);
    throw new Error(data?.error || 'Your enquiry could not be sent.');
  }
};
