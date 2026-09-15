import React, { useState } from 'react';
import { 
  Users, 
  ShieldCheck, 
  Activity, 
  BarChart3, 
  Lock, 
  Workflow,
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export interface ProcessStepItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface MedicalBillingProcessTimelineProps {
  onConsultationClick?: () => void;
}

const stepsData: ProcessStepItem[] = [
  {
    id: '01',
    title: 'Dedicated Billing Specialists',
    description: 'Dedicated billing specialists assigned to your practice.',
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: '02',
    title: 'Secure Insurance Verification',
    description: 'Secure insurance verification before every claim submission.',
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    id: '03',
    title: 'Continuous Claim Tracking',
    description: 'Continuous claim tracking and proactive denial follow-ups.',
    icon: <Activity className="w-5 h-5" />,
  },
  {
    id: '04',
    title: 'Transparent Reporting',
    description: 'Transparent reporting with real-time billing updates.',
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    id: '05',
    title: 'HIPAA-Compliant Workflows',
    description: 'HIPAA-compliant workflows across every stage of the billing cycle.',
    icon: <Lock className="w-5 h-5" />,
  },
  {
    id: '06',
    title: 'Internal Collaboration',
    description: 'Internal collaboration with coding, credentialing, and audit teams.',
    icon: <Workflow className="w-5 h-5" />,
  },
];

export function MedicalBillingProcessTimeline({
  onConsultationClick,
}: MedicalBillingProcessTimelineProps) {
  // Step 1 active by default
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-[#FAFCFF] relative overflow-hidden border-t border-gray-100">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: H2 Heading & Supporting Description */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col justify-start">
            
            {/* Small Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f9eb] text-[#154377] text-xs font-bold uppercase tracking-wider mb-4 w-max border border-[#d4ebb3]">
              End-To-End Workflow
            </div>

            {/* Main H2 Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#154377] font-outfit leading-[1.18] tracking-tight mb-6">
              How Our Medical Billing<br />
              <span className="text-[#98C340]">Process Works</span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-[#556987] text-[15px] sm:text-[16px] leading-[1.8] mb-8 font-normal">
              Behind every successful claim is a clear billing process. Our outsource medical billing services are built to keep claims moving from patient registration to payment posting with fewer delays and billing errors. Every medical billing service follows a structured workflow, helping practices improve reimbursement while maintaining accurate documentation and payer compliance.
            </p>

            {/* Trust Highlights */}
            <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#154377] bg-white border border-[#D4E8F5] rounded-xl px-4 py-3 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#98C340] flex-shrink-0" />
                <span>99.2% First-Pass Clean Claim Acceptance</span>
              </div>
              <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#154377] bg-white border border-[#D4E8F5] rounded-xl px-4 py-3 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#98C340] flex-shrink-0" />
                <span>100% HIPAA-Compliant & ISO Certified</span>
              </div>
            </div>

            {/* Call to Action Button */}
            {onConsultationClick && (
              <div className="mt-8">
                <button
                  onClick={onConsultationClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#98C340] hover:bg-[#85ab36] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Schedule Process Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>

          {/* Right Column: 6 Connected Step Nodes with Brand Icons (Card Removed) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="relative flex flex-col">
              
              {stepsData.map((step, idx) => {
                const isHovered = hoveredIdx === idx;
                const isLast = idx === stepsData.length - 1;

                return (
                  <div
                    key={step.id}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onClick={() => setHoveredIdx(hoveredIdx === idx ? null : idx)}
                    className="group relative flex items-start gap-4 sm:gap-6 cursor-pointer"
                  >
                    {/* Left Node with Brand Icon & Connecting Vertical Line */}
                    <div className="relative flex flex-col items-center flex-shrink-0">
                      
                      {/* Step Circle with Brand Icon */}
                      <div
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-colors z-10 ${
                          isHovered
                            ? 'border-[#98C340] bg-[#98C340] text-white shadow-[0_0_16px_rgba(152,195,64,0.4)]'
                            : 'border-[#154377] bg-white text-[#154377] group-hover:border-[#98C340] group-hover:text-[#98C340]'
                        }`}
                      >
                        {step.icon}
                      </div>

                      {/* Connecting Line to next step */}
                      {!isLast && (
                        <div
                          className={`w-[2px] min-h-[36px] sm:min-h-[40px] transition-colors ${
                            isHovered ? 'bg-[#98C340]' : 'bg-[#98C340]/40 group-hover:bg-[#98C340]'
                          }`}
                          style={{ height: 'calc(100% - 46px)' }}
                        />
                      )}
                    </div>

                    {/* Right Content Block: H3 Heading & Simple Description */}
                    <div className={`flex-1 pb-5 ${!isLast ? 'border-b border-[#E3EFF7] mb-2' : 'mb-0'}`}>
                      
                      {/* H3 Heading */}
                      <h3
                        className={`text-[17px] sm:text-[18px] lg:text-[19px] font-bold font-outfit transition-colors pt-2 ${
                          isHovered
                            ? 'text-[#154377]'
                            : 'text-[#154377]/90 group-hover:text-[#154377]'
                        }`}
                      >
                        {step.title}
                      </h3>

                      {/* Supporting Content shown on hover / active */}
                      {isHovered && (
                        <div className="mt-2.5">
                          <p className="text-[#556987] text-[14px] sm:text-[14.5px] leading-relaxed font-normal bg-[#f8fcf2] border border-[#d4ebb3] rounded-xl p-3 sm:p-3.5">
                            {step.description}
                          </p>
                        </div>
                      )}

                    </div>
                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
