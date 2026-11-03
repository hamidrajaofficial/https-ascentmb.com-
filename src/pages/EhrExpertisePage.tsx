import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { EhrExpertiseHeroSection } from '../components/EhrExpertiseHeroSection';
import { EhrWhatWeDoSection } from '../components/EhrWhatWeDoSection';
import { EhrExpertiseCardsSection } from '../components/EhrExpertiseCardsSection';
import { EhrIntegrationFeatures } from '../components/EhrIntegrationFeatures';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { GotQuestionsAuditSection } from '../components/GotQuestionsAuditSection';

export interface EhrExpertisePageProps {
  onBackToHome?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToRcmServices?: () => void;
  onNavigateToSpecialties?: () => void;
  onSelectSpecialty?: (specialtyName: string) => void;
}

export function EhrExpertisePage({
  onBackToHome,
  onNavigateToContact,
  onNavigateToRcmServices,
  onNavigateToSpecialties,
  onSelectSpecialty
}: EhrExpertisePageProps) {

  const scrollToAudit = () => {
    if (onNavigateToContact) {
      onNavigateToContact();
      return;
    }
    const el = document.getElementById('consultation-form') || document.getElementById('audit-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDirectory = () => {
    const el = document.getElementById('ehr-software-directory');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectEhr = (ehrName: string) => {
    if (onNavigateToContact) {
      onNavigateToContact();
      return;
    }
    const el = document.getElementById('consultation-form') || document.getElementById('audit-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* Breadcrumb Navigation Bar */}
      <div className="w-full bg-[#f4f7fa] border-b border-gray-200/70 py-2.5 px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto flex items-center gap-2 text-xs sm:text-[13px] text-gray-500 font-medium">
          <button 
            onClick={onBackToHome}
            className="flex items-center gap-1 text-[#154377] hover:text-[#98C340] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          
          <span className="text-[#154377] font-semibold">Our EHR Expertise</span>
        </div>
      </div>

      {/* 1. Hero Section - Exact Design Match to Reference Screenshot */}
      <EhrExpertiseHeroSection 
        onBookCall={onNavigateToContact || scrollToAudit}
        onBrowseSoftware={scrollToDirectory}
      />

      {/* 1.5. What We Do - Medical EDI & Clearinghouse Solutions Section */}
      <EhrWhatWeDoSection 
        onBookCall={onNavigateToContact || scrollToAudit}
      />

      {/* 2. Interactive EHR Software Cards Directory */}
      <EhrExpertiseCardsSection 
        id="ehr-software-directory"
        onSelectEhr={handleSelectEhr}
      />

      {/* 3. Integration Features & Process Workflow */}
      <EhrIntegrationFeatures 
        onGetAudit={onNavigateToContact || scrollToAudit}
      />

      {/* 4. Client Testimonials & Practice Reviews */}
      <TestimonialsSection />

      {/* 5. Got Questions & Free Practice EHR Audit Form */}
      <GotQuestionsAuditSection 
        id="consultation-form"
      />

    </div>
  );
}

export default EhrExpertisePage;
