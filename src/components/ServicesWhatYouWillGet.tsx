import React, { useState } from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  FileCheck2, 
  DollarSign, 
  RotateCcw, 
  BarChart3,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

interface ServicesWhatYouWillGetProps {
  onConsultation?: () => void;
}

export function ServicesWhatYouWillGet({ onConsultation }: ServicesWhatYouWillGetProps) {
  // 6 Deliverables organized into 2 distinct slide sections of 3 cards each
  const sectionOneCards = [
    {
      icon: ShieldCheck,
      title: "Patient Preauthorization",
      description: "Complete prior authorizations secured directly from insurance payers before procedures to ensure fast approvals and eliminate denials."
    },
    {
      icon: UserCheck,
      title: "Eligibility & Benefits Verification",
      description: "Real-time 24-48 hour verification of co-pays, deductibles, coinsurance, and active policy coverage before patient check-in."
    },
    {
      icon: FileCheck2,
      title: "Clean Claim Submission",
      description: "AAPC certified coding scrubs and multi-tier payer validation achieving a 99% first-pass clean claim submission rate in 24 hours."
    }
  ];

  const sectionTwoCards = [
    {
      icon: DollarSign,
      title: "Payment Posting & Reconciliation",
      description: "Daily automated ERA/EFT and manual EOB posting with line-item auditing, secondary payer billing, and zero-balance reconciliation."
    },
    {
      icon: RotateCcw,
      title: "Denial Management & Rapid Appeals",
      description: "Root-cause denial analysis with aggressive 48-hour appeals on underpaid or rejected claims to recover all clinical revenue."
    },
    {
      icon: BarChart3,
      title: "A/R Follow-Up & Real-Time Analytics",
      description: "Proactive 30/60/90+ day aging accounts receivable recovery coupled with 24/7 transparent client portal access and executive KPI reports."
    }
  ];

  // 2 Slide Sections
  const [activeSection, setActiveSection] = useState<0 | 1>(0);

  return (
    <section 
      id="services-what-you-will-get"
      className="w-full bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-y border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Full-width Center-Aligned Header (No top navigation arrows) */}
        <div className="w-full max-w-5xl mx-auto text-center mb-12 sm:mb-14">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-[4px] bg-[#154377]/5 border border-[#154377]/15 text-[#154377] font-semibold text-xs uppercase tracking-wider mb-3.5 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#98C340]" />
            What You Will Get
          </div>
          
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#154377] font-outfit leading-[1.2] tracking-tight mb-4 text-center">
            Ascent Way of <span className="text-[#98C340]">Transforming Medical Billing Services</span> for Healthcare Practices
          </h2>
          
          {/* 4-Line Paragraph on desktop */}
          <p className="max-w-4xl mx-auto text-[#4A5D78] text-[15px] sm:text-[16px] leading-[1.8] font-normal text-center">
            Ascent delivers an end-to-end, high-velocity revenue cycle model designed to maximize practice reimbursements and eliminate claim denials with utmost accuracy and efficiency. Our certified billing and coding specialists manage every stage of your clinical cash flow—from upfront patient authorization to final payer settlement. We empower physicians and clinics to reduce overhead, accelerate payment cycles, and maintain 100% financial transparency without long-term binding contracts.
          </p>
        </div>

        {/* 2-Section Slide Track */}
        <div className="overflow-hidden py-2">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeSection * 100}%)`
            }}
          >
            {/* Slide Section 1 (3 cards in 1 row) */}
            <div className="w-full shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch px-1">
              {sectionOneCards.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="h-full bg-white rounded-[4px] border border-slate-200/90 hover:border-[#154377]/40 px-4 sm:px-4.5 py-6 flex flex-col items-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_24px_rgba(21,67,119,0.08)] transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-[4px] bg-[#154377]/5 border border-[#154377]/10 flex items-center justify-center text-[#154377] mb-4 group-hover:bg-[#154377] group-hover:text-white transition-colors duration-300 shadow-xs">
                      <IconComponent className="w-7 h-7 transition-transform duration-300 group-hover:scale-105" />
                    </div>

                    <h3 className="font-bold text-[#154377] text-lg sm:text-[18.5px] leading-snug font-outfit mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-[#4A5D78] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Slide Section 2 (3 cards in 1 row) */}
            <div className="w-full shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch px-1">
              {sectionTwoCards.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="h-full bg-white rounded-[4px] border border-slate-200/90 hover:border-[#154377]/40 px-4 sm:px-4.5 py-6 flex flex-col items-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_24px_rgba(21,67,119,0.08)] transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-[4px] bg-[#154377]/5 border border-[#154377]/10 flex items-center justify-center text-[#154377] mb-4 group-hover:bg-[#154377] group-hover:text-white transition-colors duration-300 shadow-xs">
                      <IconComponent className="w-7 h-7 transition-transform duration-300 group-hover:scale-105" />
                    </div>

                    <h3 className="font-bold text-[#154377] text-lg sm:text-[18.5px] leading-snug font-outfit mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-[#4A5D78] text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2-Section Slide Controls (Bottom centered) */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => setActiveSection((prev) => (prev === 0 ? 1 : 0))}
            aria-label="Previous slide section"
            className="w-9 h-9 rounded-[4px] bg-white border border-slate-200 hover:border-[#154377] text-[#154377] hover:bg-[#154377] hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-2 px-1">
            <button
              onClick={() => setActiveSection(0)}
              aria-label="Section 1"
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeSection === 0 ? 'w-8 bg-[#98C340]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
            <button
              onClick={() => setActiveSection(1)}
              aria-label="Section 2"
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeSection === 1 ? 'w-8 bg-[#98C340]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          </div>

          <button
            onClick={() => setActiveSection((prev) => (prev === 0 ? 1 : 0))}
            aria-label="Next slide section"
            className="w-9 h-9 rounded-[4px] bg-white border border-slate-200 hover:border-[#154377] text-[#154377] hover:bg-[#154377] hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
