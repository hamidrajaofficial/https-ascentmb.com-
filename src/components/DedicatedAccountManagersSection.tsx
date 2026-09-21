import React, { useState } from 'react';
import { X, ArrowUpRight, ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export interface DedicatedAccountManagersSectionProps {
  specialtyName?: string;
  onAuditClick?: () => void;
}

export function DedicatedAccountManagersSection({
  specialtyName,
  onAuditClick
}: DedicatedAccountManagersSectionProps) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const handleAuditClick = () => {
    if (onAuditClick) {
      onAuditClick();
    } else {
      const el = document.getElementById('contact-section') || document.getElementById('consultation-form');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Overlapping Brand Photos Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-[540px] lg:max-w-none">
              
              {/* Back Image (Practice Facility / Office Exterior) */}
              <div className="w-[85%] sm:w-[82%] rounded-[24px] overflow-hidden shadow-xl border border-gray-100 bg-gray-100 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=900" 
                  alt="Ascent Medical Practice Facility"
                  className="w-full h-[280px] sm:h-[340px] md:h-[380px] object-cover hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm border border-gray-200/80 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#98C340] animate-pulse"></span>
                  <span className="text-[12px] font-bold text-[#154377] font-outfit tracking-wide">
                    Ascent Operations Center
                  </span>
                </div>
              </div>

              {/* Front Overlapping Image (Dedicated Billing Team Office with Ascent Branding) */}
              <div className="absolute -bottom-8 sm:-bottom-10 right-0 sm:right-2 w-[72%] sm:w-[68%] rounded-[24px] overflow-hidden shadow-2xl border-[6px] border-white bg-white z-20">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                    alt="Ascent Dedicated Billing Specialists"
                    className="w-full h-[220px] sm:h-[260px] md:h-[290px] object-cover"
                  />
                  
                  {/* Subtle office brand plaque overlay mimicking office wall branding */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-100 shadow-md flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#98C340]"></div>
                    <span className="text-[11px] font-bold font-outfit text-[#154377] tracking-wider uppercase">
                      Ascent Billing
                    </span>
                  </div>

                  {/* Live Support Indicator */}
                  <div className="absolute bottom-3 left-3 bg-[#154377]/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-[11px] font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#98C340]" />
                    <span>Named Coder Assigned</span>
                  </div>
                </div>
              </div>

              {/* Circular Badge / Seal (Overlapping both photos on bottom left) */}
              <div className="absolute bottom-2 sm:bottom-4 left-[22%] sm:left-[24%] z-30 transform -translate-x-1/2">
                <div 
                  onClick={() => setIsPlayingVideo(true)}
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#154377] shadow-[0_12px_30px_rgba(21,67,119,0.35)] border-4 border-white flex items-center justify-center relative cursor-pointer group hover:scale-105 transition-transform"
                >
                  {/* Rotating Circular Text */}
                  <svg className="w-full h-full animate-[spin_24s_linear_infinite] pointer-events-none" viewBox="0 0 160 160">
                    <path
                      id="ascentSealPath"
                      d="M 80, 80 m -58, 0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
                      fill="none"
                    />
                    <text className="text-[10px] sm:text-[11px] font-bold fill-white tracking-[0.28em] uppercase">
                      <textPath href="#ascentSealPath" startOffset="50%" textAnchor="middle">
                        • ASCENT CARE • 2025 BEST RCM •
                      </textPath>
                    </text>
                  </svg>

                  {/* Center Vibrant Brand Green Play Circle */}
                  <div className="absolute inset-0 m-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#98C340] group-hover:bg-[#86ad35] flex items-center justify-center shadow-md transition-colors">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white translate-x-0.5" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Content & Actions */}
          <div className="lg:col-span-6 lg:pl-4 pt-10 lg:pt-0">
            
            {/* Main Heading */}
            <h2 className="text-[30px] sm:text-[38px] lg:text-[42px] font-bold font-outfit text-[#154377] leading-[1.18] tracking-tight mb-5">
              Dedicated Account Managers And Billers{' '}
              <span className="text-[#98C340]">Who Know Your Practice By Name</span>
            </h2>

            {/* Intro Description */}
            <p className="text-gray-600 text-[15.5px] sm:text-[16.5px] leading-[1.7] mb-7 font-normal">
              You get a named contact. The same coders work your charts every week. The same claims team handles your appeals. Over time they learn your {specialtyName ? `${specialtyName} ` : ''}providers, your payers, and your patterns, which is how revenue stops slipping and denials stop repeating.
            </p>

            {/* Callout Card 1: Problem / Industry Gap (Dark Navy) */}
            <div className="bg-[#0B2545] rounded-[10px] p-4 sm:p-5 flex items-start sm:items-center gap-3.5 text-white shadow-sm mb-3.5 border border-[#154377]/40">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                <X className="w-4 h-4 text-white/70 stroke-[2.5]" />
              </div>
              <p className="text-white text-[14px] sm:text-[15px] font-medium leading-snug">
                Most agencies leave gaps between credentialing, billing, and patient statements. Money falls into those gaps.
              </p>
            </div>

            {/* Callout Card 2: Ascent Solution (Clean White / Brand Accent) */}
            <div className="bg-white rounded-[10px] p-4 sm:p-5 flex items-start sm:items-center gap-3.5 border border-gray-200 shadow-sm mb-8 hover:border-[#98C340]/60 transition-colors">
              <div className="w-6 h-6 rounded-[5px] bg-[#98C340] text-white flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 shadow-sm">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
              <p className="text-[#154377] text-[14px] sm:text-[15px] font-semibold leading-snug">
                Ascent Medical Billing gives you one team, one contact, and one steady follow-up rhythm.
              </p>
            </div>

            {/* CTA Pill Button */}
            <div>
              <button
                onClick={handleAuditClick}
                className="inline-flex items-center gap-4 pl-3 pr-8 py-2.5 sm:py-3 rounded-full bg-[#98C340] hover:bg-[#86ad35] text-white font-bold text-[14px] sm:text-[15px] tracking-wide uppercase transition-all shadow-md hover:shadow-xl cursor-pointer group"
              >
                {/* Brand Navy Circular Icon with White Arrow */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#154377] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5" />
                </div>
                <span>CLAIM FREE PRACTICE AUDIT</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Video Modal (Optional preview if user clicks on the play seal) */}
      {isPlayingVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full relative shadow-2xl">
            <button 
              onClick={() => setIsPlayingVideo(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold font-outfit text-[#154377] mb-2">
              Ascent Dedicated Billing Team
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Watch how our certified {specialtyName ? `${specialtyName} ` : ''}account managers and coders integrate seamlessly with your EHR workflow.
            </p>
            <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                alt="Video thumbnail"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                <div className="w-14 h-14 rounded-full bg-[#98C340] flex items-center justify-center mb-2 shadow-lg">
                  <Play className="w-6 h-6 text-white fill-white translate-x-0.5" />
                </div>
                <span className="font-semibold text-sm">Practice Workflow Tour</span>
              </div>
            </div>
            <div className="mt-5 flex justify-end">
              <button 
                onClick={() => {
                  setIsPlayingVideo(false);
                  handleAuditClick();
                }}
                className="bg-[#98C340] hover:bg-[#85ab36] text-white px-5 py-2 rounded-lg font-semibold text-sm transition-colors"
              >
                Schedule Live Practice Walkthrough
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
