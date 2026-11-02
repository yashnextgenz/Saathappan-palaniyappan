import React from 'react';
import type { Metadata } from 'next';
import { ServiceBlock } from '@/components/ServiceBlock';
import { SERVICES_CONTENT, CONTACT_CONTENT } from '@/data/content';
import { Screen } from '@/components/Screen';
import { PropertyServices, FaqSection, SaltBuyers, PropertyOfferings, ServicesCta } from '@/components/Sections';

export const metadata: Metadata = {
  title: 'Services | DUCO Traders - Industrial Salt Supply & Property Management',
  description:
    'Industrial salt manufactured and supplied in bulk to chemical fertilizer companies and other businesses, plus maintenance and facility management for apartment complexes and residential societies.',
};

export default function ServicesPage() {
  const { primaryService: salt, secondaryService: property } = SERVICES_CONTENT;

  return (
    <>
      <Screen id="industrial-salt">
        <section className="w-full bg-[#EEF1F5] py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            <div className="mb-2">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#12355A] tracking-tight leading-tight">
                Our Two Businesses
              </h1>
              <span className="block w-12 h-1 bg-[#0A3C61] rounded-full mt-3" />
            </div>

            <ServiceBlock
              pill={salt.pill}
              title={salt.title}
              description={salt.description}
              checklist={salt.checklist}
              cta={salt.cta}
              accent="#0A3C61"
              mainImage={{ src: '/images/hd/salt-stockpile-conveyor.jpg', alt: 'Conveyors loading large stockpiles of industrial salt' }}
              thumbs={[
                { src: '/images/hd/salt-harvest.jpg', alt: 'Salt being heaped', label: 'Industrial salt' },
                { src: '/images/hd/salt-facility.jpg', alt: 'Salt stockpiles and conveyors', label: 'Bulk stock' },
                { src: '/images/hd/bulk-lorry.jpg', alt: 'Loaded lorry', label: 'Bulk supply' },
              ]}
              defaultService={CONTACT_CONTENT.servicesOptions[0]}
            />
          </div>
        </section>
      </Screen>

      <Screen id="property-mgmt">
        <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceBlock
              pill={property.pill}
              title={property.title}
              description={property.description}
              checklist={property.checklist}
              cta={property.cta}
              accent="#248482"
              mainImage={{ src: '/images/hd/apartment-towers.jpg', alt: 'Large residential apartment towers' }}
              thumbs={[
                { src: '/images/hd/maintenance-plumber.jpg', alt: 'Plumber repairing a bathroom sink', label: 'Plumbing & maintenance' },
                { src: '/images/hd/maintenance-carpentry.jpg', alt: 'Furniture work in a timber workshop', label: 'Furniture services' },
                { src: '/images/hd/maintenance-electrical.jpg', alt: 'Maintenance worker with tools', label: 'General maintenance' },
              ]}
              defaultService={CONTACT_CONTENT.servicesOptions[1]}
            />
          </div>
        </section>
      </Screen>

      <Screen><SaltBuyers /></Screen>
      <Screen><PropertyOfferings /></Screen>
      <Screen><PropertyServices /></Screen>
      <Screen><FaqSection /></Screen>
      <Screen><ServicesCta /></Screen>
    </>
  );
}
