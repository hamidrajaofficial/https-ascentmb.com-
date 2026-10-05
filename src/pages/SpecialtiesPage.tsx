import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { SpecialtiesHeroSection } from '../components/SpecialtiesHeroSection';
import { SpecialtiesCardsDirectory } from '../components/SpecialtiesCardsDirectory';
import { GotQuestionsAuditSection } from '../components/GotQuestionsAuditSection';

export interface SpecialtiesPageProps {
  onBackToHome?: () => void;
  onSelectSpecialty?: (specialtyName: string) => void;
  onNavigateToRcmServices?: () => void;
}

export function SpecialtiesPage({
  onBackToHome,
  onSelectSpecialty,
  onNavigateToRcmServices
}: SpecialtiesPageProps) {

  const scrollToAudit = () => {
    const el = document.getElementById('consultation-form') || document.getElementById('specialty-appointment-form');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCards = () => {
    const el = document.getElementById('specialties-directory-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* Breadcrumb Navigation Bar */}
      <div className="w-full bg-[#f4f7fa] border-b border-gray-200/70 py-2.5 px-4 sm:px-6">
        <div className="max-w-[1250px] mx-auto flex items-center gap-2 text-xs sm:text-[13px] text-gray-500 font-medium">
          <button 
            onClick={onBackToHome}
            className="flex items-center gap-1 text-[#154377] hover:text-[#98C340] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          
          <span className="text-[#154377] font-semibold">Specialties</span>
        </div>
      </div>

      {/* 1. Hero Section (Specialties ka hero section with lead capture / consultation form) */}
      <SpecialtiesHeroSection 
        onBookCall={scrollToAudit}
        onAuditClick={scrollToAudit}
        onBrowseCards={scrollToCards}
      />

      {/* 2. Cards Section (All specialties cards directory with search, filter, and direct links) */}
      <SpecialtiesCardsDirectory 
        id="specialties-directory-section"
        onSelectSpecialty={onSelectSpecialty}
      />

      {/* 3. FAQ Section with Forms Component */}
      <GotQuestionsAuditSection 
        id="consultation-form"
      />

    </div>
  );
}

export default SpecialtiesPage;
