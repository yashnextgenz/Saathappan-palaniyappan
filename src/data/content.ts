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
  valuesSummary: 'INDUSTRIAL SALT | SALT-FIELD DEVELOPMENT',
  phone: '+91 81244 78383',
  email: 'info@ducotraders.com',
  // Used only for the governing-law clause in the Terms of Use.
  city: 'Chennai',
  state: 'Tamil Nadu',
  country: 'India',
};

export const HOME_CONTENT = {
  eyebrow: 'Industrial salt manufacturing',
  headline: 'Building Capacity. Strengthening Commercial Supply.',
  subheading:
    'DUCO Traders manufactures crystal salt for commercial buyers, mainly chemical and fertiliser manufacturers, and offers salt pan and water flow development services to salt-field owners.',
  primaryCta: 'Request a Bulk Quote',
  secondaryCta: 'Salt-Field Services',
  trustStats: [
    { id: 'stat-1', badge: 'Since 2022', label: 'Manufacturing crystal salt', icon: 'medal' },
    { id: 'stat-2', badge: '15 Years', label: 'Salt-field management experience', icon: 'shield' },
    { id: 'stat-3', badge: '3 Core', label: 'Products and services', icon: 'handshake' },
  ],
  services: [
    {
      id: 'industrial-salt',
      title: 'Industrial Salt Manufacturing & Bulk Supply',
      link: '/services#industrial-salt',
    },
    {
      id: 'field-services',
      title: 'Salt Pan & Water Flow Development',
      link: '/services#field-services',
    },
  ],
};

export const ABOUT_CONTENT = {
  subtitle: 'Rooted in experience. Focused on growth.',
  paragraph1:
    'Our business began with salt wholesaling during the COVID-19 pandemic and expanded into crystal salt manufacturing on leased land in 2022. We serve industrial buyers, including chemical and fertiliser manufacturers.',
  paragraph2:
    'We combine entrepreneurial experience with 15 years of salt-field management expertise. Our vision is to improve production efficiency, expand capacity and establish lasting customer relationships.',
};

export const SERVICES_CONTENT = {
  primaryService: {
    pill: '01 INDUSTRIAL SALT · BULK SUPPLY',
    title: 'Industrial Salt Manufacturing & Bulk Supply',
    description:
      'We manufacture crystal salt for industrial applications and supply it in bulk to commercial buyers, mainly chemical and fertiliser manufacturers, through agreed weekly or monthly delivery schedules.',
    checklist: [
      'Crystal salt for industrial applications',
      'Bulk supply to commercial buyers',
      'Weekly or monthly delivery schedules',
      'Agreed specifications and volumes',
      'Samples and trial orders',
    ],
    cta: 'Request a Bulk Quote',
  },
  secondaryService: {
    pill: '02 SALT-FIELD SERVICES · DEVELOPMENT',
    title: 'Salt Pan & Water Flow Development',
    description:
      'We create and modify salt pans and improve the access and movement of higher-salinity water for salt-field owners. Projects are limited and scheduled around our own seasonal production.',
    checklist: [
      'Salt pan creation',
      'Salt pan modification',
      'Water flow development',
      'Borewell development',
    ],
    cta: 'Discuss Your Salt Field',
  },
};

export const CONTACT_CONTENT = {
  subtitle:
    'Tell us about your industrial salt requirement or your salt-field project, or speak with us about investing in our expansion.',
  formTitle: 'Send Us an Enquiry',
  servicesOptions: ['Industrial Salt: Bulk Supply', 'Salt Pan & Water Flow Development', 'Investment Enquiry', 'General Enquiry'],
};
