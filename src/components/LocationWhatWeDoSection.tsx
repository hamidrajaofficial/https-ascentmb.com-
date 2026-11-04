import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export interface PracticeNeedItem {
  id: string;
  title: string;
  description: string;
  actionText: string;
}

export interface LocationWhatWeDoSectionProps {
  stateName?: string;
  onSelectOption?: (item: PracticeNeedItem) => void;
  onContactClick?: () => void;
}

export const PRACTICE_NEEDS: PracticeNeedItem[] = [
  {
    id: 'replace-billing-company',
    title: 'Replace my billing company',
    description: 'Explore full revenue cycle management and plan the handoff while keeping your current EHR.',
    actionText: 'Plan a billing transition →'
  },
  {
    id: 'recover-unpaid-claims',
    title: 'Recover unpaid claims',
    description: 'Start with aged receivables, unresolved denials and the information needed to move claims forward.',
    actionText: 'Explore A/R recovery →'
  },
  {
    id: 'help-existing-team',
    title: 'Help my existing billing team',
    description: 'Keep your team and discuss selected billing tasks, dedicated resources or interim management.',
    actionText: 'Compare support options →'
  },
  {
    id: 'reduce-admin-grow',
    title: 'Reduce administrative work or grow my practice',
    description: 'Find virtual assistants, records support, authorization coordination and website or marketing services.',
    actionText: 'Explore practice support →'
  }
];

export function LocationWhatWeDoSection({
  stateName = 'Texas',
  onSelectOption,
  onContactClick
}: LocationWhatWeDoSectionProps) {
  const handleClick = (item: PracticeNeedItem) => {
    if (onSelectOption) {
      onSelectOption(item);
    } else if (onContactClick) {
      onContactClick();
    }
  };

  return (
    <section 
      id="what-we-do-practice-needs"
      className="w-full bg-[#F7F8FA] py-16 sm:py-20 lg:py-24 border-b border-gray-100"
    >
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Eyebrow */}
          <div className="flex flex-col items-center mb-5">
            <div className="eyebrow flex items-center text-[#154377] font-bold text-[13px] tracking-wider mb-3">
              <CheckCircle2 className="w-4 h-4 mr-2 text-[#98C340]" />
              Tailored Practice Revenue Solutions
            </div>
            <div className="w-12 h-[2px] bg-[#98C340]"></div>
          </div>

          <h2 className="text-[32px] md:text-[40px] font-bold font-outfit text-[#154377] mb-6 leading-[1.1] tracking-tight">
            What Does Your Practice Need <span className="text-[#98C340]">Help With?</span>
          </h2>
          <p className="text-gray-500 font-normal leading-relaxed text-[17px] max-w-2xl mx-auto">
            Choose the problem you want to solve. We will help define the work and the right billing or support arrangement.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-6">
          {PRACTICE_NEEDS.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClick(item)}
              className="bg-white rounded-[16px] border border-gray-200/80 p-7 sm:p-8 flex flex-col justify-between hover:border-[#98C340] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group shadow-xs"
            >
              <div>
                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#154377] font-outfit leading-snug mb-3.5 group-hover:text-[#98C340] transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#4b5563] text-[15px] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Action Link at Bottom */}
              <div className="pt-2 mt-auto">
                <span className="text-[#154377] group-hover:text-[#98C340] font-semibold text-sm inline-flex items-center gap-1.5 transition-colors">
                  {item.actionText}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default LocationWhatWeDoSection;
