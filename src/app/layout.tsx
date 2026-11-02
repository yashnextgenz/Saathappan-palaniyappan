import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { COMPANY_INFO, SITE_URL } from '@/data/content';

export const viewport: Viewport = {
  themeColor: '#0A3C61',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: './' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'DUCO Traders',
    images: ['/images/hd/salt-pans-worker.jpg'],
  },
  robots: { index: true, follow: true },
  title: 'DUCO Traders | Industrial Salt Manufacturer & Bulk Supplier',
  description:
    'DUCO Traders manufactures industrial salt and supplies it in bulk to chemical fertilizer companies and other businesses. We also manage and maintain apartment complexes and residential societies.',
  authors: [{ name: 'DUCO Traders' }],
};

const ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: COMPANY_INFO.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/duco.png`,
  telephone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_INFO.address,
    addressLocality: COMPANY_INFO.city,
    addressRegion: COMPANY_INFO.state,
    addressCountry: 'IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#F8FAFC]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-white focus:text-[#0A3C61] focus:font-semibold focus:rounded focus:shadow"
        >
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }} />

        {/* Sticky Clean Navbar */}
        <Navbar />

        {/* Page Content */}
        <main id="main" className="flex-grow">{children}</main>

        {/* Values strip & footer */}
        <Footer />
      </body>
    </html>
  );
}
