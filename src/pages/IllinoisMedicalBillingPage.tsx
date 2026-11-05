import React from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, Phone, FileText, User, Users, Building, Landmark } from 'lucide-react';
import { IllinoisHeroSection } from '../components/IllinoisHeroSection';
import { StatsSection, StatItem } from '../components/StatsSection';
import { IllinoisThirdPartySection } from '../components/IllinoisThirdPartySection';
import { LocationWhatWeDoSection } from '../components/LocationWhatWeDoSection';
import { StateDescriptiveSection } from '../components/StateDescriptiveSection';
import { VirtualAssistantPackagesSection, PackageItem } from '../components/VirtualAssistantPackagesSection';
import { SpecialtiesSection } from '../components/SpecialtiesSection';
import { MaximizePracticeRevenueSection } from '../components/MaximizePracticeRevenueSection';
import { NationwideAvailability } from '../components/NationwideAvailability';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { SolutionsCardsSection } from '../components/SolutionsCardsSection';
import { GotQuestionsAuditSection } from '../components/GotQuestionsAuditSection';
import { ContactUsSection } from '../components/ContactUsSection';

export interface IllinoisMedicalBillingPageProps {
  stateName?: string;
  onSelectState?: (state: string) => void;
  onBackToHome?: () => void;
  onNavigateToDomainAreas?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToRcmServices?: () => void;
  onSelectSpecialty?: (specialtyName: string) => void;
}

export function IllinoisMedicalBillingPage({
  stateName = 'Texas',
  onSelectState,
  onBackToHome,
  onNavigateToDomainAreas,
  onNavigateToContact,
  onNavigateToRcmServices,
  onSelectSpecialty
}: IllinoisMedicalBillingPageProps) {
  const isTexas = stateName.toLowerCase() === 'texas';
  const isIllinois = stateName.toLowerCase() === 'illinois';

  const scrollToAudit = () => {
    const el = document.getElementById('contact-section') || document.getElementById('consultation-form') || document.getElementById('location-appointment-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigateToContact) {
      onNavigateToContact();
    }
  };

  const stateStats: StatItem[] = isTexas ? [
    { value: '22', unit: 'Days', label: 'Average AR (Texas Avg: 46)' },
    { value: '1.6', unit: '%', label: 'Claim Rejection Rate' },
    { value: '99.1', unit: '%', label: 'Electronic Payment Rate' },
    { value: '100', unit: '%', label: 'TMHP Medicaid & HIPAA Compliant' }
  ] : [
    { value: '24', unit: 'Days', label: `Average AR (${stateName} Avg: 44)` },
    { value: '1.8', unit: '%', label: 'Claim Rejection Rate' },
    { value: '98.8', unit: '%', label: 'Electronic Payment Rate' },
    { value: '100', unit: '%', label: 'HFS Medicaid & HIPAA Compliant' }
  ];

  const stateVaPackages: PackageItem[] = [
    {
      icon: User,
      title: 'Solo Practices',
      description: `Focus on your ${stateName} patients while our dedicated virtual assistants handle every administrative detail, from insurance verification to filing clean claims.`,
    },
    {
      icon: Users,
      title: 'Small Groups',
      description: `Scale your ${stateName} clinical operations without the overhead of additional in-house staff, benefits, or local office space requirements.`,
    },
    {
      icon: Building,
      title: 'Large Clinics',
      description: `Streamline high-volume ${stateName} clinical workflows with dedicated billing and scheduling assistants who integrate seamlessly into your EHR.`,
    },
    {
      icon: Landmark,
      title: 'Health Systems',
      description: `Customized enterprise solutions designed to reduce ${stateName} regional health network administrative burden, conquer claim backlogs, and optimize revenue.`,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* 1. HERO SECTION (matching Image 1) */}
      <IllinoisHeroSection 
        stateName={stateName}
        onBookCall={scrollToAudit}
        onContactUs={scrollToAudit}
      />

      {/* 2. STATS SECTION (Home page stats component tailored to selected state) */}
      <div className="relative w-full z-20">
        <StatsSection 
          title={`Transform Your ${stateName} Practice`}
          description={`With up to 99.1% clean claims, sub-25 day AR, and dedicated ${stateName} payer billing specialists.`}
          stats={stateStats}
          badgesTitle="Trusted by healthcare providers on:"
          className="relative w-full z-20 flex justify-center px-4 -mt-16 sm:-mt-20 lg:-mt-24 mb-12 sm:mb-16 pointer-events-none"
        />
      </div>

      {/* 3. H2 SECTION (matching Image 2 & Unsplash Doctor image) */}
      <IllinoisThirdPartySection 
        stateName={stateName}
        onContactClick={scrollToAudit}
        onCallClick={() => {
          window.location.href = "tel:6307013986";
        }}
      />

      {/* 4. Location Child Page What We Do Section (matching user screenshot) */}
      <LocationWhatWeDoSection 
        stateName={stateName}
        onContactClick={scrollToAudit}
        onSelectOption={() => scrollToAudit()}
      />

      {/* 5. Location Company Descriptive Section with State Map Silhouette (matching user screenshot) */}
      <StateDescriptiveSection 
        stateName={stateName}
        onContactClick={scrollToAudit}
        onCallClick={() => {
          window.location.href = "tel:6302737882";
        }}
      />


      {/* 6. Superior Healthcare Virtual Assistant Packages Section (dynamic for state) */}
      <VirtualAssistantPackagesSection 
        eyebrow={`PERFECT MATCH FOR EVERY ${stateName.toUpperCase()} PRACTICE`}
        title={<>Superior Healthcare <span className="text-[#98C340]">Virtual Assistant Packages</span> in {stateName}</>}
        subtitle={`We provide affordable virtual healthcare assistants specialized in ${stateName} billing protocols, Medicaid guidelines, patient scheduling, and EHR management to reduce practice overhead.`}
        packages={stateVaPackages}
        showCta={true}
        ctaTitle={`Ready to eliminate ${stateName} claim denials and boost monthly practice collections?`}
        ctaSubtitle={`Get a customized revenue cycle assessment and free billing audit from our certified ${stateName} RCM consultants.`}
        ctaButtonText={`Claim Free ${stateName} Billing Audit`}
        onCtaClick={scrollToAudit}
      />

      {/* 7. Specialties Section */}
      <SpecialtiesSection 
        badge={`${stateName.toUpperCase()} CLINICAL SPECIALTIES`}
        highlightedTitle="Medical Specialties"
        titleSuffix={`We Bill in ${stateName}`}
        description={`From private practices to multi-provider clinical networks across ${stateName}, our AAPC-certified billing teams specialize in clinical coding, fee schedules, and payer rules for every discipline.`}
        onSelectSpecialty={onSelectSpecialty}
      />

      {/* 8. Form Section (Let's Talk About Your Revenue Cycle used in home page - Called after Medical Specialties) */}
      <ContactUsSection 
        specialtyName={stateName}
        id="contact-section"
      />

      {/* 9. Medical Billing Software We Are Experts In / EHR Compatibility Section (Called after form section) */}
      <SolutionsCardsSection 
        specialtyName={stateName}
        onCheckDetails={scrollToAudit}
      />

      {/* 10. Locations Section (Texas Billing Services Trusted by Healthcare Practices Across All 50 US States) */}
      <NationwideAvailability 
        specialtyName={stateName}
        onExploreAllLocations={onNavigateToDomainAreas}
        onFindNearYou={onNavigateToDomainAreas}
      />

      {/* 11. Maximize Your Practice Revenue Section (Moved after NationwideAvailability) */}
      <MaximizePracticeRevenueSection 
        stateName={stateName}
        onBookCall={scrollToAudit}
        onCallClick={() => {
          window.location.href = "tel:6307013986";
        }}
      />

      {/* 12. Review Section (Physician Video Testimonials & Verified Reviews) */}
      <TestimonialsSection />

      {/* 13. Lead Capture & FAQ Section */}
      <GotQuestionsAuditSection 
        id="consultation-form"
      />

    </div>
  );
}

export default IllinoisMedicalBillingPage;
