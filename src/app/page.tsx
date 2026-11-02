import React from 'react';
import { HomeHero } from '@/components/HomeHero';
import { Screen } from '@/components/Screen';
import { AboutSnapshot, IndustriesServed, CtaBand } from '@/components/Sections';

// One component per screen. The first matches the approved layout (hero with trust stats).
export default function HomePage() {
  return (
    <>
      <Screen><HomeHero /></Screen>
      <Screen><AboutSnapshot /></Screen>
      <Screen><IndustriesServed /></Screen>
      <Screen><CtaBand /></Screen>
    </>
  );
}
