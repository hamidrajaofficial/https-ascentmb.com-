import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  expertiseList: string[];
}

export const rcmServicesList: ServiceDetail[] = [
  {
    id: 'billing',
    title: 'Medical Billing',
    subtitle: 'Customized billing solutions for operational efficiency and data security',
    expertiseList: [
      'Customized Billing solutions',
      'Operational Efficiency',
      'Prevent data breaches',
      'Clean Claim Submission (98%)',
      'Specialty-Specific Billing Rules',
    ],
  },
  {
    id: 'coding',
    title: 'Medical Coding',
    subtitle: 'Accurate claims submission complying with all standard regulations',
    expertiseList: [
      'Accurate Claims Submission',
      'Compliance with Regulations',
      'Reduced Administrative Burden',
      'CPT, ICD-10 & HCPCS Coding',
      'Certified AAPC / AHIMA Coders',
    ],
  },
  {
    id: 'credentialing',
    title: 'Medical Credentialing',
    subtitle: 'Fast provider enrollment to reduce legal and financial risk',
    expertiseList: [
      'Improved Patient Trust',
      'Reduced Legal and Financial Risk',
      'Improved Practice Growth',
      'Medicare & Medicaid Enrollment',
      'Commercial Payer Contracting (CAQH)',
    ],
  },
  {
    id: 'denial',
    title: 'Denial Management',
    subtitle: 'Targeted appeal strategies to prioritize high-value claims',
    expertiseList: [
      'Fewer Repeat Denials',
      'Improved Cash Flow',
      'Prioritization of High-Value Denials',
      'Root-Cause Denial Analytics',
      'Prompt Appeal Submissions',
    ],
  },
  {
    id: 'ar',
    title: 'Accounts Receivable',
    subtitle: 'Reduce turnaround time and recover aging revenue faster',
    expertiseList: [
      'Reduced Turnaround Time',
      'Higher Recovery Rates',
      'Decreased A/R Aging',
      'Old AR Cleanup (90+ & 120+ Days)',
      'Direct Payer Dispute Resolution',
    ],
  },
  {
    id: 'eligibility',
    title: 'Eligibility Verification',
    subtitle: 'Real-time coverage verification to decrease bad debt',
    expertiseList: [
      'First-Pass Claim Acceptance',
      'Faster Reimbursement',
      'Decreased Bad Debt',
      'Real-Time Copay & Deductible Checks',
      'Coverage & Prior Authorization',
    ],
  },
  {
    id: 'posting',
    title: 'Payment Posting',
    subtitle: 'Faster payment reconciliation and trend reporting for better payer relations',
    expertiseList: [
      'Faster Payment Reconciliation',
      'Insightful Payment Trend Reports',
      'Improved Payer Relations',
      'ERA & Manual EOB Posting',
      'Denial & Short-Pay Tagging',
    ],
  },
  {
    id: 'patient-statement',
    title: 'Patient Statement',
    subtitle: 'Clear, timely statements that eliminate patient billing disputes',
    expertiseList: [
      'Customized Statements',
      'Fewer Payment Disputes',
      'Timely Statement Delivery',
      'Online Patient Payment Portals',
      'Transparent Balance Notifications',
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    subtitle: 'Targeted healthcare marketing to grow patient volume & local reach',
    expertiseList: [
      'Responsive Website Design',
      'Search engine Optimization (SEO)',
      'GBP Optimization & Management',
      'SEO Optimized content',
      'Practice Reputation Management',
    ],
  },
  {
    id: 'scheduling',
    title: 'Scheduling',
    subtitle: 'Patient appointment scheduling with integrated pre-authorization',
    expertiseList: [
      'Appointment Scheduling & Reminders',
      'Pre-Authorization Checks',
      'Medical Necessity Checks',
      'Reduced Patient No-Shows',
      'Intake & Registration Support',
    ],
  },
  {
    id: 'billing-audit',
    title: 'Medical Billing Audit',
    subtitle: 'Identify hidden errors, denial risks, and compliance loopholes',
    expertiseList: [
      'Hidden Errors Identification',
      'Claim Denials Investigation',
      'Compliance Gap Analysis',
      'Chart Documentation Audits',
      'Revenue Leakage Prevention',
    ],
  },
  {
    id: 'transcription',
    title: 'Medical Transcription Services',
    subtitle: 'Accurate, HIPAA-compliant transcription and outsourcing solutions',
    expertiseList: [
      'Medical Transcription',
      'Transcription Outsourcing',
      'US Services',
      'EHR Direct Integration',
      'Rapid 24-Hour Turnaround',
    ],
  },
];

// Fallback exported data for mobile menu compatibility
export const rcmMegaMenuData = rcmServicesList.map((s) => ({
  title: s.title,
  items: s.expertiseList.slice(0, 3),
}));

interface RcmMegaMenuProps {
  onClose?: () => void;
  onSelectService?: (serviceId: string) => void;
}

export function RcmMegaMenu({ onClose, onSelectService }: RcmMegaMenuProps) {
  const [activeService, setActiveService] = useState<ServiceDetail>(rcmServicesList[0]);

  const handleServiceClick = (service: ServiceDetail) => {
    setActiveService(service);
    if (onSelectService) {
      onSelectService(service.id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.16, ease: 'easeOut' }}
      className="absolute top-full left-0 w-full bg-[#F8FAF3] shadow-[0_18px_40px_rgba(21,67,119,0.08)] border-t border-[#98C340]/20 z-50 pointer-events-auto"
    >
      <div className="max-w-[1250px] mx-auto px-6 md:px-8 lg:px-10 pt-4 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* 1. Left Column: Brand Highlight Box (3 cols) */}
          <div className="lg:col-span-3 xl:col-span-3 bg-[#154377] text-white rounded-2xl p-6 flex flex-col justify-between shadow-md h-full min-h-[340px]">
            <div>
              <h3 className="text-2xl font-bold font-outfit leading-tight tracking-tight mb-3">
                All-in-One <br />
                <span className="text-[#98C340]">RCM Growth</span>
              </h3>
              
              <p className="text-white/90 text-[13px] leading-relaxed mb-6 font-normal">
                Comprehensive solutions: Medical Billing, Coding, Credentialing, Denial Management, and Audit strategies tailored for enterprise &amp; practice growth.
              </p>
            </div>

            <div>
              <a
                href="#services"
                onClick={onClose}
                className="inline-flex items-center justify-center w-full px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#98C340] hover:bg-[#85ab36] transition-all duration-200 cursor-pointer shadow-sm text-center"
              >
                Explore All Services
              </a>
            </div>
          </div>

          {/* 2. Middle Column: "What We Do" (5 cols) with Scrollbar */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col">
            <div className="pb-2 mb-2 border-b border-[#98C340]/20 flex items-center justify-between">
              <h3 className="text-[17px] font-bold text-[#154377] font-outfit tracking-tight">
                What We Do
              </h3>
              <span className="text-xs text-gray-500 font-medium">
                {rcmServicesList.length} Services Available
              </span>
            </div>

            {/* Scrollable list of All 12 Medical Billing Services */}
            <div className="max-h-[330px] overflow-y-auto pr-2 space-y-1 scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300">
              {rcmServicesList.map((service) => {
                const isActive = activeService.id === service.id;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveService(service)}
                    onClick={() => handleServiceClick(service)}
                    className={`p-2.5 rounded-xl cursor-pointer transition-all duration-150 ${
                      isActive
                        ? 'bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-[#98C340]/30 ring-1 ring-[#98C340]/20'
                        : 'hover:bg-white/70 border border-transparent'
                    }`}
                  >
                    <h4
                      className={`text-[14px] font-bold font-outfit mb-0.5 transition-colors flex items-center justify-between ${
                        isActive ? 'text-[#154377]' : 'text-gray-900'
                      }`}
                    >
                      <span>{service.title}</span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-0.5 text-[#98C340]' : 'opacity-0'}`} />
                    </h4>
                    <p className="text-[12px] text-gray-500 font-normal leading-relaxed line-clamp-1">
                      {service.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Right Column: Promo Card (Billing Services As Low As 2.99%) */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col h-full min-h-[340px]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md flex flex-col items-center justify-between text-center p-6 sm:p-7 bg-gradient-to-b from-[#F2F8E7] via-[#EEF7DE] to-[#E4F2CC] border border-[#98C340]/40">
              {/* Checkerboard subtle pattern overlay */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(45deg, #98C340 25%, transparent 25%), linear-gradient(-45deg, #98C340 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #98C340 75%), linear-gradient(-45deg, transparent 75%, #98C340 75%)`,
                  backgroundSize: '16px 16px',
                  backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px'
                }}
              />

              {/* Main Content */}
              <div className="relative z-10 w-full flex flex-col items-center">
                <h3 className="text-[#154377] text-[22px] sm:text-[25px] font-extrabold font-outfit leading-tight tracking-tight max-w-[260px]">
                  Billing Services As Low As
                </h3>

                <div className="text-[54px] sm:text-[62px] font-extrabold text-[#528114] font-outfit tracking-tight leading-none my-3 drop-shadow-xs">
                  2.99%
                </div>

                <div className="w-[75%] h-[2.5px] bg-[#98C340]/60 rounded-full my-3" />

                <p className="text-[#154377]/85 text-[13px] sm:text-[14px] font-medium leading-relaxed max-w-[260px] text-center">
                  Boost the revenue of your healthcare practice with our Professional Medical Billing Solutions.
                </p>
              </div>

              {/* CTA Button */}
              <div className="relative z-10 w-full pt-4">
                <button
                  type="button"
                  onClick={() => {
                    if (onClose) onClose();
                    onSelectService?.('billing');
                  }}
                  className="w-full inline-flex items-center justify-center py-3.5 px-6 bg-[#98C340] hover:bg-[#85ab36] text-white text-[17px] font-bold rounded-[6px] border border-[#7ea72d] shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  Get Benefit Now!
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
