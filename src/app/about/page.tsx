import React from 'react';
import type { Metadata } from 'next';
import { AboutIntro } from '@/components/VisionMissionCards';
import { Screen } from '@/components/Screen';
import { PrimaryBusiness, SecondaryBusiness, TeamSection, InvestSection, AboutCta } from '@/components/Sections';

export const metadata: Metadata = {
  title: 'About Us | DUCO Traders',
  description:
    'DUCO Traders has manufactured crystal salt since 2022, combining entrepreneurial drive with 15 years of salt-field management expertise.',
};

export default function AboutPage() {
  return (
    <>
      <Screen><AboutIntro /></Screen>
      <Screen><PrimaryBusiness /></Screen>
      <Screen><SecondaryBusiness /></Screen>
      <Screen><TeamSection /></Screen>
      <Screen><InvestSection /></Screen>
      <Screen><AboutCta /></Screen>
    </>
  );
}
