import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, Send, HelpCircle } from 'lucide-react';

export interface GotQuestionsAuditSectionProps {
  id?: string;
  className?: string;
}

export function GotQuestionsAuditSection({ id = "consultation-form", className = "" }: GotQuestionsAuditSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const faqs = [
    {
      q: 'How does Ascent Medical Billing help reduce medical claim denials?',
      a: 'We implement rigorous multi-tier claim scrubbing rules, specialty-specific coding audits, and real-time eligibility checks to identify discrepancies before claims reach commercial or government payers. Our first-pass clean claim rate is 98.5%.',
    },
    {
      q: 'Which EHR and PM software systems does your team support?',
      a: 'Our billing team is certified across 30+ leading platforms including Epic, AthenaHealth, Kareo / Tebra, eClinicalWorks, NextGen, AdvancedMD, DrChrono, CollaborateMD, and CareCloud. We work directly within your system.',
    },
    {
      q: 'What is the typical turnaround time for claim submission?',
      a: 'Claims are audited, coded, scrubbed, and submitted to clearinghouses within 24 to 48 hours of receiving patient encounter notes, preventing revenue lag.',
    },
    {
      q: 'Do you require long-term contracts or lock-in agreements?',
      a: 'No. Ascent Medical Billing operates strictly on month-to-month service agreements with zero long-term lock-in or cancellation penalties. We earn your trust every single month through measurable financial performance.',
    },
    {
      q: 'How do you handle patient billing and inquiries?',
      a: 'We generate clear, compliant electronic and paper statements and provide courteous, dedicated patient phone support to address balance questions and facilitate secure payments.',
    },
    {
      q: 'How quickly can our healthcare practice onboard and go live?',
      a: 'Most practices are fully onboarded and live within 7 to 14 business days. Our dedicated onboarding team handles payer enrollments, EDI/ERA clearinghouse setup, and software credentialing without interrupting patient care.',
    },
  ];

  return (
    <section id={id} className={`py-20 lg:py-24 bg-[#FAFCFF] border-t border-gray-100 relative overflow-hidden ${className}`}>
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#154377]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#98C340]/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start relative z-10">
        
        {/* Left Column: FAQ Accordion */}
        <div className="lg:col-span-6 flex flex-col justify-start">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f9eb] text-[#154377] text-xs font-bold uppercase tracking-wider mb-4 border border-[#d4ebb3] w-max">
            <HelpCircle className="w-3.5 h-3.5 text-[#98C340]" />
            <span>Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#154377] font-outfit leading-[1.18] tracking-tight mb-6">
            Got Questions About Outsourcing{' '}
            <span className="text-[#98C340]">Medical Billing?</span>
          </h2>
          
          <p className="text-[#556987] text-[15px] sm:text-[16px] leading-[1.75] mb-8 font-normal">
            Find answers to common questions about our billing workflows, onboarding timeline, software integrations, and clean claims guarantees.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'border-[#98C340]/60 shadow-[0_4px_16px_rgba(152,195,64,0.15)]' 
                      : 'border-gray-200 hover:border-gray-300 shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-[#154377] flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/80 transition-colors"
                  >
                    <span className={`text-[15px] sm:text-base font-outfit ${isOpen ? 'text-[#154377]' : 'text-gray-900'}`}>
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#f4f9eb] text-[#98C340]' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#98C340] stroke-[2.5]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-500 stroke-[2.5]" />
                      )}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-[14px] text-[#556987] leading-relaxed border-t border-gray-100 bg-[#FAFCFF]/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Free Audit / Consultation Request */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 lg:p-9 border border-gray-200 shadow-xl relative overflow-hidden">
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#98C340] to-[#154377]" />

          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#98C340] mb-2">
            <span>Zero-Obligation Practice Evaluation</span>
          </div>

          <h3 className="text-2xl sm:text-[26px] font-bold text-[#154377] font-outfit mb-2 leading-snug">
            Request a Free Medical Billing Audit
          </h3>
          
          <p className="text-[14.5px] text-[#556987] mb-6 leading-relaxed">
            Let our senior RCM specialists evaluate your aging AR, denial rates, and revenue opportunities at zero cost.
          </p>

          {formSubmitted ? (
            <div className="p-8 bg-emerald-50/80 rounded-xl border border-emerald-200 text-center">
              <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-3" />
              <h4 className="text-xl font-bold text-emerald-900 mb-1 font-outfit">Thank You!</h4>
              <p className="text-sm text-emerald-700 leading-relaxed">
                Your billing audit request has been received. One of our senior RCM specialists will review your practice information and contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#154377] uppercase tracking-wider mb-1.5 font-outfit">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Dr. John Smith"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] text-sm text-[#154377] placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#154377] uppercase tracking-wider mb-1.5 font-outfit">
                    Practice / Clinic Name *
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Family Care Associates"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] text-sm text-[#154377] placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#154377] uppercase tracking-wider mb-1.5 font-outfit">
                    Work Email *
                  </label>
                  <input 
                    type="email" 
                    required 
                    placeholder="doctor@practice.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] text-sm text-[#154377] placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#154377] uppercase tracking-wider mb-1.5 font-outfit">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] text-sm text-[#154377] placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#154377] uppercase tracking-wider mb-1.5 font-outfit">
                  Specialty &amp; Current EHR Software
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Cardiology, using AthenaHealth"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] text-sm text-[#154377] placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#154377] uppercase tracking-wider mb-1.5 font-outfit">
                  Message / Current Billing Challenges
                </label>
                <textarea 
                  rows={3}
                  placeholder="Tell us about high denials, delayed AR, or credentialing bottlenecks..."
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] text-sm text-[#154377] placeholder:text-gray-400"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#98C340] hover:bg-[#85ab36] text-white font-bold py-3.5 px-6 rounded-lg text-[15px] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Submit Free Audit Request</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
