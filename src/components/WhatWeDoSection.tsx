import React, { useRef, useState, useEffect } from 'react';
import { 
  FileText, 
  Code2, 
  ShieldAlert, 
  Send, 
  Award, 
  Receipt, 
  SearchCheck, 
  PlusCircle
} from 'lucide-react';

export interface WhatWeDoService {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  linkText: string;
  highlighted?: boolean;
}

const servicesData: WhatWeDoService[] = [
  {
    number: '01',
    title: 'Medical Billing Services',
    description: 'We capture charges, verify payer rules, track claims systematically through every lifecycle stage, and prevent aging revenue backlog so your practice receives uninterrupted cash flow and accelerated reimbursements without administrative delay.',
    icon: FileText,
    linkText: 'Explore Billing Services',
  },
  {
    number: '02',
    title: 'Medical Coding Services',
    description: 'Certified AAPC and AHIMA coders review procedural documentation against specific billable codes, complex modifiers, place of service guidelines, and payer edits before charge entry to secure maximum clean claim yield.',
    icon: Code2,
    linkText: 'Explore Coding Services',
    highlighted: true,
  },
  {
    number: '03',
    title: 'Denial Management',
    description: 'Our specialists swiftly analyze root rejection causes, correct clinical oversights, attach required documentation, and execute aggressive payer appeals within 48 hours to overturn denied claims and recover lost revenue.',
    icon: ShieldAlert,
    linkText: 'Explore Denial Management',
  },
  {
    number: '04',
    title: 'Claim Submission',
    description: 'Every electronic and paper claim undergoes stringent multi-layer clearinghouse validation checks before dispatch, ensuring a 98.5% first-pass clean acceptance rate with commercial, Medicare, and Medicaid payers nationwide every single day.',
    icon: Send,
    linkText: 'Explore Claim Submission',
  },
  {
    number: '05',
    title: 'Credentialing Services',
    description: 'We orchestrate end-to-end provider enrollment, manage CAQH re-attestations, expedite hospital privilege appointments, and monitor critical revalidation deadlines so clinicians stay fully in-network and avoid costly out-of-network claim rejections.',
    icon: Award,
    linkText: 'Explore Credentialing',
  },
  {
    number: '06',
    title: 'Patient Statement Generation',
    description: 'Generate clear, itemized, and transparent patient statements with secure digital payment links, automated balance reminders, and polite billing dispute resolution that enhances consumer satisfaction while drastically boosting direct self-pay collections.',
    icon: Receipt,
    linkText: 'Explore Patient Statements',
  },
  {
    number: '07',
    title: 'Medical Billing Audit Services',
    description: 'Our comprehensive financial chart audits identify hidden under-coding, chart vulnerabilities, unbilled ancillary procedures, and compliance risks, delivering actionable insights that protect clinical integrity and unlock legitimate uncollected reimbursement revenue.',
    icon: SearchCheck,
    linkText: 'Explore Audit Services',
  }
];

interface WhatWeDoSectionProps {
  onServiceClick?: (serviceTitle: string) => void;
}

export function WhatWeDoSection({ onServiceClick }: WhatWeDoSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const totalDots = 5; // 5 navigation positions across 7 cards

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollLeft = el.scrollLeft;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;
      
      const ratio = scrollLeft / maxScroll;
      const index = Math.round(ratio * (totalDots - 1));
      setActiveDot(Math.min(totalDots - 1, Math.max(0, index)));
    }
  };

  const scrollToDot = (dotIndex: number) => {
    const el = scrollContainerRef.current;
    if (el) {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const targetScroll = (dotIndex / (totalDots - 1)) * maxScroll;
      el.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      setActiveDot(dotIndex);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="relative w-full py-20 bg-[#F7F9FB] border-b border-gray-100 overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-10 left-1/4 w-[700px] h-[350px] bg-radial from-[#98C340]/10 via-[#154377]/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-10 right-1/4 w-[600px] h-[350px] bg-radial from-[#154377]/8 to-transparent blur-3xl" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Full-width Section Title & Subheading */}
        <div className="text-center w-full mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold font-outfit tracking-tight leading-[1.18] w-full">
            <span className="text-[#154377] block">End-to-End Medical Billing &amp;</span>
            <span className="text-[#98C340] block mt-1 sm:mt-2">Revenue Cycle Management Services</span>
          </h2>
          
          <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed font-normal w-full max-w-5xl mx-auto">
            Our end-to-end medical billing services ensure eligibility is confirmed before care is delivered, 
            documentation supports coding accuracy, claims are scrubbed against payer rules, and denials are aggressively appealed.
          </p>
        </div>

        {/* 1-Row Slider: Exactly 3 cards visible on desktop with equal height */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-none gap-6 pb-6 pt-2 px-1 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isBlueCard = service.highlighted;

            return (
              <div
                key={index}
                className={`snap-start flex-none w-[88vw] sm:w-[46vw] lg:w-[calc((100%-48px)/3)] rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group select-none shadow-md hover:shadow-xl ${
                  isBlueCard 
                    ? 'bg-[#154377] text-white border border-[#154377]' 
                    : 'bg-white text-gray-800 border border-gray-100 hover:border-[#98C340]/40'
                }`}
                style={{ minHeight: '390px' }}
              >
                {/* Card Header: Icon Box + Ghost Number */}
                <div className="flex items-start justify-between relative mb-6">
                  <div 
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md -mt-3 -ml-1 transition-transform group-hover:scale-105 ${
                      isBlueCard 
                        ? 'bg-[#98C340] text-white shadow-lime-900/30' 
                        : 'bg-[#F4F8EC] border border-[#98C340]/30 text-[#154377]'
                    }`}
                  >
                    <Icon className={`w-7 h-7 ${isBlueCard ? 'text-white' : 'text-[#154377]'}`} />
                  </div>

                  <div 
                    className={`text-5xl sm:text-6xl font-extrabold font-outfit tracking-tighter select-none pointer-events-none ${
                      isBlueCard ? 'text-white/20' : 'text-[#154377]/15'
                    }`}
                  >
                    {service.number}
                  </div>
                </div>

                {/* Card Body: Title + 30-Word Content */}
                <div className="flex-1 flex flex-col justify-start">
                  <h3 
                    className={`text-xl sm:text-2xl font-bold font-outfit mb-3 tracking-tight ${
                      isBlueCard ? 'text-white' : 'text-[#154377]'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p 
                    className={`text-[14px] leading-relaxed font-normal ${
                      isBlueCard ? 'text-blue-100/90' : 'text-gray-600'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-4 border-t border-dashed border-gray-200/50">
                  <button
                    onClick={() => onServiceClick?.(service.title)}
                    className={`flex items-center space-x-2 text-xs sm:text-sm font-bold tracking-wide transition-colors group-hover:underline cursor-pointer ${
                      isBlueCard 
                        ? 'text-[#98C340] hover:text-lime-300' 
                        : 'text-[#154377] hover:text-[#98C340]'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-white flex-shrink-0 ${
                      isBlueCard ? 'bg-[#98C340]' : 'bg-[#154377]'
                    }`}>
                      <PlusCircle className="w-3.5 h-3.5" />
                    </span>
                    <span>{service.linkText}</span>
                  </button>
                </div>

                {/* Decorative bottom corner cut-out */}
                <div 
                  className={`absolute -bottom-0.5 -right-0.5 w-7 h-7 rounded-tl-2xl rounded-br-2xl pointer-events-none ${
                    isBlueCard ? 'bg-[#0e2c50]' : 'bg-[#EBF2F8]'
                  }`} 
                />
              </div>
            );
          })}
        </div>

        {/* Slider Pagination Dots */}
        <div className="flex justify-center items-center space-x-2.5 mt-8">
          {Array.from({ length: totalDots }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToDot(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeDot === idx 
                  ? 'w-8 h-2.5 bg-[#98C340]' 
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-[#154377]/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
