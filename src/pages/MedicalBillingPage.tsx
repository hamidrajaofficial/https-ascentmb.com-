import React from 'react';
import { MedicalBillingHero } from '../components/MedicalBillingHero';
import { StatsSection } from '../components/StatsSection';
import { ReliableBillingSection } from '../components/ReliableBillingSection';
import { ServicesWhatYouWillGet } from '../components/ServicesWhatYouWillGet';
import { VirtualAssistantPackagesSection } from '../components/VirtualAssistantPackagesSection';
import { FutureInnovationSection } from '../components/FutureInnovationSection';
import { MedicalBillingProcessTimeline } from '../components/MedicalBillingProcessTimeline';
import { SpecialtiesSection } from '../components/SpecialtiesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { SolutionsCardsSection } from '../components/SolutionsCardsSection';
import { NationwideAvailability } from '../components/NationwideAvailability';
import { ContactUsSection } from '../components/ContactUsSection';
import { GotQuestionsAuditSection } from '../components/GotQuestionsAuditSection';
import { User, Users, Building, Landmark } from 'lucide-react';

interface MedicalBillingPageProps {
  onBackToHome?: () => void;
  onNavigateToRcmServices?: () => void;
  onSelectSpecialty?: (specialtyName: string) => void;
  onNavigateToContact?: () => void;
  serviceSlug?: string;
}

const slugToTitleMap: Record<string, string> = {
  'medical-billing': 'Medical Billing Services',
  'medical-coding': 'Medical Coding Services',
  'medical-credentialing': 'Medical Credentialing Services',
  'denial-management': 'Denial Management Services',
  'accounts-receivable': 'Accounts Receivable (AR) Recovery',
  'eligibility-verification': 'Insurance Eligibility Verification',
  'payment-posting': 'Payment Posting & Reconciliation',
  'patient-statement': 'Patient Statement & Billing',
  'digital-marketing': 'Healthcare Digital Marketing',
  'scheduling': 'Patient Scheduling & Intake',
  'medical-billing-audit': 'Medical Billing Audit',
  'medical-transcription': 'Medical Transcription Services',
};

export function MedicalBillingPage({ 
  onBackToHome,
  onNavigateToRcmServices,
  onSelectSpecialty,
  onNavigateToContact,
  serviceSlug = 'medical-billing'
}: MedicalBillingPageProps) {
  
  const serviceTitle = slugToTitleMap[serviceSlug] || 'Medical Billing Services';

  const scrollToConsultation = () => {
    if (onNavigateToContact) {
      onNavigateToContact();
      return;
    }
    const el = document.getElementById('consultation-form') || document.getElementById('contact-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* 1. Hero Section */}
      <MedicalBillingHero 
        serviceTitle={serviceTitle}
        onNavigateHome={onBackToHome}
        onNavigateToRcmServices={onNavigateToRcmServices}
        onBookCall={onNavigateToContact || scrollToConsultation}
        onAboutClick={onNavigateToRcmServices}
      />

      {/* 2. Dynamic Stats Section (Overlapping 50% Hero Section / 50% Next Section) */}
      <StatsSection 
        title="Transform your billing performance"
        description="With up to 98% fewer claim denials, 30% increased revenue within 60 days, and 45% savings in billing expenses."
        className="relative w-full z-20 flex justify-center px-4 -mt-[85px] sm:-mt-[95px] lg:-mt-[100px] -mb-[85px] sm:-mb-[95px] lg:-mb-[100px] pointer-events-none"
        stats={[
          { value: '25', unit: 'Days', label: 'Rapid Revenue Recovery' },
          { value: '2', unit: '%', label: 'Rejections' },
          { value: '98', unit: '%', label: 'Electronic Payment' },
          { value: '100', unit: '%', label: 'Client Retention' },
        ]}
      />

      {/* 3. Reliable Medical Billing Services Section */}
      <ReliableBillingSection 
        onBookCall={scrollToConsultation}
        onConsultation={scrollToConsultation}
      />

      {/* 3.2. Services What You Will Get */}
      <ServicesWhatYouWillGet 
        onConsultation={scrollToConsultation}
      />

      {/* 3.3. Superior Healthcare Virtual Assistant Packages for Every Organization */}
      <VirtualAssistantPackagesSection 
        subtitle="We provide specialized virtual healthcare assistants trained in medical billing, charge entry, claim submission, and insurance follow-ups to maximize practice revenue."
        showCta={true}
        onCtaClick={scrollToConsultation}
        packages={[
          {
            icon: User,
            title: 'Solo Practices',
            description: 'Prior authorizations, daily charge entry, clean claim filing, and patient balance inquiries so solo doctors can focus 100% on care.',
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

      {/* 3.5. Dedicated Billing Consultant Section */}
      <FutureInnovationSection 
        onLetsTalk={scrollToConsultation}
        className="py-16 sm:py-20 bg-[#F8F9FB] relative z-10 border-t border-gray-100/80"
      />

      {/* 4. Interactive Connected Medical Billing Process Workflow */}
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

      {/* 5.5. Contact Us Section */}
      <ContactUsSection />

      {/* 6. Medical Billing Software We Are Experts In */}
      <SolutionsCardsSection />

      {/* 6.5. Nationwide Medical Billing Availability across US States */}
      <NationwideAvailability 
        onFindNearYou={scrollToConsultation}
      />

      {/* 6.5. Client Reviews & Testimonials Section */}
      <TestimonialsSection />

      {/* 7. Got Questions About Outsourcing Medical Billing? */}
      <GotQuestionsAuditSection />

    </div>
  );
}

export default MedicalBillingPage;
