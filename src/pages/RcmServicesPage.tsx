import React from 'react';
import { RcmHeroSection } from '../components/RcmHeroSection';
import { ReliableBillingSection } from '../components/ReliableBillingSection';
import { RcmWhatWeDoOverview } from '../components/RcmWhatWeDoOverview';
import { VirtualAssistantPackagesSection } from '../components/VirtualAssistantPackagesSection';
import { MedicalBillingProcessTimeline } from '../components/MedicalBillingProcessTimeline';
import { SpecialtiesSection } from '../components/SpecialtiesSection';
import { ContactUsSection } from '../components/ContactUsSection';
import { SolutionsCardsSection } from '../components/SolutionsCardsSection';
import { NationwideAvailability } from '../components/NationwideAvailability';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { GotQuestionsAuditSection } from '../components/GotQuestionsAuditSection';
import { User, Users, Building, Landmark } from 'lucide-react';

interface RcmServicesPageProps {
  onBackToHome?: () => void;
  onSelectSpecialty?: (specialtyName: string) => void;
  onNavigateToService?: (serviceSlug: string) => void;
}

export function RcmServicesPage({ 
  onBackToHome, 
  onSelectSpecialty,
  onNavigateToService
}: RcmServicesPageProps) {
  
  const scrollToConsultation = () => {
    const el = document.getElementById('consultation-form') || document.getElementById('contact-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* 1. Hero Section (Designed specifically for RCM Services parent page) */}
      <RcmHeroSection 
        onBookCall={scrollToConsultation}
        onAuditClick={scrollToConsultation}
      />

      {/* 2. Reliable Medical Billing Services That Reduce Claim Denials */}
      <ReliableBillingSection 
        onBookCall={scrollToConsultation}
        onConsultation={scrollToConsultation}
      />

      {/* 2.5. What We Do - Overview of Medical Billing Services in the USA */}
      <RcmWhatWeDoOverview 
        onNavigateToService={onNavigateToService}
        onExploreRcm={scrollToConsultation}
      />

      {/* 3. Perfect Match For Every Practice - Superior Healthcare Virtual Assistant Packages for Every Organization */}
      <VirtualAssistantPackagesSection 
        eyebrow="Perfect Match For Every Practice"
        subtitle="We provide specialized virtual healthcare assistants trained in medical billing, charge entry, claim submission, and insurance follow-ups to maximize practice revenue."
        showCta={true}
        onCtaClick={scrollToConsultation}
        packages={[
          {
            icon: User,
            title: 'Solo Practices',
            description: 'Prior authorizations, daily charge entry, clean claim filing, and patient balance inquiries so solo doctors can focus 100% on patient care.',
          },
          {
            icon: Users,
            title: 'Small Groups',
            description: 'End-to-end billing VA support, real-time insurance eligibility checks, and rapid denial management without hiring costly in-house billing staff.',
          },
          {
            icon: Building,
            title: 'Large Clinics',
            description: 'Dedicated billing coordinators managing multi-specialty coding, complex claim audits, EHR data entry, and persistent AR follow-ups.',
          },
          {
            icon: Landmark,
            title: 'Health Systems',
            description: 'Scalable enterprise billing specialists and certified coders reducing system-wide claim rejections and accelerating cash flow across all departments.',
          },
        ]}
      />

      {/* 4. How Our Medical Billing Process Works */}
      <MedicalBillingProcessTimeline 
        onConsultationClick={scrollToConsultation}
      />

      {/* 5. Certified Medical Billing and Coding Company Specialized Across 40+ Healthcare Practices */}
      <SpecialtiesSection 
        badge="Specialty Billing Expertise"
        highlightedTitle="Certified Medical Billing and Coding Company"
        titleSuffix="Specialized Across 40+ Healthcare Practices"
        description="Every medical specialty has distinct billing rules, payer fee schedules, CPT modifiers, and documentation nuances. At Ascent Medical Billing, our certified medical coders and billing specialists deliver dedicated workflows tailored to your specific field—driving faster clean-claim approvals and eliminating revenue leakage."
        onSelectSpecialty={onSelectSpecialty}
      />

      {/* 6. Let's Talk About Your Revenue Cycle */}
      <ContactUsSection />

      {/* 7. Software & EHR Compatibility - Medical Billing Software We Are Experts In */}
      <SolutionsCardsSection />

      {/* 8. Medical Billing Services Trusted by Healthcare Practices Across All 50 US States */}
      <NationwideAvailability 
        onFindNearYou={scrollToConsultation}
      />

      {/* 9. How We Became a Top Priority Savior of Healthcare Practitioners? */}
      <TestimonialsSection />

      {/* 10. Got Questions About Outsourcing Medical Billing? */}
      <GotQuestionsAuditSection />

    </div>
  );
}

export default RcmServicesPage;
