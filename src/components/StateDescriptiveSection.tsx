import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { StateMapGraphic } from './StateMapGraphic';
import texasFamousBuildingImg from '../assets/images/texas_famous_building_1793714321471.jpg';
import illinoisFamousBuildingImg from '../assets/images/illinois_famous_building_1793714349128.jpg';

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
  const isFlorida = stateName.toLowerCase() === 'florida';
  const isCalifornia = stateName.toLowerCase() === 'california';
  const isNewYork = stateName.toLowerCase() === 'new york';

  // Dynamic landmark/building background image for the selected state
  let bgImage = texasFamousBuildingImg;
  if (isIllinois) {
    bgImage = illinoisFamousBuildingImg;
  } else if (isFlorida) {
    bgImage = 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1600&q=80';
  } else if (isCalifornia) {
    bgImage = 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1600&q=80';
  } else if (isNewYork) {
    bgImage = 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1600&q=80';
  }

  // State code abbreviation
  const code = stateCode || (isTexas ? 'TX' : isIllinois ? 'IL' : isFlorida ? 'FL' : isCalifornia ? 'CA' : isNewYork ? 'NY' : stateName.substring(0, 2).toUpperCase());

  const handleCall = () => {
    if (onCallClick) {
      onCallClick();
    } else {
      window.location.href = phoneNumber;
    }
  };

  return (
    <section className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-24 text-white border-t border-b border-white/10">
      {/* 1. Background Image (State Landmark Architecture) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none transition-all duration-700"
        style={{ 
          backgroundImage: `url(${bgImage})` 
        }}
      />

      {/* 2. Light Overlay Color #11345D (Requested overlay color #11345D) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-colors duration-500"
        style={{ 
          backgroundColor: 'rgba(17, 52, 93, 0.83)' 
        }}
      />

      {/* Subtle brand ambient glows */}
      <div className="absolute top-1/2 right-6 -translate-y-1/2 w-96 h-96 bg-[#98C340]/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-10 left-6 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* 3. Section Content */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Descriptive Content & Brand Action Buttons */}
          <div className="w-full lg:w-[60%] flex flex-col items-start text-left">
            
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20 backdrop-blur-xs shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#98C340]" />
              <span>{stateName} Provider Support</span>
            </span>

            {/* Heading with brand green highlight */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold font-outfit text-white leading-tight tracking-tight mb-6">
              Medical Billing Services in <span className="text-[#98C340]">{stateName}</span> ({code})
            </h2>

            {/* Paragraph with bolded keyword */}
            <p className="text-blue-100 text-sm sm:text-base md:text-[17px] leading-relaxed font-normal mb-8 max-w-2xl">
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

          {/* Right Column: State Map Silhouette Filled with Authentic State Flag */}
          <div className="w-full lg:w-[40%] flex items-center justify-center lg:justify-end">
            <StateMapGraphic stateName={stateName} />
          </div>

        </div>
      </div>
    </section>
  );
}

export default StateDescriptiveSection;
