import React from 'react';
import { 
  CalendarDays, 
  Calculator, 
  Phone, 
  Check 
} from 'lucide-react';

export interface FooterServicesPagesCtaProps {
  onBookStrategyCall?: () => void;
  onCalculateSavings?: () => void;
  phoneNumber?: string;
  phoneDisplay?: string;
  titleWhite?: string;
  titleGold?: string;
  description?: string;
  checklist?: string[];
  id?: string;
}

export function FooterServicesPagesCta({
  onBookStrategyCall,
  onCalculateSavings,
  phoneNumber = '6307013986',
  phoneDisplay = '630-701-3986',
  titleWhite = 'Stop the AR drowning.',
  titleGold = 'Start the pilot.',
  description = '30–minute strategy call. We map your eligibility, coding, claims, denial, and AR workflows, then recommend the right RCM stack. Pilot in 14 days. No long–term contract.',
  checklist = [
    'No long-term contract',
    'Month-to-month after pilot',
    'No setup fees',
    'Replace any team member in 48 hrs'
  ],
  id = 'footer-services-cta'
}: FooterServicesPagesCtaProps) {
  const handleScrollToForm = () => {
    const el = document.getElementById('consultation-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onBookStrategyCall) {
      onBookStrategyCall();
    }
  };

  const handleSavingsClick = () => {
    if (onCalculateSavings) {
      onCalculateSavings();
    } else {
      handleScrollToForm();
    }
  };

  return (
    <section 
      id={id} 
      className="relative py-20 lg:py-24 bg-[#0d0722] overflow-hidden text-white"
    >
      {/* Right Glow Accent Shape */}
      <div 
        className="absolute -right-24 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-l from-[#154377]/35 via-[#154377]/20 to-transparent blur-3xl pointer-events-none" 
      />
      <div 
        className="absolute left-1/4 -bottom-20 w-80 h-80 rounded-full bg-[#98C340]/10 blur-3xl pointer-events-none" 
      />

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Main H2 Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold font-outfit tracking-tight leading-tight mb-5 text-white">
          {titleWhite} <span className="text-[#98C340]">{titleGold}</span>
        </h2>

        {/* Subtitle Paragraph */}
        <p className="text-gray-300 text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
          {description}
        </p>

        {/* 3 Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-10">
          
          {/* 1. Book Strategy Call Button (Golden) */}
          <button
            onClick={handleScrollToForm}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#FBBF24] hover:bg-[#F59E0B] text-[#0A1B3F] font-bold text-[15px] sm:text-[16px] shadow-[0_4px_20px_rgba(251,191,36,0.3)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.45)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <CalendarDays className="w-5 h-5 text-[#0A1B3F]" />
            <span>Book A Strategy Call</span>
          </button>

          {/* 2. Calculate Savings Button (White) */}
          <button
            onClick={handleSavingsClick}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white hover:bg-gray-100 text-[#1E124A] font-bold text-[15px] sm:text-[16px] shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.25)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Calculator className="w-5 h-5 text-[#4F46E5]" />
            <span>Calculate Your Savings</span>
          </button>

          {/* 3. Phone Direct Dial Button (Outlined) */}
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-bold text-[15px] sm:text-[16px] transition-all transform hover:-translate-y-0.5 cursor-pointer backdrop-blur-sm"
          >
            <Phone className="w-5 h-5 text-white" />
            <span>{phoneDisplay}</span>
          </a>

        </div>

        {/* Bottom Checklist with Gold Checkmarks */}
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-8 text-xs sm:text-sm text-gray-300 font-medium">
          {checklist.map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FBBF24] flex-shrink-0 stroke-[3]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
