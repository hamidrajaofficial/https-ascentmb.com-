import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Send, 
  RotateCcw, 
  BarChart3, 
  ArrowRight 
} from 'lucide-react';

export interface OnboardingStep {
  step: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export interface FastOnboardingSectionProps {
  titlePrefix?: string;
  titleHighlight?: string;
  subtitle?: string;
  steps?: OnboardingStep[];
  bannerBadgeValue?: string;
  bannerBadgeLabel?: string;
  bannerTitlePrefix?: string;
  bannerTitleHighlight?: string;
  bannerDesc?: string;
  bannerButtonText?: string;
  onCalculateSavings?: () => void;
  onStrategyCall?: () => void;
}

const defaultSteps: OnboardingStep[] = [
  {
    step: 1,
    title: 'Eligibility & Pre-Auth',
    desc: 'Verify patient coverage, co-pays, and prior authorizations upfront to eliminate front-end denials.',
    icon: <ShieldCheck className="w-6 h-6 text-white stroke-[2.2]" />,
  },
  {
    step: 2,
    title: 'Accurate Coding & Entry',
    desc: 'AAPC-certified coders review clinical charts, applying accurate CPT, ICD-10, and modifier codes with 98% precision.',
    icon: <FileText className="w-6 h-6 text-white stroke-[2.2]" />,
  },
  {
    step: 3,
    title: 'Claim Scrubbing & Submission',
    desc: 'Multi-layer rules engine scrubs claims and submits electronically within 24–48 hours for first-pass approvals.',
    icon: <Send className="w-6 h-6 text-white stroke-[2.2]" />,
  },
  {
    step: 4,
    title: 'Denial & AR Management',
    desc: 'Proactive follow-up on unpaid claims, rapid appeal turnaround, and keeping AR days strictly under 30.',
    icon: <RotateCcw className="w-6 h-6 text-white stroke-[2.2]" />,
  },
  {
    step: 5,
    title: 'Payment Posting & Analytics',
    desc: 'Prompt ERA/EOB payment reconciliations, patient invoicing, and transparent monthly financial analytics.',
    icon: <BarChart3 className="w-6 h-6 text-white stroke-[2.2]" />,
  },
];

export function FastOnboardingSection({
  titlePrefix = 'How We Work in',
  titleHighlight = 'Medical Billing Services',
  subtitle = "Our proven 5-stage medical billing workflow is built to eliminate denials, accelerate reimbursements, and ensure seamless revenue cycle management without long-term contracts.",
  steps = defaultSteps,
  bannerBadgeValue = '98%',
  bannerBadgeLabel = 'Clean',
  bannerTitlePrefix = '98% Clean Claim Rate',
  bannerTitleHighlight = 'With Faster Reimbursements',
  bannerDesc = 'Ascent Medical Billing eliminates cash flow gaps and minimizes denials with dedicated specialty billing experts and month-to-month freedom.',
  bannerButtonText = 'Claim Your Free Billing Audit',
  onCalculateSavings,
  onStrategyCall,
}: FastOnboardingSectionProps) {
  // 1st card active by default. Hovering any other card activates it.
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section className="py-[80px] bg-white relative overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#154377] font-outfit leading-tight tracking-tight mb-4">
            {titlePrefix}{' '}
            <span className="text-[#98C340]">{titleHighlight}</span>
          </h2>
          <p className="text-[#556987] text-[16px] sm:text-[17px] font-normal">
            {subtitle}
          </p>
        </div>

        {/* 5 Connected Steps Grid with Centered Passing Line */}
        <div 
          className="relative mb-16 lg:mb-20"
          onMouseLeave={() => setActiveStep(1)}
        >
          
          {/* Continuous Connecting Line directly passing through the exact vertical center of the circles */}
          <div 
            className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-[#98C340]/40 via-[#154377] to-[#98C340]/40 z-0" 
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((item) => {
              const isActive = activeStep === item.step;

              return (
                <div 
                  key={item.step}
                  onMouseEnter={() => setActiveStep(item.step)}
                  onClick={onStrategyCall}
                  className={`group flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-[#f8fcf2] border border-[#d4ebb3] shadow-[0_6px_24px_rgba(152,195,64,0.18)] -translate-y-1' 
                      : 'border border-transparent hover:bg-gray-50'
                  }`}
                >
                  {/* Step Circle with Relevant Icon & Active Elevation Ring */}
                  <div className="relative mb-5 flex items-center justify-center">
                    <div 
                      className={`w-14 h-14 rounded-full bg-gradient-to-tr from-[#154377] to-[#98C340] text-white flex items-center justify-center transition-all duration-300 border-[3.5px] border-white z-10 ${
                        isActive
                          ? 'scale-110 shadow-[0_6px_22px_rgba(21,67,119,0.4)] ring-4 ring-[#98C340]/30'
                          : 'shadow-[0_4px_16px_rgba(21,67,119,0.2)] group-hover:scale-105'
                      }`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 
                    className={`text-[17px] lg:text-[18px] font-bold font-outfit mb-2.5 transition-colors ${
                      isActive ? 'text-[#154377]' : 'text-[#154377]/90 group-hover:text-[#154377]'
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-[#556987] text-[13.5px] sm:text-[14px] leading-relaxed font-normal max-w-[220px]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Banner Card */}
        <div className="max-w-[1140px] mx-auto rounded-[2px] bg-gradient-to-r from-[#154377] via-[#1a4f8b] to-[#98C340] shadow-[0_12px_40px_rgba(21,67,119,0.25)] p-5 sm:p-7 lg:p-8 relative overflow-hidden border border-white/20">
          
          {/* Subtle background glow effect */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute left-1/3 -top-12 w-48 h-48 rounded-full bg-[#98C340]/20 blur-xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            
            {/* Left side: Stat Icon + Copy */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 flex-1">
              
              {/* Stat Rounded Icon Badge - Radius 2px with Primary & Secondary gradient */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[2px] bg-gradient-to-br from-[#154377] to-[#98C340] shadow-[0_4px_18px_rgba(21,67,119,0.35)] flex flex-col items-center justify-center flex-shrink-0 text-white border border-white/40">
                <span className="text-xl sm:text-2xl font-black font-outfit leading-none">{bannerBadgeValue}</span>
                <span className="text-[9px] font-extrabold uppercase tracking-wider leading-none mt-0.5 opacity-90">{bannerBadgeLabel}</span>
              </div>

              {/* Text Area */}
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold font-outfit text-white leading-snug">
                  {bannerTitlePrefix} <span className="text-[#98C340] font-bold">{bannerTitleHighlight}</span>
                </h3>
                <p className="text-blue-50/90 text-[14px] sm:text-[15px] leading-relaxed mt-1 font-normal max-w-[620px]">
                  {bannerDesc}
                </p>
              </div>

            </div>

            {/* Right side: High-contrast Button - Radius 2px, Primary brand with secondary accent, no yellow */}
            <div className="flex-shrink-0 w-full sm:w-auto flex justify-center">
              <button
                onClick={onCalculateSavings}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[2px] bg-[#154377] hover:bg-[#0f3460] text-white font-bold text-[15px] shadow-[0_4px_20px_rgba(21,67,119,0.35)] hover:shadow-[0_6px_24px_rgba(21,67,119,0.45)] transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap border border-white/25"
              >
                <span>{bannerButtonText}</span>
                <ArrowRight className="w-4 h-4 text-[#98C340] stroke-[2.5]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
