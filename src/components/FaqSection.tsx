import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronRight, 
  X, 
  Plus, 
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface FaqQuestion {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  title: string;
  countLabel: string;
  questions: FaqQuestion[];
}

const faqData: FaqCategory[] = [
  {
    id: 'general-onboarding',
    title: 'General & Onboarding',
    countLabel: '4 Questions',
    questions: [
      {
        id: 'gen-1',
        question: 'How quickly can our medical practice go live with Ascent?',
        answer: 'Most practices go live within 1 to 2 weeks. Our specialized onboarding team manages EHR/PMS credentialing, clearinghouse EDI/ERA mappings, and payer enrollment setups with zero operational downtime for your practice staff.'
      },
      {
        id: 'gen-2',
        question: 'Do you require long-term binding contracts or termination fees?',
        answer: 'No. We operate strictly on month-to-month service agreements with no lock-ins and no cancellation penalties. We believe in earning your business every single month through measurable clean claim rates, timely revenue turnaround, and transparent communication.'
      },
      {
        id: 'gen-3',
        question: 'Which medical specialties and practice sizes do you support?',
        answer: 'We support over 40+ medical specialties—including Cardiology, Orthopedics, Mental Health, Family Medicine, Internal Medicine, Neurology, Urgent Care, and Surgery Centers. We scale seamlessly for solo practitioners, multi-provider clinics, and large healthcare organizations.'
      },
      {
        id: 'gen-4',
        question: 'How will your dedicated billing team communicate with our clinic?',
        answer: 'You receive a dedicated Account Manager and AAPC-certified billing team. We stay connected through dedicated phone lines, real-time Slack/Teams channels, HIPAA-secure email, and scheduled weekly or monthly revenue cycle review meetings.'
      }
    ]
  },
  {
    id: 'billing-claims',
    title: 'Billing & Claim Submission',
    countLabel: '4 Questions',
    questions: [
      {
        id: 'claim-1',
        question: 'What is your first-pass clean claim submission rate?',
        answer: 'Ascent Medical Billing maintains an industry-leading 98%+ first-pass clean claim rate. We achieve this through multi-tiered claim scrubbing, certified specialty coding reviews, payer-specific rule updates, and upfront patient eligibility verification.'
      },
      {
        id: 'claim-2',
        question: 'How fast are claims scrubbed and submitted after patient visits?',
        answer: 'All superbills, encounter forms, and clinical notes received are coded, scrubbed against payer edits, and electronically transmitted within 24 to 48 hours to ensure steady and predictable practice cash flow.'
      },
      {
        id: 'claim-3',
        question: 'Do you handle patient billing, statements, and patient support?',
        answer: 'Yes, we manage the complete patient revenue cycle. This includes generating clear, compliant itemized monthly statements, coordinating patient payment plans, collecting copays/deductibles, and answering patient billing inquiries with utmost courtesy.'
      },
      {
        id: 'claim-4',
        question: 'Can Ascent handle insurance eligibility and prior authorizations?',
        answer: 'Yes. Our front-end team verifies active insurance coverage, copays, deductibles, and obtains mandatory prior authorizations before appointments to eliminate avoidable front-end rejections.'
      }
    ]
  },
  {
    id: 'denials-ar',
    title: 'Denials & AR Management',
    countLabel: '4 Questions',
    questions: [
      {
        id: 'denial-1',
        question: 'How do you handle denied or rejected medical claims?',
        answer: 'When a claim is denied, our denial management team investigates the specific CARC and RARC reason codes within 24 hours. We review clinical documentation, apply necessary corrections, and file robust, payer-specific appeals immediately rather than writing off rightful revenue.'
      },
      {
        id: 'denial-2',
        question: 'Can you work on and recover our old, aging Accounts Receivable (AR)?',
        answer: 'Yes. We offer specialized Old AR recovery audits. Our specialists rigorously follow up on claims aged 60, 90, and 120+ days to track down uncollected insurance payments and recover revenue that in-house staff often lack the time to pursue.'
      },
      {
        id: 'denial-3',
        question: 'How do you keep Days in AR (DAR) strictly below 30 days?',
        answer: 'Through proactive electronic clearinghouse tracking, automated daily payer status pings, timely appeals submission, and persistent follow-up on unpaid claims, we consistently maintain our clients’ average Days in AR below 30 days.'
      },
      {
        id: 'denial-4',
        question: 'Do your certified coders write clinical appeals for medical necessity denials?',
        answer: 'Yes. Our AAPC/AHIMA-certified coders collaborate with your physicians to draft detailed, evidence-backed medical necessity appeal letters, attaching relevant clinical charts and payer clinical guidelines to secure reimbursement.'
      }
    ]
  },
  {
    id: 'ehr-integrations',
    title: 'EHR & Software Integrations',
    countLabel: '3 Questions',
    questions: [
      {
        id: 'ehr-1',
        question: 'Do we need to switch or replace our current EHR / PMS software?',
        answer: 'No. You do not need to switch software. Our billing specialists are certified and experienced across all major EHR and Practice Management platforms—including Epic, Kareo/Tebra, AdvancedMD, AthenaHealth, eClinicalWorks, NextGen, and Cerner.'
      },
      {
        id: 'ehr-2',
        question: 'How is patient health information (PHI) protected and is Ascent HIPAA compliant?',
        answer: 'Ascent adheres strictly to HIPAA, HITECH, and SOC-2 guidelines. We execute comprehensive Business Associate Agreements (BAAs), utilize end-to-end encrypted VPN connections, role-based access restrictions, and continuous compliance auditing.'
      },
      {
        id: 'ehr-3',
        question: 'Can Ascent work seamlessly with our existing clearinghouse?',
        answer: 'Yes. We integrate directly with all prominent healthcare clearinghouses—including Change Healthcare, Waystar, Availity, TriZetto, and Office Ally—ensuring smooth electronic claim transmission without disrupting your current setup.'
      }
    ]
  },
  {
    id: 'pricing-roi',
    title: 'Pricing, Contracts & ROI',
    countLabel: '4 Questions',
    questions: [
      {
        id: 'price-1',
        question: 'What is your pricing model for medical billing services?',
        answer: 'We provide transparent, performance-driven pricing based on a modest percentage of net monthly collections successfully received by your practice. If you do not get paid, we do not get paid.'
      },
      {
        id: 'price-2',
        question: 'Are there any setup fees, onboarding charges, or hidden fees?',
        answer: 'There are zero upfront onboarding charges, zero IT implementation fees, and no hidden maintenance costs. Everything is clearly itemized in our straightforward service agreement.'
      },
      {
        id: 'price-3',
        question: 'How much overhead cost can our practice save compared to in-house billing?',
        answer: 'Healthcare practices save an average of 40% to 70% in operational costs by eliminating in-house billing salaries, benefits, PTO, recruitment overhead, software licensing fees, and ongoing certification training costs.'
      },
      {
        id: 'price-4',
        question: 'What financial and analytics reporting do you provide to providers?',
        answer: 'You receive customized, real-time monthly financial dashboards detailing net collection rates, first-pass clean claim metrics, aging AR buckets, payer mix analysis, and actionable insights during scheduled revenue strategy reviews.'
      }
    ]
  }
];

export function FaqSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(faqData[0].id);
  
  // By default, open the first question of the active category
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(faqData[0].questions[0].id);

  const activeCategory = faqData.find(cat => cat.id === activeCategoryId) || faqData[0];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    const category = faqData.find(cat => cat.id === categoryId);
    if (category && category.questions.length > 0) {
      setOpenQuestionId(category.questions[0].id);
    } else {
      setOpenQuestionId(null);
    }
  };

  const toggleQuestion = (questionId: string) => {
    setOpenQuestionId(prev => prev === questionId ? null : questionId);
  };

  return (
    <section id="faq-section" className="py-[80px] bg-[#FAFCFF] relative overflow-hidden border-t border-gray-100">
      
      {/* Subtle background ambient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#154377]/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#98C340]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          
          {/* Top Help & Information Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#154377]/20 bg-white shadow-xs text-[#154377] text-xs sm:text-[13px] font-bold tracking-wide uppercase mb-4">
            <HelpCircle className="w-4 h-4 text-[#98C340] stroke-[2.2]" />
            <span>Help & Information</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-outfit text-[#154377] tracking-tight leading-tight mb-4">
            Frequently Asked <span className="text-[#98C340]">Questions</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[#556987] text-[15px] sm:text-[17px] font-normal leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about partnering with Ascent Medical Billing, our 98% clean-claim workflows, transparent pricing, EHR integrations, and revenue cycle performance.
          </p>
        </div>

        {/* 2-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Category Selector */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col">
            
            {/* Category Subhead */}
            <div className="mb-3 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#556987]">
                Select Category
              </span>
            </div>

            {/* Category Cards List */}
            <div className="space-y-2.5">
              {faqData.map((category) => {
                const isActive = activeCategoryId === category.id;

                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between cursor-pointer border ${
                      isActive 
                        ? 'bg-white border-[#154377] shadow-[0_4px_16px_rgba(21,67,119,0.08)] ring-1 ring-[#154377]' 
                        : 'bg-white/80 hover:bg-white border-gray-200/90 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      
                      {/* Status Dot */}
                      <div className="flex items-center justify-center w-4 h-4">
                        <span 
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                            isActive 
                              ? 'bg-[#98C340] ring-4 ring-[#98C340]/25 scale-110' 
                              : 'bg-gray-300'
                          }`} 
                        />
                      </div>

                      {/* Titles */}
                      <div>
                        <h4 className={`text-[15px] font-bold leading-snug transition-colors ${
                          isActive ? 'text-[#154377]' : 'text-[#2D3748]'
                        }`}>
                          {category.title}
                        </h4>
                        <span className={`text-[12px] font-medium transition-colors ${
                          isActive ? 'text-[#98C340] font-semibold' : 'text-gray-400'
                        }`}>
                          {category.countLabel}
                        </span>
                      </div>

                    </div>

                    {/* Right Chevron Arrow */}
                    <ChevronRight className={`w-4 h-4 transition-all duration-200 ${
                      isActive 
                        ? 'text-[#154377] translate-x-0.5 stroke-[2.5]' 
                        : 'text-gray-400'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Need More Assistance Card */}
            <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-[#154377] to-[#1a4f8b] text-white shadow-sm border border-white/15">
              <h5 className="font-bold text-[15px] mb-1">Still Have Questions?</h5>
              <p className="text-blue-100/90 text-xs leading-relaxed mb-3.5">
                Our healthcare revenue specialists are ready to discuss your practice's specific billing needs.
              </p>
              <button
                onClick={() => {
                  const el = document.getElementById('contact-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#98C340] hover:bg-[#88b335] text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-all duration-200 shadow-xs cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Speak with an RCM Expert</span>
              </button>
            </div>

          </div>

          {/* Right Column: Answers Accordion */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col">
            
            {/* Top Summary Bar */}
            <div className="mb-3 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#154377]">
                {activeCategory.title}
              </span>
            </div>

            {/* Questions List */}
            <div className="space-y-3.5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3.5"
                >
                  {activeCategory.questions.map((item) => {
                    const isOpen = openQuestionId === item.id;

                    return (
                      <div 
                        key={item.id}
                        className={`rounded-xl transition-all duration-200 overflow-hidden ${
                          isOpen 
                            ? 'border-2 border-[#154377] shadow-[0_6px_20px_rgba(21,67,119,0.08)] bg-white' 
                            : 'border border-gray-200/90 hover:border-gray-300 bg-white'
                        }`}
                      >
                        {/* Accordion Question Header */}
                        <button
                          type="button"
                          onClick={() => toggleQuestion(item.id)}
                          className={`w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer transition-colors ${
                            isOpen 
                              ? 'bg-[#154377] text-white' 
                              : 'bg-white hover:bg-gray-50/50 text-[#154377]'
                          }`}
                        >
                          <span className={`text-[15px] sm:text-[16px] font-bold leading-snug ${
                            isOpen ? 'text-white' : 'text-[#154377]'
                          }`}>
                            {item.question}
                          </span>

                          {/* Action Button: X when open, + when closed */}
                          <div className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                            isOpen 
                              ? 'bg-white/20 hover:bg-white/30 text-white' 
                              : 'bg-gray-100 text-gray-500 hover:bg-[#98C340]/20 hover:text-[#154377]'
                          }`}>
                            {isOpen ? (
                              <X className="w-4 h-4 stroke-[2.5]" />
                            ) : (
                              <Plus className="w-4 h-4 stroke-[2.5]" />
                            )}
                          </div>
                        </button>

                        {/* Accordion Answer Content */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                              className="overflow-hidden bg-[#FAFCFF]"
                            >
                              <div className="p-5 sm:p-6 pt-4 text-[#556987] text-[14.5px] sm:text-[15.5px] leading-relaxed border-t border-[#154377]/10">
                                <p>{item.answer}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
