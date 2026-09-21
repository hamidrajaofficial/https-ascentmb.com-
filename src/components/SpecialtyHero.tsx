import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  FileCheck,
  Activity
} from 'lucide-react';
import defaultDoctorHeroImg from '../assets/images/about_us_doctor_portrait.jpg';

interface SpecialtyHeroProps {
  specialtyPillText?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  descriptionParagraph1?: string;
  descriptionParagraph2?: string;
  doctorImageUrl?: string;
  specialtyBadgeTitle?: string;
  onHireService?: () => void;
  onExploreSolutions?: () => void;
}

export function SpecialtyHero({ 
  specialtyPillText = "AI-DRIVEN REVENUE CYCLE OPTIMIZATION & CLEAN CLAIMS",
  headlineLine1 = "Maximize Clinical Collections",
  headlineLine2 = "Zero-Error Claims & 98.5% First-Pass Yield",
  descriptionParagraph1 = "Eliminate complex procedural billing bottlenecks with AAPC-certified specialists who master catheterization bundles, diagnostic imaging, echocardiography splits, and pre-authorization verifications. Our intelligent claim-scrubbing architecture catches coding oversights before submission.",
  descriptionParagraph2 = "Accelerate cash velocity, reduce aging accounts receivable down to 21 days, and recover suppressed reimbursement while your clinical staff dedicates 100% of their focus to patient diagnostics and critical care.",
  doctorImageUrl = defaultDoctorHeroImg,
  specialtyBadgeTitle = "Certified Specialty Coders",
  onHireService, 
  onExploreSolutions 
}: SpecialtyHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F7FAFC] via-[#F4F9ED]/50 to-[#EEF5FA] pt-8 pb-32 sm:pb-36 lg:pb-40 border-b border-gray-100">
      
      {/* Ambient background lighting */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#154377]/6 blur-3xl" />
        <div className="absolute top-1/4 right-10 w-[550px] h-[550px] rounded-full bg-[#98C340]/12 blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.035]" 
          style={{
            backgroundImage: `radial-gradient(#154377 1.2px, transparent 1.2px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Top Brand Eyebrow Pill */}
            <div className="inline-flex items-center space-x-2 mb-3">
              <span className="text-xs font-bold text-[#154377] bg-[#154377]/10 border border-[#154377]/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#98C340]" />
                <span>{specialtyPillText}</span>
              </span>
            </div>

            {/* Main Headline without Specialty Name in Title */}
            <h1 className="font-outfit font-extrabold tracking-tight mb-4 text-left leading-[1.14]">
              <span className="block text-[32px] sm:text-[42px] lg:text-[48px] text-[#154377]">
                {headlineLine1}
              </span>
              <span className="block text-[28px] sm:text-[38px] lg:text-[44px] text-[#98C340]">
                {headlineLine2}
              </span>
            </h1>

            {/* Description Paragraphs */}
            <div className="text-gray-700 text-[15px] sm:text-[16px] leading-relaxed space-y-3 mb-8 max-w-2xl font-normal">
              <p>{descriptionParagraph1}</p>
              <p>{descriptionParagraph2}</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onHireService}
                className="bg-[#98C340] hover:bg-[#85ab36] text-white font-bold text-[15px] py-3.5 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center space-x-2 cursor-pointer group active:scale-[0.99]"
              >
                <span>Get Free Practice Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreSolutions}
                className="bg-white hover:bg-gray-50 text-[#154377] border-2 border-[#154377]/20 hover:border-[#154377] font-bold text-[15px] py-3.5 px-7 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer active:scale-[0.99]"
              >
                Explore Specialized Solutions
              </button>
            </div>
          </div>

          {/* Right Doctor Portrait & Badges - Direct Image Display without Orbit */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center">
            <div className="relative max-w-[420px] w-full">
              <img 
                src={doctorImageUrl} 
                alt="Specialty Medical Billing and Coders"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800";
                }}
                className="w-full h-auto object-cover rounded-2xl shadow-xl border-2 border-white"
              />

              <div className="absolute -bottom-3 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md border border-gray-100 p-3 sm:p-4 rounded-xl shadow-xl flex items-center space-x-3 z-20">
                <div className="w-10 h-10 rounded-full bg-[#98C340] flex items-center justify-center text-white shadow-md">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-gray-500">{specialtyBadgeTitle}</div>
                  <div className="text-[14px] font-bold text-[#154377]">AAPC &amp; AHIMA Accredited</div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 bg-[#154377] text-white px-3.5 py-1.5 rounded-full shadow-lg text-xs font-bold flex items-center space-x-1.5 z-20">
                <Activity className="w-4 h-4 text-[#98C340]" />
                <span>&lt; 3% Denial Rate</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
