export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact' },
];

/** Public site origin, used for canonical URLs, sitemap and social previews. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ducotraders.com').replace(/\/$/, '');

export const COMPANY_INFO = {
  name: 'DUCO TRADERS',
  legalName: 'DUCO Traders',
  valuesSummary: 'INDUSTRIAL SALT | PROPERTY MANAGEMENT',
  // TODO: replace with the real phone number and address before launch.
  phone: '+91 98765 43210',
  email: 'info@ducotraders.com',
  address: '123, Main Road, Chennai, Tamil Nadu, India',
  city: 'Chennai',
  state: 'Tamil Nadu',
  country: 'India',
};

export const HOME_CONTENT = {
  eyebrow: 'Industrial salt · Bulk B2B supply',
  headline: 'Industrial Salt, Manufactured and Supplied in Bulk',
  subheading:
    'DUCO Traders manufactures industrial salt and supplies it in bulk to chemical fertilizer companies and other businesses. We also manage and maintain large apartment complexes and residential societies.',
  primaryCta: 'Request a Bulk Quote',
  secondaryCta: 'Property Management',
  trustStats: [
    { id: 'stat-1', badge: 'Manufacturer', label: 'Industrial salt', icon: 'medal' },
    { id: 'stat-2', badge: 'Bulk B2B', label: 'Chemical fertilizer companies', icon: 'handshake' },
    { id: 'stat-3', badge: 'Maintenance', label: 'Apartments & residential societies', icon: 'shield' },
  ],
  services: [
    {
      id: 'industrial-salt',
      title: 'Industrial Salt Manufacturing & Bulk Supply',
      link: '/services#industrial-salt',
    },
    {
      id: 'property-mgmt',
      title: 'Apartment & Property Management',
      link: '/services#property-mgmt',
    },
  ],
};

export const ABOUT_CONTENT = {
  subtitle: 'Salt manufacturer first. Property caretaker second.',
  paragraph1:
    'DUCO Traders manufactures industrial salt. We supply it in bulk to chemical fertilizer companies and to other businesses, manufacturers and companies that need it in large quantities.',
  paragraph2:
    'Our second business is apartment and property management: we provide management and maintenance services for large apartment complexes and residential societies.',
};

export const SERVICES_CONTENT = {
  primaryService: {
    pill: '01 PRIMARY BUSINESS · B2B',
    title: 'Industrial Salt Manufacturing & Bulk Supply',
    description:
      'We manufacture industrial salt and supply it in bulk to chemical fertilizer companies and to other businesses, manufacturers and companies that need it in large quantities.',
    checklist: [
      'Industrial salt manufacturing',
      'Bulk supply to chemical fertilizer companies',
      'Bulk supply to other companies',
      'For businesses that need large quantities',
    ],
    cta: 'Request a Bulk Quote',
  },
  secondaryService: {
    pill: '02 SECONDARY BUSINESS · B2B & B2C',
    title: 'Apartment & Property Management',
    description:
      'We provide management and maintenance services for large apartment complexes and residential societies, working with apartment associations, property managers and potentially individual residents.',
    checklist: [
      'Plumbing and maintenance',
      'Furniture-related services',
      'General property maintenance',
      'Residential facility management',
      'Coordination of maintenance services for residents',
    ],
    cta: 'Discuss Your Property',
  },
};

export const CONTACT_CONTENT = {
  subtitle:
    'Tell us how much industrial salt you need, or about your apartment complex or residential society.',
  formTitle: 'Send Us an Enquiry',
  servicesOptions: ['Industrial Salt: Bulk Supply', 'Apartment / Property Management', 'General Enquiry'],
};
