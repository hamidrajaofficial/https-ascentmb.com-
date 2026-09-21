import React from 'react';
import { SpecialtyHero } from '../components/SpecialtyHero';
import { StatsSection } from '../components/StatsSection';
import { SoundFamiliarSection } from '../components/SoundFamiliarSection';
import { WhatWeDoSection } from '../components/WhatWeDoSection';
import { FastOnboardingSection } from '../components/FastOnboardingSection';
import { DedicatedAccountManagersSection } from '../components/DedicatedAccountManagersSection';
import { SpecialtiesSection } from '../components/SpecialtiesSection';
import { ContactUsSection } from '../components/ContactUsSection';
import { SolutionsCardsSection } from '../components/SolutionsCardsSection';
import { NationwideAvailability } from '../components/NationwideAvailability';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';

export interface SpecialtyPageProps {
  specialtyName?: string;
  onBackToHome?: () => void;
  onSelectSpecialty?: (specialty: string) => void;
}

export function SpecialtyTemplatePage({ 
  specialtyName = "Cardiology",
  onBackToHome,
  onSelectSpecialty
}: SpecialtyPageProps) {
  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* 1. Hero Section */}
      <SpecialtyHero 
        specialtyPillText="AI-DRIVEN REVENUE CYCLE OPTIMIZATION & CLEAN CLAIMS"
        headlineLine1="Maximize Clinical Collections"
        headlineLine2="Zero-Error Claims & 98.5% First-Pass Yield"
        specialtyBadgeTitle={`Certified ${specialtyName} Coders`}
        onHireService={() => {
          document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onExploreSolutions={() => {
          document.getElementById('sound-familiar-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Overlapping Negative Margin Stats Section */}
      <StatsSection 
        title={`Transform your ${specialtyName} Practice Revenue`}
        description="With up to 98.5% first-pass clean claim rates, 21-day average AR turnaround, and 45% reduction in billing overhead."
        className="relative w-full z-20 flex justify-center px-4 -mt-[85px] sm:-mt-[95px] lg:-mt-[100px] -mb-[85px] sm:-mb-[95px] lg:-mb-[100px] pointer-events-none"
        stats={[
          { value: '98.5', unit: '%', label: <>Clean Claims<br />Approval Rate</> },
          { value: '< 3', unit: '%', label: <>Initial Denial<br />Ratio</> },
          { value: '21', unit: 'Days', label: <>Average AR<br />Collection Cycle</> },
          { value: '45', unit: '%', label: <>Operational<br />Cost Savings</> },
        ]}
      />

      {/* Sound Familiar? Five Problems We Fix Every Week Section */}
      <SoundFamiliarSection specialtyName={specialtyName} />

      {/* 4. What We Do Section (1 Row 3-Cards Slider + Bottom Dots) */}
      <WhatWeDoSection 
        onServiceClick={(title) => {
          document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 5. How We Work in Medical Billing Services (Fast Onboarding Process Section) */}
      <FastOnboardingSection 
        onStrategyCall={() => {
          document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onCalculateSavings={() => {
          document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 5.0. Dedicated Account Managers And Billers Who Know Your Practice By Name */}
      <DedicatedAccountManagersSection 
        specialtyName={specialtyName}
        onAuditClick={() => {
          const el = document.getElementById('contact-section') || document.getElementById('consultation-form');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 5.1. Certified Medical Billing and Coding Company Specialized Across 40+ Healthcare Practices */}
      <SpecialtiesSection 
        badge="Specialty Billing Expertise"
        highlightedTitle="Certified Medical Billing and Coding Company"
        titleSuffix="Specialized Across 40+ Healthcare Practices"
        description={`Every medical specialty has distinct billing rules, payer fee schedules, CPT modifiers, and documentation nuances. At Ascent Medical Billing, our certified medical coders and billing specialists deliver dedicated workflows tailored specifically for ${specialtyName} practices and across 40+ healthcare specialties—driving faster clean-claim approvals and eliminating revenue leakage.`}
        onSelectSpecialty={onSelectSpecialty || ((name) => {
          const el = document.getElementById('contact-section') || document.getElementById('consultation-form');
          el?.scrollIntoView({ behavior: 'smooth' });
        })}
      />

      {/* 5.2. Let's Talk About Your Revenue Cycle */}
      <ContactUsSection specialtyName={specialtyName} />

      {/* 5.3. Medical Billing Software We Are Experts In */}
      <SolutionsCardsSection 
        specialtyName={specialtyName}
        onCheckDetails={() => {
          const el = document.getElementById('contact-section') || document.getElementById('consultation-form');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 5.4. Medical Billing Services Trusted by Healthcare Practices Across All 50 US States */}
      <NationwideAvailability 
        specialtyName={specialtyName}
        onFindNearYou={() => {
          const el = document.getElementById('contact-section') || document.getElementById('consultation-form');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 6. Testimonials (Review) Section */}
      <TestimonialsSection />

      {/* 7. Frequently Asked Questions (Matching Home Page Design, Tailored to Specialty) */}
      <FaqSection specialtyName={specialtyName} />

    </div>
  );
}
