import React from 'react';
import { ArrowRight } from 'lucide-react';

export function InsuranceBillingCtaSection() {
  return (
    <section className="py-12 bg-white relative z-20">
      <div className="max-w-[1250px] mx-auto px-4">
        
        {/* Banner Container */}
        <div className="relative w-full rounded-[24px] overflow-hidden bg-gradient-to-r from-[#154377] via-[#1c5391] to-[#256bb8] shadow-xl min-h-[280px] lg:min-h-[320px] flex flex-col md:flex-row items-center justify-between">
          
          {/* Decorative Pattern Backgrounds */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Striped Circle Pattern bottom left */}
            <div className="absolute -bottom-10 left-[45%] opacity-20 w-44 h-44 rounded-full border border-white/30 flex items-center justify-center">
              <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="none">
                <defs>
                  <pattern id="diagonal-stripe-1" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="10" stroke="white" strokeWidth="3" />
                  </pattern>
                </defs>
                <circle cx="50" cy="50" r="48" fill="url(#diagonal-stripe-1)" />
              </svg>
            </div>

            {/* Striped Circle Pattern top right */}
            <div className="absolute -top-12 right-6 opacity-20 w-36 h-36 rounded-full border border-white/30 flex items-center justify-center">
              <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="none">
                <defs>
                  <pattern id="diagonal-stripe-2" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="10" stroke="white" strokeWidth="3" />
                  </pattern>
                </defs>
                <circle cx="50" cy="50" r="48" fill="url(#diagonal-stripe-2)" />
              </svg>
            </div>

            {/* Ambient Radial Soft Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          {/* Left Content Area */}
          <div className="w-full md:w-1/2 p-8 sm:p-10 lg:p-14 z-10 flex flex-col items-start justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-white font-outfit mb-3 leading-tight tracking-tight drop-shadow-sm">
              Insurance and <span className="text-[#98C340]">Billing Assistance</span>
            </h2>
            
            <p className="text-white/90 text-sm sm:text-[15px] font-normal leading-relaxed mb-8 max-w-[480px]">
              Maximize your clinical cash flow with accurate medical coding, rapid claim submissions, and full denial management designed to ease your practice's administrative burden.
            </p>

            <button className="bg-white hover:bg-gray-100 text-[#154377] font-bold py-3.5 px-8 rounded-[12px] text-sm sm:text-[15px] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer group">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 text-[#98C340] transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Visual Area */}
          <div className="w-full md:w-1/2 h-full flex items-end justify-center md:justify-end z-10 pr-0 md:pr-8 lg:pr-14 self-end mt-4 md:mt-0">
            <div className="relative w-full max-w-[380px] lg:max-w-[440px] flex items-end">
              <img 
                src="/src/assets/images/doctors_cta_team_1787326302290.jpg" 
                alt="Medical Doctors and Billing Assistance Team"
                className="w-full h-auto max-h-[300px] lg:max-h-[340px] object-contain object-bottom drop-shadow-2xl rounded-b-[24px] md:rounded-none"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
