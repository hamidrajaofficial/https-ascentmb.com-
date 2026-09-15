import React from 'react';
import { Building2 } from 'lucide-react';
import billingDeskImg from '../assets/images/medical_billing_desk_1787690184246.jpg';
import handshakeImg from '../assets/images/doctor_handshake_rcm_1786720921645.jpg';
import stethoscopeImg from '../assets/images/stethoscope_chart.webp';

interface FasterReimbursementsSectionProps {
  onDiscoverMore?: () => void;
}

export function FasterReimbursementsSection({ onDiscoverMore }: FasterReimbursementsSectionProps) {
  const handleDiscoverMoreClick = () => {
    if (onDiscoverMore) {
      onDiscoverMore();
      return;
    }
    const target = document.getElementById('consultation-form') || document.getElementById('contact-form') || document.querySelector('form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about-us-section" 
      className="w-full bg-white pt-24 sm:pt-28 lg:pt-32 pb-[80px] relative z-10"
    >
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 xl:gap-20">
          
          {/* Left Column - 3 Overlapping Images with Narrow Borders as in Screenshot */}
          <div className="w-full lg:w-[48%] flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[460px] sm:max-w-[490px] aspect-[1/1.04] sm:aspect-[1/1.02] select-none">
              
              {/* Background Decorative Dot Grid (Top Right) */}
              <div 
                className="absolute top-2 right-4 w-32 h-28 pointer-events-none opacity-40 z-0"
                style={{
                  backgroundImage: 'radial-gradient(#64748b 1.5px, transparent 1.5px)',
                  backgroundSize: '16px 16px',
                }}
                aria-hidden="true"
              />

              {/* Background Decorative Dot Grid (Bottom Center-Left) */}
              <div 
                className="absolute bottom-4 left-8 w-36 h-24 pointer-events-none opacity-40 z-0"
                style={{
                  backgroundImage: 'radial-gradient(#64748b 1.5px, transparent 1.5px)',
                  backgroundSize: '16px 16px',
                }}
                aria-hidden="true"
              />

              {/* Image 1: Top-Left Card - Billing Specialist with Monitor */}
              <div className="absolute top-0 left-0 w-[63%] aspect-[4/3.4] bg-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-[0_10px_30px_rgba(21,67,119,0.12)] border border-gray-100 z-10 group transition-transform duration-300 hover:scale-[1.01]">
                <div className="relative w-full h-full rounded-[6px] overflow-hidden">
                  <img
                    id="about-billing-specialist-img"
                    src={billingDeskImg}
                    alt="Medical billing specialist managing patient records"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  {/* Soft Medical Emblem overlay on monitor matching screenshot */}
                  <div className="absolute top-[28%] left-[28%] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/85 backdrop-blur-[2px] shadow-sm flex items-center justify-center pointer-events-none">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#154377]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" fill="url(#blueGreenGradient)" />
                      <defs>
                        <linearGradient id="blueGreenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#154377" />
                          <stop offset="100%" stopColor="#98C340" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Image 3: Bottom-Right Card - Stethoscope on Medical Billing Forms */}
              <div className="absolute bottom-2 right-0 w-[59%] aspect-[4/3.4] bg-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-[0_12px_35px_rgba(21,67,119,0.14)] border border-gray-100 z-10 group transition-transform duration-300 hover:scale-[1.01]">
                <div className="relative w-full h-full rounded-[6px] overflow-hidden">
                  <img
                    id="about-stethoscope-img"
                    src={stethoscopeImg}
                    alt="Stethoscope on medical insurance billing documentation"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Image 2: Center Overlapping Card - Doctor Handshake Partnership */}
              <div className="absolute top-[23%] left-[33%] sm:left-[34%] w-[48%] sm:w-[47%] aspect-[4/3.3] bg-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-[0_16px_45px_rgba(21,67,119,0.20)] border border-gray-100 z-20 group transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative w-full h-full rounded-[6px] overflow-hidden">
                  <img
                    id="about-handshake-img"
                    src={handshakeImg}
                    alt="Doctor and practice manager handshake partnership"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-[52%] flex flex-col items-start text-left">
            
            {/* Eyebrow */}
            <div className="flex flex-col items-start mb-5">
              <div className="eyebrow flex items-center text-[#154377] font-bold text-[13px] tracking-wider mb-3">
                <Building2 className="w-4 h-4 mr-2 text-[#98C340]" />
                Who We Are
              </div>
              <div className="w-12 h-[2px] bg-[#98C340]"></div>
            </div>

            {/* Main Headline with Dual Color */}
            <h2 
              id="who-we-are-heading"
              className="text-[32px] md:text-[40px] lg:text-[40px] font-bold font-outfit text-[#154377] mb-6 leading-[1.1] tracking-tight"
            >
              Your Trusted Partner in <span className="text-[#98C340]">Medical Billing</span> &amp; <span className="text-[#98C340]">Practice Management</span>
            </h2>

            {/* Paragraph Description */}
            <p 
              id="who-we-are-description"
              className="text-gray-500 font-normal leading-relaxed mb-8 text-[17px]"
            >
              We are a leading medical billing company in the USA, dedicated to simplifying the healthcare revenue cycle. With years of industry expertise, we offer comprehensive solutions that include Provider Credentialing &amp; Enrollment, Medical Billing and Coding Services, Practice Management, and Healthcare Revenue Cycle Management. Our in-house EHR software ensures seamless management of medical billing records, optimizing your practice’s efficiency and profitability.
            </p>

            {/* Action Button */}
            <button
              id="who-we-are-discover-more-btn"
              onClick={handleDiscoverMoreClick}
              className="bg-[#154377] hover:bg-[#98C340] text-white font-bold text-sm sm:text-[15px] px-8 py-3.5 rounded-[6px] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer inline-flex items-center justify-center tracking-wide"
            >
              DISCOVER MORE
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
