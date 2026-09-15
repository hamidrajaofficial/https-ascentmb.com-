import React from 'react';
import { Handshake, Mail, Calendar, Monitor, RotateCw, ThumbsUp, Heart } from 'lucide-react';
import dedicatedConsultantImg from '../assets/images/dedicated_billing_consultant.webp';

export interface FutureInnovationSectionProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  onLetsTalk?: () => void;
  imageSrc?: string;
  imageAlt?: string;
  subheading?: React.ReactNode;
  bulletPoints?: (string | React.ReactNode)[];
  className?: string;
}

const defaultDualColorTitle = (
  <>
    Get a Dedicated Billing Consultant for <span className="text-[#98C340]">Your Clinic’s Revenue Cycle Management</span>
  </>
);

export function FutureInnovationSection({
  title = defaultDualColorTitle,
  description = "Medical billing can be prone to errors, delays, and inefficiencies that affect your cash flow and profitability. BellMedEx’s billing associates streamline your clinic’s billing process by taking care of the entire RCM with real-time reports and analytics.",
  buttonText = "Let’s Talk",
  onButtonClick,
  onLetsTalk,
  imageSrc = dedicatedConsultantImg,
  imageAlt = "Dedicated Billing Consultant for Clinic Revenue Cycle Management",
  className = "py-[80px] bg-[#F8F9FB] relative z-10",
}: FutureInnovationSectionProps) {
  const handleClick = () => {
    if (onLetsTalk) {
      onLetsTalk();
      return;
    }
    if (onButtonClick) {
      onButtonClick();
      return;
    }
    const target = document.getElementById('consultation-form') || document.getElementById('contact-form') || document.querySelector('form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="dedicated-consultant-section" className={className}>
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 xl:gap-20">
          
          {/* Left Column: Content */}
          <div className="w-full lg:w-[52%] flex flex-col items-start text-left">
            
            {/* Eyebrow */}
            <div className="flex flex-col items-start mb-5">
              <div className="eyebrow flex items-center text-[#154377] font-bold text-[13px] tracking-wider mb-3">
                <Handshake className="w-4 h-4 mr-2 text-[#98C340]" />
                Dedicated RCM Support
              </div>
              <div className="w-12 h-[2px] bg-[#98C340]"></div>
            </div>

            {/* Heading with Dual Color */}
            <h2 
              id="dedicated-consultant-heading"
              className="text-[32px] md:text-[40px] lg:text-[40px] font-bold font-outfit text-[#154377] mb-6 leading-[1.1] tracking-tight"
            >
              {title}
            </h2>

            {/* Paragraph Description */}
            <p 
              id="dedicated-consultant-description"
              className="text-gray-500 font-normal leading-relaxed mb-8 text-[17px] max-w-2xl"
            >
              {description}
            </p>

            {/* Action Button */}
            <button
              id="dedicated-consultant-btn"
              onClick={handleClick}
              className="bg-[#154377] hover:bg-[#98C340] text-white font-bold text-sm sm:text-[15px] px-9 sm:px-11 py-3.5 rounded-[6px] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer inline-flex items-center justify-center tracking-wide"
            >
              {buttonText}
            </button>
          </div>

          {/* Right Column: Simple image display without card borders */}
          <div className="w-full lg:w-[48%] flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px] flex flex-col items-center">
              
              {/* Header Text - Center Aligned */}
              <div className="w-full pb-3.5 text-center">
                <p className="text-[12px] sm:text-[13px] text-gray-600 font-normal leading-snug">
                  Your day can be full without your business actually moving forward.
                </p>
                <p className="text-[11px] sm:text-[12px] font-extrabold text-[#98C340] uppercase tracking-wider mt-1">
                  DELEGATE THE BUSYWORK. FOCUS ON THE BIGGER PICTURE.
                </p>
              </div>

              {/* Picture Container - Simple display without surrounding card wrapper or borders */}
              <div className="relative w-full rounded-[18px] sm:rounded-[22px] overflow-hidden bg-[#154377]/5 aspect-[4/3]">
                <img
                  id="dedicated-consultant-img"
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://bellmedex.com/wp-content/uploads/2023/11/MB-S9-P1.webp";
                  }}
                />

                {/* Left Floating Action Pills with Real Text */}
                <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-2.5 z-20">
                  <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-sm px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.12)] border border-gray-100 hover:scale-105 transition-transform duration-200">
                    <div className="w-5 h-5 rounded-full bg-[#98C340]/15 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-3.5 h-3.5 text-[#98C340]" />
                    </div>
                    <span className="text-[11px] sm:text-[12px] font-bold text-[#154377] tracking-wider uppercase">
                      EMAILS
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-sm px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.12)] border border-gray-100 hover:scale-105 transition-transform duration-200">
                    <div className="w-5 h-5 rounded-full bg-[#98C340]/15 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-[#98C340]" />
                    </div>
                    <span className="text-[11px] sm:text-[12px] font-bold text-[#154377] tracking-wider uppercase">
                      SCHEDULING
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-sm px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.12)] border border-gray-100 hover:scale-105 transition-transform duration-200">
                    <div className="w-5 h-5 rounded-full bg-[#98C340]/15 flex items-center justify-center flex-shrink-0">
                      <Monitor className="w-3.5 h-3.5 text-[#98C340]" />
                    </div>
                    <span className="text-[11px] sm:text-[12px] font-bold text-[#154377] tracking-wider uppercase">
                      DATA ENTRY
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-sm px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.12)] border border-gray-100 hover:scale-105 transition-transform duration-200">
                    <div className="w-5 h-5 rounded-full bg-[#98C340]/15 flex items-center justify-center flex-shrink-0">
                      <RotateCw className="w-3.5 h-3.5 text-[#98C340]" />
                    </div>
                    <span className="text-[11px] sm:text-[12px] font-bold text-[#154377] tracking-wider uppercase">
                      FOLLOW-UPS
                    </span>
                  </div>
                </div>

                {/* Top-Right Floating Reaction Badges */}
                <div className="absolute right-3 sm:right-4 top-3.5 flex flex-col gap-2 z-20">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#98C340] text-white flex items-center justify-center shadow-lg shadow-[#98C340]/30 hover:scale-110 transition-transform duration-200">
                    <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                  </div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#98C340] text-white flex items-center justify-center shadow-lg shadow-[#98C340]/30 hover:scale-110 transition-transform duration-200">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                  </div>
                </div>

                {/* Bottom Highlight Banner in Real Text - Kept in 1 clean line */}
                <div className="absolute bottom-3 sm:bottom-4 left-2 right-2 sm:left-4 sm:right-4 z-20 flex justify-center">
                  <div className="bg-[#98C340] text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg shadow-[#98C340]/30 text-center max-w-[96%] flex items-center justify-center">
                    <p className="text-[10px] xs:text-[11px] sm:text-[12px] md:text-[12.5px] font-semibold tracking-normal sm:tracking-wide leading-none whitespace-nowrap">
                      Your time is better spent on the work that only you can do.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
