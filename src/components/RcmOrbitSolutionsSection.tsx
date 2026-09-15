import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  link?: string;
}

interface RcmOrbitSolutionsSectionProps {
  onTalkToTeam?: () => void;
  onItemClick?: (item: SolutionItem) => void;
}

const leftSolutions: SolutionItem[] = [
  {
    id: '01',
    title: 'Revenue Optimization Solutions',
    description: 'Clean claims, accurate submissions, faster reimbursements, and improve collection rates.',
  },
  {
    id: '02',
    title: 'AR Recovery & Denial Prevention Solutions',
    description: 'Recover delayed payments and reduce denied claims.',
  },
  {
    id: '03',
    title: 'Provider Enrollment & Credentialing Solutions',
    description: 'Faster payer approvals and reduced enrollment delays.',
  },
  {
    id: '04',
    title: 'Eligibility & Authorization Solutions',
    description: 'Prevent claim rejections before services are rendered. Faster approvals.',
  },
];

const rightSolutions: SolutionItem[] = [
  {
    id: '05',
    title: 'End-to-End Revenue Cycle Solutions',
    description: 'Complete support from front desk to payment posting. Improve cash flow.',
  },
  {
    id: '06',
    title: 'Financial Performance Analytics',
    description: 'Clear reports and real-time insights into collections, AR and denials.',
  },
  {
    id: '07',
    title: 'Revenue Integrity Audits',
    description: 'Identify revenue leakage, coding risks and improve billing performance.',
  },
  {
    id: '08',
    title: 'Risk & Compliance Solutions',
    description: 'Accurate processes that support compliant billing workflows.',
  },
];

export function RcmOrbitSolutionsSection({
  onTalkToTeam,
  onItemClick,
}: RcmOrbitSolutionsSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFCFF] relative overflow-hidden">
      
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center">
          
          {/* Left Column (01 to 04) */}
          <div className="lg:col-span-4 flex flex-col gap-4 order-2 lg:order-1">
            {leftSolutions.map((item) => (
              <div
                key={item.id}
                onClick={() => onItemClick && onItemClick(item)}
                className="group relative bg-white border border-[#D4E8F5] hover:border-[#98C340]/60 rounded-2xl p-5 lg:p-6 shadow-[0_2px_12px_rgba(21,67,119,0.04)] hover:shadow-[0_8px_24px_rgba(152,195,64,0.15)] transition-all duration-300 flex items-start gap-4 cursor-pointer"
              >
                {/* Number Box */}
                <div className="w-12 h-12 rounded-xl bg-[#f4f9eb] group-hover:bg-[#98C340] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <span className="text-[17px] font-bold text-[#154377] group-hover:text-white font-outfit transition-colors duration-300">
                    {item.id}
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex-1 pr-4">
                  <h3 className="text-[16px] lg:text-[17px] font-bold text-[#154377] font-outfit mb-1.5 leading-snug group-hover:text-[#154377] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-[#556987] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Top Right Arrow */}
                <div className="absolute top-5 right-5 text-[#98C340] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.2]" />
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Clean Highlighted Card with Brand Colors */}
          <div className="lg:col-span-4 relative flex items-center justify-center py-6 lg:py-0 order-1 lg:order-2">
            
            {/* Center Highlight Card using Primary & Secondary Brand Colors */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[360px] aspect-square rounded-[28px] bg-gradient-to-br from-[#154377] via-[#1a4f8b] to-[#98C340] text-white p-7 sm:p-8 flex flex-col items-center justify-center text-center shadow-[0_16px_40px_rgba(21,67,119,0.25)] border-2 border-white/25">
              
              {/* Badge */}
              <span className="inline-block text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.16em] text-white mb-3.5 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/25">
                COMPLETE SUPPORT
              </span>

              {/* Title */}
              <h2 className="text-2xl sm:text-[27px] font-bold font-outfit text-white leading-[1.18] mb-3 drop-shadow-sm">
                Revenue Cycle<br />Management<br />Solutions
              </h2>

              {/* Description */}
              <p className="text-[13px] sm:text-[14px] text-white/90 leading-relaxed mb-6 max-w-[260px] font-normal">
                From patient scheduling to final payment, we manage every step.
              </p>

              {/* Action Button */}
              <button
                onClick={onTalkToTeam}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-white hover:bg-[#f4f9eb] text-[#154377] font-bold text-[14px] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Talk to Our Team</span>
                <span className="text-[16px] leading-none text-[#98C340]">→</span>
              </button>

            </div>

          </div>

          {/* Right Column (05 to 08) */}
          <div className="lg:col-span-4 flex flex-col gap-4 order-3">
            {rightSolutions.map((item) => (
              <div
                key={item.id}
                onClick={() => onItemClick && onItemClick(item)}
                className="group relative bg-white border border-[#D4E8F5] hover:border-[#98C340]/60 rounded-2xl p-5 lg:p-6 shadow-[0_2px_12px_rgba(21,67,119,0.04)] hover:shadow-[0_8px_24px_rgba(152,195,64,0.15)] transition-all duration-300 flex items-start gap-4 cursor-pointer"
              >
                {/* Number Box */}
                <div className="w-12 h-12 rounded-xl bg-[#f4f9eb] group-hover:bg-[#98C340] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <span className="text-[17px] font-bold text-[#154377] group-hover:text-white font-outfit transition-colors duration-300">
                    {item.id}
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex-1 pr-4">
                  <h3 className="text-[16px] lg:text-[17px] font-bold text-[#154377] font-outfit mb-1.5 leading-snug group-hover:text-[#154377] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-[#556987] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Top Right Arrow */}
                <div className="absolute top-5 right-5 text-[#98C340] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.2]" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
