import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { StateMapGraphic } from './StateMapGraphic';

export interface StateDescriptiveSectionProps {
  stateName?: string;
  stateCode?: string;
  phoneNumber?: string;
  phoneDisplay?: string;
  onContactClick?: () => void;
  onCallClick?: () => void;
}

export function StateDescriptiveSection({
  stateName = 'Texas',
  stateCode,
  phoneNumber = 'tel:6302737882',
  phoneDisplay = '(630) 273-7882',
  onContactClick,
  onCallClick
}: StateDescriptiveSectionProps) {
  const isTexas = stateName.toLowerCase() === 'texas';
  const isIllinois = stateName.toLowerCase() === 'illinois';

  // State code abbreviation
  const code = stateCode || (isTexas ? 'TX' : isIllinois ? 'IL' : stateName.substring(0, 2).toUpperCase());

  const handleCall = () => {
    if (onCallClick) {
      onCallClick();
    } else {
      window.location.href = phoneNumber;
    }
  };

  return (
    <section className="w-full bg-[#154377] bg-gradient-to-br from-[#0c2543] via-[#154377] to-[#0e2c50] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden border-t border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-[#98C340]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Descriptive Content & Brand Action Buttons */}
          <div className="w-full lg:w-[60%] flex flex-col items-start text-left">
            
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#98C340] text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
              <span>{stateName} Provider Support</span>
            </span>

            {/* Heading with brand green highlight */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold font-outfit text-white leading-tight tracking-tight mb-6">
              Medical Billing Services in <span className="text-[#98C340]">{stateName}</span> ({code})
            </h2>

            {/* Paragraph with bolded keyword */}
            <p className="text-gray-200 text-sm sm:text-base md:text-[17px] leading-relaxed font-normal mb-8 max-w-2xl">
              We offer the best <strong className="font-bold text-white">medical billing services</strong> in {stateName} to medical practitioners. Our team understands the importance of technological advancements in the medical billing industry. Our extensive knowledge and adaptation to state-of-the-art technology enable us to work with detailed and timely claim submissions and follow-ups, reduce claim denials, and boost your practice revenue.
            </p>

            {/* Brand Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#98C340] hover:bg-[#85ab36] text-white font-bold rounded-lg text-sm sm:text-[15px] transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer font-outfit uppercase tracking-wider"
              >
                <span>Contact Us Today!</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleCall}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold rounded-lg text-sm sm:text-[15px] transition-all duration-200 backdrop-blur-xs cursor-pointer font-outfit uppercase tracking-wider group"
              >
                <Phone className="w-4 h-4 text-[#98C340] group-hover:scale-110 transition-transform" />
                <span>{phoneDisplay}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Transparent State Map Silhouette with Brand Border and Unique State Seal/Flag */}
          <div className="w-full lg:w-[40%] flex items-center justify-center lg:justify-end">
            <StateMapGraphic stateName={stateName} />
          </div>

        </div>
      </div>
    </section>
  );
}

export default StateDescriptiveSection;
