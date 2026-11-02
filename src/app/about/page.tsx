import React from 'react';
import type { Metadata } from 'next';
import { AboutIntro } from '@/components/VisionMissionCards';
import { Screen } from '@/components/Screen';
import { PrimaryBusiness, SecondaryBusiness, AboutCta } from '@/components/Sections';

export const metadata: Metadata = {
  title: 'About Us | DUCO Traders',
  description:
    'DUCO Traders manufactures industrial salt and supplies it in bulk, and also manages apartment complexes and residential societies.',
};

export default function AboutPage() {
  return (
    <>
      <Screen><AboutIntro /></Screen>
      <Screen><PrimaryBusiness /></Screen>
      <Screen><SecondaryBusiness /></Screen>
      <Screen><AboutCta /></Screen>
    </>
  );
}
