import React from 'react';
import { 
  PlusSquare, 
  Code2, 
  Award, 
  BriefcaseMedical, 
  ArrowRight,
  Stethoscope
} from 'lucide-react';

interface RcmWhatWeDoOverviewProps {
  onNavigateToService?: (serviceSlug: string) => void;
  onExploreRcm?: () => void;
}

export function RcmWhatWeDoOverview({ 
  onNavigateToService,
  onExploreRcm
}: RcmWhatWeDoOverviewProps) {
  
  const handleServiceClick = (slug: string) => {
    if (onNavigateToService) {
      onNavigateToService(slug);
    } else {
      const el = document.getElementById('consultation-form') || document.getElementById('contact-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cards = [
    {
      title: 'Medical Billing Consultation',
      slug: 'medical-billing',
      desc: 'Expert patient billers offer the most complete medical billing services that entail handling check-in/out, claims, payments, and denials for health care providers.',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#154377] flex items-center justify-center text-white shadow-md">
          <Stethoscope className="w-6 h-6 text-[#98C340]" strokeWidth={2.2} />
        </div>
      ),
    },
    {
      title: 'Medical Coding',
      slug: 'medical-coding',
      desc: 'Clinical coding officers translate patient services into ICD-10 and CPT codes and generate a clean "super-bill" for the biller to submit to the insurance payer.',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#154377] flex items-center justify-center text-white shadow-md">
          <Code2 className="w-6 h-6 text-[#98C340]" strokeWidth={2.2} />
        </div>
      ),
    },
    {
      title: 'Provider Credentialing',
      slug: 'medical-credentialing',
      desc: 'Provider enrollment services by our credentialing specialists help healthcare providers join the network of desirable payors with maximum privileges.',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#154377] flex items-center justify-center text-white shadow-md">
          <Award className="w-6 h-6 text-[#98C340]" strokeWidth={2.2} />
        </div>
      ),
    },
    {
      title: 'Healthcare RCM',
      slug: 'denial-management',
      desc: 'Revenue cycle management services are specialty-specific, which means a physician\'s bespoke demands are met by a dedicated medical biller.',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#154377] flex items-center justify-center text-white shadow-md">
          <BriefcaseMedical className="w-6 h-6 text-[#98C340]" strokeWidth={2.2} />
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-[#154377]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f9eb] text-[#154377] text-xs font-bold uppercase tracking-wider mb-4 border border-[#d4ebb3]">
            <span className="w-2 h-2 rounded-full bg-[#98C340]" />
            <span>What We Do</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#154377] font-outfit leading-[1.18] tracking-tight mb-6">
            Overview of{' '}
            <span className="text-[#98C340]">Medical Billing Services</span>{' '}
            in the USA
          </h2>

          {/* Description Paragraphs matching reference layout */}
          <div className="text-[#556987] text-[15px] sm:text-[16px] leading-[1.8] space-y-4 font-normal text-center">
            <p>
              Medical Billing Services provide organized solutions to assist with billing for healthcare providers by transforming clinical data into billable insurance claims. Through electronic medical billing and structuring clinical billing processes, healthcare providers are able to accurately capture diagnoses, procedures and charges and submit them to payers.
            </p>
            <p>
              Beyond claim creation, medical billing typically involves the use of physician accounts management solutions and/or medical billing management. This may include tracking of patient claims invoicing, resolving claim rejections, tracking of outstanding balances and providing financial reports to facilitate improved Revenue Cycle Planning for healthcare organizations. Core components of this service include:
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-xl hover:border-[#98C340]/60 transition-all duration-300 flex flex-col justify-between items-center text-center group hover:-translate-y-1"
            >
              <div className="flex flex-col items-center w-full">
                {/* Icon Container */}
                <div className="mb-6 transition-transform duration-300 group-hover:scale-105">
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#154377] font-outfit mb-3 leading-snug group-hover:text-[#98C340] transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-[#556987] leading-relaxed mb-6 font-normal">
                  {card.desc}
                </p>
              </div>

              {/* Action Button */}
              <div className="w-full pt-2">
                <button
                  type="button"
                  onClick={() => handleServiceClick(card.slug)}
                  className="w-full max-w-[170px] mx-auto py-2.5 px-6 rounded-full border-2 border-[#154377] text-[#154377] font-bold text-xs sm:text-[13px] hover:bg-[#154377] hover:text-white transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs group-hover:border-[#154377]"
                >
                  <span>Explore More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default RcmWhatWeDoOverview;
