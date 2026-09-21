import React from 'react';
import { ArrowRight } from 'lucide-react';
import defaultDoctorImg from '../assets/images/doctor_img_1781555619836.jpg';

interface SpecialtyFrustrationsSectionProps {
  onConsultationClick?: () => void;
  specialtyName?: string;
  doctorPhotoUrl?: string;
}

export function SpecialtyFrustrationsSection({
  onConsultationClick,
  specialtyName = "Cardiology",
  doctorPhotoUrl = defaultDoctorImg
}: SpecialtyFrustrationsSectionProps) {
  return (
    <section className="relative w-full bg-[#FCFDFE] pt-16 sm:pt-20 lg:pt-24 pb-20 border-b border-gray-100 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-radial from-[#98C340]/10 via-[#154377]/5 to-transparent blur-3xl" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10 text-center">
        
        {/* Full-width Top Icon and Headline */}
        <div className="flex flex-col items-center justify-center mb-4 w-full">
          <div className="inline-flex items-center justify-center gap-3 mb-2 flex-wrap">
            <div className="w-12 h-12 rounded-full bg-[#154377]/10 flex items-center justify-center text-[#154377] flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#154377]">
                <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v2a3 3 0 0 1-1.3 2.47L17 22H7l-1.7-7.53A3 3 0 0 1 4 12V9a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4zm-2 5h4V6a2 2 0 1 0-4 0v1zm-2 4a1 1 0 0 0-1 1v2a1 1 0 0 0 .5.87L9 20h2v-5h2v5h2l1.5-5.13A1 1 0 0 0 17 14v-2a1 1 0 0 0-1-1H8z"/>
                <path d="M7 4L5 2m12 2l2-2" stroke="#98C340" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold font-outfit text-[#154377] tracking-tight">
              <span>{specialtyName} Billing </span>
              <span className="text-[#98C340]">Frustrations?</span>
            </h2>
          </div>

          <p className="text-[#154377] text-base sm:text-lg md:text-xl font-medium tracking-wide w-full max-w-4xl mx-auto">
            Ascent Medical Billing is the solution born from understanding your struggles.
          </p>
        </div>

        {/* Visual Diagram: Specialty Vector + Team Circle + Medical Bill */}
        <div className="relative my-12 sm:my-16 max-w-[1100px] mx-auto flex items-center justify-between">
          
          {/* 1. Left: Anatomical Organ / Specialty Illustration */}
          <div className="w-24 sm:w-36 md:w-48 flex-shrink-0 flex items-center justify-center relative z-10">
            <svg viewBox="0 0 200 220" className="w-full h-auto max-h-[170px] text-[#154377] drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M100 60 C80 20, 30 30, 35 80 C40 120, 80 160, 100 195 C120 160, 160 120, 165 80 C170 30, 120 20, 100 60 Z" stroke="#154377" fill="#154377" fillOpacity="0.03" />
              <path d="M75 40 C75 15, 95 15, 95 40" stroke="#154377" strokeWidth="3" strokeLinecap="round" />
              <path d="M105 35 C105 10, 125 10, 125 35" stroke="#154377" strokeWidth="3" strokeLinecap="round" />
              <path d="M100 70 Q90 110 65 130" stroke="#154377" strokeWidth="2" strokeDasharray="3 3" />
              <path d="M100 70 Q110 110 135 130" stroke="#154377" strokeWidth="2" strokeDasharray="3 3" />
              <path d="M85 90 Q100 115 115 90" stroke="#98C340" strokeWidth="2" />
            </svg>
          </div>

          {/* Center Connected Pulse Line */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 hidden sm:flex items-center justify-between px-16 pointer-events-none">
            <svg viewBox="0 0 800 100" className="w-full h-20 text-[#154377]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 0 50 L 120 50 L 135 25 L 145 75 L 160 15 L 175 85 L 190 50 L 260 50" />
              <path d="M 540 50 L 610 50 L 625 20 L 635 80 L 650 10 L 665 85 L 680 50 L 800 50" />
            </svg>
          </div>

          {/* 2. Center: Circular Team Badge with Text Around */}
          <div className="relative z-10 flex-shrink-0 mx-2 sm:mx-6">
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full p-2 bg-gradient-to-tr from-[#154377] via-[#2A65A0] to-[#98C340] shadow-xl flex items-center justify-center relative group">
              
              <div className="w-full h-full rounded-full overflow-hidden border-3 border-white bg-white relative">
                <img 
                  src={doctorPhotoUrl} 
                  alt="Certified Medical Coders"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800";
                  }}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#154377]/60 via-transparent to-transparent flex items-end justify-center pb-2">
                  <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-wider">
                    Ascent
                  </span>
                </div>
              </div>

              <div className="absolute -top-3 bg-white/95 backdrop-blur-xs text-[#154377] font-bold text-[10px] sm:text-[11px] px-3 py-0.5 rounded-full border border-gray-200 shadow-xs uppercase tracking-wider">
                Ascent Medical
              </div>
              <div className="absolute -bottom-3 bg-[#154377] text-white font-bold text-[10px] sm:text-[11px] px-3 py-0.5 rounded-full shadow-md whitespace-nowrap">
                Turning Bills into Revenue
              </div>
            </div>
          </div>

          {/* 3. Right: Medical Bill Document Card */}
          <div className="w-28 sm:w-36 md:w-44 flex-shrink-0 flex items-center justify-center relative z-10">
            <div className="w-full bg-white border-2 border-gray-300 rounded-xl p-3.5 sm:p-4 shadow-lg text-left">
              <div className="flex justify-center mb-2">
                <div className="w-7 h-7 rounded-sm bg-[#98C340] text-white flex items-center justify-center font-bold text-lg leading-none">
                  +
                </div>
              </div>
              
              <div className="text-[11px] sm:text-[12px] font-extrabold text-[#154377] text-center mb-3 tracking-wide uppercase">
                MEDICAL BILL
              </div>

              <div className="space-y-1.5">
                <div className="h-1.5 bg-[#154377]/30 rounded-full w-full" />
                <div className="h-1.5 bg-[#154377]/20 rounded-full w-4/5" />
                <div className="h-1.5 bg-[#154377]/20 rounded-full w-full" />
                <div className="h-1.5 bg-[#154377]/15 rounded-full w-3/4" />
                <div className="h-1.5 bg-[#98C340]/40 rounded-full w-5/6" />
              </div>

              <div className="mt-3 pt-2 border-t border-gray-100 flex justify-between items-center text-[9px] font-bold text-[#154377]">
                <span>TOTAL PAID</span>
                <span className="text-[#98C340]">98.5%</span>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width Explanatory Paragraphs */}
        <div className="w-full max-w-5xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed space-y-4 mb-10 text-center font-normal">
          <p>
            We use tech, but behind all that, we have certified {specialtyName} medical coders and billers. They are expert humans who bring real skill to your medical billing. They smooth out your entire medical billing process, ensuring your claims are spot-on accurate and submitted promptly. It's their sharp eyes and deep knowledge that really cut down those coding mistakes.
          </p>
          <p>
            As a leading medical billing company for {specialtyName} providers, Ascent Medical Billing goes beyond basic automation. We integrate advanced technology, revenue cycle management workflows, and the indispensable expertise of our coding and billing team. This powerful synergy accelerates and secures your payments.
          </p>
        </div>

        {/* CTA Consultation Button */}
        <div className="flex justify-center">
          <button
            onClick={onConsultationClick}
            className="bg-[#154377] hover:bg-[#0e2c50] text-white font-bold text-[15px] sm:text-[16px] py-3.5 px-9 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-[0.99] flex items-center space-x-2"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-4 h-4 ml-1 text-[#98C340]" />
          </button>
        </div>

      </div>
    </section>
  );
}
