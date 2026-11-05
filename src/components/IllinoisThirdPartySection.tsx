import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Shield, Zap, PhoneCall } from 'lucide-react';

export const UNSPLASH_DOCTOR_PHOTOS = [
  {
    id: 'female-physician-hallway',
    label: 'Dr. Sarah (Physician with Stethoscope)',
    url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'male-specialist-clinic',
    label: 'Dr. Marcus (Healthcare Specialist)',
    url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'clinical-director-portrait',
    label: 'Dr. Elena (Clinical Director)',
    url: 'https://images.unsplash.com/photo-1594824813620-bf1a28a3818e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'consulting-physician',
    label: 'Dr. David (Medical Practitioner)',
    url: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1000&q=80',
  }
];

export interface IllinoisThirdPartySectionProps {
  stateName?: string;
  imageUrl?: string;
  onContactClick?: () => void;
  onCallClick?: () => void;
}

export function IllinoisThirdPartySection({
  stateName = 'Texas',
  imageUrl,
  onContactClick,
  onCallClick
}: IllinoisThirdPartySectionProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string>(
    imageUrl || UNSPLASH_DOCTOR_PHOTOS[0].url
  );
  const [imgError, setImgError] = useState(false);

  const paragraphText = "With our skilled team of medical billing specialists and our pledge to excellence, we can help you streamline your revenue cycle, decrease your administrative burden, and improve your cash flow. Contact us today and learn more about how we can help you improve your medical billing operations.";

  return (
    <section className="w-full bg-white text-gray-900 py-16 sm:py-20 lg:py-24 relative overflow-hidden border-t border-b border-gray-100">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#98C340]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#154377]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          
          {/* Left Column: Doctor Visual with #98C340 Arch Frame */}
          <div className="w-full lg:w-[48%] flex flex-col items-center shrink-0">
            <div className="relative max-w-[480px] w-full">
              
              {/* Outer Accent Frame in #98C340 set around the entire image */}
              <div 
                className="absolute -inset-2.5 sm:-inset-3.5 rounded-tl-[112px] sm:rounded-tl-[154px] rounded-br-3xl border-[2.5px] border-[#98C340] pointer-events-none z-10 opacity-90 shadow-sm"
                aria-hidden="true"
              />

              {/* Doctor Visual Container with solid #98C340 border */}
              <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[450px] rounded-tl-[100px] sm:rounded-tl-[140px] rounded-br-2xl overflow-hidden shadow-xl bg-[#091b33] border-[3.5px] border-[#98C340]">
                <img 
                  src={imgError ? 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80' : selectedPhoto} 
                  alt={`Doctor and medical billing specialist for ${stateName}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  onError={() => {
                    if (!imgError) setImgError(true);
                  }}
                  loading="eager"
                />
                
                {/* Subtle gradient vignette at bottom of image */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -bottom-4 right-2 sm:right-6 bg-white text-[#154377] px-4 py-2.5 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 z-20">
                <div className="w-8 h-8 rounded-lg bg-[#f4f9eb] flex items-center justify-center text-[#98C340]">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold font-outfit text-[#154377]">100% HIPAA &amp; BAA</div>
                  <div className="text-[10px] text-gray-500 font-medium">Certified Practice Security</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: H2 & Content (matching brand design) */}
          <div className="w-full lg:w-[52%] flex flex-col items-start">
            
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#154377]/5 text-[#154377] text-xs font-bold uppercase tracking-wider mb-4 border border-[#154377]/15">
              <Zap className="w-3.5 h-3.5 text-[#98C340]" />
              <span>Dedicated RCM Team</span>
            </span>

            {/* H2 Title with Brand Highlight */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold font-outfit text-[#154377] leading-tight tracking-tight mb-6">
              Third-Party <span className="text-[#98C340]">Medical Billing Services</span> in {stateName}
            </h2>

            {/* Body Paragraph */}
            <p className="text-slate-600 text-sm sm:text-base md:text-[17px] leading-relaxed font-normal mb-8">
              {paragraphText}
            </p>

            {/* Quick Benefits Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#98C340] shrink-0" />
                <span>Zero Long-Term Lock-in Contracts</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#98C340] shrink-0" />
                <span>Certified AAPC &amp; AHIMA Coders</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#98C340] shrink-0" />
                <span>24–48h Claim Submission Velocity</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#98C340] shrink-0" />
                <span>Sub-25 Day AR Guarantee</span>
              </div>
            </div>

            {/* Interactive Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onContactClick}
                className="w-full sm:w-auto bg-[#98C340] hover:bg-[#85ab36] text-white font-bold py-3.5 px-7 rounded-lg text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer font-outfit uppercase tracking-wider"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onCallClick}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#154377] border-2 border-[#154377] font-bold py-3.5 px-6 rounded-lg text-xs sm:text-sm transition-all duration-200 shadow-xs hover:shadow-md flex items-center justify-center gap-2 cursor-pointer font-outfit uppercase tracking-wider"
              >
                <PhoneCall className="w-4 h-4 text-[#98C340]" />
                <span>(630) 701-3986</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default IllinoisThirdPartySection;
