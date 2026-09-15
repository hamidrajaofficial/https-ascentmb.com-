import React, { useState } from 'react';
import { MedicalBillingHero } from '../components/MedicalBillingHero';
import { StatsSection, StatItem } from '../components/StatsSection';
import { ReliableBillingSection } from '../components/ReliableBillingSection';
import { ServicesWhatYouWillGet } from '../components/ServicesWhatYouWillGet';
import { VirtualAssistantPackagesSection } from '../components/VirtualAssistantPackagesSection';
import { FutureInnovationSection } from '../components/FutureInnovationSection';
import { MedicalBillingProcessTimeline } from '../components/MedicalBillingProcessTimeline';
import { SpecialtiesSection } from '../components/SpecialtiesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Send,
  User,
  Users,
  Building,
  Landmark
} from 'lucide-react';
import { SolutionsCardsSection } from '../components/SolutionsCardsSection';
import { NationwideAvailability } from '../components/NationwideAvailability';
import { ContactUsSection } from '../components/ContactUsSection';

interface MedicalBillingPageProps {
  onBackToHome?: () => void;
}

export function MedicalBillingPage({ onBackToHome }: MedicalBillingPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const faqs = [
    {
      q: 'How does Ascent Medical Billing help reduce medical claim denials?',
      a: 'We implement rigorous multi-tier claim scrubbing rules, specialty-specific coding audits, and real-time eligibility checks to identify discrepancies before claims reach commercial or government payers.',
    },
    {
      q: 'Which EHR and PM software systems does your team support?',
      a: 'Our billing team is certified across 30+ leading platforms including Epic, AthenaHealth, Kareo / Tebra, eClinicalWorks, NextGen, AdvancedMD, DrChrono, and CareCloud.',
    },
    {
      q: 'What is the typical turnaround time for claim submission?',
      a: 'Claims are audited, coded, scrubbed, and submitted to clearinghouses within 24 to 48 hours of receiving encounter notes.',
    },
    {
      q: 'How do you handle patient billing and inquiries?',
      a: 'We send clear, easy-to-understand electronic and paper statements and provide dedicated, compassionate patient phone support to address balance questions.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* 1. Hero Section (Matched with user's layout reference) */}
      <MedicalBillingHero 
        onBookCall={() => {
          const el = document.getElementById('consultation-form');
          el?.scrollIntoView({ behavior: 'smooth' });
        }} 
      />

      {/* 2. Dynamic Stats Section (Overlapping 50% Hero Section / 50% Next Section) */}
      <StatsSection 
        title="Transform your billing performance"
        description="With up to 98% fewer claim denials, 30% increased revenue within 60 days, and 45% savings in billing expenses."
        className="relative w-full z-20 flex justify-center px-4 -mt-[85px] sm:-mt-[95px] lg:-mt-[100px] -mb-[85px] sm:-mb-[95px] lg:-mb-[100px] pointer-events-none"
        stats={[
          { value: '25', unit: 'Days', label: 'Rapid Revenue Recovery' },
          { value: '2', unit: '%', label: 'Rejections' },
          { value: '98', unit: '%', label: 'Electronic Payment' },
          { value: '100', unit: '%', label: 'Client Retention' },
        ]}
      />

      {/* 3. Reliable Medical Billing Services Section (Matched with User Reference) */}
      <ReliableBillingSection 
        onBookCall={() => {
          const el = document.getElementById('consultation-form');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onConsultation={() => {
          const el = document.getElementById('consultation-form');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 3.2. Services What You Will Get (Intent-focused deliverables matching reference layout) */}
      <ServicesWhatYouWillGet 
        onConsultation={() => {
          const el = document.getElementById('consultation-form');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 3.3. Superior Healthcare Virtual Assistant Packages for Every Organization */}
      <VirtualAssistantPackagesSection 
        subtitle="We provide specialized virtual healthcare assistants trained in medical billing, charge entry, claim submission, and insurance follow-ups to maximize practice revenue."
        packages={[
          {
            icon: User,
            title: 'Solo Practices',
            description: 'Prior authorizations, daily charge entry, clean claim filing, and patient balance inquiries so solo doctors can focus 100% on care.',
          },
          {
            icon: Users,
            title: 'Small Groups',
            description: 'End-to-end billing VA support, real-time insurance eligibility checks, and rapid denial management without hiring costly in-house billing staff.',
          },
          {
            icon: Building,
            title: 'Large Clinics',
            description: 'Dedicated billing coordinators managing multi-specialty coding, complex claim audits, EHR data entry, and persistent AR follow-ups.',
          },
          {
            icon: Landmark,
            title: 'Health Systems',
            description: 'Scalable enterprise billing specialists and certified coders reducing system-wide claim rejections and accelerating cash flow across all departments.',
          },
        ]}
      />

      {/* 3.5. Dedicated Billing Consultant Section */}
      <FutureInnovationSection 
        onLetsTalk={() => {
          const el = document.getElementById('consultation-form');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="py-16 sm:py-20 bg-[#F8F9FB] relative z-10 border-t border-gray-100/80"
      />

      {/* 4. Interactive Connected Medical Billing Process Workflow (How Our Medical Billing Process Works) */}
      <MedicalBillingProcessTimeline 
        onConsultationClick={() => {
          const el = document.getElementById('consultation-form');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 5. Certified Medical Billing and Coding Company Specialized Across 40+ Healthcare Practices */}
      <SpecialtiesSection 
        badge="Specialty Billing Expertise"
        highlightedTitle="Certified Medical Billing and Coding Company"
        titleSuffix="Specialized Across 40+ Healthcare Practices"
        description="Every medical specialty has distinct billing rules, payer fee schedules, CPT modifiers, and documentation nuances. At Ascent Medical Billing, our certified medical coders and billing specialists deliver dedicated workflows tailored to your specific field—driving faster clean-claim approvals and eliminating revenue leakage."
      />

      {/* 5.5. Contact Us Section */}
      <ContactUsSection />

      {/* 6. Medical Billing Software We Are Experts In (Solutions Cards Section) */}
      <SolutionsCardsSection />

      {/* 6.5. Nationwide Medical Billing Availability across US States */}
      <NationwideAvailability 
        onFindNearYou={() => {
          const el = document.getElementById('consultation-form');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 6.5. Client Reviews & Testimonials Section */}
      <TestimonialsSection />

      {/* 7. Consultation Form & FAQ Section */}
      <section id="consultation-form" className="py-20 lg:py-24 bg-[#FAFCFF] border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start relative z-10">
          
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f9eb] text-[#154377] text-xs font-bold uppercase tracking-wider mb-4 border border-[#d4ebb3] w-max">
              Frequently Asked Questions
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

    </div>
  );
}
