import React from 'react';
import { Calendar } from 'lucide-react';
import heroDoctorsTeamImg from '../assets/images/hero_doctors_team_1787328070635.jpg';

interface MedicalBillingHeroProps {
  onBookCall?: () => void;
  onAboutClick?: () => void;
}

export function MedicalBillingHero({ onBookCall, onAboutClick }: MedicalBillingHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#154377] text-white pt-[30px] pb-28 sm:pb-32 lg:pb-36 mt-1">
      
      {/* Background Doctor Team Photography with Navy Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transform"
        style={{ 
          backgroundImage: `url(${heroDoctorsTeamImg})`,
        }}
      />

      {/* Dark Navy / Indigo Tinted Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0c2543]/95 via-[#154377]/90 to-[#0e2c50]/98 backdrop-blur-[2px]" />

      {/* Decorative ambient lighting elements matching brand green */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#98C340]/25 via-[#154377]/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow */}
        <div className="flex flex-col items-center mb-5">
          <div className="eyebrow text-white font-bold text-[13px] tracking-wider mb-3 text-center">
            Struggling With Claim Denials And Slow Reimbursements?
          </div>
          <div className="w-12 h-[2px] bg-[#98C340]"></div>
        </div>

        {/* Main Headline with Brand Accent */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white font-outfit leading-[1.18] tracking-tight max-w-5xl mx-auto mb-6">
          Professional{' '}
          <span className="text-[#98C340] font-bold">
            Medical Billing Services
          </span>{' '}
          That Boost Revenue &amp; Reduce Denials
        </h1>

        {/* Description Paragraph */}
        <p className="text-gray-200 text-sm sm:text-base md:text-[17px] font-normal leading-relaxed max-w-4xl mx-auto mb-10 text-white/90">
          Ascent Medical Billing optimizes revenue cycle management services with expert medical billing consulting and end-to-end outsourced billing solutions. We serve 40+ specialties nationwide, achieving a 98.5% clean claims rate, delivering faster reimbursements, fewer denials, and stronger practice cash flow. Healthcare providers trust us for reliable medical billing services, claims processing, and RCM outsourcing that maximize revenue.
        </p>

        {/* Centered CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {/* Button 1: Brand Primary Green Pill */}
          <button 
            onClick={onAboutClick || onBookCall}
            className="bg-[#98C340] hover:bg-[#85ab36] text-white font-bold py-3.5 px-8 rounded-full text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-lime-600/25 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
          >
            About Ascent Medical Billing
          </button>

          {/* Button 2: Deep Navy Glass Pill */}
          <button 
            onClick={onBookCall}
            className="bg-[#0f2e52]/90 hover:bg-[#154377] border border-white/20 text-white font-semibold py-3.5 px-8 rounded-full text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#98C340]" />
            <span>Book Appointment</span>
          </button>
        </div>

      </div>
    </section>
  );
}

