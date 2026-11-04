import React from 'react';
import { CheckCircle2, Calendar, Phone, ArrowRight, TrendingUp } from 'lucide-react';
import texasFamousBuildingImg from '../assets/images/texas_famous_building_1793714321471.jpg';
import illinoisFamousBuildingImg from '../assets/images/illinois_famous_building_1793714349128.jpg';

export interface MaximizePracticeRevenueSectionProps {
  stateName?: string;
  onBookCall?: () => void;
  onCallClick?: () => void;
}

export function MaximizePracticeRevenueSection({
  stateName = 'Texas',
  onBookCall,
  onCallClick
}: MaximizePracticeRevenueSectionProps) {
  const isIllinois = stateName.toLowerCase() === 'illinois';
  const isTexas = stateName.toLowerCase() === 'texas';
  
  const bgImg = isIllinois ? illinoisFamousBuildingImg : texasFamousBuildingImg;

  const handleCall = () => {
    if (onCallClick) {
      onCallClick();
    } else {
      window.location.href = 'tel:6307013986';
    }
  };

  const handleBook = () => {
    if (onBookCall) {
      onBookCall();
    } else {
      const el = document.getElementById('consultation-form') || document.getElementById('contact-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#154377] bg-gradient-to-b from-[#0c2543]/98 via-[#154377]/92 to-[#0e2c50]/98 text-white py-20 sm:py-24 lg:py-28">
      {/* Background Cityscape / Architecture with Navy Overlay (matching image_01538714.png) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity scale-105 pointer-events-none"
        style={{ 
          backgroundImage: `url(${bgImg})` 
        }}
      />

      {/* Brand Navy Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#98C340]/20 via-[#154377]/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* Content Container */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Brand Eyebrow with Divider */}
        <div className="flex flex-col items-center mb-5">
          <div className="eyebrow flex items-center text-white font-bold text-[13px] tracking-wider mb-3">
            <TrendingUp className="w-4 h-4 mr-2 text-[#98C340]" />
            Proven Revenue Acceleration in {stateName}
          </div>
          <div className="w-12 h-[2px] bg-[#98C340]"></div>
        </div>

        {/* H2 Title with Brand Highlight */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold font-outfit text-white leading-[1.2] tracking-tight max-w-4xl mx-auto mb-6">
          Maximize Your Practice Revenue with <span className="text-[#98C340]">Medical Billing Services</span> in {stateName}
        </h2>

        {/* Paragraph */}
        <p className="text-gray-200 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
          Every claim tells a story, and in {stateName}, that story changes with every payer, policy, and update. Our {stateName} medical billing service team makes sure your practice stays one step ahead of denials and delays. From real-time eligibility checks to automated reporting, we bring accuracy, speed, and compliance to every transaction.
        </p>

        {/* 3 Checkmark Bullets in 1 Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm md:text-[15px] font-medium text-white mb-10">
          <div className="inline-flex items-center gap-2.5 bg-white/5 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-full border border-white/10 sm:border-0">
            <CheckCircle2 className="w-5 h-5 text-[#98C340] shrink-0" />
            <span>Cost-Effective Solutions</span>
          </div>

          <div className="inline-flex items-center gap-2.5 bg-white/5 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-full border border-white/10 sm:border-0">
            <CheckCircle2 className="w-5 h-5 text-[#98C340] shrink-0" />
            <span>Adopts Latest Technology</span>
          </div>

          <div className="inline-flex items-center gap-2.5 bg-white/5 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-full border border-white/10 sm:border-0">
            <CheckCircle2 className="w-5 h-5 text-[#98C340] shrink-0" />
            <span>Improves Collection Efficiency</span>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={handleBook}
            className="w-full sm:w-auto bg-[#98C340] hover:bg-[#85ab36] text-white font-bold py-3.5 px-8 rounded-lg text-sm sm:text-[15px] transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2.5 cursor-pointer font-outfit uppercase tracking-wider"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Free {stateName} Billing Audit</span>
          </button>

          <button
            type="button"
            onClick={handleCall}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold py-3.5 px-7 rounded-lg text-sm sm:text-[15px] transition-all duration-200 backdrop-blur-xs flex items-center justify-center gap-2 cursor-pointer font-outfit uppercase tracking-wider"
          >
            <Phone className="w-4 h-4 text-[#98C340]" />
            <span>Call (630) 701-3986</span>
          </button>
        </div>

      </div>
    </section>
  );
}

export default MaximizePracticeRevenueSection;
