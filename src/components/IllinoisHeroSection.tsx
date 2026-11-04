import React from 'react';
import { CheckCircle2, Calendar, ArrowRight, ShieldCheck, Phone, Landmark } from 'lucide-react';
import texasFamousBuildingImg from '../assets/images/texas_famous_building_1793714321471.jpg';
import illinoisFamousBuildingImg from '../assets/images/illinois_famous_building_1793714349128.jpg';

export interface IllinoisHeroSectionProps {
  stateName?: string;
  bgImageUrl?: string;
  onBookCall?: () => void;
  onContactUs?: () => void;
}

export function IllinoisHeroSection({
  stateName = 'Texas',
  bgImageUrl,
  onBookCall,
  onContactUs
}: IllinoisHeroSectionProps) {
  const isIllinois = stateName.toLowerCase() === 'illinois';
  const isTexas = stateName.toLowerCase() === 'texas';
  const complianceLabel = isIllinois ? 'Illinois Medicaid Compliance' : `${stateName} Medicaid Compliance`;
  
  const heroBgImage = bgImageUrl || (isIllinois ? illinoisFamousBuildingImg : texasFamousBuildingImg);
  const landmarkName = isTexas ? 'Texas State Capitol, Austin' : isIllinois ? 'Willis Tower & Chicago Riverfront' : `${stateName} Landmark`;

  return (
    <section className="relative w-full overflow-hidden bg-[#154377] text-white pt-24 sm:pt-28 pb-32 sm:pb-36 lg:pb-40">
      {/* Background Image: Famous Landmark Building of the State */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-35 scale-100 transition-all duration-700 pointer-events-none"
        style={{ 
          backgroundImage: `url(${heroBgImage})` 
        }}
      />

      {/* Brand Navy Tint and Gradient Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0c2543]/95 via-[#154377]/90 to-[#0e2c50]/98 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#98C340]/25 via-[#154377]/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* Main Container */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Brand Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-semibold text-blue-100 mb-6 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-[#98C340]" />
          <span>Premier {stateName} Medical Billing &amp; RCM Services</span>
        </div>

        {/* Hero Title with Brand Lime Highlight */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold font-outfit text-white leading-[1.18] tracking-tight max-w-4xl mx-auto mb-6">
          Take Control with Expert <span className="text-[#98C340]">Medical Billing Services</span> in {stateName}
        </h1>

        {/* Subtitle Paragraph */}
        <p className="text-blue-100/90 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
          {stateName} providers lose thousands of dollars annually due to overlooked claim errors and delayed payments. A proven medical billing company in {stateName} fixes leaks, speeds up collections, and keeps your practice financially strong from month to month.
        </p>

        {/* 3 Checkmark bullets in 1 row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm md:text-[15px] font-medium text-white mb-10">
          <div className="inline-flex items-center gap-2 bg-white/5 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-full border border-white/10 sm:border-0">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#98C340] shrink-0" />
            <span>{complianceLabel}</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/5 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-full border border-white/10 sm:border-0">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#98C340] shrink-0" />
            <span>Audit-Ready Billing</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/5 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-full border border-white/10 sm:border-0">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#98C340] shrink-0" />
            <span>40% Faster Payer Approvals</span>
          </div>
        </div>

        {/* Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onBookCall}
            className="w-full sm:w-auto bg-[#98C340] hover:bg-[#85ab36] text-white font-bold py-3.5 px-8 rounded-lg text-sm sm:text-[15px] transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2.5 cursor-pointer font-outfit uppercase tracking-wider"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Game Plan Call</span>
          </button>

          <button
            type="button"
            onClick={onContactUs}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold py-3.5 px-7 rounded-lg text-sm sm:text-[15px] transition-all duration-200 backdrop-blur-xs flex items-center justify-center gap-2 cursor-pointer font-outfit uppercase tracking-wider"
          >
            <Phone className="w-4 h-4 text-[#98C340]" />
            <span>Call (630) 701-3986</span>
          </button>
        </div>

      </div>

      {/* Subtle Landmark Attribution Tag */}
      <div className="absolute bottom-5 right-4 sm:right-8 z-10 hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[11px] text-gray-300 font-medium">
        <Landmark className="w-3.5 h-3.5 text-[#98C340]" />
        <span>{landmarkName}</span>
      </div>
    </section>
  );
}

export default IllinoisHeroSection;
